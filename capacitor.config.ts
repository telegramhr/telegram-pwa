import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'hr.telegram.app',
  appName: 'Telegram.hr',
  webDir: 'dist',
  bundledWebRuntime: false,
  ios: {
    scheme: 'Telegram.hr',
  },
  server: {
    hostname: 'www.telegram.hr',
  },
}

export default config
