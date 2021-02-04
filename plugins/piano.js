export default ({ app }) => {
  const tp = window.tp || []
  tp.push(['setAid', 'NSqJ3UJWsu'])
  tp.push(['setSandbox', true])
  tp.push(['setUseTinypassAccounts', true])
  tp.push([
    'init',
    function () {
      tp.experience.init()
    },
  ])

  const a = document.createElement('script')
  a.type = 'text/javascript'
  a.async = true
  a.src = '//cdn.tinypass.com/api/tinypass.min.js'
  const b = document.getElementsByTagName('script')[0]
  b.parentNode.insertBefore(a, b)

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
}
