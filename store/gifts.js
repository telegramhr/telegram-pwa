let pendingRequest = null

export const state = () => ({
  available: 0,
  articles: [],
  updated: 0,
})

export const mutations = {
  setGifts(state, gifts) {
    state.available = gifts.available
    state.articles = gifts.articles
    state.updated = new Date().getTime()
  },
  updateAvailable(state, article) {
    state.available = state.available - 1
    state.articles.push(article)
  },
}

export const actions = {
  getUserGifts({ commit, state, rootState }) {
    if (state.updated >= new Date().getTime() - 1000 * 60 * 60) {
      return
    }
    // Return existing promise if request is already in flight
    if (pendingRequest) {
      return pendingRequest
    }
    const token = rootState.user.token
    // Create new request and store promise
    pendingRequest = this.$axios
      .$get('/pretplate/api/gift-article/', {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .then((gifts) => {
        commit('setGifts', gifts)
      })
      .catch(() => {})
      .finally(() => {
        pendingRequest = null
      })
    return pendingRequest
  },
}
