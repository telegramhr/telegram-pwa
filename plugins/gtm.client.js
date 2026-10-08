export default ({ app }) => {
  window.dataLayer = window.dataLayer || []

  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  window.googlefc = window.googlefc || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || []
  window.googletag = window.googletag || {}
  window.googletag.cmd = window.googletag.cmd || []
  /* global __tcfapi */
  window.googlefc.callbackQueue.push({
    CONSENT_API_READY: () =>
      __tcfapi('addEventListener', 2.2, (data, success) => {
        gtag('consent', 'update', {
          ad_storage: data.purpose.consents[1] ? 'granted' : 'denied',
          analytics_storage: data.purpose.consents[3] ? 'granted' : 'denied',
          ad_user_data: data.purpose.consents[2] ? 'granted' : 'denied',
          ad_personalization: data.purpose.consents[4] ? 'granted' : 'denied',
        })
        if (data.eventStatus === 'useractioncomplete') {
          // Dotmetrics' door.js decides consent once, at load time: it latches
          // on cmpuishown (lr=true) and calls removeEventListener, so it never
          // re-evaluates when the user later consents and stays in anonymous
          // NCS mode for the rest of the page view. Reloading is the only way
          // to re-run its checkTCF(). Same applies to any other vendor script
          // already initialised under the pre-consent state.
          // Stash the real referrer so the head script can restore it after
          // the reload. Store even when empty: direct traffic would otherwise
          // come back as a telegram.hr self-referral, which is worse than blank.
          try {
            window.sessionStorage.setItem(
              'cmp_ref',
              JSON.stringify({ r: document.referrer || '', t: Date.now() })
            )
          } catch (e) {}
          // Delay so the CMP finishes persisting the TC string first.
          setTimeout(() => {
            window.location.reload()
          }, 300)
        }
      }),
  })

  app.router.afterEach((to, from) => {
    const googleAdUrl =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    try {
      fetch(new Request(googleAdUrl)).catch(() => {
        window.dataLayer.push({ event: 'adblock' })
      }) // use the event name you created in Step 1 here
    } catch (e) {
      window.dataLayer.push({ event: 'adblock' })
    }
  })
}
