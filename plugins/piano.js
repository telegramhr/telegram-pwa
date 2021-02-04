export default ({ app }) => {
  // Piano conf
  window.tp = window.tp || []
  window.tp.push(['setAid', 'NSqJ3UJWsu'])
  window.tp.push(['setSandbox', true])
  window.tp.push(['setUseTinypassAccounts', true])
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

  // ESP conf
  window.PianoESPConfig = {
    id: 648,
  }
  const e = document.createElement('script')
  e.setAttribute('id', 'pnesplucidsdksel')
  e.type = 'text/javascript'
  e.src =
    '//sandbox-api-esp.piano.io/public/sdk/v04/sdk.js?v=' +
    ((localStorage && localStorage.lucidsdkver) || 'xxx')
  e.async = true
  document.getElementsByTagName('script')[0].parentNode.appendChild(e)

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
