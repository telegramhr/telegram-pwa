export default ({ route }, inject) => {
  function check(path) {
    let dotmetricsId = '1182'
    if (path.includes('politika-kriminal')) {
      dotmetricsId = '1174'
    }
    if (path.includes('biznis-tech')) {
      dotmetricsId = '1176'
    }
    if (path.includes('kultura')) {
      dotmetricsId = '1178'
    }
    if (path.includes('zivot')) {
      dotmetricsId = '1179'
    }
    if (path.includes('velike-price')) {
      dotmetricsId = '1177'
    }
    if (path.includes('pitanje-zdravlja')) {
      dotmetricsId = '12607'
    }
    if (
      path.includes('openspace') ||
      path.includes('vjestine') ||
      path.includes('tvrtke-karijere') ||
      path.includes('vodici') ||
      path.includes('kvizovi-testovi')
    ) {
      dotmetricsId = '12608'
    }
    if (path.includes('super1')) {
      dotmetricsId = '4136'
    }
    if (path.includes('telesport')) {
      dotmetricsId = '1175'
    }
    if (path === '/') {
      dotmetricsId = '1173'
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
