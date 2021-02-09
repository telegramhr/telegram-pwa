/* eslint-disable */
export default function ({ route }) {
  if (process.client) {
    window.tp.experience.execute()

    window.cX = window.cX || {}; window.cX.callQueue = window.cX.callQueue || [];
    window.cX.callQueue.push(['setSiteId', '1139723852373953244']);
    window.cX.callQueue.push(['sendPageViewEvent']);
  }
}
