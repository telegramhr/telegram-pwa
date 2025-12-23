<template>
  <div
    id="advent-widget"
    class="container cantha-small-block flex relative native-block offers-widget stretch mobile-side-pad"
  >
    <div class="full column-full-pad">
      <div class="advent-header flex">
        <div class="flex">
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
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
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
          image: require('@/assets/img/widgets/advent/advent-zagreb.png'),
          title:
            'Nakon dvije godine Advent se vraća na Gornji grad: ovo su lokacije koje nećemo propustiti',
          description:
            'Gornjogradske lokacije ovog Adventa nude zanimljive sadržaje i bogatu gastro ponudu',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/nakon-dvije-godine-advent-se-vraca-na-gornji-grad-ovo-su-lokacije-koje-necemo-propustiti/',
        },
        {
          image: require('@/assets/img/widgets/advent/advent-more.webp'),
          title:
            'Božićna čarolija uz more: doznali smo zašto ovaj mediteranski Advent treba posjetiti čim prije',
          description:
            'Grad na moru koji godinama oduševljava svojim adventskim lokacijama',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/bozicna-carolija-uz-more-doznali-smo-zasto-ovaj-mediteranski-advent-treba-posjetiti-cim-prije/',
        },
        {
          image: require('@/assets/img/widgets/advent/advent-zrinjevac.jpg'),
          title:
            "Na kultnoj adventskoj lokaciji očekuju vas plesnjaci, sjajni koncerti i čarobne kulise. Evo što ne smijete propustiti'",
          description:
            'Advent na Zrinjevcu obilježen je još bogatijim programom i novom dozom blagdanske čarolije',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/na-kultnoj-adventskoj-lokaciji-ocekuju-vas-plesnjaci-sjajni-koncerti-i-carobne-kulise-evo-sto-ne-smijete-propustiti/',
        },
        {
          image: require('@/assets/img/widgets/advent/rovinj-adv.webp'),
          title:
            'Ovaj hrvatski grad proglašen je destinacijom s najšarmantnijim božićnim sajmom na svijetu. Imamo detalje',
          description:
            'Tijekom prosinca ovaj istarski grad postat će jedno od najživljih glazbenih središta Jadrana',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/ovaj-hrvatski-grad-proglasen-je-destinacijom-s-najsarmantnijim-bozicnim-sajmom-na-svijetu-imamo-detalje/',
        },
        {
          image: require('@/assets/img/widgets/advent/zg-adv.webp'),
          title:
            'Od umjetničkih izložbi do plesa na balu: ako tražite inspiraciju, evo ideja kako ispuniti blagdanske dane',
          description:
            'U Zagrebu vas čekaju sjajne mikro lokacije koje zaslužuju pažnju',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/od-umjetnickih-izlozbi-do-plesa-na-balu-ako-trazite-inspiraciju-evo-ideja-kako-ispuniti-blagdanske-dane/',
        },
        {
          image: require('@/assets/img/widgets/advent/st-adv.webp'),
          title:
            'Dobra glazba, fini zalogaji i dnevni doček Nove godine: Što sve vas čeka na finalu Adventa u Splitu?',
          description: 'Donosimo veliki vodič sa svime što trebate znati',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/super1/life/finale-adventa-u-splitu/',
        },
      ],
    }
  },
  mounted() {
    this.items = this.shuffleArray(this.items)
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
.advent-header {
  position: relative;
  gap: 24px;
  background: linear-gradient(90deg, #aa0404 0%, #520000 100%);
  padding: 20px 38px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.advent-header-logo {
  display: none;
}
.telegram-logo {
  width: 100%;
  max-width: 160px;
}
.telegram-heading {
  width: 100%;
  max-width: 346px;
}
.column-full-pad {
  padding-bottom: 24px;
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
  background-image: url('@/assets/img/widgets/advent/advent-hero.png');
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
  overflow: hidden;
  margin-bottom: 24px;
  max-height: 300px;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
html.small-fontsize .quiz-container a {
  font-size: 14px;
}
html.large-fontsize .quiz-container a {
  font-size: 18px;
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
html.small-fontsize .title {
  font-size: 16px;
  line-height: 22px;
}
html.large-fontsize .title {
  font-size: 20px;
  line-height: 28px;
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
html.small-fontsize .description {
  font-size: 12px;
  line-height: 18px;
}
html.large-fontsize .description {
  font-size: 16px;
  line-height: 22px;
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
html.small-fontsize .cta-button {
  font-size: 12px;
}
html.large-fontsize .cta-button {
  font-size: 16px;
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

@media screen and (min-width: 768px) {
  .content-container {
    flex-direction: row;
  }
  .telegram-heading {
    width: 100%;
    max-width: 346px;
  }
  .advent-header {
    margin-bottom: 28px;
  }
  .advent-header-logo {
    display: inline;
  }
  .image-wrapper {
    height: 200px;
  }
  .image-wrapper img {
    aspect-ratio: 1.37;
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
@media screen and (min-width: 1024px) {
  .quiz-container {
    width: 25%;
    flex-shrink: 0;
  }

  :deep(.slick-slider) {
    width: 75%;
  }
}
</style>
