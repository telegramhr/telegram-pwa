import { Capacitor } from '@capacitor/core'
import axiosRetry from 'axios-retry'

export default function({ app, $axios, redirect, store }) {
    axiosRetry($axios, {
        retries: 3,
        retryDelay: axiosRetry.exponentialDelay,
        retryCondition: (error) => {
            if (axiosRetry.isNetworkError(error)) return true
            if (error.response && error.response.status >= 500) return true
            if (error.response && error.response.status === 429) return true
            return false
        },
        shouldResetTimeout: true,
    })

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
            if (config.url.startsWith('/wcapi/')) {
                config.url = config.url.replace(
                    '/wcapi/',
                    'https://www.telegram.hr/wcapi/'
                )
            }
        }
    })
}