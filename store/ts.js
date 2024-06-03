export const state = () => ({
  posts: [],
  breaks: [],
  comments: [],
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
  setBreaks(state, data) {
    state.breaks = data
  },
  setComments(state, data) {
    state.comments = data
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      if (state.updated + 0.5 * 60 * 1000 < new Date().getTime()) {
        this.$axios.get('/api/ts/zone/ts-glavna').then((res) => {
          commit('setPosts', res.data)
          dispatch('posts/setPosts', res.data, { root: true })
          resolve()
        })
      }
    })
  },
  pullEuro({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.get('/api/ts/zone/ts-euro24').then((res) => {
        commit('setBreaks', res.data)
        dispatch('posts/setPosts', res.data, { root: true })
        resolve()
      })
    })
  },
  pullBreaks({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.get('/api/ts/zone/ts-breaks').then((res) => {
        commit('setBreaks', res.data)
        dispatch('posts/setPosts', res.data, { root: true })
        resolve()
      })
    })
  },
  pullComments({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.get('/api/ts/zone/ts-komentari').then((res) => {
        commit('setComments', res.data)
        dispatch('posts/setPosts', res.data, { root: true })
        resolve()
      })
    })
  },
}
