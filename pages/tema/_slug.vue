<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="block-title news-block-title full mobile-side-pad">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="full column-left-pad">{{ category }}</h1>
      </div>
    </div>
    <div
      v-if="posts.length"
      class="container flex relative standard-block block-1 stretch"
    >
      <section
        class="three-fourths flex-responsive flex relative the-big-gs stretch elevate-over-section"
      >
        <div
          class="two-thirds flex-responsive flex column-horizontal-pad column-right-border mobile-side-pad"
        >
          <featured v-for="i in [0, 1, 2, 3]" :key="i" :post="posts[i]" />
        </div>
        <div class="full flex mobile-only">
          <newsletter></newsletter>
        </div>
        <div
          class="third flex-responsive column-horizontal-pad flex mobile-side-pad"
        >
          <standard v-for="i in [4, 5, 6, 7, 8]" :key="i" :post="posts[i]" />
        </div>
      </section>
      <section
        class="fourth flex-responsive flex komentari mobile-side-pad column-horizontal-pad column-right-border"
      >
        <div class="full flex desktop-only">
          <h2 class="full flex section-title">Najnovije</h2>
          <latest :portal="1"></latest>
          <h2 class="full flex section-title">Newsletter</h2>
          <newsletter></newsletter>
          <h2 class="full flex section-title">Najčitanije</h2>
          <!-- 7x mini -->
        </div>
      </section>
      <div v-if="morePosts.length" class="full flex">
        <div
          class="container flex relative native-block stretch mobile-side-pad"
        >
          <div
            v-for="post in morePosts"
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
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'TemaIndex',
  async fetch() {
    await this.$axios.get('tag/' + this.$route.params.slug).then((res) => {
      this.posts = res.data.posts
      this.category = res.data.category
    })
  },
  data() {
    return {
      posts: [],
      category: '',
      morePosts: [],
      page: 2,
    }
  },
  computed: {
    cat() {
      return this.$options.filters.parseCat(this.category)
    },
  },
  mounted() {
    this.$store.dispatch('ads/initAds')
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get('tag/' + this.$route.params.category + '/page/' + this.page)
        .then((res) => {
          this.morePosts = [...this.morePosts, ...res.data.posts]
          this.page++
          this.loading = false
        })
    },
  },
  head() {
    return {
      title: this.cat + ' | Telegram.hr',
      meta: [
        { hid: 'og:type', name: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.cat,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$route.fullPath,
        },
        {
          hid: 'og:app_id',
          name: 'og:app_id',
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
