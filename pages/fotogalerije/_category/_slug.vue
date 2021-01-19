<template>
  <div class="main-container flex single-article gallery">
    <client-only>
      <theader></theader>
    </client-only>
    <div v-if="post.id" class="full gallery-body">
      <div class="container flex relative mobile-side-pad">
        <div class="full flex article-head">
          <div class="full flex">
            <h3 class="overtitle">{{ post.category | parseCat }}</h3>
          </div>
          <h1 class="full">{{ post.title }}</h1>
          <h2 class="full">{{ post.subtitle }}</h2>
          <!-- eslint-disable-next-line -->
          <div v-html="post.content"></div>
        </div>
        <div class="full flex gallery-content relative">
          <div class="gallery-header full flex">
            <div class="third animate" @click="$refs.carousel.prev()">
              <i class="far fa-angle-left"></i> Prethodna
            </div>
            <div class="gallery-count third animate">
              Slika {{ current }}/{{ post.gallery.length }}
            </div>
            <div class="third animate" @click="$refs.carousel.next()">
              Sljedeća <i class="far fa-angle-right"></i>
            </div>
          </div>
          <VueSlickCarousel
            v-if="post.gallery.length"
            ref="carousel"
            :arrows="false"
            style="display: block; width: 100%"
            @afterChange="updateCurrent"
          >
            <figure
              v-for="image in post.gallery"
              :key="image.id"
              class="full relative"
            >
              <figcaption class="wp-caption-text img-portrait">
                <!-- eslint-disable-next-line -->
                <span v-html="image.caption"></span>
              </figcaption>
              <img :src="image.url" :alt="image.caption" />
              <figcaption class="wp-caption-text img-portrait">
                <span class="photographer">{{ image.author }}</span>
              </figcaption>
            </figure>
          </VueSlickCarousel>

          <div
            class="gallery-left center gallery-arrow desktop-only animate"
            @click="$refs.carousel.prev()"
          >
            <i class="far fa-angle-left animate"></i>
          </div>
          <div
            class="gallery-right center gallery-arrow desktop-only animate"
            @click="$refs.carousel.next()"
          >
            <i class="far fa-angle-right animate"></i>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async fetch() {
    if (this.$route.params.category === 'preview') {
      this.post = await this.$axios.$get('preview/' + this.$route.params.slug)
    } else {
      this.post = await this.$axios.$get('single/' + this.$route.params.slug)
    }
  },
  data() {
    return {
      current: 1,
      post: {
        type: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
        authors: [
          {
            url: '',
            name: '',
            image: '',
          },
        ],
        overtitle: '',
        title: '',
        subtitle: '',
        content: '',
        recommendations: 0,
        comments: 0,
        time: 0,
        tags: [],
        social: {
          title: '',
          description: '',
          image: '',
        },
        gallery: [],
      },
    }
  },
  mounted() {
    this.$store.dispatch('ads/initAds', { route: this.$route })
  },
  methods: {
    updateCurrent(slide) {
      this.current = slide + 1
    },
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
    }
  },
}
</script>
