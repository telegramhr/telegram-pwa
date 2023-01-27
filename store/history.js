export const state = () => ({
  title: '',
  category: '',
  author: '',
})

export const mutations = {
  setData(state, post) {
    state.title = post.title
    state.category = post.category
    if (post.authors.length) {
      state.author = post.authors[0].name
    }
  },
}
