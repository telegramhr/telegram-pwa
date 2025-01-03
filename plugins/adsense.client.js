export default ({ app, store, route }) => {
  if (!store.getters['user/hasPremium']) {
    // adsense
    const s = document.createElement('script')
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2317149376955370'
    s.async = true
    s.crossOrigin = 'anonymous'
    document.head.appendChild(s)

    // gpt
    const g = document.createElement('script')
    g.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'
    g.async = true
    g.defer = true
    document.head.appendChild(g)
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
  }

  function q(c, r) {
    window.apstag._Q.push([c, r])
  }

  const onetgas = document.createElement('script')
  onetgas.src =
    'https://get.s-onetag.com/6e633889-6cd5-4683-92df-76d605af6d4b/tag.min.js'
  onetgas.async = true
  onetgas.defer = true
  document.head.appendChild(onetgas)
}
