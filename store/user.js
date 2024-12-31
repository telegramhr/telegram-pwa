export const state = () => ({
  uid: '',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  exp: 0,
  access: [],
  updated: null,
  admin: false,
  type: 'not-registered',
  coral_token: false,
  coral_update: null,
  showModal: false,
})

export const mutations = {
  setUser(state, data) {
    state.first_name = data.user.first_name
    state.last_name = data.user.last_name
    state.email = data.user.email
    state.uid = data.user.uuid
    state.type = 'registered'
    state.token = data.access.token
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
    state.access = [...data]
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
  openModal(state) {
    state.showModal = !state.showModal
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
      if (data) {
        if (data.data.access.includes('telegram_premium')) {
          commit('setTerm', data.data.access)
        }
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
              compass.setSiteUserId(state.uid)
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
              compass.setSiteUserId(state.uid)
            },
          ])
        }
      }
    })
  },
  checkAccess({ state, dispatch }) {
    if (!state.token) {
      return
    }
    this.$axios
      .$get('https://pretplata.telegram.hr/api/v1/users/subscriptions', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        if (res.status === 'ok') {
          res.subscriptions.forEach((sub) => {
            const end = new Date(sub.end_at)
            if (end > new Date()) {
              dispatch('setAccess', { data: sub })
            }
          })
        }
      })
  },
  checkAdmin({ commit }) {
    if (document.cookie.includes('wordpress_test_cookie')) {
      commit('setAdmin')
    }
  },
  logout({ commit, dispatch, state }) {
    this.$cookies.remove('tmg_access')
    this.$cookies.remove('n_token')
    if (state.uid) {
      dispatch('newsletters/clearAccess', null, { root: true })
    }
    commit('logout')
    // this.$router.push('/')
  },
  login({ commit, dispatch }) {
    commit('openModal')
  },
  loginSubmit({ commit, dispatch }, payload) {
    const data = new FormData()
    data.append('email', payload.email)
    data.append('password', payload.password)
    data.append('source', 'api')
    this.$axios
      .$post('https://pretplata.telegram.hr/api/v1/users/login', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        commit('setUser', res)
        this.$cookies.set('n_token', res.access.token, {})
        dispatch('checkAccess')
        commit('openModal')
        window.location.reload()
      })
      .catch((err) => {
        throw new Error(err)
      })
  },
}

export const getters = {
  hasPremium(state) {
    if (!state.access) {
      return false
    }
    return (
      state.access === 'BR92VTWM' || state.access.includes('telegram_premium')
    )
  },
  canLogIn(state) {
    return !state.token
  },
}
