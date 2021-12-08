export const state = () => ({
  zagreb: [
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
      alt: '',
    },
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
      alt: '',
    },
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
      alt: '',
    },
    {
      day: '',
      temp: '0 ',
      humidity: '',
      wind: '',
      type: 0,
      alt: '',
    },
  ],
  updated: 0,
})

export const mutations = {
  setWeather(state, data) {
    state.zagreb = data.zagreb
    state.updated = new Date().getTime()
  },
}

export const actions = {
  pullWeather({ commit, state }) {
    if (state.updated + 10 * 60 * 1000 < new Date().getTime()) {
      this.$axios.get('https://www.telegram.hr/wp-json/telegram/pwa/v1/weather').then((res) => {
        commit('setWeather', res.data)
      })
    }
  },
}
