<template>
  <div>
    <div
      style="background: #ff6b00; color: white; text-align: center; padding: 10px; font-weight: bold; position: sticky; top: 0; z-index: 9999;"
    >
      STAGING TEST
    </div>
    <div id="fb-root"></div>
    <img
      height="1"
      width="1"
      style="display: none"
      src="https://cdn.midas-network.com/MidasPixel/IndexAsync/d533faa6-4827-4887-93ec-a7528afd9a45"
    />
    <Nuxt />
    <client-only>
      <ticker-ad-unit
        v-if="!$store.getters['user/hasPremium']"
        id="telegram_sticky"
      ></ticker-ad-unit>
      <back-widget></back-widget>
      <div
        v-if="!$store.state.user.id"
        id="g_id_onload"
        data-context="signin"
        data-client_id="345595854714-ikp5kmgn1thkccvlkerioqkeh5773ndr.apps.googleusercontent.com"
        :data-login_uri="`https://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr${$router.fullPath}`"
        data-itp_support="true"
      ></div>
    </client-only>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('user/checkAccess')
      this.$store.dispatch('user/checkAdmin')
      this.$store.dispatch('theme/loadTheme')
    })
  },
  head() {
    let font, theme
    if (process.server) {
      font = this.$cookies.get('tmg_font')
      theme = this.$cookies.get('tmg_theme')
      if (theme === 'domoljub') {
        theme = 'regular'
      }
    } else {
      font = this.$store.state.theme.font
      theme = this.$store.state.theme.theme
      if (theme === 'domoljub' && !this.$store.state.theme.update) {
        this.$store.dispatch('theme/setTheme', { type: 'regular', app: this })
      }
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
          theme === 'domoljub' ? 'domoljub-mode' : '',
          this.$store.getters['user/hasPremium'] ? 'logged-in-premium' : '',
        ],
      },
    }
  },
}
</script>
