<template>
  <div
    v-if="posts.length && posts[0].link"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="noththree full center-text column-full-pad subsection-title">
      <div class="full center telemach-line">
        <div class="flex center">
          <img
            src="https://www.telegram.hr/wp-content/uploads/2023/02/logo1.png"
            alt="ModulOsam logo"
            loading="lazy"
          />
          <img
            src="https://www.telegram.hr/wp-content/uploads/2023/02/logo1.png"
            alt="ModulOsam logo"
            class="dark-mode-only"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div class="full flex stretch column-bottom-pad gallery-content">
      <VueSlickCarousel
        v-if="posts.length"
        ref="offer_carousel"
        v-bind="slider_settings"
        style="display: block; width: 100%"
      >
        <div
          v-for="(post, index) in posts"
          :key="post.naslov"
          class="offer-slide"
        >
          <a
            :id="index === 0 ? 'letak' : 'slide-' + index"
            :href="post.link"
            target="_blank"
            rel="sponsored"
            class="full flex article relative"
            role="article"
            @click="trackClick"
          >
            <img
              :src="post.slika"
              loading="lazy"
              :alt="post.naslov"
              width="400"
              height="400"
            />
            <div class="full flex article-pad">
              <div class="full offer-title bold">
                {{ post.naslov | parseCat }}
              </div>
              <div v-if="post.cijena_euro" class="noththree full overtitle">
                {{ post.cijena_euro }}<br />
                <span v-if="post.stara_cijena_euro" class="strikethrough-price">
                  {{ post.stara_cijena_euro }}
                </span>
              </div>

              <div class="nothfour full">
                {{ post.opis }}
              </div>
              <div class="newbtn">
                {{ post.cta ? post.cta : 'Pogledaj ponudu' }}
              </div>
            </div>
          </a>
        </div>
      </VueSlickCarousel>
      <div
        class="gallery-left center gallery-arrow desktop-only animate"
        @click="$refs.offer_carousel.prev()"
      >
        <font-awesome-icon
          :icon="['far', 'angle-left']"
          class="animate"
        ></font-awesome-icon>
      </div>
      <div
        class="gallery-right center gallery-arrow desktop-only animate"
        @click="$refs.offer_carousel.next()"
      >
        <font-awesome-icon
          :icon="['far', 'angle-right']"
          class="animate"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  props: {
    shop: {
      type: String,
      required: false,
      default: 'interspar',
    },
  },
  data() {
    return {
      posts: [],
      slider_settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerMode: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.getPosts()
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'modulosam',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick() {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'modulosam',
        'webshop-action': 'click',
        'webshop-label': 'click',
        'webshop-value': 1,
      })
    },
    async getPosts() {
      const preview = this.$route.query.webshop ? this.$route.query.webshop : ''
      this.posts = await this.$axios.$get(
        `/api/promos/webshop?shop=${this.shop}&webshop=${preview}`
      )
    },
  },
}
</script>

<style>
.telemach-line {
  background-color: #f37e59;
}

.telemach-line > div {
  background-color: #fcf1e7;
}

.contrast-mode .telemach-line > div {
  background-color: white;
}
.dark-mode .telemach-line > div {
  background-color: #212121;
}

.noththree.subsection-title .telemach-line img {
  height: 30px;
  bottom: 0px;
  margin: 0 20px;
}
</style>
