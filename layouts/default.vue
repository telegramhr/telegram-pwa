<template>
  <div>
    <div id="fb-root"></div>
    <Nuxt :key="key" />
  </div>
</template>

<script>
import { PushNotifications } from '@capacitor/push-notifications'
export default {
  data() {
    return {
      key: Math.round(Date.now() / 1000),
    }
  },
  async mounted() {
    this.$nextTick(() => {
      if (this.$route.name === 'index') {
        setInterval(() => {
          this.key = Math.round(Date.now() / 1000)
        }, 2 * 60 * 1000)
      }
    })
    await PushNotifications.addListener('registration', (token) => {
      this.$axios.post(
        'https://pretplate.telegram.hr/api/notifications/subscribe',
        {
          uid: this.$store.state.user.uid,
          token: token.value,
        }
      )
      // this.$store.commit('notifications/setGranted')
      // this.$store.commit('notifications/setRegister')
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
    await this.registerNotifications()
  },
  methods: {
    test() {
      PushNotifications.requestPermissions().then((status) => {
        if (status.receive === 'granted') {
          PushNotifications.register()
        }
      })
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
