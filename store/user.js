export const state = () => ({
  first_name: '',
  last_name: '',
  email: '',
  token: '',
  exp: 0,
  offer_id: null,
  term_id: null,
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
  },
  setTerm(state, data) {
    state.offer_id = data.offer_id
    state.term_id = data.term_id
  },
}

export const actions = {
  setUser({ commit }, data) {
    commit('setUser', data)
  },
  logout({ commit }) {
    commit('logout')
  },
}
