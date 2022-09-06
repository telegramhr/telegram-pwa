<template>
  <div
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">
      <div class="full center spar-line">
        <div class="flex">
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
        <div v-for="post in posts" :key="post.title" class="offer-slide">
          <a
            :href="post.link"
            target="_blank"
            rel="sponsored"
            class="full flex article relative"
            role="article"
            @click="trackClick"
          >
            <img :src="post.slika" loading="lazy" />
            <div class="full flex article-pad">
              <h2 class="full">{{ post.naslov }}</h2>
              <h3 v-if="post.cijena" class="full overtitle">
                {{ post.cijena }} ({{ post.cijena_euro }})
                <span v-if="post.stara_cijena" class="strikethrough-price">
                  {{ post.stara_cijena }} ({{ post.stara_cijena_euro }})
                </span>
              </h3>

              <h4 class="full">
                {{ post.opis }}
              </h4>
              <div class="newbtn">Pogledaj letak</div>
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
  name: 'Partners',
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
      'webshop-category': 'interspar',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick() {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'interspar',
        'webshop-action': 'click',
        'webshop-label': 'click',
        'webshop-value': 1,
      })
    },
    async getPosts() {
      const preview = this.$route.query.webshop ? this.$route.query.webshop : ''
      this.posts = await this.$axios.$get(
        `/api/promos/webshop?webshop=${preview}`
      )
    },
  },
}
</script>
