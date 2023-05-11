export const state = () => ({
  offers: [],
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.offers = data
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
        this.$axios.get('/api/klub/widget').then((res) => {
          commit('setPosts', res.data)
          resolve()
        })
      }
    })
  },
}

export const getters = {
  getPosts(state) {
    return [...state.offers].sort(() => 0.5 - Math.random()).slice(0, 4)
  },
}
