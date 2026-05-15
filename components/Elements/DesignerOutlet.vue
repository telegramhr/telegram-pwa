<template>
  <div
    id="designer-outlet"
    class="container cantha-big-block flex relative native-block offers-widget stretch mobile-side-pad"
  >
    <div class="full flex stretch column-bottom-pad gallery-content">
      <VueSlickCarousel
        ref="offer_carousel"
        v-bind="slider_settings"
        style="display: block; width: 100%"
      >
        <div v-for="(image, index) in images" :key="image" class="offer-slide">
          <a
            :id="'slide-' + index"
            :href="link"
            target="_blank"
            rel="sponsored"
            class="full flex article relative"
            role="article"
            @click.prevent="trackClick"
          >
            <img
              :src="image"
              loading="lazy"
              alt="Designer Outlet Croatia"
              width="300"
              height="600"
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
  </div>
</template>

<script>
export default {
  name: 'DesignerOutlet',
  data() {
    return {
      link: 'https://www.designeroutletcroatia.com/ponude/digitalni-kuponi?utm_source=telegram&utm_medium=various&utm_campaign=kuponi',
      images: Array.from({ length: 12 }, (_, i) =>
        require(`@/assets/img/widgets/designer-outlet/${i + 1}.jpg`)
      ),
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
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'designer-outlet',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick() {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'designer-outlet',
        'webshop-action': 'click',
        'webshop-label': 'click',
        'webshop-value': 1,
      })
      window.open(this.link, '_blank')
    },
  },
}
</script>

<style>
#designer-outlet .gallery-content {
  padding-top: 60px;
  padding-bottom: 60px;
}

#designer-outlet .slick-slide {
  border-right: 1px solid #c8c8c8;
}

#designer-outlet.dark-mode .slick-slide {
  border-right: 1px solid #212121;
}

@media (min-width: 768px) {
  #designer-outlet
    .slick-slide.slick-active:has(+ .slick-slide:not(.slick-active)) {
    border-right: none;
  }
}

@media (max-width: 767px) {
  #designer-outlet .gallery-content {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  #designer-outlet img {
    aspect-ratio: auto;
    height: auto;
    width: 100%;
  }
}
</style>
