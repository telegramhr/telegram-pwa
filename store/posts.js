export const state = () => ({
  posts: {},
})

export const mutations = {
  setPosts(state, data) {
    data.forEach((item) => {
      state.posts[item.slug] = item
    })
  },
}

export const actions = {
  setPosts({ commit }, payload) {
    commit('setPosts', payload)
  },
}
