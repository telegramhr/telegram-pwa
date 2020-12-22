<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="container relative mobile-side-pad column-full-pad">
      <div class="full center flex column-bottom-border">
        <div
          class="three-fourths flex-responsive flex author-segment stretch"
          style="margin-top: 48px"
        >
          <div class="author-segment-image">
            <img :src="author.image.url" :alt="author.image.alt" />
          </div>
          <div class="author-segment-header center">
            <div class="full">
              <h2 class="full author-segment-name">
                {{ author.name }}
              </h2>
              <h3 class="author-segment-title">Telegram autor</h3>
            </div>
          </div>
          <div class="bold full">Biografija autora</div>
          <p class="full">
            {{ author.description }}
          </p>
          <div class="full flex">
            <div class="subtle-btn animate">Kontaktiraj autora</div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div class="full column-horizontal-pad flex">
          <h2 class="full flex section-title">Članci autora</h2>
        </div>
        <div
          v-for="post in posts"
          :key="post.id"
          class="fourth flex-responsive column-full-pad"
        >
          <standard :post="post"></standard>
        </div>
      </div>
      <div class="container flex relative mobile-side-pad">
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
    await this.$axios.get('author/' + this.$route.params.slug).then((res) => {
      this.author = res.data.author
      this.posts = res.data.posts
    })
  },
  data() {
    return {
      author: {
        image: {
          url: '',
          alt: '',
        },
        name: '',
        description: '',
      },
      posts: [],
      page: 2,
    }
  },
  mounted() {
    this.$store.dispatch('ads/initAds', this.$route)
  },
  methods: {
    loadMore() {
      this.$axios
        .get('author/' + this.$route.params.slug + '/page/' + this.page)
        .then((res) => {
          this.posts = [...this.posts, ...res.data.posts]
          this.page++
        })
    },
  },
  head() {
    return {
      title: this.author.name + ' | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.author.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.author.description,
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: this.author.name },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.author.image.url,
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
