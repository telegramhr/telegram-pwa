export const state = () => ({
  post: {
    id: 0,
    color: '',
    image: {
      url: '',
      alt: '',
      color: '',
    },
  },
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.post = data
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
      this.$axios.get('/api/big-break').then((res) => {
        commit('setPosts', res.data)
      })
    }
  },
}
