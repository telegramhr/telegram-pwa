export default ({ app, req }, inject) => {
  const linker = {
    reloadLinker() {
      const lwdgtDivs = document.getElementsByClassName('lwdgt')
      for (let i = 0; i < lwdgtDivs.length; i++) {
        this.processLinker(lwdgtDivs[i].getAttribute('data-wid'))
      }
    },

    processLinker(widgetId) {
      this.$axios
        .get(`https://linker.hr/widget/lw.php?&wid=${widgetId}`)
        .then((res) => {
          const el = document.getElementById(`linker-${widgetId}`)
          el.innerHTML = res.data
          const arr = el.getElementsByTagName('script')
          for (let n = 0; n < arr.length; n++) {
            const s = document.createElement('script')
            s.setAttribute('type', 'text/javascript')
            if (arr[n].src) {
              s.setAttribute('src', arr[n].src)
            }
            if (arr[n].innerHTML) {
              s.innerHTML = arr[n].innerHTML
            }
            s.async = true
            document.body.appendChild(s)
          }
        })
    },
  }
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
    inject('linker', linker)
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
