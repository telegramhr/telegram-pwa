export const state = () => ({
  posts: [],
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, state }) {
    if (state.updated + 60 * 60 * 1000 < new Date().getTime()) {
      this.$axios.$get('https://www.telegram.hr/wp-json/telegram/pwa/v1/native-widget').then((res) => {
        commit('setPosts', res.posts)
      })
    }
  },
}
