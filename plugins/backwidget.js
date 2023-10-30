export default ({ app }, inject) => {
  const init = () => {
    // if (app.$mobile) {
    const url = location.href
    history.replaceState({ init: true }, null, url)
    history.pushState({ init: false }, null, url)
    alert('init')
    window.addEventListener('popstate', listener)
    // }
  }

  const listener = (event) => {
    if (event.state.init) {
      alert(
        `location: ${document.location}, state: ${JSON.stringify(event.state)}`
      )
    }
  }
  /* const checkReferrer = () => {
    const referrer = document.referrer
    if (referrer) {
      if (referrer.includes('midas') || referrer.includes('facebook')) {
        return true
      }
    }
    return false
  } */
  inject('backwidget', { init })
}
