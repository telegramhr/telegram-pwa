import { Capacitor } from '@capacitor/core'

export default ({ app, store, route }) => {
  if (Capacitor.isNativePlatform()) {
    return
  }
  if (!store.getters['user/hasPremium']) {
    // adsense
    const s = document.createElement('script')
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2317149376955370'
    s.async = true
    s.crossOrigin = 'anonymous'
    document.head.appendChild(s)

    let cookie = app.$cookies.get('ab_test')
    if (!cookie) {
      const value = Math.floor(Math.random() * 100) + 1
      if (value <= 50) {
        cookie = 'a'
      } else {
        cookie = 'b'
      }
      app.$cookies.set('ab_test', cookie, {
        path: '/',
        maxAge: 60 * 60 * 24 * 90,
      })
    }
  }

  window.addEventListener('message', (event) => {
    if (event.data.action === 'bannerHide') {
      const unit = event.data.unit.split('/').pop()
      document.getElementById(unit).parentNode.parentNode.style.display = 'none'
    }
  })
}
