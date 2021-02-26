/* eslint-disable */
export default ({ app }) => {
  // Piano conf
  window.tp = window.tp || []
  window.tp.push(['setAid', 'NSqJ3UJWsu'])
  window.tp.push(["setCxenseSiteId", "1128464677385494954"]);
  window.tp.push(['setSandbox', true])
  window.tp.push(['setUseTinypassAccounts', true])
  window.tp.push(['setUsePianoIdUserProvider', true])
  window.tp.push([
    'init',
    function () {
      window.tp.experience.init()
    },
  ])

  const a = document.createElement('script')
  a.type = 'text/javascript'
  a.async = true
  a.src = '//cdn.tinypass.com/api/tinypass.min.js'
  const b = document.getElementsByTagName('script')[0]
  b.parentNode.insertBefore(a, b)

  // Adblock
  document.cookie =
    '__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  window.setNptTechAdblockerCookie = function (adblocker) {
    const d = new Date()
    d.setTime(d.getTime() + 60 * 5 * 1000)
    document.cookie =
      '__adblocker=' +
      (adblocker ? 'true' : 'false') +
      '; expires=' +
      d.toUTCString() +
      '; path=/'
  }
  const script = document.createElement('script')
  script.setAttribute('async', true)
  script.setAttribute('src', '//www.npttech.com/advertising.js')
  script.setAttribute('onerror', 'setNptTechAdblockerCookie(true);')
  document.getElementsByTagName('head')[0].appendChild(script)
}
