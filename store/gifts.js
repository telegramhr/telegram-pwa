let pendingRequest = null

export const state = () => ({
  available: 0,
  articles: [],
  updated: 0,
  // Result of /gift-article/verify for one article + token.
  // status: 'pending' | 'valid' | 'invalid'
  // gifterName: first name of the gifter, null when unknown (older gifts).
  verification: { path: '', token: '', status: 'none', gifterName: null },
})

export const getters = {
  // Status for the given route; a result recorded for another article or
  // token does not carry over.
  verificationStatus: (state) => (route) => {
    const v = state.verification
    if (v.path !== route.path || v.token !== route.query.gift_token) {
      return 'none'
    }
    return v.status
  },
  gifterName: (state, getters) => (route) => {
    if (getters.verificationStatus(route) !== 'valid') {
      return null
    }
    return state.verification.gifterName
  },
}

export const mutations = {
  setVerification(state, verification) {
    state.verification = { gifterName: null, ...verification }
  },
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
