<template>
  <div
    id="a1-widget"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-full-pad">
      <div class="a1-header flex">
        <div class="flex a1-header-logo">
          <img
            src="@/assets/img/widgets/ht/ht-logo.png"
            height="44"
            alt="HT logo"
            class="a1-logo"
          />
        </div>

        <div class="flex a1-header-logo">
          <img
            src="@/assets/img/widgets/ht/ht-text.png"
            height="44"
            alt="AI ti to možeš"
            class="a1-logo"
          />
        </div>
      </div>
      <div class="content-container">
        <div class="quiz-container">
          <img src="@/assets/img/widgets/ht/ht-logo2.png" alt="HT logo" />
          <a
            href="https://www.hrvatskitelekom.hr/ai-ti-to-mozes"
            target="_blank"
          >
            Testiraj svoje znanje o AI i otkrij besplatne edukacije koje te
            čekaju!
          </a>
        </div>

        <div class="card">
          <img
            src="@/assets/img/widgets/ht/ht-image.png"
            alt="Djevojka s laptopom na kaucu"
          />
          <div class="content">
            <div class="title">
              Isprobali smo genijalan kviz o umjetnoj inteligenciji i otkrili
              besplatne edukacije. Donosimo sve detalje
            </div>
            <div class="description">
              Kampanjom “AI ti to možeš” Hrvatski Telekom omogućuje jednostavan
              i zabavan ulazak u svijet AI-ja
            </div>
            <button
              class="cta-button"
              @click="
                trackClick(
                  'https://www.telegram.hr/partneri/isprobali-smo-genijalan-kviz-o-umjetnoj-inteligenciji-i-otkrili-besplatne-edukacije-donosimo-sve-detalje/'
                )
              "
            >
              Pročitaj više
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'HTWidget',
  data() {
    return {}
  },
  mounted() {
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'ht-widget',
      'webshop-action': 'view',
      'webshop-label': 'impression',
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'ht-widget',
        'webshop-action': 'click',
        'webshop-label': 'click',
        'webshop-value': link,
      })
      window.open(link, '_blank')
    },
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'A1';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('~assets/fonts/A1Serif-Bold.woff2') format('woff2'),
    url('~assets/fonts/A1Serif-Bold.ttf') format('truetype');
}
#a1-widget {
  margin-top: 40px;
}
.a1-header {
  position: relative;
  gap: 24px;
  margin-bottom: 28px;
  background: linear-gradient(90deg, #d70062 0%, #181818 100%);
  padding: 22px 36px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-family: 'A1', sans-serif;
  font-weight: 700;
}
.a1-header-logo {
  align-items: center;
  gap: 24px;
}
.a1-header img {
  height: 44px;
  width: auto;
}
.a1-header span {
  color: #eb140a;
}
.a1-header p {
  color: white;
}
.dark-mode .slide-item-a1 * {
  color: white !important;
}
.dark-mode #a1-widget {
  color: white !important;
}
.dark-mode .title {
  color: white !important;
}
.dark-mode .description {
  color: #efefef !important;
}
.content-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: 'Barlow';
  width: 100%;
  height: 100%;
  gap: 24px;
}
.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.quiz-container {
  background: linear-gradient(180deg, #15a5c0 0%, #0a4271 100%);
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  padding: 40px 20px;
}
.quiz-container a {
  font-family: 'Barlow';
  font-weight: 600;
  font-size: 16px;
  line-height: 13px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  background-color: #e20074;
  padding: 13px 24px;
  max-width: 600px;
  align-self: center;
  color: white;
}
.quiz-container a:hover {
  background-color: #6f043b;
}
.quiz-container img {
  max-width: 270px;
  align-self: center;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1;
}

.title {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #2d2d2d;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}

.description {
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: #6d6762;
  flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}

.cta-button {
  width: 100%;
  padding: 16px 0px;
  background-color: #171717;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: none;
  margin-top: auto;
}

.cta-button:hover {
  background-color: #6f043b;
}
@media screen and (min-width: 768px) {
  .content-container {
    display: grid;
    grid-template-columns: 3fr 1fr; /* First column: 3/4, second: 1/4 */
    gap: 1rem; /* optional */
  }
  .quiz-container {
    gap: 60px;
  }
  .card img {
    height: 200px;
  }
}
</style>
