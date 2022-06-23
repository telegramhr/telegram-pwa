export default function (ctx) {
  ctx.app.router.afterEach((to) => {
    setTimeout(() => {
      ctx.$gtm.push({
        routeName: to.name,
        pageType: 'PageView',
        pageUrl: to.fullPath,
        pageTitle: (typeof document !== 'undefined' && document.title) || '',
        event: 'nuxtRoute',
        'user-type': ctx.store.state.user.type,
      })
    }, 250)
  })
}
