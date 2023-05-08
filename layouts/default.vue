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
  head() {
    let font, theme, access
    let script = []
    if (process.server) {
      font = this.$cookies.get('tmg_font')
      theme = this.$cookies.get('tmg_theme')
      access = this.$cookies.get('tmg_access') === 'BR92VTWM'
    } else {
      font = this.$store.state.theme.font
      theme = this.$store.state.theme.theme
      access = this.$store.getters['user/hasPremium']
    }
    if (!access) {
      script = [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2317149376955370',
          async: true,
          crossorigin: 'anonymous',
        },
        {
          hid: 'sovrn',
          src: 'https://get.s-onetag.com/71db7e62-a54b-43f0-98c7-ae8594228b02/tag.min.js',
          async: true,
          defer: true,
        },
      ]
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
      script,
    }
  },
}
</script>
