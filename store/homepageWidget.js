export const state = () => ({
  variant: '',
  items: [],
  loaded: false,
})

export const mutations = {
  set(state, { variant, items }) {
    state.variant = variant || ''
    state.items = Array.isArray(items) ? items : []
    state.loaded = true
  },
}

export const actions = {
  async fetch({ commit, state }) {
    if (state.loaded) return
    try {
      const res = await this.$axios.$get('/api/homepage-widget')
      commit('set', { variant: res?.variant, items: res?.items })
    } catch (e) {
      commit('set', { variant: '', items: [] })
    }
  },
}
