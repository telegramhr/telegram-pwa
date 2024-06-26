export const state = () => ({
  posts: {
    najnovije: [],
    sport: [],
    zivot: [],
  },
  page: {
    najnovije: 2,
    sport: 2,
    zivot: 2,
  },
  lastUpdate: null,
})

export const mutations = {
  setPosts(state, data) {
    state.posts[data.category] = data.data
    state.page[data.category] = 2
    state.lastUpdate = new Date().getTime()
  },
  addPosts(state, data) {
    state.posts[data.category].push(...data.data)
    state.page[data.category]++
  },
}

export const actions = {
  async getPosts({ commit, state }) {
    if (state.lastUpdate < new Date().getTime() - 1000 * 60 * 1) {
      await this.$axios.$get(`/api/uzivo/najnovije/`).then((data) => {
        commit('setPosts', { category: 'najnovije', data })
      })
      await this.$axios.$get(`/api/uzivo/sport/`).then((data) => {
        commit('setPosts', { category: 'sport', data })
      })
      await this.$axios.$get(`/api/uzivo/zivot/`).then((data) => {
        commit('setPosts', { category: 'zivot', data })
      })
    }
  },
  morePosts({ commit, state }, category) {
    this.$axios
      .$get(`/api/uzivo/${category}/page/${state.page[category]}`)
      .then((data) => {
        commit('addPosts', { category, data })
      })
  },
}
