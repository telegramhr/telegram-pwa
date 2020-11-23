export const state = () => ({
  stocks: [],
})

export const mutations = {
  setStocks(state, data) {
    state.stocks = data.stocks
  },
}

export const actions = {
  pullStocks({ commit }) {
    this.$axios.get('stocks').then((res) => {
      commit('setStocks', res.data)
    })
  },
}
