export default function (ctx) {
  ctx.$gtm.init('GTM-TF4XJXD')
  setTimeout(() => {
    ctx.$gtm.push({
      routeName: ctx.route.name,
      pageType: 'PageView',
      pageUrl: ctx.route.fullPath,
      pageTitle: (typeof document !== 'undefined' && document.title) || '',
      event: 'nuxtRoute',
      'user-type': ctx.store.state.user.type,
    })
  }, 250)
}
