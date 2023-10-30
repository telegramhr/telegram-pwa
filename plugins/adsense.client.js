export default ({ app, store }) => {
  if (store.state.user.access !== 'BR92VTWM') {
    const s = document.createElement('script')
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2317149376955370'
    s.async = true
    s.crossOrigin = 'anonymous'
    document.head.appendChild(s)
    /* const defractal = document.createElement('script')
    defractal.src =
      'https://cdn.defractal.com/scripts/defractal-7-00770051-F494-429B-A1AF-2D4AB7F53D99js'
    document.head.appendChild(defractal)
    app.$gtm.push({
      event: 'reload-script',
      provider: 'defractal',
    }) */
  }
}
