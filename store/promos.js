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
    telemach: {
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
      this.$axios.$get('/api/promos').then((res) => {
        commit('setPosts', res)
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
        .then((res) => {
          commit('setOffers', {
            shop: data.shop,
            preview: data.preview,
            data: res,
          })
        })
    }
  },
}
