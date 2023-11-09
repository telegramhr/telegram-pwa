<template>
  <div>
    <div id="fb-root"></div>
    <Nuxt />
    <client-only>
      <ticker-ad-unit id="telegram_sticky"></ticker-ad-unit>
      <ticker-special></ticker-special>
    </client-only>
  </div>
</template>

<script>
export default {
  middleware: 'piano',
  data() {
    return {
      init: false,
    }
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
