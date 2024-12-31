export default function () {
  function mock(fn) {
    return function () {
      this._.push([fn, arguments])
    }
  }
  function load(url) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
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

  load('https://campaign.telegram.hr/assets/lib/js/remplib.js')
  load('https://beam.telegram.hr/assets/lib/js/remplib.js')

  const rempConfig = {
    token: '4246746c-2fa3-4dd9-9f85-d9abd97f087f',
    cookieDomain: '.telegram.hr',
    storage: 'local_storage',
    storageExpiration: {
      default: 15,
      keys: {
        browser_id: 1051200,
        campaigns: 1051200,
      },
    },
    article: {
      id: '74565321',
    },
    tracker: {
      url: 'https://tracker.telegram.hr',
      timeSpent: {
        enabled: true,
      },
      canonicalUrl: 'https://tracker.telegram.hr',
    },
    campaign: {
      url: 'https://campaign.telegram.hr',
    },
  }

  remplib.tracker.init(rempConfig)
  remplib.campaign.init(rempConfig)
}
