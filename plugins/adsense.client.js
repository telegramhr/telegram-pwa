export default ({ app, store }) => {
  console.log(store.state.user.access)
  if (store.state.user.access !== 'BR92VTWM') {
    const s = document.createElement('script')
    s.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2317149376955370'
    s.async = true
    s.crossOrigin = 'anonymous'
    document.head.appendChild(s)
    const sovrn = document.createElement('script')
    sovrn.src =
      'https://get.s-onetag.com/71db7e62-a54b-43f0-98c7-ae8594228b02/tag.min.js'
    sovrn.async = true
    sovrn.defer = true
    document.head.appendChild(sovrn)
  }
}
