<script>
export default {
  name: 'BackWidget',
  data() {
    return {
      show: false,
      interval: null,
      midas: false,
    }
  },
  computed: {
    posts() {
      return this.$store.state.zone['back-widget'].posts
    },
  },
  mounted() {
    if (this.$mobile && this.checkReferrer()) {
      window.addEventListener('load', this.init)
      window.addEventListener('popstate', this.listener)
    }
  },
  beforeDestroy() {
    if (this.$mobile && this.checkReferrer()) {
      window.removeEventListener('load', this.init)
      window.removeEventListener('popstate', this.listener)
    }
  },
  methods: {
    init() {
      const final = window.location.href
      const url = 'https://www.telegram.hr/izbor/?utm_campaign=back_widget'
      window.history.replaceState({ backWidget: true }, 'Telegram.hr', url)
      window.history.pushState(
        { backWidgetInitialized: true },
        document.title,
        final
      )
    },
    listener(event) {
      if (event.state.backWidget) {
        // fire ga event
        this.$gtm.push({
          event: 'back-widget',
          eventCategory: 'back-widget',
          eventAction: 'back-widget',
          eventLabel: 'back-widget',
        })
        if (this.midas) {
          this.show = true
        }
      }
    },
    checkReferrer() {
      if (this.$route.fullPath.includes('super1')) {
        return false
      }
      const referrer = document.referrer
      if (referrer) {
        const url = new URL(referrer)
        if (
          url.hostname.includes('midas') ||
          url.hostname.includes('facebook') ||
          url.hostname.includes('linker') ||
          url.hostname.includes('upday')
        ) {
          return true
        }
      }
      return false
    },
  },
}
</script>

<template>
  <div v-if="show" id="back-widget" class="main-container flex mobile-side-pad">
    <div class="full column-horizontal-pa">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        class="noththree full center-text column-vertical-pad subsection-title"
      >
        Nastavite čitati
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <div v-for="(post, index) in posts" :key="`back_widget-${index}`">
          <featured-alt
            :key="`featured-${post.id}`"
            :post="post"
            utm="utm_campaign=midas-backwidget"
            @clicked="show = false"
          ></featured-alt>
          <AdUnit
            v-if="index === 2"
            id="telegram_back_widget"
            key="ad_unit_back_widget"
          ></AdUnit>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#back-widget {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 14;
  background-color: var(--tg-primary-background-color);
}
</style>
