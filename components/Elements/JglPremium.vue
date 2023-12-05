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
            src="@/assets/img/extras/partner_logos/telemach.png"
            alt="JGL logo"
            loading="lazy"
          />
          <img
            src="@/assets/img/extras/partner_logos/telemach.png"
            class="dark-mode-only"
            alt="JGL logo"
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
              alt="JGL promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex desktop-only">
              <div class="noththree overtitle">{{ post.naslov }}</div>
            </div>
            <h2 :id="'standard-' + post.id" class="full">
              {{ post.opis }}
            </h2>
            <div class="newbtn">Kupi odmah</div>
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
    <img
      width="1"
      height="1"
      :src="`https://gdehr.hit.gemius.pl/_${timestamp}/redot.gif?id=pzBFNntttavREWRtodi_g6eirjxUPxuMmWv4Fg2vNVn.N7/fastid=mpkldpzlcgbvlfbooavewblarmkf/stparam=ujkhmimjck/nc=0/gdpr=0/gdpr_consent=`"
    />
    <img
      width="1"
      height="1"
      :src="`https://gdehr.hit.gemius.pl/_${timestamp}/redot.gif?id=pzBFNntttavREWRtodi_g6eirjxUPxuMmWv4Fg2vNVn.N7/fastid=bbfzdmdbtwyiaadsmfqgnvauiykk/stparam=soeoqxgfpo/nc=0/gdpr=0/gdpr_consent=`"
    />
    <img
      width="1"
      height="1"
      :src="`https://gdehr.hit.gemius.pl/_${timestamp}/redot.gif?id=pzBFNntttavREWRtodi_g6eirjxUPxuMmWv4Fg2vNVn.N7/fastid=iblrktbezitgarlmofijqyfxnflf/stparam=lmpkgqjhbz/nc=0/gdpr=0/gdpr_consent=`"
    />
    <img
      width="1"
      height="1"
      :src="`https://gdehr.hit.gemius.pl/_${timestamp}/redot.gif?id=pzBFNntttavREWRtodi_g6eirjxUPxuMmWv4Fg2vNVn.N7/fastid=ecvqqabjxbqbhemsnzrmvrvrermd/stparam=zakrkpetpz/nc=0/gdpr=0/gdpr_consent=`"
    />
  </div>
</template>

<script>
export default {
  name: 'JglPremium',
  data() {
    return {
      shop: 'telemach',
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
      'webshop-category': 'telemach-premium',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'telemach-premium',
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
  background-color: #000000;
}

.jgl-line > div {
  padding-left: 7px;
  /*background-color: #fcf1e7;*/
  width: 200px;
}
/*
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
  border-right: 1px solid #212121;
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
</style>
