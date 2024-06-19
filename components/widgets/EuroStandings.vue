<script>
export default {
  name: 'EuroStandings',
  data() {
    return {
      timestamp: Date.now(),
      slider_settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
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
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<template>
  <div
    id="standings"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
    style="max-width: 1201px"
  >
    <div class="full flex stretch column-bottom-pad gallery-content">
      <VueSlickCarousel
        ref="standings_carousel"
        v-bind="slider_settings"
        style="display: block; width: 100%"
      >
        <div class="third flex-responsive column-full-pad mobile-side-pad">
          <iframe
            id="sofa-standings-embed-1688-56953"
            src="https://widgets.sofascore.com/hr-HR/embed/tournament/1688/season/56953/standings?widgetTitle=Group+A&showCompetitionLogo=true&widgetTheme=light"
          ></iframe>
        </div>
        <div class="third flex-responsive column-full-pad mobile-side-pad">
          <iframe
            id="sofa-standings-embed-1685-56953"
            src="https://widgets.sofascore.com/hr-HR/embed/tournament/1685/season/56953/standings?widgetTitle=Group+B&showCompetitionLogo=true&widgetTheme=light"
            style="
              height: 391px !important;
              max-width: 480px !important;
              width: 100% !important;
            "
          ></iframe>
        </div>
        <div class="third flex-responsive column-full-pad mobile-side-pad">
          <iframe
            id="sofa-standings-embed-1686-56953"
            src="https://widgets.sofascore.com/hr-HR/embed/tournament/1686/season/56953/standings?widgetTitle=Group+C&showCompetitionLogo=true&widgetTheme=light"
            style="
              height: 391px !important;
              max-width: 320px !important;
              width: 100% !important;
            "
          ></iframe>
        </div>
        <div class="third flex-responsive column-full-pad mobile-side-pad">
          <iframe
            id="sofa-standings-embed-1687-56953"
            src="https://widgets.sofascore.com/hr-HR/embed/tournament/1687/season/56953/standings?widgetTitle=Group+D&showCompetitionLogo=true&widgetTheme=light"
            style="
              height: 391px !important;
              max-width: 320px !important;
              width: 100% !important;
            "
          ></iframe>
        </div>
        <div class="third flex-responsive column-full-pad mobile-side-pad">
          <iframe
            id="sofa-standings-embed-50059-56953"
            src="https://widgets.sofascore.com/hr-HR/embed/tournament/50059/season/56953/standings?widgetTitle=Group+E&showCompetitionLogo=true&widgetTheme=light"
            style="
              height: 391px !important;
              max-width: 320px !important;
              width: 100% !important;
            "
          ></iframe>
        </div>
        <div class="third flex-responsive column-full-pad mobile-side-pad">
          <iframe
            id="sofa-standings-embed-50060-56953"
            src="https://widgets.sofascore.com/hr-HR/embed/tournament/50060/season/56953/standings?widgetTitle=Group+F&showCompetitionLogo=true&widgetTheme=light"
            style="
              height: 391px !important;
              max-width: 320px !important;
              width: 100% !important;
            "
          ></iframe>
        </div>
      </VueSlickCarousel>
      <div
        class="gallery-left center gallery-arrow desktop-only animate"
        @click="$refs.standings_carousel.prev()"
      >
        <font-awesome-icon
          :icon="['far', 'angle-left']"
          class="animate"
        ></font-awesome-icon>
      </div>
      <div
        class="gallery-right center gallery-arrow desktop-only animate"
        @click="$refs.standings_carousel.next()"
      >
        <font-awesome-icon
          :icon="['far', 'angle-right']"
          class="animate"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
#standings iframe {
  height: 391px !important;
  max-width: 320px !important;
  width: 100% !important;
}
</style>
