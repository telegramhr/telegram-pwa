<template>
  <div
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">
      <img
        src="@/assets/img/extras/partner_logos/spar.svg"
        alt="Telegram logo"
      />
      <img
        src="@/assets/img/extras/partner_logos/spar.svg"
        class="dark-mode-only"
        alt="Telegram logo"
      />
      posebne ponude
    </h3>
    <div class="full flex stretch column-bottom-pad gallery-content">
      <VueSlickCarousel
        ref="offer_carousel"
        v-bind="slider_settings"
        style="display: block; width: 100%"
      >
        <div class="offer-slide">
          <a class="full flex article relative" role="article">
            <img src="@/assets/img/grey_placeholder.png" loading="lazy" />
            <div class="full flex article-pad">
              <h2 class="full">Ime proizvoda</h2>
              <h3 class="overtitle">
                100,00 kn
                <span class="strikethrough-price">150,00 kn</span>
              </h3>

              <h4 class="full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <div class="newbtn">Pogledaj ponudu</div>
            </div>
          </a>
        </div>
        <div class="offer-slide">
          <a class="full flex article relative" role="article">
            <img src="@/assets/img/grey_placeholder.png" loading="lazy" />
            <div class="full flex article-pad">
              <h2 class="full">Ime proizvoda</h2>
              <h3 class="overtitle">
                100,00 kn
                <span class="strikethrough-price">150,00 kn</span>
              </h3>

              <h4 class="full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <div class="newbtn">Pogledaj ponudu</div>
            </div>
          </a>
        </div>
        <div class="offer-slide">
          <a class="full flex article relative" role="article">
            <img src="@/assets/img/grey_placeholder.png" loading="lazy" />
            <div class="full flex article-pad">
              <h2 class="full">Ime proizvoda</h2>
              <h3 class="overtitle">
                100,00 kn
                <span class="strikethrough-price">150,00 kn</span>
              </h3>

              <h4 class="full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <div class="newbtn">Pogledaj ponudu</div>
            </div>
          </a>
        </div>
        <div class="offer-slide">
          <a class="full flex article relative" role="article">
            <img src="@/assets/img/grey_placeholder.png" loading="lazy" />
            <div class="full flex article-pad">
              <h2 class="full">Ime proizvoda</h2>
              <h3 class="overtitle">
                100,00 kn
                <span class="strikethrough-price">150,00 kn</span>
              </h3>

              <h4 class="full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <div class="newbtn">Pogledaj ponudu</div>
            </div>
          </a>
        </div>
        <div class="offer-slide">
          <a class="full flex article relative" role="article">
            <img src="@/assets/img/grey_placeholder.png" loading="lazy" />
            <div class="full flex article-pad">
              <h2 class="full">Ime proizvoda</h2>
              <h3 class="overtitle">
                100,00 kn
                <span class="strikethrough-price">150,00 kn</span>
              </h3>

              <h4 class="full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <div class="newbtn">Pogledaj ponudu</div>
            </div>
          </a>
        </div>
        <div class="offer-slide">
          <a class="full flex article relative" role="article">
            <img src="@/assets/img/grey_placeholder.png" loading="lazy" />
            <div class="full flex article-pad">
              <h2 class="full">Ime proizvoda</h2>
              <h3 class="overtitle">
                100,00 kn
                <span class="strikethrough-price">150,00 kn</span>
              </h3>

              <h4 class="full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h4>
              <div class="newbtn">Pogledaj ponudu</div>
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
  data() {
    return {
      posts: [],
      slider_settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
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
  },
  methods: {
    getPosts() {
      this.$axios
        .get('/api/promos')
        .then((res) => {
          this.posts = res.data
        })
        .catch(() => {
          // TODO: error logging
        })
    },
  },
}
</script>
