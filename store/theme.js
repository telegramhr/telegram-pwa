export const state = () => ({
  theme: 'regular',
  font: 'normal',
})

export const mutations = {
  setTheme(state, value) {
    state.theme = value
    this.$ga.set('dimension4', value)
  },
  setFont(state, value) {
    state.font = value
    this.$ga.set('dimension5', value)
  },
}

export const actions = {
  loadTheme({ commit }) {
    commit('setTheme', this.$cookies.get('tmg_theme'))
    commit('setFont', this.$cookies.get('tmg_font'))
  },
  setTheme({ commit, dispatch }, payload) {
    commit('setTheme', payload.type)
    dispatch('setCookie', payload.app)
  },
  setFont({ commit, dispatch }, payload) {
    commit('setFont', payload.type)
    dispatch('setCookie', payload.app)
  },
  setCookie({ state }) {
    this.$cookies.set('tmg_theme', state.theme, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      domain: '.telegram.hr',
    })
    this.$cookies.set('tmg_font', state.font, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      domain: '.telegram.hr',
    })
  },
}
