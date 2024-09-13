<template>
  <div
    v-if="posts.length && posts[0].link"
    id="offer-premium-jgl"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
    style="max-width: 1201px"
  >
    <div class="noththree full center-text column-full-pad subsection-title">
      <div class="full center jgl-line">
        <div class="flex center">
          <img
            src="@/assets/img/extras/partner_logos/favbet.png"
            alt="logo"
            loading="lazy"
          />
          <img
            src="@/assets/img/extras/partner_logos/favbet.png"
            class="dark-mode-only"
            alt="logo"
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
          :key="post.image"
          class="fourth flex-responsive column-full-pad mobile-side-pad"
        >
          <a
            :id="'slide-' + index"
            class="full flex article-standard article-medium article relative"
            :href="post.link"
            target="_blank"
            rel="sponsored"
            @click.prevent="trackClick(post.link)"
          >
            <img
              :src="post.slika"
              alt="TG promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex desktop-only">
              <div class="noththree overtitle">
                {{ post.naslov | parseCat }}
              </div>
            </div>
            <h2 :id="'standard-' + post.id" class="full">
              {{ post.opis | parseCat }}
            </h2>
            <div class="newbtn">{{ post.cta }}</div>
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
      <p class="full offer-disclaimer center-text">
        18+ Igraj odgovorno. Igre na sreću mogu izazvati ovisnost.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JglPremium',
  props: {
    site: {
      type: String,
      required: true,
      default: 'tg',
    },
  },
  data() {
    return {
      timestamp: Date.now(),
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
    posts() {
      const preview = this.$route.query.webshop
        ? this.$route.query.webshop
        : 'production'
      return this.$store.state.promos.offers[this.site][preview]
    },
  },
  mounted() {
    const preview = this.$route.query.webshop
      ? this.$route.query.webshop
      : 'production'
    this.$store.dispatch('promos/pullOffers', {
      shop: this.site,
      preview,
    })
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': this.site + '-premium',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': this.site + '-premium',
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
.jgl-line {
  background-color: #fd267e;
}

#offer-premium-jgl .overtitle {
  color: #fd267e;
}

#offer-premium-jgl .newbtn {
  background-color: #fd267e;
}
/*
.jgl-line > div {
  background-color: #fcf1e7;
  width: 200px;
}

.contrast-mode .jgl-line > div {
  background-color: white;
}
.dark-mode .jgl-line > div {
  background-color: #212121;
}*/

.noththree.subsection-title .jgl-line img {
  height: 40px;
  bottom: 0px;
}

#offer-premium-jgl .slick-slide {
  border-right: 1px solid #c8c8c8;
}

#offer-premium-jgl .dark-mode .slick-slide {
  border-right: 1px solid #fd267e;
}

#offer-premium-jgl .article-pad {
  flex-direction: column;
  min-height: 150px;
  justify-content: space-between;
}

#offer-premium-jgl .article-medium {
  padding-right: 0;
}

#offer-premium-jgl .article-medium img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 767px) {
  .article img {
    aspect-ratio: 1/1;
  }
}
</style>
