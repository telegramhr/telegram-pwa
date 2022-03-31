export default function ({ route, app }) {
  if (process.client && route.name !== 'category-slug') {
    window.dm.AjaxEvent('pageview', null, app.$dotmetrics.check(route.path))
  }
}
