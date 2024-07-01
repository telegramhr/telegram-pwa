export const state = () => ({
  theme: 'regular',
  font: 'normal',
  update: false,
})

export const mutations = {
  setTheme(state, value) {
    if (!value) {
      value = 'regular'
    }
    state.theme = value
    state.update = new Date()
  },
  setFont(state, value) {
    if (!value) {
      value = 'normal'
    }
    state.font = value
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
