export const state = () => ({
  telesportTop: false,
})

export const mutations = {
  set(state, data) {
    state.telesportTop = !!data.telesportTop
  },
}

export const actions = {
  fetch({ commit }) {
    return new Promise((resolve) => {
      this.$axios
        .get('/api/homepage-settings')
        .then((res) => {
          commit('set', { telesportTop: res.data?.telesport_top })
          resolve()
        })
        .catch(() => {
          // Layout flag is non-critical: keep default order on failure
          resolve()
        })
    })
  },
}
