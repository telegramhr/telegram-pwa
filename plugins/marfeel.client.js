/* eslint-disable */
export default function () {
  function e(e) {
    const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
    const c = document.createElement('script')
    ;(c.src = e),
      t
        ? (c.type = 'module')
        : ((c.async = !0),
          (c.type = 'text/javascript'),
          c.setAttribute('nomodule', ''))
    const n = document.getElementsByTagName('script')[0]
    n.parentNode.insertBefore(c, n)
  }
  function t(t, c, n) {
    let a, o, r
    ;((a = t.marfeel) !== null && void 0 !== a) || (t.marfeel = {}),
      ((o = (r = t.marfeel).cmd) !== null && void 0 !== o) || (r.cmd = []),
      (t.marfeel.config = n),
      (t.marfeel.config.accountId = c)
    const i = 'https://sdk.mrf.io/statics'
    e(''.concat(i, '/marfeel-sdk.js?id=').concat(c), !0),
      e(''.concat(i, '/marfeel-sdk.es5.js?id=').concat(c), !1)
  }
  !(function (e, c) {
    const n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
    t(e, c, n)
  })(window, 1279, {} /* config */)
}
