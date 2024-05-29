export default ({ app, req, store }, inject) => {
  let isMobile = false
  if (process.server) {
    const headers = req && req.headers ? Object.assign({}, req.headers) : {}
    if (headers['x-mobile']) {
      isMobile = true
    }
    inject('storageAvailable', false)
  }
  if (process.client) {
    isMobile = window.innerWidth < 1024
    inject('storageAvailable', storageAvailable())
  }
  inject('mobile', isMobile)

  function storageAvailable() {
    let storage
    try {
      storage = window.localStorage
      const x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      )
    }
  }
}
