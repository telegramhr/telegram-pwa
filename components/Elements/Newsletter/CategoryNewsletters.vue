<template>
  <div>
    <h2 class="full flex section-title less-bottom-margin">Newsletteri</h2>
    <div class="full flex">
      <div
        v-if="category"
        class="full newsletter-listing flex relative stretch"
      >
        <div class="full flex newsletter-header">
          <div class="newsletter-avatar">
            <img :src="category.image" loading="lazy" />
          </div>
          <div class="full relative">
            <h3 class="full overtitle">Jednom tjedno</h3>
            <h2 class="full newsletter-title">{{ category.title }}</h2>
            <h3 class="full subtitle">Najbolje iz rubrike</h3>
          </div>
        </div>
        <div class="full flex newsletter-box">
          <p class="full newsletter-intro">
            Tjedni odabir najboljih Telegramovih priča iz rubrike
            {{ category.title }}
          </p>
          <subscribe-button
            :mlid="category.mlid"
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
              loading="lazy"
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
          <subscribe-button :mlid="2128" :free="true"></subscribe-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryNewsletters',
  computed: {
    category() {
      const categories = {
        'politika-kriminal': {
          title: 'Politika & kriminal',
          mlid: 2626,
          image: require('@/assets/img/tg_newsletter_avatars_pk.jpg'),
        },
        kultura: {
          title: 'Kultura',
          mlid: 2631,
          image: require('@/assets/img/tg_newsletter_avatars_kultura.jpg'),
        },
        komentari: {
          title: 'Komentari',
          mlid: 2627,
          image: require('@/assets/img/tg_newsletter_avatars_komentari.jpg'),
        },
        zivot: {
          title: 'Život',
          mlid: 2629,
          image: require('@/assets/img/tg_newsletter_avatars_zivot.jpg'),
        },
        'biznis-tech': {
          title: 'Biznis & tech',
          mlid: 2628,
          image: require('@/assets/img/tg_newsletter_avatars_bt.jpg'),
        },
        'velike-price': {
          title: 'Velike priče',
          mlid: 2630,
          image: require('@/assets/img/tg_newsletter_avatars_price.jpg'),
        },
      }
      return categories[this.$route.params.category]
    },
  },
  mounted() {
    this.$store.dispatch('newsletters/checkAccess')
  },
}
</script>
