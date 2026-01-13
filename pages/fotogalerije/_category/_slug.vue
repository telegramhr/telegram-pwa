<template>
  <div class="main-container flex single-article gallery">
    <client-only>
      <theader :id="post.id"></theader>
    </client-only>
    <div v-if="post.id" class="full gallery-body">
      <div class="container flex relative mobile-side-pad">
        <div class="full flex article-head">
          <div class="full flex">
            <div class="noththree overtitle">{{ parsedOvertitle }}</div>
          </div>
          <h1 class="full">{{ post.title }}</h1>
          <h2 class="full">{{ post.subtitle }}</h2>
        </div>
        <div class="full flex gallery-content relative">
          <div class="gallery-header full flex">
            <div class="third animate" @click="$refs.carousel.prev()">
              <font-awesome-icon
                :icon="['far', 'angle-left']"
                class="animate"
              ></font-awesome-icon>
              Prethodna
            </div>
            <div class="gallery-count third animate">
              Slika {{ current }}/{{ post.gallery.length }}
            </div>
            <div class="third animate" @click="$refs.carousel.next()">
              Sljedeća
              <font-awesome-icon
                :icon="['far', 'angle-right']"
                class="animate"
              ></font-awesome-icon>
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
            <font-awesome-icon
              :icon="['far', 'angle-left']"
              class="animate"
            ></font-awesome-icon>
          </div>
          <div
            class="gallery-right center gallery-arrow desktop-only animate"
            @click="$refs.carousel.next()"
          >
            <font-awesome-icon
              :icon="['far', 'angle-right']"
              class="animate"
            ></font-awesome-icon>
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
  scrollToTop: true,
  async fetch() {
    let post
    if (this.$route.params.category === 'preview') {
      post = await this.$axios
        .$get('/api/preview/' + this.$route.params.slug)
        .catch(() => {
          // TODO: error logging
        })
    } else {
      post = await this.$axios
        .$get('/api/single/' + this.$route.params.slug)
        .catch(() => {
          // TODO: error logging
        })
    }

    if (post.id) {
      this.post = post
      // Fallback to galleries[0] if gallery is empty
      if (
        (!this.post.gallery || this.post.gallery.length === 0) &&
        this.post.galleries &&
        this.post.galleries.length > 0 &&
        this.post.galleries[0].images &&
        this.post.galleries[0].images.length > 0
      ) {
        this.post.gallery = this.post.galleries[0].images
      }
    } else {
      this.post.title = 'Objava ne postoji'
      this.post.portal_title = 'Objava ne postoji'
      // set status code on server and
      if (process.server) {
        this.$telegram.context.res.statusCode = 404
      }
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
        galleries: [],
      },
    }
  },
  computed: {
    parsedOvertitle() {
      return this.$options.filters.parseCat(
        this.post.overtitle ? this.post.overtitle : this.post.category
      )
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('ads/initAds', { route: this.$route })
      this.$gemius.postLoad(this.$route.path, this.post.category_slug)
      this.$dotmetrics.postLoad(this.post.category_slug)
    })
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
