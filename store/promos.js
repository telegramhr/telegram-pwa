export const state = () => ({
  posts: [],
  offers: {
    interspar: {
      preview: [],
      preview_updated: null,
      production: [],
      production_updated: null,
    },
    pevex: {
      preview: [],
      preview_updated: null,
      production: [],
      production_updated: null,
    },
    tg: {
      preview: [],
      preview_updated: null,
      production: [],
      production_updated: null,
    },
    ts: {
      preview: [],
      preview_updated: null,
      production: [],
      production_updated: null,
    },
  },
  updated: null,
})

export const mutations = {
  setPosts(state, data) {
    state.posts = data
    state.updated = new Date().getTime()
  },
  setOffers(state, data) {
    state.offers[data.shop][data.preview] = data.data
    state.offers[data.shop][data.preview + '_updated'] = new Date().getTime()
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }) {
    if (state.updated + 20 * 60 * 1000 < new Date().getTime()) {
      this.$axios.$get('/api/promos').then((data) => {
        commit('setPosts', data)
      })
    }
  },
  pullOffers({ commit, dispatch, state }, data) {
    if (
      state.offers[data.shop][data.preview + '_updated'] + 20 * 60 * 1000 <
      new Date().getTime()
    ) {
      this.$axios
        .$get(`/api/promos/webshop?shop=${data.shop}&webshop=${data.preview}`)
        .then((responseData) => {
          commit('setOffers', {
            shop: data.shop,
            preview: data.preview,
            data: responseData,
          })
        })
    }
  },
}
