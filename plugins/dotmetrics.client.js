export default ({ route }, inject) => {
  function check(path) {
    let dotmetricsId = '1182'
    if (
      path.includes('politika-kriminal') ||
      path.includes('biznis-tech') ||
      path.includes('komentari') ||
      path.includes('vijesti')
    ) {
      dotmetricsId = '15854'
    }
    if (
      path.includes('kultura') ||
      path.includes('zivot') ||
      path.includes('pitanje-zdravlja') ||
      path.includes('velike-price')
    ) {
      dotmetricsId = '15855'
    }
    if (path.includes('super1') || path.includes('superone')) {
      dotmetricsId = '4136'
    }
    if (path.includes('telesport') || path.includes('sport')) {
      dotmetricsId = '1175'
    }
    return dotmetricsId
  }

  let doorScriptLoaded = false
  let consentGiven = false

  function loadDoorScript(path) {
    if (doorScriptLoaded) {
      return
    }

    const d = document
    const h = d.getElementsByTagName('head')[0]
    const s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://script.dotmetrics.net/door.js?id=' + check(path)

    h.appendChild(s)
    doorScriptLoaded = true

    s.onerror = () => {
      doorScriptLoaded = false // Reset on error so we can retry
    }
  }

  function load(path) {
    // Initialize DotMetrics data structure (but don't load the script yet)
    window.dm = window.dm || { AjaxData: [] }
    window.dm.AjaxEvent = function (et, d, ssid, ad) {
      window.dm.AjaxData.push({
        et,
        d,
        ssid,
        ad,
      })
      if (typeof window.DotMetricsObj !== 'undefined') {
        window.DotMetricsObj.onAjaxDataUpdate()
      }
    }

    // Check TCF API availability
    const tcfApiExists = typeof window.__tcfapi === 'function'

    if (tcfApiExists) {
      // Check if consent was already given (returning visitor)
      window.__tcfapi('getTCData', 2, (tcData, success) => {
        if (success && tcData) {
          if (tcData.purpose?.consents?.[1] === true) {
            consentGiven = true
            loadDoorScript(path)
          }
        }
      })

      // Listen for consent changes
      window.__tcfapi('addEventListener', 2, (tcData, success) => {
        if (success && tcData) {
          if (
            (tcData.eventStatus === 'useractioncomplete' ||
              tcData.eventStatus === 'tcloaded') &&
            tcData.purpose?.consents?.[1] === true &&
            !consentGiven
          ) {
            consentGiven = true
            loadDoorScript(path)
          }
        }
      })
    } else {
      // Wait for TCF API to become available
      let attempts = 0
      const maxAttempts = 100 // 10 seconds total

      const checkInterval = setInterval(() => {
        attempts++

        if (typeof window.__tcfapi === 'function') {
          clearInterval(checkInterval)

          // Check for existing consent
          window.__tcfapi('getTCData', 2, (tcData, success) => {
            if (success && tcData?.purpose?.consents?.[1] === true) {
              consentGiven = true
              loadDoorScript(path)
            }
          })

          // Set up listener for future consent
          window.__tcfapi('addEventListener', 2, (tcData, success) => {
            if (success && tcData) {
              if (
                (tcData.eventStatus === 'useractioncomplete' ||
                  tcData.eventStatus === 'tcloaded') &&
                tcData.purpose?.consents?.[1] === true &&
                !consentGiven
              ) {
                consentGiven = true
                loadDoorScript(path)
              }
            }
          })
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval)
        }
      }, 100)
    }
  }

  function postLoad(path) {
    if (typeof window.DotMetricsObj === 'undefined') {
      if (consentGiven) {
        loadDoorScript(path)
      } else {
        load(path)
      }
    } else {
      window.dm.AjaxEvent('pageview', null, check(path))
    }
  }

  if (route.name !== 'category-slug') {
    load(route.path)
  }

  inject('dotmetrics', {
    load,
    check,
    postLoad,
  })
}
