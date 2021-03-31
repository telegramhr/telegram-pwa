export const state = () => ({
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  exp: 0,
  access: null,
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
  },
}

export const actions = {
  setUser({ commit }, data) {
    commit('setUser', data)
  },
  setAccess({ commit }, data) {
    if (data.data.length) {
      data.data.forEach((item) => {
        if (item.resource.rid === 'BR92VTWM') {
          commit('setTerm', true)
        }
      })
    }
  },
  logout({ commit }) {
    commit('logout')
  },
}
