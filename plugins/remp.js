export default function () {
  function mock(fn) {
    return function () {
      this._.push([fn, arguments])
    }
  }
  window.remplib = window.remplib || {}
  const mockFuncs = {
    campaign: 'init',
    tracker: 'init trackEvent trackPageview trackCommerce',
    iota: 'init',
  }

  Object.keys(mockFuncs).forEach(function (key) {
    if (!window.remplib[key]) {
      let fn
      let i
      const funcs = mockFuncs[key].split(' ')
      window.remplib[key] = { _: [] }

      for (i = 0; i < funcs.length; i++) {
        fn = funcs[i]
        window.remplib[key][fn] = mock(fn)
      }
    }
  })
}
