<template>
  <div class="main-container flex specijal-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full flex relative specijal-header">
      <img
        class="specijal-cover"
        src="https://www.telegram.hr/wp-content/uploads/2021/10/zapi5.jpg"
      />
      <h1 class="full relative center-text column-full-pad">
        Lorem ipsum dolor sit amet
      </h1>
      <div class="relative flex-responsive specijal-patron">
        <h3 class="full overtitle center-text">Omogućuje</h3>
        <img
          src="https://www.telegram.hr/wp-content/uploads/2021/05/zagrebacka-500x400-144626jpgaxd.jpeg"
        />
      </div>
    </div>
    <div class="container flex relative standard-block block-1 stretch">
      <section
        class="full flex relative stretch elevate-over-section mobile-side-pad"
      >
        <div v-if="posts.length" class="full flex relative">
          <template v-for="i in [0, 1, 2, 3, 4, 5]">
            <standard v-if="posts[i]" :key="i" :post="posts[i]" />
          </template>
        </div>
      </section>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'SpecijalIndex',
  async fetch() {
    await this.$axios
      .get('/api/tag/' + this.$route.params.slug)
      .then((res) => {
        this.posts = res.data.posts
        this.category = res.data.tag
        if (res.data.posts.length < 9) {
          this.hasMore = false
        }
      })
      .catch(() => {
        // TODO: error logging
      })
  },
  data() {
    return {
      posts: [],
      category: '',
      morePosts: [],
      page: 2,
      hasMore: true,
    }
  },
  computed: {
    cat() {
      return this.$options.filters.parseCat(this.category)
    },
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get('/api/tag/' + this.$route.params.slug + '/page/' + this.page)
        .then((res) => {
          this.morePosts = [...this.morePosts, ...res.data.posts]
          this.page++
          this.loading = false
          if (res.data.posts < 9) {
            this.hasMore = false
          }
        })
        .catch(() => {
          // TODO: error logging
        })
    },
  },
  head() {
    return {
      title: this.cat,
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'website',
        },
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
