<template>
  <div
    id="designer-outlet"
    class="container cantha-big-block flex relative native-block offers-widget stretch mobile-side-pad"
  >
    <div class="full flex stretch column-bottom-pad gallery-content">
      <div class="pinned-first">
        <a
          :href="link"
          target="_blank"
          rel="sponsored"
          class="full flex article relative"
          role="article"
          @click.prevent="trackClick"
        >
          <img
            :src="images[0]"
            loading="lazy"
            alt="Designer Outlet Croatia"
            width="300"
            height="600"
          />
        </a>
      </div>
      <VueSlickCarousel
        ref="offer_carousel"
        v-bind="slider_settings"
        class="slider-wrap"
        style="display: block"
      >
        <div
          v-for="(image, index) in sliderImages"
          :key="image"
          class="offer-slide"
        >
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
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 767,
            settings: { slidesToShow: 2, centerMode: true },
          },
          {
            breakpoint: 600,
            settings: { slidesToShow: 1, centerMode: true },
          },
        ],
      },
    }
  },
  computed: {
    sliderImages() {
      return this.images.slice(1)
    },
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
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 60px;
}

#designer-outlet .slick-slide {
  border-right: 1px solid #c8c8c8;
}

#designer-outlet.dark-mode .slick-slide {
  border-right: 1px solid #212121;
}

#designer-outlet .pinned-first {
  display: flex;
  padding: 0 24px;
}

#designer-outlet .pinned-first > a {
  width: 100%;
}

#designer-outlet .pinned-first img {
  width: 100%;
  height: auto;
}

@media (min-width: 1024px) {
  #designer-outlet .pinned-first {
    flex: 0 0 25%;
    max-width: 25%;
    border-right: 1px solid #c8c8c8;
  }
  #designer-outlet.dark-mode .pinned-first {
    border-right: 1px solid #212121;
  }
  #designer-outlet .slider-wrap {
    flex: 0 0 75%;
    max-width: 75%;
    min-width: 0;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  #designer-outlet .pinned-first {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    border-right: 1px solid #c8c8c8;
  }
  #designer-outlet.dark-mode .pinned-first {
    border-right: 1px solid #212121;
  }
  #designer-outlet .slider-wrap {
    flex: 0 0 66.667%;
    max-width: 66.667%;
    min-width: 0;
  }
}

@media (min-width: 768px) {
  #designer-outlet .gallery-left {
    left: -28px;
  }
  #designer-outlet .gallery-right {
    right: -28px;
  }
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

  #designer-outlet .pinned-first {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 24px;
  }

  #designer-outlet .slider-wrap {
    flex: 0 0 100%;
    max-width: 100%;
    min-width: 0;
  }

  #designer-outlet img {
    aspect-ratio: auto;
    height: auto;
    width: 100%;
  }
}
</style>
