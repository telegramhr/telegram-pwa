export default ({ app }) => {
  window.pp_gemius_identifier = 'nSblbvtw7YnzUiC8AtarvJdS3yggumM2F_xjEZ.9W1..57'
  function gemiusPending(i) {
    window[i] =
      window[i] ||
      function () {
        const x = (window[i + '_pdata'] = window[i + '_pdata'] || [])
        x[x.length] = arguments
      }
  }
  function dotMetrics() {
    /* global DotMetricsObj */
    window.dm = window.dm || { AjaxData: [] }
    window.dm.AjaxEvent = function (et, d, ssid, ad) {
      window.dm.AjaxData.push({ et, d, ssid, ad })
      window.DotMetricsObj && DotMetricsObj.onAjaxDataUpdate()
    }
  }
  app.router.afterEach((to, from) => {
    gemiusPending('gemius_hit')
    gemiusPending('gemius_event')
    gemiusPending('pp_gemius_hit')
    gemiusPending('pp_gemius_event')
    dotMetrics()
  })
}
