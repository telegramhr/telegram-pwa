import { Capacitor } from '@capacitor/core'
export default function ({ app, $axios, redirect, store }) {
  $axios.onRequest((config) => {
    if (Capacitor.isNativePlatform()) {
      config.headers['X-Type'] = 'app'
    }
  })
}
