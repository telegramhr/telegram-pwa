export const state = () => ({
  available: 0,
  articles: [],
  updated: 0,
})

export const mutations = {
  setGifts(state, gifts) {
    state.available = gifts.available
    state.updated = gifts.updated
    state.articles = gifts.articles
    state.updated = new Date().getTime()
  },
  updateAvailable(state, article) {
    state.available = state.available - 1
    state.articles.push(article)
  },
}

export const actions = {
  async getUserGifts({ commit, state }) {
    if (state.updated < new Date().getTime() - 1000 * 60 * 60) {
      const gifts = await this.$axios.$get('/pretplate/api/gift-article/')
      commit('setGifts', gifts)
    }
  },
}
