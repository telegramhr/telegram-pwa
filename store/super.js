export const state = () => ({
  posts: [],
  morePosts: [],
  reading: [],
  updated: null,
  moreUpdated: null,
  page: 2,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data.posts
    state.reading = data.reading
    state.updated = new Date().getTime()
  },
  setMore(state, data) {
    state.morePosts = [...state.morePosts, ...data]
    state.page = state.page + 1
    state.moreUpdated = new Date().getTime()
  },
  clearMore(state) {
    state.morePosts = []
    state.page = 2
  },
}

export const actions = {
  pullPosts({ commit, state }) {
    return new Promise((resolve) => {
      if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
        this.$axios
          .get('https://super1.telegram.hr/wp-json/telegram/pwa2/v1/portal/3')
          .then((res) => {
            commit('setPosts', res.data)
            resolve()
          })
      } else {
        resolve()
      }
    })
  },
  loadMore({ commit, state }, page) {
    return new Promise((resolve) => {
      if (state.moreUpdated + 3600 * 1000 < new Date().getTime()) {
        commit('clearMore')
      }
      if (state.morePosts.length < page * 7) {
        this.$axios
          .get(
            'https://super1.telegram.hr/wp-json/telegram/pwa2/v1/portal/3/page/' +
              page
          )
          .then((res) => {
            commit('setMore', res.data.posts)
            resolve()
          })
      } else {
        resolve()
      }
    })
  },
}
