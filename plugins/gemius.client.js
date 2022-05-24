/* eslint-disable */
export default ({ route }) => {
  const path = route.path
  window.pp_gemius_identifier = 'nSblbvtw7YnzUiC8AtarvJdS3yggumM2F_xjEZ.9W1..57'
  if (path.includes('politika-kriminal')) {
    window.pp_gemius_identifier = 'B8LrC2M_SDgyAhNNdFR0m7bvPzHwbSNkjTfp3wsMi9T.T7'
  }
  if (path.includes('biznis-tech')) {
    window.pp_gemius_identifier = 'B8LlDWM_7dM4HvpilXmwCLbv353wbWMat5lj3jhrA2z.H7'
  }
  if (path.includes('kultura')) {
    window.pp_gemius_identifier = 'nczrCvuiSDiTTzjVqj3v_JeAfXAgAzrQTPxnBVuL3iv.d7'
  }
  if (path.includes('sport')) {
    window.pp_gemius_identifier = 'nSdLaPtwWDjz8rNOgspcbpbyP_ggyiNot0lj3JiKi6H.G7'
  }
  if (path.includes('velike-price')) {
    window.pp_gemius_identifier = 'nSbrCPtwSAGdwXMWSgCUMuVzP1IdASN00odjESlss0D.j7'
  }
  if (path.includes('zivot')) {
    window.pp_gemius_identifier = 'nSdLyvtwW.A9i9jJKh9.c_UTHZEdEXuOnL7hjdYBhsX.h7'
  }
  window.pp_gemius_use_cmp = true
  function gemius_pending(i) {
    window[i] =
      window[i] ||
      function () {
        const x = (window[i + '_pdata'] = window[i + '_pdata'] || [])
        x[x.length] = arguments
      }
  }
  window.googlefc = window.googlefc || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || []
  window.googletag = window.googletag || {}
  window.googletag.cmd = window.googletag.cmd || []
  /* global __tcfapi */
  window.googlefc.callbackQueue.push({
    CONSENT_DATA_READY: () =>
      __tcfapi('getTCData', 0, (data, success) => {
        gemius_pending('gemius_hit')
        gemius_pending('gemius_event')
        gemius_pending('pp_gemius_hit')
        gemius_pending('pp_gemius_event')
      }),
  })

  ;(function (d, t) {
    try {
      const gt = d.createElement(t)
      const s = d.getElementsByTagName(t)[0]
      gt.setAttribute('async', 'async')
      gt.setAttribute('defer', 'defer')
      gt.src = 'https://hr.hit.gemius.pl/xgemius.js'
      s.parentNode.insertBefore(gt, s)
    } catch (e) {}
  })(document, 'script')
}
