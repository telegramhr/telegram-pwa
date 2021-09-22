export const state = () => ({
  uid: '',
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  exp: 0,
  access: null,
  active_sub: false,
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
    state.active_sub = false
  },
  setTerm(state, data) {
    state.access = data
    state.updated = new Date().getTime()
  },
  setToken(state, token) {
    state.token = token
  },
  setActive(state, payload) {
    state.active_sub = payload
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
        data.data.forEach((item) => {
          if (item.resource.rid === 'BR92VTWM') {
            this.$cookies.set('tmg_access', 'BR92VTWM', {
              path: '/',
              domain: '.telegram.hr',
              maxAge: 10 * 24 * 3600,
            })
            commit('setTerm', true)
            commit('setActive', true)
          } else {
            this.$cookies.set('tmg_access', item.resource.rid, {
              path: '/',
              domain: '.telegram.hr',
              maxAge: 10 * 24 * 3600,
            })
            commit('setActive', true)
          }
        })
        window.fbq('trackCustom', 'HasSubscription', { value: 1 })
      } else {
        window.fbq('trackCustom', 'HasSubscription', { value: 0 })
      }
      resolve()
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
  logout({ commit, dispatch }) {
    this.$cookies.remove('tmg_access', {
      path: '/',
      domain: '.telegram.hr',
    })
    window.tp.pianoId.logout()
    dispatch('newsletters/clearAccess', null, { root: true })
    commit('logout')
  },
}
