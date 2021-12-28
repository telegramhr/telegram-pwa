export default function ({ app }) {
  app.router.afterEach((to) => {
    app.$gtag.pageview({ page_title: document.title, page_path: to.path })
  })
}
