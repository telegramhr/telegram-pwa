export default ({ app, store }, inject) => {
  const getToken = async (pack) => {
    const data = {
      keyword: pack,
    }
    if (store.state.user.email) {
      data.email = store.state.user.email
    }
    return (await app.$axios.$post('/pretplate/nth', data)).token
  }

  inject('sms', {
    getToken,
  })
}
