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
    </client-only>
  </div>
</template>

<script>
export default {
  middleware: 'piano',
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
