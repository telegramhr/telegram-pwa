<template>
  <div
    v-if="posts.length && posts[0].link"
    id="offer-premium"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
    style="max-width: 1201px"
  >
    <h3 class="full center-text column-full-pad subsection-title">
      <div class="full center spar-line">
        <div class="flex center">
          <img
            src="@/assets/img/extras/partner_logos/spar.svg"
            alt="Spar logo"
          />
          <img
            src="@/assets/img/extras/partner_logos/spar.svg"
            class="dark-mode-only"
            alt="Spar logo"
          />
          <img
            src="@/assets/img/extras/partner_logos/interspar.svg"
            alt="Interspar logo"
          />
          <img
            src="@/assets/img/extras/partner_logos/interspar.svg"
            class="dark-mode-only"
            alt="Interspar logo"
          />
        </div>
      </div>
    </h3>
    <div class="full flex stretch column-bottom-pad gallery-content">
      <VueSlickCarousel
        v-if="posts.length"
        ref="offer_carousel"
        v-bind="slider_settings"
        style="display: block; width: 100%"
      >
        <div
          v-for="(post, index) in posts"
          :key="post.image"
          class="offer-slide"
        >
          <a
            :id="'slide-' + index"
            :href="post.link"
            target="_blank"
            rel="sponsored"
            class="full flex article relative"
            role="article"
            @click.prevent="trackClick(post.link)"
          >
            <img
              :src="post.slika"
              loading="lazy"
              alt="Spar promo"
              width="400"
              height="400"
            />
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
    <p class="full offer-disclaimer center-text">1 euro = 7,53450 kuna</p>
  </div>
</template>

<script>
export default {
  name: 'OffersPremium',
  props: {
    shop: {
      type: String,
      required: false,
      default: 'pevex',
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
      'webshop-category': 'interspar-premium',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'interspar-premium',
        'webshop-action': 'click',
        'webshop-label': 'click',
        'webshop-value': 1,
      })
      window.open(link, '_blank')
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
.spar-line {
  background-color: #006431;
}

.pevex-line {
  background-color: #00ab4e;
}

.spar-line > div {
  padding-left: 7px;
  background-color: #fcf1e7;
  width: 468px;
}

.pevex-line > div {
  padding: 10px;
}

.contrast-mode .spar-line > div {
  background-color: white;
}
.dark-mode .spar-line > div {
  background-color: #212121;
}

h3.subsection-title .pevex-line img {
  height: 14px;
  bottom: 0px;
}

h3.subsection-title .spar-line img {
  height: 30px;
  bottom: 0px;
}

#offer-premium .slick-slide {
  border-right: 1px solid #c8c8c8;
}

#offer-premium .dark-mode .slick-slide {
  border-right: 1px solid #212121;
}
</style>
