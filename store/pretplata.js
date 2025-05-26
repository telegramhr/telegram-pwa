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

export const getters = {
  link(state) {
    return `https://www.telegram.hr?article_id=${state.lastArticle}`
  },
}
