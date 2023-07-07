export default function ({ app, $axios, redirect, store }) {
  $axios.onRequest((config) => {
    if (store.state.user.access === 'BR92VTWM') {
      config.headers['X-Type'] = 'app'
    }
  })
}
