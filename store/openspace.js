export const state = () => ({
  posts: [],
  break: {
    id: 0,
    color: '',
    image: {
      url: '',
      alt: '',
      color: '',
    },
    authors: [],
    permalink: '',
  },
  morePosts: [],
  updated: null,
  break_updated: null,
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
  setBreak(state, data) {
    state.break = data
    state.break_updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      if (state.updated + 2 * 60 * 1000 < new Date().getTime()) {
        this.$axios.get('/api/featured/openspace').then((res) => {
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
  pullBreak({ commit, dispatch, state }) {
    if (state.break_updated + 10 * 60 * 1000 < new Date().getTime()) {
      this.$axios.get('/api/big-break/openspace').then((res) => {
        commit('setBreak', res.data)
      })
    }
  },
}
