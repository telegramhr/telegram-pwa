<template>
  <div class="main-container flex single-article">
    <client-only>
      <theader></theader>
    </client-only>
    <div class="full flex">
      <article class="container column-full-pad flex relative mobile-side-pad">
        <div
          class="full column article-head column-top-pad mobile-top-pad flex"
        >
          <h1 class="full">{{ post.title }}</h1>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="full relative single-article-body"
          v-html="post.content"
        ></div>
      </article>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Page',
  async fetch() {
    await this.$axios
      .$get('/api/single/' + this.$route.params.page)
      .then((data) => {
        this.post = data
      })
      .catch(() => {
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
      })
  },
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    }
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  head() {
    return {
      title: this.post.title,
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.social.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.social.description,
        },
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
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: this.post.social.image,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.post.social.path,
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
          href: this.post.social.path,
        },
      ],
    }
  },
}
</script>
