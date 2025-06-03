import { Capacitor } from '@capacitor/core'

export default function ({ app, $axios, redirect, store }) {
  $axios.onRequest((config) => {
    if (Capacitor.isNativePlatform()) {
      config.headers['X-Type'] = 'app'
    }
    if (config.url.startsWith('/api/')) {
      config.url = config.url.replace(
        '/api/',
        'https://www.telegram.hr/wp-json/telegram/pwa/v1/'
      )
    }
  })
}
