export const state = () => ({
  posts: [],
  morePosts: [],
  updated: null,
  page: 1,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
  setMore(state, data) {
    state.morePosts = [...state.morePosts, ...data]
    state.page = state.page + 1
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      if (state.updated + 2 * 60 * 1000 < new Date().getTime()) {
        this.$axios.get('/api/featured').then((res) => {
          commit('setPosts', res.data)
          dispatch('posts/setPosts', res.data, { root: true })
          resolve()
        })
      } else {
        resolve()
      }
    })
  },
  loadMore({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.get('/api/featured/page/' + state.page).then((res) => {
        commit('setMore', res.data)
        dispatch('posts/setPosts', res.data, { root: true })
        resolve()
      })
    })
  },
}
