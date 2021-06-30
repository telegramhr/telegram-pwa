export const state = () => ({
  title: '',
  on: false,
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.title = data
    state.on = !!data
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, state }) {
    if (state.updated + 5 * 60 * 1000 < new Date().getTime()) {
      this.$axios.get('/api/braking').then((res) => {
        commit('setPosts', res.data.title)
      })
    }
  },
}
