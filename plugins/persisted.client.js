import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'tg',
    paths: [
      'featured',
      'latest',
      'mostread',
      'theme',
      'user',
      'break',
      'newsletters',
      'authors',
      'openspace',
      's1',
      'zdravlje',
    ],
  })(store)
}
