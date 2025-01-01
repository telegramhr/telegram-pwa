export default function ({ route, store }) {
  if (process.client) {
    // marfeel tracking test
    window.marfeel.cmd.push([
      'compass',
      function (compass) {
        compass.trackNewPage({ url: `https://www.telegram.hr${route.path}` })
      },
    ])
    if (store.state.header.showSideMenu) {
      store.commit('header/updateMenu', 'side')
    }
  }
}
