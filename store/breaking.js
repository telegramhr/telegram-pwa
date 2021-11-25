export const state = () => ({
  prefix: 'Breaking:',
  title: '',
  link: '',
  on: false,
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.title = data.title
    state.on = !!data.title
    state.link = data.link
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, state }) {
    if (state.updated + 2 * 60 * 1000 < new Date().getTime()) {
      this.$axios.get('/api/breaking').then((res) => {
        commit('setPosts', res.data)
      })
    }
  },
}
