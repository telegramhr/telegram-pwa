<template>
  <div class="container flex relative column-top-pad stretch offers-widget">
    <div class="full column-horizontal-pad column-top-pad mobile-side-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3
      class="full center-text column-full-pad subsection-title mobile-side-pad"
    >
      Nekad je nužno odabrati stranu
    </h3>
    <div class="full flex stretch column-bottom-pad gallery-content">
      <VueSlickCarousel
        ref="pretplatnici_carousel"
        v-bind="pretplatnici_slider"
        style="display: block; width: 100%"
      >
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/rade.jpg"
            alt="Rade Šerbedžija - pretplatnik i umjetnik"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/maja.jpg"
            alt="Maja Sever - pretplatnica i novinarka"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/vuk.jpg"
            alt="Vuk Vuković - pretplatnik i ekonomist"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/emil.jpg"
            alt="Emil Tedeschi - pretplatnik i poduzetnik"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/cedo.jpg"
            alt="Čedo Prodanović - pretplatnik i odvjetnik"
          />
        </app-link>
      </VueSlickCarousel>
      <div
        class="gallery-left center gallery-arrow desktop-only animate"
        @click="$refs.pretplatnici_carousel.prev()"
      >
        <font-awesome-icon
          :icon="['far', 'angle-left']"
          class="animate"
        ></font-awesome-icon>
      </div>
      <div
        class="gallery-right center gallery-arrow desktop-only animate"
        @click="$refs.pretplatnici_carousel.next()"
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
  name: 'PretplatniciWidget',
  data() {
    return {
      pretplatnici_slider: {
        infinite: true,
        slidesToShow: 3,
        initialSlide: Math.floor(Math.random() * 5),
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerMode: true,
              centerPadding: '24px',
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
}
</script>
