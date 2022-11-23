<template>
  <div
    v-if="posts.length && posts[0].link"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">
      <div v-if="shop === 'interspar'" class="full center spar-line">
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
      <div v-if="shop === 'pevex'" class="full center pevex-line">
        <div class="flex">
          <img
            src="@/assets/img/extras/partner_logos/pevex.webp"
            alt="Pevex logo"
          />
          <img
            src="@/assets/img/extras/partner_logos/pevex.webp"
            class="dark-mode-only"
            alt="Pevex logo"
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
            <img :src="post.slika" loading="lazy" />
            <div class="full flex article-pad">
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
                {{ $shop === 'interspar' ? 'Pogledaj letak' : 'Saznaj više' }}
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
      'webshop-category': this.shop,
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick() {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': this.shop,
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
</style>
