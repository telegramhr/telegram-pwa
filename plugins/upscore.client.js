export default function () {
  ;(function (u, p, s, c, r) {
    ;(u[r] =
      u[r] ||
      function (p) {
        ;(u[r].q = u[r].q || []).push(p)
      }),
      (u[r].ls = 1 * new Date())
    const a = p.createElement(s)
    const m = p.getElementsByTagName(s)[0]
    a.async = 1
    a.src = c
    m.parentNode.insertBefore(a, m)
  })(
    window,
    document,
    'script',
    '//files.upscore.com/async/upScore.js',
    'upScore'
  )

  window.upScore({
    config: {
      domain: 'telegram.hr',
      article: '',
      track_positions: false,
    },
  })
}
