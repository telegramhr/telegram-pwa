import { Capacitor } from '@capacitor/core'

export default ({ app, store, route }) => {
  if (Capacitor.isNativePlatform()) {
    return
  }
  // gpt
  const g = document.createElement('script')
  g.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'
  g.async = true
  g.defer = true
  document.head.appendChild(g)
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
    window.prebid = 'rubicon'
    const prebid = document.createElement('script')
    prebid.src = '//micro.rubiconproject.com/prebid/dynamic/26072.js'
    prebid.async = true
    prebid.defer = true
    document.head.appendChild(prebid)

    // amazon
    const amazon = document.createElement('script')
    amazon.src = 'https://c.amazon-adsystem.com/aax2/apstag.js'
    amazon.async = true
    amazon.defer = true
    document.head.appendChild(amazon)
    window.apstag = window.apstag || {
      init() {
        q('i', arguments)
      },
      fetchBids() {
        q('f', arguments)
      },
      setDisplayBids() {},
      targetingKeys() {
        return []
      },
      _Q: [],
    }
    window.apstag.init({
      pubID: '921fe99d-b739-4d25-b89d-df067f627a6a',
      adServer: 'googletag',
    })

    // refresh
    const refresh = document.createElement('script')
    refresh.src = 'https://freshatl.azurewebsites.net/js/fresh-atl.js'
    refresh.async = true
    document.head.appendChild(refresh)
  }

  function q(c, r) {
    window.apstag._Q.push([c, r])
  }

  window.addEventListener('message', (event) => {
    if (event.data.action === 'bannerHide') {
      const unit = event.data.unit.split('/').pop()
      document.getElementById(unit).parentNode.parentNode.style.display = 'none'
    }
  })
}
