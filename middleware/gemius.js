export default function ({ route, store }) {
  if (process.client) {
    window.pp_gemius_hit('nSblbvtw7YnzUiC8AtarvJdS3yggumM2F_xjEZ.9W1..57')
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
