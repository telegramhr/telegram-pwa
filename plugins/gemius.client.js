/* eslint-disable */
export default ({ route }, inject) => {
  function gemius_pending(i) {
    window[i] =
      window[i] ||
      function () {
        const x = (window[i + '_pdata'] = window[i + '_pdata'] || [])
        x[x.length] = arguments
      }
  }

  function init() {
    window.pp_gemius_use_cmp = true
    window.pp_gemius_init_timeout = Infinity;
    window.pp_gemius_identifier = 'nSblbvtw7YnzUiC8AtarvJdS3yggumM2F_xjEZ.9W1..57'

    gemius_pending('gemius_hit')
    gemius_pending('gemius_event')
    gemius_pending('pp_gemius_hit')
    gemius_pending('pp_gemius_event')

    ;(function (d, t) {
      try {
        const gt = d.createElement(t)
        const s = d.getElementsByTagName(t)[0]
        gt.setAttribute('async', 'async')
        gt.setAttribute('defer', 'defer')
        gt.src = 'https://gahr.hit.gemius.pl/xgemius.js'
        s.parentNode.insertBefore(gt, s)
      } catch (e) {}
    })(document, 'script')
  }
  init()
}
