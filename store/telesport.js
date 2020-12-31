export const state = () => ({
  posts: [],
  morePosts: [],
  reading: [],
  comments: [],
  updated: null,
  page: 2,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data.posts
    state.reading = data.reading
    state.comments = data.comments
    state.updated = new Date().getTime()
  },
  setMore(state, data) {
    state.morePosts = [...state.morePosts, ...data]
    state.page = state.page + 1
  },
}

export const actions = {
  pullPosts({ commit, state }) {
    return new Promise((resolve) => {
      if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
        this.$axios.get('portal/2').then((res) => {
          commit('setPosts', res.data)
          resolve()
        })
      } else {
        resolve()
      }
    })
  },
  loadMore({ commit, state }) {
    return new Promise((resolve) => {
      this.$axios.get('portal/2/page/' + state.page).then((res) => {
        commit('setMore', res.data.posts)
        resolve()
      })
    })
  },
}
