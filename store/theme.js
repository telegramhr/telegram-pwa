export const state = () => ({
  theme: 'regular',
  font: 'normal',
})

export const mutations = {
  setTheme(state, value) {
    state.theme = value
  },
  setFont(state, value) {
    state.font = value
  },
}

export const actions = {
  setTheme({ commit, dispatch }, payload) {
    commit('setTheme', payload.type)
    dispatch('setCookie', payload.app)
  },
  setFont({ commit, dispatch }, payload) {
    commit('setFont', payload.type)
    dispatch('setCookie', payload.app)
  },
  setCookie({ state }, app) {
    app.$cookies.set('tmg_theme', state.theme, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
    app.$cookies.set('tmg_font', state.font, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
  },
}
