export const state = () => ({
  posts: [],
  morePosts: [],
  breaks: [],
  updated: null,
  page: 1,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
  setBreaks(state, data) {
    state.breaks = data
  },
  setMore(state, data) {
    state.morePosts = [...state.morePosts, ...data]
    state.page = state.page + 1
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.$get('/api/featured').then((data) => {
        commit('setPosts', data)
        dispatch('posts/setPosts', data, { root: true })
        resolve()
      })
    })
  },
  pullBreaks({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.$get('/api/breaks').then((data) => {
        commit('setBreaks', data)
        dispatch('posts/setPosts', data, { root: true })
        resolve()
      })
    })
  },
  loadMore({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.$get('/api/featured/page/' + state.page).then((data) => {
        commit('setMore', data)
        dispatch('posts/setPosts', data, { root: true })
        resolve()
      })
    })
  },
}
