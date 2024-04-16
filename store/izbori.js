export const state = () => ({
  dip: false,
  map: {
    1: {
      alt: 'Rijeke pravde - Zoran Milanović',
      title: 'Rijeke pravde',
      class: 'sdp',
      lider: require('assets/img/extras/izbori_2024/lider_sdp.png'),
    },
    20: {
      alt: 'HDZ - Andrej Plenković',
      title: 'HDZ',
      class: 'hdz',
      lider: require('assets/img/extras/izbori_2024/lider_hdz.png'),
    },
    2: {
      alt: 'Možemo - Tomislav Tomašević',
      title: 'Možemo!',
      class: 'mozemo',
      lider: require('assets/img/extras/izbori_2024/lider_mozemo.png'),
    },
    18: {
      alt: 'MOST - Božo Petrov',
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
    if (state.updated < new Date().getTime() - 1000 * 60 * 5) {
      const gifts = await this.$axios.$get('/api/izbori/2024')
      commit('setData', gifts)
    }
  },
}
