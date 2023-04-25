import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'tg',
    paths: [
      'stocks',
      'weather',
      'latest',
      'mostread',
      'theme',
      'user',
      'partner',
      'break',
      'breaking',
      'newsletters',
      'authors',
      'featured',
    ],
  })(store)
}
