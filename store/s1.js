export const state = () => ({
  posts: [],
  breaks: [],
  breaks2: [],
  updated: null,
  updated2: null,
  updated3: null,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
  setBreaks(state, data) {
    state.breaks = data
    state.updated2 = new Date().getTime()
  },
  setBreaks2(state, data) {
    state.breaks2 = data
    state.updated3 = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    if (state.updated + 0.5 * 60 * 1000 < new Date().getTime()) {
      return new Promise((resolve) => {
        this.$axios.get('/api/s1/zone/s1-glavna').then((res) => {
          commit('setPosts', res.data)
          dispatch('posts/setPosts', res.data, { root: true })
          resolve()
        })
      })
    }
  },
  pullBreaks({ commit, dispatch, state }) {
    if (state.updated2 + 0.5 * 60 * 1000 < new Date().getTime()) {
      return new Promise((resolve) => {
        this.$axios.get('/api/s1/zone/s1-breaks').then((res) => {
          commit('setBreaks', res.data)
          dispatch('posts/setPosts', res.data, { root: true })
          resolve()
        })
      })
    }
  },
  pullBreaks2({ commit, dispatch, state }) {
    if (state.updated3 + 0.5 * 60 * 1000 < new Date().getTime()) {
      return new Promise((resolve) => {
        this.$axios.get('/api/s1/zone/s1-breaks2').then((res) => {
          commit('setBreaks2', res.data)
          dispatch('posts/setPosts', res.data, { root: true })
          resolve()
        })
      })
    }
  },
}
