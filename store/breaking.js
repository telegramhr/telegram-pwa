export const state = () => ({
  prefix: 'Breaking:',
  title: '',
  link: '',
  on: false,
  on2: false,
  updated: null,
  title2: '',
  link2: '',
})

export const mutations = {
  setPosts(state, data) {
    state.title = data.title
    state.title2 = data.title2
    state.on = !!data.title
    state.link = data.link
    state.link2 = data.link2
    state.on2 = !!data.title2
    state.prefix = data.prefix
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, state }) {
    if (state.updated + 60 * 1000 < new Date().getTime()) {
      this.$axios.$get('/api/breaking').then((data) => {
        commit('setPosts', data)
      })
    }
  },
}
