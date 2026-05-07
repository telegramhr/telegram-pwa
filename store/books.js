export const state = () => ({
  featured: [],
  updated: null,
})

export const mutations = {
  setFeatured(state, data) {
    state.featured = data
    state.updated = Date.now()
  },
}

export const actions = {
  async pullFeatured({ commit, state }, { force = false } = {}) {
    if (
      !force &&
      state.updated &&
      Date.now() - state.updated < 10 * 60 * 1000 &&
      state.featured.length
    ) {
      return state.featured
    }
    try {
      const res = await this.$axios.get('/wcapi/books/featured')
      commit('setFeatured', (res.data && res.data.products) || [])
      return state.featured
    } catch (e) {
      return []
    }
  },
}
