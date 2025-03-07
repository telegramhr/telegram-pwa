export default function ({ route, app }) {
  if (process.client) {
    if (window.dm) {
      window.dm.AjaxEvent('pageview', null, app.$dotmetrics.check(route.path))
    }
  }
}
