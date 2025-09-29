export default ({ route }, inject) => {
  // Add timestamp for all logs
  const logPrefix = '[DOTMETRICS FIX]'
  const getTimestamp = () => new Date().toISOString()

  console.log(
    `${logPrefix} ${getTimestamp()} - Plugin initialization started for path: ${
      route.path
    }`
  )

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
    console.log(
      `${logPrefix} ${getTimestamp()} - Selected Dotmetrics ID: ${dotmetricsId} for path: ${path}`
    )
    return dotmetricsId
  }

  let doorScriptLoaded = false
  let consentGiven = false

  function loadDoorScript(path) {
    if (doorScriptLoaded) {
      console.log(
        `${logPrefix} ${getTimestamp()} - door.js already loaded, skipping`
      )
      return
    }

    console.log(
      `${logPrefix} ${getTimestamp()} - CONSENT GIVEN - Loading door.js now`
    )
    const d = document
    const h = d.getElementsByTagName('head')[0]
    const s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://script.dotmetrics.net/door.js?id=' + check(path)

    console.log(
      `${logPrefix} ${getTimestamp()} - Loading door.js with consent: ${s.src}`
    )
    h.appendChild(s)
    doorScriptLoaded = true

    // Log when script actually loads
    s.onload = () => {
      console.log(
        `${logPrefix} ${getTimestamp()} - door.js loaded successfully WITH CONSENT`
      )
      console.log(
        `${logPrefix} ${getTimestamp()} - DotMetricsObj exists: ${
          typeof window.DotMetricsObj !== 'undefined'
        }`
      )
    }

    s.onerror = () => {
      console.log(
        `${logPrefix} ${getTimestamp()} - ERROR: door.js failed to load`
      )
      doorScriptLoaded = false // Reset on error so we can retry
    }
  }

  function load(path) {
    console.log(`${logPrefix} ${getTimestamp()} - load() function called`)

    // Initialize DotMetrics data structure (but don't load the script yet)
    window.dm = window.dm || { AjaxData: [] }
    window.dm.AjaxEvent = function (et, d, ssid, ad) {
      console.log(
        `${logPrefix} ${getTimestamp()} - dm.AjaxEvent called with eventType: ${et}`
      )
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
    console.log(
      `${logPrefix} ${getTimestamp()} - __tcfapi exists: ${tcfApiExists}`
    )

    if (tcfApiExists) {
      console.log(
        `${logPrefix} ${getTimestamp()} - TCF API available, setting up consent listener`
      )

      // Check if consent was already given (returning visitor)
      window.__tcfapi('getTCData', 2, (tcData, success) => {
        if (success && tcData) {
          console.log(
            `${logPrefix} ${getTimestamp()} - Checking existing consent status`
          )
          console.log(
            `${logPrefix} ${getTimestamp()} - Purpose 1 consent: ${
              tcData.purpose?.consents?.[1]
            }`
          )
          console.log(
            `${logPrefix} ${getTimestamp()} - Event Status: ${
              tcData.eventStatus
            }`
          )

          if (tcData.purpose?.consents?.[1] === true) {
            console.log(
              `${logPrefix} ${getTimestamp()} - Existing consent found, loading door.js`
            )
            consentGiven = true
            loadDoorScript(path)
          }
        }
      })

      // Listen for consent changes
      window.__tcfapi('addEventListener', 2, (tcData, success) => {
        if (success && tcData) {
          console.log(`${logPrefix} ${getTimestamp()} - Consent event received`)
          console.log(
            `${logPrefix} ${getTimestamp()} - Event Status: ${
              tcData.eventStatus
            }`
          )
          console.log(
            `${logPrefix} ${getTimestamp()} - Purpose 1 consent: ${
              tcData.purpose?.consents?.[1]
            }`
          )

          if (
            (tcData.eventStatus === 'useractioncomplete' ||
              tcData.eventStatus === 'tcloaded') &&
            tcData.purpose?.consents?.[1] === true &&
            !consentGiven
          ) {
            console.log(
              `${logPrefix} ${getTimestamp()} - User gave consent, loading door.js`
            )
            consentGiven = true
            loadDoorScript(path)
          }
        }
      })
    } else {
      console.log(
        `${logPrefix} ${getTimestamp()} - TCF API not available yet, waiting...`
      )

      // Wait for TCF API to become available
      let attempts = 0
      const maxAttempts = 100 // 10 seconds total

      const checkInterval = setInterval(() => {
        attempts++

        if (typeof window.__tcfapi === 'function') {
          console.log(
            `${logPrefix} ${getTimestamp()} - TCF API now available after ${
              attempts * 100
            }ms`
          )
          clearInterval(checkInterval)

          // Check for existing consent
          window.__tcfapi('getTCData', 2, (tcData, success) => {
            if (success && tcData?.purpose?.consents?.[1] === true) {
              console.log(
                `${logPrefix} ${getTimestamp()} - Consent found after TCF API loaded`
              )
              consentGiven = true
              loadDoorScript(path)
            }
          })

          // Set up listener for future consent
          window.__tcfapi('addEventListener', 2, (tcData, success) => {
            if (success && tcData) {
              console.log(
                `${logPrefix} ${getTimestamp()} - Late consent event: ${
                  tcData.eventStatus
                }`
              )
              if (
                (tcData.eventStatus === 'useractioncomplete' ||
                  tcData.eventStatus === 'tcloaded') &&
                tcData.purpose?.consents?.[1] === true &&
                !consentGiven
              ) {
                console.log(
                  `${logPrefix} ${getTimestamp()} - Late consent given, loading door.js`
                )
                consentGiven = true
                loadDoorScript(path)
              }
            }
          })
        } else if (attempts >= maxAttempts) {
          console.log(
            `${logPrefix} ${getTimestamp()} - WARNING: TCF API not available after 10 seconds`
          )
          console.log(
            `${logPrefix} ${getTimestamp()} - Dotmetrics will NOT load without consent`
          )
          clearInterval(checkInterval)
        }
      }, 100)
    }
  }

  function postLoad(path) {
    console.log(`${logPrefix} ${getTimestamp()} - postLoad() called`)
    if (typeof window.DotMetricsObj === 'undefined') {
      console.log(
        `${logPrefix} ${getTimestamp()} - DotMetricsObj not found, checking if we should load`
      )
      if (consentGiven) {
        console.log(
          `${logPrefix} ${getTimestamp()} - Consent was given, loading door.js from postLoad`
        )
        loadDoorScript(path)
      } else {
        console.log(
          `${logPrefix} ${getTimestamp()} - No consent yet, waiting...`
        )
        load(path)
      }
    } else {
      console.log(
        `${logPrefix} ${getTimestamp()} - DotMetricsObj exists, sending pageview event`
      )
      window.dm.AjaxEvent('pageview', null, check(path))
    }
  }

  console.log(`${logPrefix} ${getTimestamp()} - Route name: ${route.name}`)
  if (route.name !== 'category-slug') {
    console.log(
      `${logPrefix} ${getTimestamp()} - Initializing Dotmetrics consent-aware loading`
    )
    load(route.path)
  } else {
    console.log(
      `${logPrefix} ${getTimestamp()} - Skipping load for category-slug route`
    )
  }

  inject('dotmetrics', {
    load,
    check,
    postLoad,
  })

  console.log(
    `${logPrefix} ${getTimestamp()} - Plugin initialization complete - WAITING FOR CONSENT`
  )
}