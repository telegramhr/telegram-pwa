/* eslint-disable */
export default function ({ route }) {
  if (process.client) {
    window.cX = window.cX || {}; window.cX.callQueue = window.cX.callQueue || [];
    window.cX.callQueue.push(['setSiteId', '1128464677385494954']);
    window.cX.callQueue.push(['sendPageViewEvent']);
  }
}
