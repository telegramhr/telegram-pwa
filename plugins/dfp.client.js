export default ({ app }) => {
  const googletag = window.googletag || {}
  googletag.cmd = googletag.cmd || []
  app.router.beforeEach((to, from, next) => {
    googletag.destroySlots()
    next()
  })
}
