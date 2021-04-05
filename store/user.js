export const state = () => ({
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  exp: 0,
  access: null,
  updated: null,
})

export const mutations = {
  setUser(state, data) {
    state.first_name = data.user.first_name
    state.last_name = data.user.last_name
    state.email = data.user.email
    state.token = data.token
    state.exp = data.user.exp
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
}

export const actions = {
  setUser({ commit }, data) {
    commit('setUser', data)
  },
  setAccess({ commit }, data) {
    return new Promise((resolve) => {
      if (data.data.length) {
        data.data.forEach((item) => {
          if (item.resource.rid === 'BR92VTWM') {
            commit('setTerm', true)
          }
        })
        resolve()
      }
      resolve()
    })
  },
  checkAccess({ state, dispatch }) {
    if (
      state.token &&
      state.updated + 24 * 3600 * 1000 < new Date().getTime()
    ) {
      window.tp.push([
        'init',
        function () {
          window.tp.api.callApi('/access/list', {}, function (response) {
            dispatch('setAccess', response)
          })
        },
      ])
    }
  },
  logout({ commit }) {
    commit('logout')
  },
}
