import { Capacitor } from '@capacitor/core'

export default function ({ app, $axios, redirect, store }) {
  $axios.onRequest((config) => {
    if (Capacitor.isNativePlatform()) {
      config.headers['X-Type'] = 'app'
      if (config.url.startsWith('/api/')) {
        config.url = config.url.replace(
          '/api/',
          'https://www.telegram.hr/wp-json/telegram/pwa/v1/'
        )
      }
      if (config.url.startsWith('/crm/')) {
        config.url = config.url.replace(
          '/crm/',
          'https://pretplata.telegram.hr/'
        )
      }
      if (config.url.startsWith('/pretplate/')) {
        config.url = config.url.replace(
          '/pretplate/',
          'https://pretplate.telegram.hr/'
        )
      }
      if (config.url.startsWith('/mailer/')) {
        config.url = config.url.replace(
          '/mailer/',
          'https://mailer.telegram.hr/'
        )
      }
    }
  })
}
