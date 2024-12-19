<template>
  <div>
    <div id="fb-root"></div>
    <img
      height="1"
      width="1"
      style="display: none"
      src="https://cdn.midas-network.com/MidasPixel/IndexAsync/d533faa6-4827-4887-93ec-a7528afd9a45"
    />
    <Nuxt />
    <client-only>
      <ticker-ad-unit id="telegram_sticky"></ticker-ad-unit>
      <ticker-special></ticker-special>
      <back-widget></back-widget>
    </client-only>
    <div class="remp-banner"></div>
  </div>
</template>

<script>
export default {
  middleware: 'piano',
  head() {
    let font, theme, premium
    if (process.server) {
      font = this.$cookies.get('tmg_font')
      theme = this.$cookies.get('tmg_theme')
      if (theme === 'domoljub') {
        theme = 'regular'
      }
      premium = this.$cookies.get('tmg_access')
    } else {
      font = this.$store.state.theme.font
      theme = this.$store.state.theme.theme
      if (theme === 'domoljub' && !this.$store.state.theme.update) {
        this.$store.dispatch('theme/setTheme', { type: 'regular', app: this })
      }
      premium = this.$store.state.user.access
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
          premium === 'BR92VTWM' ? 'logged-in-premium' : '',
        ],
      },
    }
  },
}
</script>
