export default function ({ route, store }) {
  if (!process.server) {
    window.cX = window.cX || {}
    window.cX.callQueue = window.cX.callQueue || []
    window.cX.options = window.cX.options || { compat: { c1x: { wait: 3000 } } }
    window.cX.callQueue.push(['setSiteId', '1128464677385494954'])
    window.cX.callQueue.push([
      'setCustomParameters',
      {
        'gru-theme': store.state.theme.theme,
        'gru-font': store.state.theme.font,
      },
    ])
    if (store.state.user.uid) {
      window.cX.callQueue.push([
        'addExternalId',
        {
          id: store.state.user.uid,
          type: 'gru',
        },
      ])
      window.cX.callQueue.push([
        'addExternalId',
        {
          id: store.state.user.uid,
          type: 'zuo',
        },
      ])
    }
    window.cX.CCE = window.cX.CCE || {}
    window.cX.CCE.callQueue = window.cX.CCE.callQueue || []
    window.cX.CCE.callQueue.push([
      'sendPageViewEvent',
      'GRU',
      'f0432a5c19cac4cf07c94cc89ef57dd30575ec83',
    ])
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
}
