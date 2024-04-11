export const state = () => ({
  uid: '',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  exp: 0,
  access: null,
  updated: null,
  admin: false,
  type: 'not-registered',
  coral_token: false,
  coral_update: null,
})

export const mutations = {
  setUser(state, data) {
    state.first_name = data.firstName
    state.last_name = data.lastName
    state.email = data.email
    state.exp = data.exp
    state.uid = data.uid
    state.type = 'registered'
  },
  logout(state) {
    state.uid = 0
    state.first_name = ''
    state.last_name = ''
    state.email = ''
    state.token = ''
    state.exp = 0
    state.access = false
    state.coral_token = false
    state.type = 'not-registered'
  },
  setTerm(state, data) {
    state.access = data.rid
    state.expiry_date = data.expiry_date
    state.type = 'subscribed'
    state.updated = new Date().getTime()
  },
  setToken(state, token) {
    state.token = token
  },
  setAdmin(state) {
    state.admin = true
  },
  setCoral(state, token) {
    state.coral_token = token
    state.coral_update = new Date().getTime()
  },
}

export const actions = {
  setUser({ commit, dispatch }, data) {
    return new Promise((resolve) => {
      commit('setUser', data)
      window.tp.api.callApi('/access/list', {}, function (response) {
        dispatch('setAccess', { data: response.data, user: data.user })
        resolve()
      })
    })
  },
  getCoralToken({ commit, state }) {
    return new Promise((resolve) => {
      if (
        state.coral_token &&
        state.coral_update &&
        state.coral_update > new Date().getTime() - 24 * 3600000
      ) {
        resolve(state.coral_token)
        return
      }
      this.$axios.get(`/pretplate/coral/token/${state.uid}`).then((res) => {
        commit('setCoral', res.data)
        resolve(res.data)
      })
    })
  },
  setAccess({ commit, dispatch, state }, data) {
    return new Promise((resolve) => {
      if (data.data.length) {
        this.$cookies.set('tmg_access', data.data[0].resource.rid, {
          path: '/',
          domain: '.telegram.hr',
          maxAge: 10 * 24 * 3600,
        })
        commit('setTerm', {
          rid: data.data[0].resource.rid,
          expiry_date: data.data[0].expire_date,
        })
        if (window.fbq) {
          window.fbq('trackCustom', 'HasSubscription', { value: 1 })
        }
        if (window.marfeel) {
          let id = 3
          if (state.email.includes('@telegram')) {
            id = 4
          }
          window.marfeel.cmd.push([
            'compass',
            function (compass) {
              compass.setUserType(id)
              compass.setSiteUserId(data.user.uid)
            },
          ])
        }
        resolve()
      } else {
        if (window.fbq) {
          window.fbq &&
            window.fbq('trackCustom', 'HasSubscription', { value: 0 })
          resolve()
        }
        if (window.marfeel) {
          window.marfeel.cmd.push([
            'compass',
            function (compass) {
              compass.setUserType(2)
              compass.setSiteUserId(data.user.uid)
            },
          ])
        }
      }
    })
  },
  checkAccess({ state, dispatch }) {
    window.tp.push([
      'init',
      function () {
        const user = window.tp.pianoId.getUser()
        if (user) {
          dispatch('setUser', user)
          window.tp.api.callApi('/access/list', {}, function (response) {
            if (response.data) {
              dispatch('setAccess', { data: response.data, user })
            }
          })
        } else {
          dispatch('logout')
        }
      },
    ])
  },
  checkAdmin({ commit }) {
    if (document.cookie.includes('wordpress_test_cookie')) {
      commit('setAdmin')
    }
  },
  logout({ commit, dispatch, state }) {
    this.$cookies.remove('tmg_access', {
      path: '/',
      domain: '.telegram.hr',
    })
    if (state.first_name) {
      window.tp.pianoId.logout()
      dispatch('newsletters/clearAccess', null, { root: true })
    }
    commit('logout')
  },
  login({ commit, dispatch }) {
    window.tp.pianoId.show({
      screen: 'login',
      loggedIn(data) {
        dispatch('setUser', data.user)
        commit('setToken', data.token)
        window.tp.api.callApi('/access/list', {}, function (response) {
          dispatch('setAccess', { data: response.data, user: data.user }).then(
            () => {
              window.location.reload()
            }
          )
        })
      },
    })
  },
}

export const getters = {
  hasPremium(state) {
    return state.access === 'BR92VTWM'
  },
}
