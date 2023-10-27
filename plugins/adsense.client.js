export default ({ app, store }) => {
  if (store.state.user.access !== 'BR92VTWM') {
    const s = document.createElement('script')
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2317149376955370'
    s.async = true
    s.crossOrigin = 'anonymous'
    document.head.appendChild(s)
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
  }
}
