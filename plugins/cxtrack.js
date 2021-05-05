export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (to.query.tracker) {
      app.$axios.get(
        'https://api.cxense.com/public/widget/click/image/' + to.query.tracker
      )
      delete to.query.tracker
      next(to)
    } else {
      next()
    }
  })
}
