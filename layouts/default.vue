<template>
  <div>
    <div id="fb-root"></div>
    <Nuxt :key="key" />
  </div>
</template>

<script>
export default {
  middleware: 'piano',
  data() {
    return {
      key: Math.round(Date.now() / 1000),
    }
  },
  mounted() {
    this.$nextTick(() => {
      setInterval(() => {
        this.key = Math.round(Date.now() / 1000)
      }, 2 * 60 * 1000)
    })
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
