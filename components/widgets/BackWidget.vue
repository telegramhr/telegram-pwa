<script>
export default {
  name: 'BackWidget',
  data() {
    return {
      show: false,
      interval: null,
    }
  },
  computed: {
    posts() {
      return this.$store.state.mostread.posts
    },
  },
  mounted() {
    this.$store.dispatch('mostread/pullPosts')
    if (this.$mobile && this.checkReferrer()) {
      this.init()
    }
  },
  methods: {
    init() {
      this.interval = setInterval(() => {
        if (window.document.readyState !== 'complete') {
          return
        }
        const url = location.href
        history.replaceState({ backWidget: true }, '', url)
        history.pushState({ backWidgetInitizalized: true }, '', url)
        window.addEventListener('popstate', this.listener)
        clearInterval(this.interval)
      }, 200)
    },
    listener(event) {
      if (event.state.backWidget) {
        this.show = true
      }
    },
    checkReferrer() {
      const referrer = document.referrer
      if (referrer) {
        const url = new URL(referrer)
        if (
          url.hostname.includes('facebook') ||
          url.hostname.includes('midas')
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
    <div class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <featured-alt
          v-for="post in posts"
          :key="`featured-${post.id}`"
          :post="post"
          utm="?utm_campaign=back_widget"
        ></featured-alt>
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
