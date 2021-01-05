export const state = () => ({
  categories: {
    'politika-kriminal': {
      name: 'Politika & Kriminal',
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
  },
  morePosts: {
    'politika-kriminal': {
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
  pullPosts({ commit, state }, payload) {
    return new Promise((resolve) => {
      if (
        state.categories[payload.category].updated + 10 * 60 * 1000 <
        new Date().getTime()
      ) {
        this.$axios.get('category/' + payload.category).then((res) => {
          commit('setPosts', { posts: res.data.posts, slug: payload.category })
          resolve()
        })
      } else {
        resolve()
      }
    })
  },
  loadMore({ commit, state }, payload) {
    return new Promise((resolve) => {
      this.$axios
        .get(
          `category/${payload.category}/page/${
            state.morePosts[payload.category].page
          }`
        )
        .then((res) => {
          commit('setMore', { posts: res.data.posts, slug: payload.category })
          resolve()
        })
    })
  },
}
