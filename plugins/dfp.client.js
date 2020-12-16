export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    app.store.dispatch('ads/initAds')
    next()
  })
}
