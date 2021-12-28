export default function ({ app, store }) {
  app.router.afterEach((to) => {
    store._vm.$gtag.pageview({
      page_title: document.title,
      page_path: to.path,
    })
  })
}
