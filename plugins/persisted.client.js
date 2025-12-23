import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'tg',
    paths: [
      'stocks',
      'latest',
      'mostread',
      'theme',
      'user',
      'partner',
      'break',
      'breaking',
      'newsletters',
      'authors',
      'promos',
      'uzivo',
      'pretplata',
    ],
  })(store)
}
