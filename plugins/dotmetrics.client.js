export default ({ route }, inject) => {
  function check(path) {
    let dotmetricsId = '1182'
    if (
      path.includes('politika-kriminal') ||
      path.includes('biznis-tech') ||
      path.includes('komentari') ||
      path.includes('vijesti')
    ) {
      dotmetricsId = '15854'
    }
    if (
      path.includes('kultura') ||
      path.includes('zivot') ||
      path.includes('pitanje-zdravlja') ||
      path.includes('velike-price')
    ) {
      dotmetricsId = '15855'
    }
    if (path.includes('super1') || path.includes('superone')) {
      dotmetricsId = '4136'
    }
    if (path.includes('telesport') || path.includes('sport')) {
      dotmetricsId = '1175'
    }
    return dotmetricsId
  }

  function load(path) {
    window.dm = window.dm || { AjaxData: [] }
    window.dm.AjaxEvent = function (et, d, ssid, ad) {
      window.dm.AjaxData.push({
        et,
        d,
        ssid,
        ad,
      })
      if (typeof window.DotMetricsObj !== 'undefined') {
        window.DotMetricsObj.onAjaxDataUpdate()
      }
    }

    // Load door.js immediately - TCF stub ensures __tcfapi exists
    // door.js will handle all consent checking internally
    const d = document
    const h = d.getElementsByTagName('head')[0]
    const s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://script.dotmetrics.net/door.js?id=' + check(path)
    h.appendChild(s)
  }

  function postLoad(path) {
    if (typeof window.DotMetricsObj === 'undefined') {
      load(path)
    } else {
      window.dm.AjaxEvent('pageview', null, check(path))
    }
  }

  if (route.name !== 'category-slug') {
    load(route.path)
  }

  inject('dotmetrics', {
    load,
    check,
    postLoad,
  })
}