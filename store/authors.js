export const state = () => ({
  posts: [],
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
      this.$axios.$get('/api/widgets/authors').then((data) => {
        commit('setPosts', data)
      })
    }
  },
}
