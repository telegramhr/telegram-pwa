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
      if (this.$route.fullPath.includes('super1')) {
        return this.$store.state.category.categories.super1.mostRead
      }
      return this.$store.state.mostread.posts
    },
  },
  mounted() {
    if (this.$mobile && this.checkReferrer()) {
      this.$store.dispatch('mostread/pullPosts')
      this.$store.dispatch('category/mostRead', { category: 'super1' })
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
      window.history.replaceState(
        { backWidget: true },
        document.title,
        '#back-widget'
      )
      window.history.pushState(
        { backWidgetInitialized: true },
        document.title,
        '#back-widget2'
      )
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
          url.hostname.includes('midas') ||
          url.hostname.includes('facebook') ||
          url.hostname.includes('quicksearchbox')
        ) {
          return true
        }
      }
      return true
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
        {{ $route.fullPath.includes('super1') ? 'Super1' : 'Telegram' }}
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative stretch cantha-intro-block">
        <featured-alt
          v-for="post in posts"
          :key="`featured-${post.id}`"
          :post="post"
          utm="utm_campaign=back_widget"
          @clicked="show = false"
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
