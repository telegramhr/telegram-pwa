export default ({ app, store }) => {
  if (store.state.user.access !== 'BR92VTWM') {
    // linker
    const l = document.createElement('script')
    l.src = 'https://linker.hr/lw.js'
    l.async = true
    document.head.appendChild(l)

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
    const defractal = document.createElement('script')
    defractal.src =
      'https://cdn.defractal.com/scripts/defractal-7-00770051-F494-429B-A1AF-2D4AB7F53D99js'
    document.head.appendChild(defractal)
    app.$gtm.push({
      event: 'reload-script',
      provider: 'defractal',
    })
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
}
