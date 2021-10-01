import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'tg',
    paths: [
      'ads',
      'stocks',
      'weather',
      'super',
      'telesport',
      'latest',
      'mostread',
      'category.categories',
      'theme',
      'user',
      'partner',
      'break',
      'breaking',
      'newsletters',
      'authors',
    ],
  })(store)
}
