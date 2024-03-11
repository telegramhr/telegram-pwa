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

    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.ybConfiguration = window.ybConfiguration || {}
    window.ybConfiguration = Object.assign({}, window.ybConfiguration, {
      integrationMethod: 'open_tag',
    })
    ;(function (y, i, e, L, D) {
      y.Yieldbird = y.Yieldbird || {}
      y.Yieldbird.cmd = y.Yieldbird.cmd || []
      i.cmd.push(function () {
        i.pubads().disableInitialLoad()
      })
      L = e.createElement('script')
      L.async = true
      L.src = '//cdn.qwtag.com/4bb2cc20-cc9a-4302-abf4-e7a722ec5e40/qw.js'
      D = e.getElementsByTagName('script')[0]
      ;(D.parentNode || e.head).insertBefore(L, D)
    })(window, window.googletag, document)
  }
  function q(c, r) {
    window.apstag._Q.push([c, r])
  }
}
