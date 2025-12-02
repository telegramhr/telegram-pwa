export const state = () => ({
  posts: {
    1: [],
    2: [],
    3: [],
  },
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.posts[data.portal] = data.data
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
        this.$axios.$get('/api/latest/1').then((data) => {
          commit('setPosts', { data, portal: 1 })
          dispatch('posts/setPosts', data, { root: true })
          resolve()
        })
        /* .then(() => {
            this.$axios.$get('/latest/2').then((data) => {
              commit('setPosts', { data: data, portal: 2 })
            })
          })
          .then(() => {
            this.$axios.$get('/latest/3').then((data) => {
              commit('setPosts', { data: data, portal: 3 })
            })
          }) */
      } else {
        resolve()
      }
    })
  },
}
