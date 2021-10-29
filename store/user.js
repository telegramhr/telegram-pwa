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
})

export const mutations = {
  setUser(state, data) {
    state.first_name = data.firstName
    state.last_name = data.lastName
    state.email = data.email
    state.exp = data.exp
    state.uid = data.uid
  },
  logout(state) {
    state.first_name = ''
    state.last_name = ''
    state.email = ''
    state.token = ''
    state.exp = 0
    state.access = false
  },
  setTerm(state, data) {
    state.access = data
    state.updated = new Date().getTime()
  },
  setToken(state, token) {
    state.token = token
  },
  setAdmin(state) {
    state.admin = true
  },
}

export const actions = {
  setUser({ commit }, data) {
    commit('setUser', data)
  },
  setAccess({ commit, dispatch }, data) {
    return new Promise((resolve) => {
      if (data.data.length) {
        this.$cookies.set('tmg_access', data.data[0].resource.rid, {
          path: '/',
          domain: '.telegram.hr',
          maxAge: 10 * 24 * 3600,
        })
        commit('setTerm', data.data[0].resource.rid)
        if (window.fbq) {
          window.fbq('trackCustom', 'HasSubscription', { value: 1 })
        }
        resolve()
      } else if (window.fbq) {
        window.fbq && window.fbq('trackCustom', 'HasSubscription', { value: 0 })
        resolve()
      }
    })
  },
  checkAccess({ state, dispatch }) {
    const that = this
    window.tp.push([
      'init',
      function () {
        const user = window.tp.pianoId.getUser()
        if (user) {
          dispatch('setUser', user)
          window.PianoESPConfig.email =
            window.PianoESPConfig.email || user.email
          window.PianoESP &&
            typeof window.PianoESP.handleUserEmail === 'function' &&
            window.PianoESP.handleUserEmail(user.email)
          that.$ga.set('dimension3', '1')
          window.tp.api.callApi('/access/list', {}, function (response) {
            if (response.data) {
              dispatch('setAccess', response)
            }
          })
        } else {
          that.$ga.set('dimension3', 0)
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
}

export const getters = {
  hasPremium(state) {
    return state.access === 'BR92VTWM'
  },
}
