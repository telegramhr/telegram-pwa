export default ({ req }, inject) => {
  let isMobile = false
  if (process.server) {
    const headers = req && req.headers ? Object.assign({}, req.headers) : {}
    if (headers['x-mobile']) {
      isMobile = true
    }
  }
  if (process.client) {
    isMobile = window.innerWidth < 1024
  }
  inject('mobile', isMobile)
}
