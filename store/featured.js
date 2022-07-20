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
      if (state.updated + 0.5 * 60 * 1000 < new Date().getTime()) {
        this.$axios
          .get(`${this.$config.baseURL}featured`)
          .then((res) => {
            commit('setPosts', res.data)
            dispatch('posts/setPosts', res.data, { root: true })
            resolve()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
  },
  pullBreaks({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.get(`${this.$config.baseURL}breaks`).then((res) => {
        commit('setBreaks', res.data)
        dispatch('posts/setPosts', res.data, { root: true })
        resolve()
      })
    })
  },
  loadMore({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios
        .get(`${this.$config.baseURL}featured/page/${state.page}`)
        .then((res) => {
          commit('setMore', res.data)
          dispatch('posts/setPosts', res.data, { root: true })
          resolve()
        })
    })
  },
}
