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
            loading="lazy"
          />
          <img
            src="@/assets/img/extras/partner_logos/spar.svg"
            class="dark-mode-only"
            alt="Spar logo"
            loading="lazy"
          />
          <img
            src="@/assets/img/extras/partner_logos/interspar.svg"
            alt="Interspar logo"
            loading="lazy"
          />
          <img
            src="@/assets/img/extras/partner_logos/interspar.svg"
            class="dark-mode-only"
            alt="Interspar logo"
            loading="lazy"
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
            <div v-if="temp" class="full flex article-pad">
              <h2 class="full">{{ post.naslov }}</h2>
              <h3 v-if="post.cijena" class="full overtitle">
                {{ post.cijena }} ({{ post.cijena_euro }})<br />
                <span v-if="post.stara_cijena" class="strikethrough-price">
                  {{ post.stara_cijena }} ({{ post.stara_cijena_euro }})
                </span>
              </h3>

              <h4 class="full">
                {{ post.opis }}
              </h4>
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
  computed: {
    temp() {
      return (
        this.$route.query.webshop === 'preview' || new Date().getDate() > 23
      )
    },
    posts() {
      const preview = this.$route.query.webshop
        ? this.$route.query.webshop
        : 'production'
      return this.$store.state.promos.offers[this.shop][preview]
    },
  },
  mounted() {
    const preview = this.$route.query.webshop
      ? this.$route.query.webshop
      : 'production'
    this.$store.dispatch('promos/pullOffers', {
      shop: this.shop,
      preview,
    })
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
  },
}
</script>

<style>
.spar-line {
  background-color: #006431;
}

.spar-line > div {
  padding-left: 7px;
  background-color: #fcf1e7;
  width: 468px;
}

.contrast-mode .spar-line > div {
  background-color: white;
}
.dark-mode .spar-line > div {
  background-color: #212121;
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
