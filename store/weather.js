export const state = () => ({
  zagreb: [
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
    },
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
    },
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
    },
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
    },
  ],
})

export const mutations = {
  setWeather(state, data) {
    state.zagreb = data.zagreb
  },
}

export const actions = {
  pullWeather({ commit }) {
    this.$axios.get('weather').then((res) => {
      commit('setWeather', res.data)
    })
  },
}
