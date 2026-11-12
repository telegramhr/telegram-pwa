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

  // Reload-loop guard for the post-consent reload below. Funding Choices
  // reports eventStatus 'useractioncomplete' not only after a consent click
  // but also for messages that need no answer, e.g. the "How your data is
  // used" legitimate-interest notice it shows in some regions, and it does so
  // on every pageview. Reloading on that event alone made the page reload
  // forever for those visitors (seen 2026-11-11 from non-HR locations). So:
  // reload only after a real (isTrusted) click inside the CMP dialog, and at
  // most once per tab session.
  const RELOADED_KEY = 'cmp_reloaded'
  let cmpClicked = false
  document.addEventListener(
    'click',
    (e) => {
      if (
        e.isTrusted &&
        e.target &&
        e.target.closest &&
        e.target.closest('.fc-consent-root, .fc-dialog-container')
      ) {
        cmpClicked = true
      }
    },
    true
  )
  function alreadyReloaded() {
    try {
      return window.sessionStorage.getItem(RELOADED_KEY) === '1'
    } catch (e) {
      // No sessionStorage: cannot cap the reload, so never reload.
      return true
    }
  }

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
        if (
          data.eventStatus === 'useractioncomplete' &&
          cmpClicked &&
          !alreadyReloaded()
        ) {
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
            window.sessionStorage.setItem(RELOADED_KEY, '1')
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
