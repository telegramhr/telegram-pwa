export const state = () => ({
  categories: {
    'more-news': {
      name: 'Politika & Kriminal',
      posts: [],
      updated: null,
    },
    'politika-kriminal': {
      name: 'Politika & Kriminal',
      posts: [],
      updated: null,
    },
    najnovije: {
      name: 'Najnovije',
      posts: [],
      updated: null,
    },
    kultura: {
      name: 'Kultura',
      posts: [],
      updated: null,
    },
    'biznis-tech': {
      name: 'Biznis & Tech',
      posts: [],
      updated: null,
    },
    'velike-price': {
      name: 'Velike Priče',
      posts: [],
      updated: null,
    },
    zivot: {
      name: 'Život',
      posts: [],
      updated: null,
    },
    komentari: {
      name: 'Komentari',
      posts: [],
      updated: null,
    },
    promo: {
      name: 'Partneri',
      posts: [],
      updated: null,
    },
    sport: {
      name: 'Sport',
      posts: [],
      updated: null,
    },
    commentary: {
      name: '',
      posts: [],
      updated: null,
    },
    openspace: {
      name: 'Openspace',
      posts: [],
      updated: null,
      extraClass: 'openspace',
    },
    'kvizovi-testovi': {
      name: 'Kvizovi i testovi',
      posts: [],
      updated: null,
      extraClass: 'openspace fancy-rubrika',
    },
    'tvrtke-karijere': {
      name: 'Tvrtke i karijere',
      posts: [],
      updated: null,
      extraClass: 'openspace fancy-rubrika',
    },
    vjestine: {
      name: 'Vještine',
      posts: [],
      updated: null,
      extraClass: 'openspace fancy-rubrika',
    },
    vodici: {
      name: 'Vodiči',
      posts: [],
      updated: null,
      extraClass: 'openspace fancy-rubrika',
    },
    'pitanje-zdravlja': {
      name: 'Pitanje zdravlja',
      posts: [],
      updated: null,
      extraClass: 'pitanje-zdravlja fancy-rubrika',
    },
    'leksikon-zdravlja': {
      name: 'Leksikon zdravlja',
      posts: [],
      updated: null,
      extraClass: 'pitanje-zdravlja fancy-rubrika',
    },
    price: {
      name: 'Priče',
      posts: [],
      updated: null,
      extraClass: 'pitanje-zdravlja fancy-rubrika',
    },
    lifestyle: {
      name: 'Lifestyle',
      posts: [],
      updated: null,
      extraClass: 'pitanje-zdravlja fancy-rubrika',
    },
    vijesti: {
      name: 'Vijesti',
      posts: [],
      updated: null,
      extraClass: 'pitanje-zdravlja fancy-rubrika',
    },
  },
  morePosts: {
    'politika-kriminal': {
      posts: [],
      page: 2,
    },
    najnovije: {
      posts: [],
      page: 2,
    },
    kultura: {
      posts: [],
      page: 2,
    },
    'biznis-tech': {
      posts: [],
      page: 2,
    },
    'velike-price': {
      posts: [],
      page: 2,
    },
    zivot: {
      posts: [],
      page: 2,
    },
    komentari: {
      posts: [],
      page: 2,
    },
    promo: {
      posts: [],
      page: 2,
    },
    sport: {
      posts: [],
      page: 2,
    },
    'kvizovi-testovi': {
      posts: [],
      page: 2,
    },
    'tvrtke-karijere': {
      posts: [],
      page: 2,
    },
    vjestine: {
      posts: [],
      page: 2,
    },
    vodici: {
      posts: [],
      page: 2,
    },
    openspace: {
      posts: [],
      page: 2,
    },
    'pitanje-zdravlja': {
      posts: [],
      page: 2,
    },
  },
  updated: null,
  page: 1,
})

export const mutations = {
  setPosts(state, data) {
    state.categories[data.slug].posts = data.posts
    state.categories[data.slug].updated = new Date().getTime()
  },
  setMore(state, data) {
    state.morePosts[data.slug].posts = [
      ...state.morePosts[data.slug].posts,
      ...data.posts,
    ]
    state.morePosts[data.slug].page = state.morePosts[data.slug].page + 1
  },
}

export const actions = {
  pullPosts({ commit, dispatch, state }, payload) {
    return new Promise((resolve) => {
      if (
        state.categories[payload.category].updated + 10 * 60 * 1000 <
        new Date().getTime()
      ) {
        this.$axios
          .get(`${this.config.baseURL}category/${payload.category}`)
          .then((res) => {
            commit('setPosts', {
              posts: res.data.posts,
              slug: payload.category,
            })
            dispatch('posts/setPosts', res.data.posts, { root: true })
            resolve()
          })
      } else {
        resolve()
      }
    })
  },
  loadMore({ commit, dispatch, state }, payload) {
    return new Promise((resolve) => {
      this.$axios
        .get(
          `${this.config.baseURL}category/${payload.category}/page/${
            state.morePosts[payload.category].page
          }`
        )
        .then((res) => {
          commit('setMore', { posts: res.data.posts, slug: payload.category })
          dispatch('posts/setPosts', res.data.posts, { root: true })
          resolve()
        })
    })
  },
}
