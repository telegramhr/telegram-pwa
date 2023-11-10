<template>
  <div class="container flex relative column-top-pad stretch offers-widget">
    <div class="full column-horizontal-pad column-top-pad mobile-side-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        class="noththree full center-text column-vertical-pad subsection-title"
      >
        Nekad je nužno odabrati stranu
      </div>
    </div>
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
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/snjezana.jpg"
            alt="Snježana Prijić Samaržija - pretplatnica i rektorica Sveučilišta u Rijeci"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/maja.jpg"
            alt="Maja Sever - pretplatnica i novinarka"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/vuk.jpg"
            alt="Vuk Vuković - pretplatnik i ekonomist"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/ratko.jpg"
            alt="Ratko Rudić - pretplatnik i trener"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/emil.jpg"
            alt="Emil Tedeschi - pretplatnik i poduzetnik"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/viktorija.jpg"
            alt="Viktorija Đurđek - pretplatnica i operna pjevačica"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/cedo.jpg"
            alt="Čedo Prodanović - pretplatnik i odvjetnik"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/marko.jpg"
            alt="Marko Rakar - pretplatnik i IT stručnjak"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/ivanaS.jpg"
            alt="Ivana Šoljan - pretplatnica i poduzetnica"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/majaV.jpg"
            alt="Maja Vehovec - pretplatnica i ekonomistica"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/luka.jpg"
            alt="Luka Abrus - pretplatnik i poduzetnik"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/tvrtko.jpg"
            alt="Tvrtko Jakovina - pretplatnik i povjesničar"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/ivana.jpg"
            alt="Ivana Gadžić - pretplatnica i predsjednica Zagrebačke burze"
            loading="lazy"
            decoding="async"
          />
        </app-link>
        <app-link
          to="/pretplata/odabrati-stranu"
          class="full flex relative column-horizontal-pad mobile-mini-side-pad"
        >
          <img
            src="@/assets/img/extras/pretplatnici/nevio.jpg"
            alt="Nevio Marasović - pretplatnik i redatelj"
            loading="lazy"
            decoding="async"
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
        initialSlide: Math.floor(Math.random() * 9),
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
