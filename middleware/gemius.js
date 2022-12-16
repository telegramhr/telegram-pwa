export default function ({ route, app }) {
  if (process.client && !route.name.includes('slug')) {
    app.$gemius.postLoad(route.path, '')
    // marfeel tracking test
    window.marfeel.cmd.push([
      'compass',
      function (compass) {
        compass.trackNewPage({ url: `https://www.telegram.hr${route.path}` })
      },
    ])
  }
}
