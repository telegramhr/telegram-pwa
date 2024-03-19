/* eslint-disable */
export default function ({ route }) {
  window.PianoESPConfig = {
    id: 280
  }
  // Piano conf
  window.tp = window.tp || []
  window.tp.push(['setAid', 'QuTHmVhFpu'])
  window.tp.push(['setCxenseSiteId', '1128464677385494954']);
  window.tp.push(['setSandbox', false])
  window.tp.push(['setDebug', false])
  window.tp.push(['setUsePianoIdUserProvider', true])
  window.tp.push(['setCloudflareWorkerUrl', 'https://auth.telegram.hr']);
  window.tp.push(["setMaxCookieExpirationInDays", 365]);

  if (!route.name.includes('category-slug')) {
    window.tp.push([
      'init',
      function () {
        window.tp.experience.execute()
        window.tp.enableGACrossDomainLinking()
      },
    ])
  }
}
