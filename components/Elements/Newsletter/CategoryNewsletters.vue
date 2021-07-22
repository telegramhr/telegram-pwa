<template>
  <div>
    <h2 class="full flex section-title less-bottom-margin">Newsletteri</h2>
    <div class="full flex">
      <div class="full newsletter-listing flex relative stretch">
        <div class="full flex newsletter-header">
          <div class="newsletter-avatar">
            <img
              src="@/assets/img/tg_newsletter_avatars_pk.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="full relative">
            <h3 class="full overtitle">Jednom tjedno</h3>
            <h2 class="full newsletter-title">{{ title }}</h2>
            <h3 class="full subtitle">Najbolje iz rubrike</h3>
          </div>
        </div>
        <div class="full flex newsletter-box">
          <p class="full newsletter-intro">
            Tjedni odabir najboljih Telegramovih priča iz rubrike {{ title }}
          </p>
          <subscribe-button
            :mlid="mlid"
            :free="this.$route.params.category !== 'velike-price'"
          ></subscribe-button>
        </div>
      </div>
    </div>
    <div class="full flex">
      <div class="full newsletter-listing flex relative stretch">
        <div class="full flex newsletter-header">
          <div class="newsletter-avatar newsletter-dnevni">
            <img
              src="@/assets/img/tg_newsletter_avatars_dnevni.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="full relative">
            <h3 class="full overtitle">Radnim danom</h3>
            <h2 class="full newsletter-title">Dnevni Telegram</h2>
            <h3 class="full subtitle">Odabir najvažnijih tema</h3>
          </div>
        </div>
        <div class="full flex newsletter-box">
          <p class="full newsletter-intro">
            Iz dana u dan, naši nagrađivani novinari donose važne priče o
            Hrvatskoj i svijetu, ekskluzivno otkrivaju afere zbog kojih odlaze
            ministri i objašnjavaju kontekst dnevnih događaja.
          </p>
          <subscribe-button :mlid="1707" :free="true"></subscribe-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryNewsletters',
  computed: {
    title() {
      const titles = {
        'politika-kriminal': 'Politika & kriminal',
        kultura: 'Kultura',
        komentari: 'Komentari',
        zivot: 'Život',
        'biznis-tech': 'Biznis & tech',
        'velike-price': 'Velike priče',
      }
      return titles[this.$route.params.category]
    },
    mlid() {
      const mlids = {
        'politika-kriminal': 2626,
        kultura: 2631,
        komentari: 2627,
        zivot: 2629,
        'biznis-tech': 2628,
        'velike-price': 2630,
      }
      return mlids[this.$route.params.category]
    },
  },
  mounted() {
    this.$store.dispatch('newsletters/checkAccess')
  },
}
</script>
