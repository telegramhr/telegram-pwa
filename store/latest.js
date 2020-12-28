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
  pullPosts({ commit, state }) {
    return new Promise((resolve) => {
      if (state.updated + 5 * 60 * 1000 < new Date().getTime()) {
        this.$axios
          .get('/latest/1')
          .then((res) => {
            commit('setPosts', { data: res.data, portal: 1 })
          })
          .then(() => {
            this.$axios.get('/latest/2').then((res) => {
              commit('setPosts', { data: res.data, portal: 2 })
            })
          })
          .then(() => {
            this.$axios.get('/latest/3').then((res) => {
              commit('setPosts', { data: res.data, portal: 3 })
            })
          })
      } else {
        resolve()
      }
    })
  },
}
