export const state = () => ({
  lastArticle: '',
})

export const mutations = {
  setLastArticle(state, article) {
    state.lastArticle = article
  },
}
