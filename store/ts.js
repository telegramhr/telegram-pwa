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
        this.$axios.$get('/api/ts/zone/ts-glavna').then((data) => {
          commit('setPosts', data)
          dispatch('posts/setPosts', data, { root: true })
          resolve()
        })
      }
    })
  },
  pullEuro({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.$get('/api/ts/zone/ts-euro24').then((data) => {
        commit('setBreaks', data)
        dispatch('posts/setPosts', data, { root: true })
        resolve()
      })
    })
  },
  pullBreaks({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.$get('/api/ts/zone/ts-breaks').then((data) => {
        commit('setBreaks', data)
        dispatch('posts/setPosts', data, { root: true })
        resolve()
      })
    })
  },
  pullComments({ commit, dispatch, state }) {
    return new Promise((resolve) => {
      this.$axios.$get('/api/ts/zone/ts-komentari').then((data) => {
        commit('setComments', data)
        dispatch('posts/setPosts', data, { root: true })
        resolve()
      })
    })
  },
}
