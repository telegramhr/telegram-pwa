import { Browser } from '@capacitor/browser'

export default ({ app, req, store }, inject) => {
  async function open(url) {
    await Browser.open({ url })
  }
  inject('browser', { open })

  app.router.beforeEach((to, from, next) => {
    if (store.state.header.showSideMenu) {
      store.commit('header/updateMenu', 'side')
    }
    next()
  })
}
