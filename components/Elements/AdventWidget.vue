<template>
  <div
    id="advent-widget"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-full-pad">
      <div class="advent-header flex">
        <div class="flex advent-header-logo">
          <img
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram logo"
            class="telegram-logo"
          />
        </div>

        <div class="flex advent-header-logo">
          <img
            src="@/assets/img/advent-express.png"
            alt="Telegram logo"
            class="telegram-heading"
          />
        </div>
      </div>
      <div class="content-container">
        <div class="quiz-container">
          <div class="overlay"></div>
          <img
            src="@/assets/img/advent-quiz-text.png"
            alt="Advent section text"
          />
          <a href="https://www.telegram.hr/native/advent-2025/" target="_blank">
            Ovdje doznajte sve detalje
          </a>
        </div>

        <VueSlickCarousel v-bind="slickOptions">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="slide-item slide-item-advent"
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
  name: 'AdventWidget',
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
          image: require('@/assets/img/widgets/advent/advent-01.webp'),
          title:
            'Nakon dvije godine Advent se vraća na Gornji grad: ovo su lokacije koje nećemo propustiti',
          description:
            'Gornjogradske lokacije ovog Adventa nude zanimljive sadržaje i bogatu gastro ponudu',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/nakon-dvije-godine-advent-se-vraca-na-gornji-grad-ovo-su-lokacije-koje-necemo-propustiti/',
        },
        {
          image: require('@/assets/img/widgets/advent/advent-02.webp'),
          title:
            'Božićna čarolija uz more: doznali smo zašto ovaj mediteranski Advent treba posjetiti čim prije',
          description:
            'Grad na moru koji godinama oduševljava svojim adventskim lokacijama',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/bozicna-carolija-uz-more-doznali-smo-zasto-ovaj-mediteranski-advent-treba-posjetiti-cim-prije/',
        },
        {
          image: require('@/assets/img/widgets/advent/advent-03.jpg'),
          title:
            "Posjetili smo Advent i pronašli svoje favorite, donosimo veliki vodič za Fuliranje i Fooling Around'",
          description:
            'Od viralne torte Matilda i Pastrami sendviča do pržene punjene paprike i Noelovih arancina',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/super1/life/advent-fuliranje-fooling-around-sto-smo-isprobali/ad',
        },
      ],
    }
  },
  mounted() {
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'advent-widget',
      'webshop-action': 'view',
      'webshop-label': 'impression',
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'advent-widget',
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
#advent-widget {
  margin-top: 40px;
}
.advent-header {
  position: relative;
  gap: 24px;
  margin-bottom: 28px;
  background: linear-gradient(90deg, #aa0404 0%, #520000 100%);
  padding: 20px 38px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.telegram-logo {
  width: 100%;
  max-width: 160px;
}
.telegram-heading {
  width: 100%;
  max-width: 346px;
}

.dark-mode .slide-item-advent * {
  color: white !important;
}
.dark-mode #advent-widget {
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
  padding: 40px 0px;
  width: 100%;
  position: relative;
  background-image: url('@/assets/img/advent-widget-hero.webp');
  background-size: cover;
  background-position: 40%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  margin-bottom: 24px;
}
.quiz-container .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(26, 33, 138, 0.34),
      rgba(26, 33, 138, 0.34)
    ),
    radial-gradient(
      54.66% 51.51% at 44.44% 50%,
      #1d346e 0%,
      rgba(0, 0, 0, 0) 100%
    );
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
  background-color: #aa0404;
  padding: 13px 24px;
  max-width: 600px;
  align-self: center;
  color: white;
  position: relative;
  cursor: pointer;
}
.quiz-container a:hover {
  background-color: #8b0303;
}
.quiz-container img {
  max-width: 270px;
  align-self: center;
  position: relative;
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
  color: #6d6762;
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
  background-color: #395a3a;
  color: white;
  border: none;
  cursor: pointer !important;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 100%;
}

.cta-button:hover {
  background-color: #2e4a30;
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

@media screen and (min-width: 1024px) {
  .content-container {
    flex-direction: row;
  }
  .telegram-heading {
    width: 100%;
    max-width: 346px;
  }

  .quiz-container {
    margin-bottom: 0;
    margin-right: 9px;
    width: 25%;
    flex-shrink: 0;
  }

  :deep(.slick-slider) {
    width: 75%;
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
