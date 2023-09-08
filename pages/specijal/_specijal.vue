<template>
  <div
    class="main-container flex specijal-page"
    :class="[post.class ? post.class + ' fancy-rubrika' : '']"
  >
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
      <div
        v-if="post.company.name"
        class="relative flex-responsive specijal-patron"
      >
        <div class="noththree full overtitle center-text">Omogućuje</div>
        <img :src="post.company.logo" :alt="post.company.name" />
      </div>
    </div>
    <div class="container flex relative standard-block block-1 stretch">
      <section
        class="full flex relative stretch elevate-over-section mobile-side-pad"
      >
        <div v-if="posts.length" class="full flex relative">
          <standard v-for="p in posts" :key="p.id" :post="p" />
        </div>
      </section>
    </div>
    <!-- Read more widget -->
    <div class="full flex relative">
      <div class="container flex relative column-full-pad">
        <div class="full center relative clickable" @click="loadMore">
          <div v-show="!loading" class="newbtn altbtn animate">
            Učitaj još članaka
          </div>
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
  name: 'SpecijalIndex',
  async fetch() {
    this.post = await this.$axios.$get(
      '/api/special/' + this.$route.params.specijal
    )
  },
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
        social: {
          title: '',
          image: '',
          description: '',
          path: '',
        },
      },
      posts: [],
      category: '',
      morePosts: [],
      page: 2,
      hasMore: true,
      loading: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.post.tag) {
        this.$axios.get('/api/tag/' + this.post.tag).then((res) => {
          this.posts = res.data.posts
          if (this.posts.length < 9) {
            this.hasMore = false
          }
        })
      }
    })
  },
  methods: {
    loadMore() {
      this.loading = true
      this.$axios
        .get('/api/tag/' + this.post.tag + '/page/' + this.page)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
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
      title: this.post.title,
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.post.social.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.social.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.post.social.path,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.social.image,
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
          href: 'https://www.telegram.hr' + this.$route.fullPath,
        },
      ],
    }
  },
}
</script>
