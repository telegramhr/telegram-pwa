export const state = () => ({
  lastArticle: '',
  subscriptionStarted: false,
})

export const mutations = {
  setLastArticle(state, article) {
    state.lastArticle = article
  },
  setSubscriptionStarted(state, value) {
    state.subscriptionStarted = value
  },
}
