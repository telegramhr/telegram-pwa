import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'hr.telegram.app',
  appName: 'Telegram.hr',
  webDir: 'dist',
  bundledWebRuntime: false,
  ios: {
    scheme: 'Telegram.hr',
    limitsNavigationsToAppBoundDomains: true,
  },
  server: {
    hostname: 'app.telegram.hr',
    androidScheme: 'https',
    allowNavigation: ['*'],
  },
  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
  },
}

export default config
