<template>
  <div class="container flex relative mobile-side-pad column-top-pad">
    <div
      class="full flex relative post-article-newsletters stretch column-top-pad column-top-border"
    >
      <h2 class="full center-text">
        Za još članaka poput ovog, prijavite se na Telegramove newslettere
      </h2>
      <div class="third flex-responsive column-full-pad flex stretch">
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
      <div
        v-if="author.newsletter_list"
        class="third flex-responsive column-full-pad flex stretch newsletter-komentari"
      >
        <div class="full newsletter-listing flex relative stretch">
          <div class="full flex newsletter-header">
            <div class="newsletter-avatar">
              <img :src="author.image" loading="lazy" />
            </div>
            <div class="full relative">
              <h3 class="full overtitle">Redovito</h3>
              <h2 class="full newsletter-title">{{ author.name }}</h2>
              <h3 class="full subtitle">Puni članci autora</h3>
            </div>
          </div>
          <div class="full flex newsletter-box">
            <p class="full newsletter-intro">
              {{ author.newsletter_description }}
            </p>
            <subscribe-button
              :mlid="author.newsletter_list"
              :free="false"
            ></subscribe-button>
          </div>
        </div>
      </div>
      <div v-else class="third flex-responsive column-full-pad flex stretch">
        <div
          v-if="category"
          class="full newsletter-listing flex relative stretch"
        >
          <div class="full flex newsletter-header">
            <div class="newsletter-avatar">
              <img
                src="@/assets/img/tg_newsletter_avatars_pk.jpg"
                loading="lazy"
              />
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
              {{ category.title }}.
            </p>
            <subscribe-button
              :mlid="category.mlid"
              :free="true"
            ></subscribe-button>
          </div>
        </div>
      </div>
      <div class="third flex-responsive column-full-pad flex stretch">
        <div class="full newsletter-listing flex relative stretch">
          <div class="full flex newsletter-header">
            <div class="newsletter-avatar newsletter-tag">
              <img
                src="@/assets/img/tg_newsletter_avatars_vikend.jpg"
                loading="lazy"
              />
            </div>
            <div class="full relative">
              <h3 class="full overtitle">Petkom</h3>
              <h2 class="full newsletter-title">Vikend na Telegramu</h2>
              <h3 class="full subtitle">Najbolje za vikend čitanje</h3>
            </div>
          </div>
          <div class="full flex newsletter-box">
            <p class="full newsletter-intro">
              Odabir naših najboljih tekstova za koje možda niste imali dovoljno
              vremena preko tjedna, ali bi vam mogli biti izvrsno štivo tijekom
              vikenda.
            </p>
            <subscribe-button :mlid="2555" :free="true"></subscribe-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleNewsletters',
  props: {
    author: {
      type: Object,
      required: false,
      default() {
        return {
          url: '',
          name: '',
          image: '',
          newsletter_list: 0,
          newsletter_description: '',
        }
      },
    },
  },
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
        ? categories[this.$route.params.category]
        : null
    },
  },
  mounted() {
    this.$store.dispatch('newsletters/checkAccess')
  },
  methods: {},
}
</script>
