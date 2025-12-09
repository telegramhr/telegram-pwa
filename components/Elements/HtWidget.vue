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

        <VueSlickCarousel v-bind="slickOptions">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="slide-item slide-item-a1"
          >
            <div class="card">
              <div class="image-wrapper">
                <img :src="item.image" :alt="item.title" />
              </div>
              <div class="content">
                <h3 class="title">{{ item.title }}</h3>
                <p class="description">{{ item.description }}</p>
              </div>
              <a
                :href="item.link"
                target="_blank"
                @click="trackClick(item.link)"
              >
                <button class="cta-button">{{ item.buttonText }}</button>
              </a>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'HTWidget',
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      items: [
        {
          image: require('@/assets/img/widgets/ht/ht-image2.jpg'),
          title:
            'Hoćemo li biti nepismeni ako ne naučimo koristiti AI? Pronašli smo besplatne edukacije koje mogu pomoći',
          description:
            'Umjetna inteligencija najbrže je rastuća tehnologija u ljudskoj povijesti. U manje od tri godine,',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/hocemo-li-biti-nepismeni-ako-ne-naucimo-koristiti-ai-pronasli-smo-besplatne-edukacije-koje-mogu-pomoci-svima/',
        },
        {
          image: require('@/assets/img/widgets/ht/ht-image.png'),
          title:
            'Isprobali smo genijalan kviz o umjetnoj inteligenciji i otkrili besplatne edukacije. Donosimo sve detalje',
          description:
            'Kampanjom "AI ti to možeš" Hrvatski Telekom omogućuje jednostavan i zabavan ulazak u svijet AI-ja',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/isprobali-smo-genijalan-kviz-o-umjetnoj-inteligenciji-i-otkrili-besplatne-edukacije-donosimo-sve-detalje/',
        },
        {
          image: require('@/assets/img/widgets/ht/ai-strucnjaci.jpg'),
          title:
            'Hoće li AI zaista preuzeti naš posao? Troje vrhunskih stručnjaka iz različitih inudstrija donose konkretne odgovore',
          description: 'Znamo i za besplatne edukacije koje mogu pomoći',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/hoce-li-ai-zaista-preuzeti-nas-posao-troje-vrhunskih-strucnjaka-iz-razlicitih-inudstrija-donose-konkretne-odgovore/',
        },
        {
          image: require('@/assets/img/widgets/ht/djevojka-laptop.jpg'),
          title:
            'Hoćemo li biti nepismeni ako ne naučimo koristiti AI? Pronašli smo besplatne edukacije koje mogu pomoći svima',
          description:
            'Ova kompetencija danas je ključna: jača konkurentnost i osigurava kvalitetniji napredak',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/hocemo-li-biti-nepismeni-ako-ne-naucimo-koristiti-ai-pronasli-smo-besplatne-edukacije-koje-mogu-pomoci-svima/',
        },
      ],
    }
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
    shuffleArray(array) {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
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
}
.quiz-container {
  width: 100%;
  background: linear-gradient(180deg, #15a5c0 0%, #0a4271 100%);
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  padding: 40px 20px;
  margin-bottom: 24px;
}
.slide-item {
  padding: 0 10px;
  height: 100%;
}
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
}
.image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 24px;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1.37;
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
  flex: 1;
  min-height: 0;
}

.title {
  font-family: 'Barlow';
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #2d2d2d;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  margin-bottom: 18px;
}

.description {
  font-family: 'Barlow';
  font-size: 14px;
  line-height: 20px;
  color: #666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
  margin-bottom: 24px;
  flex: 1;
}

.cta-button {
  font-family: 'Barlow';
  font-weight: 600;
  font-size: 14px;
  padding: 12px 24px;
  background-color: #000;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 100%;
}

.cta-button:hover {
  background-color: #333;
}
:deep(.slick-track) {
  display: flex !important;
}

:deep(.slick-slide) {
  height: inherit !important;
}

:deep(.slick-slide > div) {
  height: 100%;
}
/* Customize slick arrows */
:deep(.slick-prev),
:deep(.slick-next) {
  width: 40px;
  height: 40px;
  z-index: 1;
  top: 48%;
}

:deep(.slick-prev) {
  left: -20px;
}

:deep(.slick-next) {
  right: -20px;
}

:deep(.slick-prev:before),
:deep(.slick-next:before) {
  font-size: 40px;
  color: #333;
}
.dark-mode :deep(.slick-prev:before),
.dark-mode :deep(.slick-next:before) {
  color: white;
}

@media screen and (min-width: 768px) {
  .content-container {
    flex-direction: row;
  }

  .quiz-container {
    margin-bottom: 0;
    margin-right: 9px;
    width: 50%;
    flex-shrink: 0;
  }

  :deep(.slick-slider) {
    width: 50%;
    flex-shrink: 0;
  }

  :deep(.slick-prev) {
    left: 10px;
  }

  :deep(.slick-next) {
    right: 10px;
  }
}
</style>
