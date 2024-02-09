export const state = () => ({
  kultura: {
    posts: [],
    updated: null,
    link: '/kultura',
    title: 'Kultura',
  },
})

export const mutations = {
  setPosts(state, data) {
    state[data.zone].posts = data.data
    state[data.zone].updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }, payload) {
    return new Promise((resolve) => {
      if (state[payload.zone].updated + 60 * 1000 < new Date().getTime()) {
        this.$axios.get('/api/zone/' + payload.zone).then((res) => {
          commit('setPosts', { data: res.data, zone: payload.zone })
          dispatch('posts/setPosts', res.data, { root: true })
          resolve()
        })
      }
    })
  },
}
