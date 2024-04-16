export const state = () => ({
  dip: false,
  map: {
    1: {
      alt: 'Rijeke pravde - Zoran Milanović',
      title: 'Rijeke pravde',
      class: 'sdp',
      lider: require('assets/img/extras/izbori_2024/lider_sdp.png'),
    },
    2: {
      alt: 'Možemo - Tomislav Tomašević',
      title: 'Možemo!',
      class: 'mozemo',
      lider: require('assets/img/extras/izbori_2024/lider_mozemo.png'),
    },
    3: {
      alt: 'IDS',
      title: 'IDS',
      class: 'ids',
      lider: require('assets/img/extras/izbori_2024/lider_ids.png'),
    },
    4: {
      alt: 'FOKUS',
      title: 'FOKUS - Republika',
      class: 'fokus',
      lider: require('assets/img/extras/izbori_2024/lider_fokus.png'),
    },
    5: {
      alt: 'nps',
      title: 'NPS',
      class: 'nps',
      lider: require('assets/img/extras/izbori_2024/lider_nos.png'),
    },
    10: {
      alt: 'manjine',
      title: 'Manjine',
      class: 'manjine',
      lider: '',
    },
    18: {
      alt: 'MOST',
      title: 'Most',
      class: 'most',
      lider: require('assets/img/extras/izbori_2024/lider_most.png'),
    },
    19: {
      alt: 'Domovinski pokret',
      title: 'Domovinski pokret',
      class: 'domovinski',
      lider: require('assets/img/extras/izbori_2024/lider_domovinski.png'),
    },
    20: {
      alt: 'HDZ - Andrej Plenković',
      title: 'HDZ',
      class: 'hdz',
      lider: require('assets/img/extras/izbori_2024/lider_hdz.png'),
    },
  },
  updated: 0,
})

export const mutations = {
  setData(state, gifts) {
    state.dip = gifts
  },
}

export const actions = {
  async getData({ commit, state }) {
    // if (state.updated < new Date().getTime() - 1000 * 60 * 5) {
    const gifts = await this.$axios.$get('/api/izbori/2024')
    commit('setData', gifts)
    // }
  },
}
