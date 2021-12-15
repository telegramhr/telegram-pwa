<template>
  <div :class="['main-container', 'flex', 'category-page', extraClass]">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full relative">
      <client-only>
        <div v-if="!$mobile" class="container wallpaper-banners">
          <div class="wallpaper-left">
            <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
          </div>
          <div class="wallpaper-right">
            <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
          </div>
        </div>
      </client-only>
      <div class="block-title news-block-title full mobile-side-pad">
        <div class="full block-title-pattern relative"></div>
        <div class="container flex relative">
          <h1 class="fourth column-left-pad">
            {{ cat }}
          </h1>
        </div>
      </div>
      <div
        v-if="posts.length"
        class="container flex relative standard-block block-1 stretch"
      >
        <section
          class="
            three-fourths
            flex-responsive flex
            relative
            the-big-gs
            stretch
            elevate-over-section
          "
        >
          <div
            class="
              two-thirds
              flex-responsive flex
              column-horizontal-pad column-right-border
              mobile-side-pad
            "
          >
            <featured
              v-for="post in posts.slice(0, 4)"
              :key="post.id"
              :post="post"
            />
          </div>
          <div class="full flex mobile-only">
            <newsletter></newsletter>
          </div>
          <div
            class="
              third
              flex-responsive
              column-horizontal-pad
              flex
              mobile-side-pad
            "
          >
            <standard
              v-for="post in posts.slice(4, 9)"
              :key="post.id"
              :post="post"
            />
          </div>
        </section>
        <section
          class="
            fourth
            flex-responsive flex
            komentari
            mobile-side-pad
            column-horizontal-pad column-right-border
          "
        >
          <div class="full flex desktop-only">
            <category-newsletters></category-newsletters>
            <latest :portal="1"></latest>
            <h2 class="full flex section-title">Newsletter</h2>
            <newsletter></newsletter>
            <!-- <most-read-desktop></most-read-desktop> -->
          </div>
        </section>
        <div v-if="posts.length > 9" class="full flex">
          <div
            class="container flex relative native-block stretch mobile-side-pad"
          >
            <div
              v-for="post in posts.slice(9)"
              :key="post.id"
              class="fourth flex-responsive column-full-pad"
            >
              <standard :post="post"></standard>
            </div>
          </div>
        </div>
        <div
          class="full center subtle-btn-parent relative clickable"
          @click="loadMore"
        >
          <div v-show="!loading" class="subtle-btn animate">Vidi više</div>
          <div v-show="!loading" class="subtle-btn-line"></div>
          <div v-show="loading" class="full center cool-loader">
            <div class="loader-square">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'CategoryIndex',
  async fetch() {
    await this.$axios
      .get('/api/category/' + this.$route.params.category)
      .then((res) => {
        this.posts = res.data.posts
        this.cat = res.data.category
      })
      .catch(() => {
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        throw new Error('Kategorija ne postoji')
      })
  },
  data() {
    return {
      loading: false,
      posts: [],
      cat: '',
      page: 2,
    }
  },
  computed: {
    extraClass() {
      return this.$store.state.category.categories[this.$route.params.category]
        ? this.$store.state.category.categories[this.$route.params.category]
            .extraClass
        : ''
    },
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get(`/api/category/${this.$route.params.category}/page/${this.page}`)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.loading = false
          this.page++
        })
    },
  },
  head() {
    return {
      title: this.cat,
      titleTemplate: 'Kategorija %s | Telegram.hr',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.cat,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.$route.fullPath,
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: this.$route.fullPath,
        },
      ],
    }
  },
}
</script>
