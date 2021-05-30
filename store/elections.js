export const state = () => ({
  zagreb: {},
  osijek: {},
  split: {},
  rijeka: {},
  updated: null,
})

export const mutations = {
  setCity(state, payload) {
    state[payload.city] = payload.data
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullBig({ commit, state }) {
    if (state.updated + 2 * 60 * 1000 > new Date().getTime()) {
      return
    }
    this.$axios.get('/pretplate/izbori/r_15_21_0000_000.json').then((res) => {
      commit('setCity', { city: 'zagreb', data: res.data })
    })
    this.$axios.get('/pretplate/izbori/r_17_17_4090_000.json').then((res) => {
      commit('setCity', { city: 'split', data: res.data })
    })
    this.$axios.get('/pretplate/izbori/r_17_08_3735_000.json').then((res) => {
      commit('setCity', { city: 'rijeka', data: res.data })
    })
    this.$axios.get('/pretplate/izbori/r_17_14_3123_000.json').then((res) => {
      commit('setCity', { city: 'osijek', data: res.data })
    })
  },
}
