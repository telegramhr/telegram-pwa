export default function () {
  if (!process.server) {
    window.cX = window.cX || {}
    window.cX.callQueue = window.cX.callQueue || []
    window.cX.callQueue.push(['setSiteId', '1128464677385494954'])
    window.cX.CCE = window.cX.CCE || {}
    window.cX.CCE.callQueue = window.cX.CCE.callQueue || []
    window.cX.CCE.callQueue.push([
      'sendPageViewEvent',
      'GRU',
      'f0432a5c19cac4cf07c94cc89ef57dd30575ec83',
    ])
    if (window.tp) {
      window.tp.experience.execute()
    }
  }
}
