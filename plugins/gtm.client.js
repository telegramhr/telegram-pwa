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
        console.log('Consent data', data)
        gtag('consent', 'update', {
          ad_storage: data.purpose.consents[1] ? 'granted' : 'denied',
          analytics_storage: data.purpose.consents[3] ? 'granted' : 'denied',
          ad_user_data: data.purpose.consents[2] ? 'granted' : 'denied',
          ad_personalization: data.purpose.consents[4] ? 'granted' : 'denied',
        })
      }),
  })
}
