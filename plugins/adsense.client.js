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

    const i = Math.floor(Math.random() * 2)
    if (i) {
      const sovrn = document.createElement('script')
      sovrn.src =
        'https://get.s-onetag.com/71db7e62-a54b-43f0-98c7-ae8594228b02/tag.min.js'
      sovrn.async = true
      sovrn.defer = true
      document.head.appendChild(sovrn)
      app.$gtm.push({
        event: 'reload-script',
        provider: 'sovrn',
      })
    } else {
      const defractal = document.createElement('script')
      defractal.src =
        'https://cdn.defractal.com/scripts/defractal-7-00770051-F494-429B-A1AF-2D4AB7F53D99js'
      document.head.appendChild(defractal)
      app.$gtm.push({
        event: 'reload-script',
        provider: 'defractal',
      })
    }
    const j = Math.floor(Math.random() * 2)
    if (j) {
      window.prebid = 'prebid'
      const prebid = document.createElement('script')
      prebid.src = '/prebid7.40.0.js'
      prebid.async = true
      prebid.defer = true
      document.head.appendChild(prebid)
    } else {
      window.prebid = 'rubicon'
      const prebid = document.createElement('script')
      prebid.src = '//micro.rubiconproject.com/prebid/dynamic/26072.js'
      prebid.async = true
      prebid.defer = true
      document.head.appendChild(prebid)
    }
  }
}
