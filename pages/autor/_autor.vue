<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div
      v-if="author.id"
      class="container flex smaller-container relative mobile-side-pad stretch column-top-pad"
    >
      <div
        class="two-thirds flex-responsive flex author-segment column-full-pad mobile-full-pad m-order-2"
      >
        <div class="author-segment-header center">
          <div class="full">
            <h2 class="full author-segment-name">
              {{ author.name }}
            </h2>
            <div class="noththree author-segment-title">
              {{ author.byline }}
            </div>
          </div>
        </div>
        <div class="bold full">Biografija autora</div>
        <p class="full">
          {{ author.description }}
        </p>
        <div class="full flex">
          <app-link to="/dojave" class="subtle-btn animate"
            >Kontaktiraj autora</app-link
          >
        </div>
        <div v-if="author.newsletter_list" class="full flex">
          <div class="bold full">Newsletter autora</div>
          <subscribe-button
            v-if="author.newsletter_list"
            :mlid="author.newsletter_list"
            :title="author.name"
            :free="false"
          ></subscribe-button>
        </div>
      </div>
      <div
        class="third flex-responsive flex column-full-pad mobile-full-pad m-order-1"
      >
        <div class="full mobile-half author-segment-image darkened-bg relative">
          <img :src="author.image.url" :alt="author.image.alt" />
        </div>
      </div>
    </div>
    <div v-if="posts.length" class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Članci autora
          </div>
        </div>
        <div
          v-for="post in posts"
          :key="post.id"
          class="fourth flex-responsive column-full-pad"
        >
          <standard :post="post"></standard>
        </div>
      </div>
      <div
        v-if="hasMore"
        class="full center subtle-btn-parent relative clickable"
        @click.prevent="loadMore"
      >
        <a :href="readMore" class="subtle-btn animate">Vidi više</a>
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
import Standard from '@/components/articles/Standard'
export default {
  name: 'Autor',
  components: { Standard },
  async fetch() {
    this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
    await this.$axios
      .get(`/api/author/${this.$route.params.autor}/page/${this.page}`)
      .then((res) => {
        this.author = res.data.author
        this.posts = res.data.posts
        if (this.posts.length < 8) {
          this.hasMore = false
        }
      })
      .catch(() => {
        // set status code on server and
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        // use throw new Error()
        throw new Error('User not found')
      })
  },
  data() {
    return {
      author: {
        id: 0,
        image: {
          url: '',
          alt: '',
        },
        name: '',
        description: '',
      },
      posts: [],
      page: 1,
      hasMore: true,
    }
  },
  computed: {
    readMore() {
      return `${this.author.url}?page=${this.page + 1}`
    },
    json() {
      return [
        {
          '@context': 'https://schema.org',
          '@type': this.author.type,
          name: this.author.name,
          image: this.author.image.url,
          url: this.author.url,
          sameAs: this.author.sameAs,
        },
      ]
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('ads/initAds', { route: this.$route })
    })
  },
  methods: {
    loadMore() {
      this.page++
      this.$axios
        .get('/api/author/' + this.$route.params.autor + '/page/' + this.page)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]

          if (res.data.posts < 8) {
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
      title:
        this.author.name +
        (this.page > 1 ? this.page + '. Stranica' : '') +
        ' | Telegram.hr',
      script: [
        {
          vmid: 'schema-ld',
          hid: 'schema-ld',
          type: 'application/ld+json',
          json: this.json,
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.author.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.author.description,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'author',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.author.name,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.author.image.url,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.author.url,
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
          href: this.author.url + (this.page > 1 ? '?page=' + this.page : ''),
        },
      ],
    }
  },
}
</script>
