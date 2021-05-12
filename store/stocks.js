export const state = () => ({
  stocks: [],
  updated: 0,
})

export const mutations = {
  setStocks(state, data) {
    state.stocks = data.stocks
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullStocks({ commit, state }) {
    if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
      this.$axios.get('/api/stocks').then((res) => {
        commit('setStocks', res.data)
      })
    }
  },
}
