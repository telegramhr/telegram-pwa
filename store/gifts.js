let pendingRequest = null

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
        // Return early if we have fresh data (less than 1 hour old)
        if (state.updated >= new Date().getTime() - 1000 * 60 * 60) {
            return
        }
        // Return existing promise if request is already in flight
        if (pendingRequest) {
            return pendingRequest
        }
        // Create new request and store promise
        pendingRequest = this.$axios
            .$get('/pretplate/api/gift-article/')
            .then((gifts) => {
                commit('setGifts', gifts)
            })
            .finally(() => {
                pendingRequest = null
            })
        return pendingRequest
    },
}