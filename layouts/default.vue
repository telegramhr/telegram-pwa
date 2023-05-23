<template>
  <div>
    <div id="fb-root"></div>
    <Nuxt />
  </div>
</template>

<script>
import { PushNotifications } from '@capacitor/push-notifications'
import { App } from '@capacitor/app'
import { Capacitor } from '@capacitor/core'
export default {
  async mounted() {
    this.check()
    if (Capacitor.isNativePlatform()) {
      await PushNotifications.addListener('registration', (token) => {
        this.$axios.post(
          'https://pretplate.telegram.hr/api/notifications/subscribe',
          {
            uid: this.$store.state.user.uid,
            token: token.value,
          }
        )
        this.$store.commit('user/setNotificationToken', token.value)
      })
      await PushNotifications.addListener(
        'pushNotificationActionPerformed',
        (notification) => {
          if (notification.notification.data.url.includes('https:')) {
            window.open(notification.notification.data.url, '_blank')
            return
          }
          this.$router.push(notification.notification.data.url)
        }
      )
      if (Capacitor.getPlatform() === 'android') {
        App.addListener('backButton', (e) => {
          if (this.$route.name === 'index') {
            App.exitApp()
          } else {
            this.$router.go(-1)
          }
        })
        await PushNotifications.createChannel({
          id: 'telegram.hr',
          name: 'Telegram.hr',
          importance: 5,
          visibility: 1,
          sound: 'ball',
          lights: true,
          vibration: true,
        })
      }
    }
  },
  methods: {
    check() {
      if (this.$store.state.user.access) {
        PushNotifications.checkPermissions().then((status) => {
          if (status.receive !== 'granted') {
            this.sub()
          }
        })
      }
    },
    sub() {
      if (this.$store.state.user.access) {
        PushNotifications.requestPermissions().then((status) => {
          if (status.receive === 'granted') {
            PushNotifications.register()
          }
        })
      }
    },
    async registerNotifications() {
      const permStatus = await PushNotifications.checkPermissions()
      if (permStatus.receive === 'granted') {
        PushNotifications.register()
      }
    },
  },
  head() {
    let font, theme
    if (process.server) {
      font = this.$cookies.get('tmg_font')
      theme = this.$cookies.get('tmg_theme')
    } else {
      font = this.$store.state.theme.font
      theme = this.$store.state.theme.theme
    }
    return {
      htmlAttrs: {
        class: [
          font === 'small' ? 'small-fontsize' : '',
          font === 'large' ? 'large-fontsize' : '',
        ],
      },
      bodyAttrs: {
        class: [
          theme === 'contrast' ? 'contrast-mode' : '',
          theme === 'dark' ? 'dark-mode' : '',
        ],
      },
    }
  },
}
</script>
