export const state = () => ({
  posts: [],
  updated: null,
  widget: {
    tg: {
      url: '',
      image: '',
      color: '',
      posts: [],
      updated: null,
    },
    s1: {
      url: '',
      image: '',
      color: '',
      posts: [],
      updated: null,
    },
  },
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
  setWidget(state, data) {
    state.widget[data.payload].url = data.res.url
    state.widget[data.payload].image = data.res.image
    state.widget[data.payload].color = data.res.color
    state.widget[data.payload].posts = data.res.posts
    state.widget[data.payload].updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    if (state.updated + 60 * 60 * 1000 < new Date().getTime()) {
      this.$axios.$get('/api/partner-widget').then((res) => {
        commit('setPosts', res.posts)
      })
    }
  },
  pullSpecialWidget({ commit, dispatch, state }, payload) {
    if (state.widget[payload].updated + 20 * 60 * 1000 < new Date().getTime()) {
      this.$axios.$get(`/api/partner-special-widget/${payload}`).then((res) => {
        commit('setWidget', { res, payload })
      })
    }
  },
}
