export default function ({ store }) {
  store.app.router.beforeEach((to, from, next) => {
    if (window.pbjs) {
      window.pbjs.que.push(() => {
        window.pbjs.removeAdUnit()
        // window.pbjs.clearAllAuctions()
      })
    }
    if (window.googletag) {
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots()
      })
    }
    if (window.remplib) {
      window.remplib.cmd.push(() => {
        window.remplib.campaign.cleanup()
      })
    }
    next()
  })
}
