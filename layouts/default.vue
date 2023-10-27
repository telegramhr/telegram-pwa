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
  mounted() {
    this.$nextTick(() => {
      // check if no history
      // push to history
      const url = location.href
      history.pushState({ init: true }, null, '/pretplata')
      history.pushState({ init: true }, null, url)
      // window.addEventListener('popstate', this.listener)
    })
  },
  beforeDestroy() {
    // window.removeEventListener('popstate', this.listener)
  },
  methods: {
    listener(event) {
      // if (this.init) {
      alert(
        `location: ${document.location}, state: ${JSON.stringify(event.state)}`
      )
      /*  this.init = false
      } else if (event.state.init) {
        this.init = true
      } */
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
