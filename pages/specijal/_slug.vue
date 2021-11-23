<template>
  <div :class="['main-container', 'flex', 'specijal-page', post.class]">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full flex relative specijal-header">
      <img class="specijal-cover" :src="post.image.url" :alt="post.image.alt" />
      <h1 class="full relative center-text column-full-pad">
        {{ post.title }}
      </h1>
      <div class="relative flex-responsive specijal-patron">
        <h3 class="full overtitle center-text">Omogućuje</h3>
        <img :src="post.company.logo" :alt="post.company.name" />
      </div>
    </div>
    <div class="container flex relative standard-block block-1 stretch">
      <section
        class="full flex relative stretch elevate-over-section mobile-side-pad"
      >
        <div v-if="posts.length" class="full flex relative">
          <standard v-for="p in posts.slice(0, 5)" :key="p.id" :post="p" />
        </div>
      </section>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'SpecijalIndex',
  data() {
    return {
      post: {
        id: 0,
        title: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
        company: {
          name: '',
          logo: '',
        },
        class: '',
      },
      posts: [],
      category: '',
      morePosts: [],
      page: 2,
      hasMore: true,
    }
  },
  mounted() {
    this.$axios.get('/api/special/' + this.$route.params.slug).then((res) => {
      this.post = res.data
      this.$axios.get('/api/tag/' + res.data.tag).then((r) => {
        this.posts = r.data.posts
        if (r.data.posts.length < 9) {
          this.hasMore = false
        }
      })
    })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get('/api/tag/' + this.post.tag + '/page/' + this.page)
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
