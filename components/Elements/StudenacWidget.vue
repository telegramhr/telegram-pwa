<template>
  <div
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-full-pad">
      <div class="studenac-header">
        <p class="left-heading">
          Donose <span>Studenac i Narančasta ribica</span>
        </p>
        <p class="parent">Jedan roditelj, stotinu uloga</p>
      </div>
      <div class="content-container">
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
  name: 'StudenacWidget',
  data() {
    return {
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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
          image: require('@/assets/img/widgets/studenac/studenac1.jpg'),
          title:
            'Prošla je 34 operacije, a na faksu su joj amputirali nogu. Anja danas pomaže drugima i može sve',
          description: 'Razgovarali smo s Anjom koja je rođena bez lisne kosti',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/prosla-je-34-operacije-a-na-faksu-su-joj-amputirali-nogu-anja-danas-pomaze-drugima-i-moze-sve/',
        },
        {
          image: require('@/assets/img/widgets/studenac/studenac2.jpg'),
          title:
            "Velika ispovijest sudskog vještaka: 'Djeca nastanu iz ljubavi, a utope se u mržnji roditelja koji se razvode'",
          description: 'Razgovarali smo s Tomislavom Ramljakom',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/velika-ispovijest-sudskog-vjestaka-djeca-nastanu-iz-ljubavi-a-utope-se-u-mrznji-roditelja-koji-se-razvode/',
        },
        {
          image: require('@/assets/img/widgets/studenac/studenac3.jpg'),
          title:
            "Velika ispovijest ugledne profesorice: 'Dijete se u školi onesvijestilo od gladi. Sustav kolabira, a svi upiru prstom u nas'",
          description:
            'Prof. dr. sc. Olja Družić Ljubotina o sustavu socijalne skrbi, rizicima i posljedicama jednoroditeljstva',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/velika-ispovijest-ugledne-profesorice-dijete-se-u-skoli-onesvijestilo-od-gladi-sustav-kolabira-a-svi-upiru-prstom-u-nas/',
        },
        {
          image: require('@/assets/img/widgets/studenac/studenac4.jpg'),
          title:
            'Sa 17 sam dobila epilepsiju i shvatila što znači imati potporu cijele obitelji. Sada to pružam djeci i samohranim roditeljima',
          description:
            'S Klarom Zečević-Božić pričali smo o roditeljskoj snazi i odgoju djece koja znaju da vrijede',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/sa-17-sam-dobila-epilepsiju-i-shvatila-sto-znaci-imati-potporu-cijele-obitelji-sada-to-pruzam-djeci-i-samohranim-roditeljima/',
        },
        {
          image: require('@/assets/img/widgets/studenac/studenac5.jpg'),
          title:
            'Odrasla sam bez oca, ovo je zadnja fotografija koju imam s njim. Danas pomažem samohranim roditeljima',
          description:
            'S Majom Vujčić Vračević o odgoju djece u jednoroditeljskim obiteljima',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/partneri/odrasla-sam-bez-oca-ovo-je-zadnja-fotografiju-koju-imam-s-njim-danas-pomazem-samohranim-roditeljima/',
        },
      ],
    }
  },
  mounted() {
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'studenac-widget',
      'webshop-action': 'view',
      'webshop-label': 'impression',
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'studenac-widget',
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
.studenac-header {
  position: relative;
  justify-content: space-between;
  margin-bottom: 28px;
  background: linear-gradient(90deg, #8d0505 0%, #ae3737 63.46%);
  padding: 32px 36px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.studenac-header .left-heading {
  font-family: 'Barlow';
  font-weight: 300;
  font-size: 14px;
  color: white;
  margin: 0px;
}
.studenac-header .parent {
  font-family: 'Lora', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0%;
  color: white;
  margin: 0px;
}
.left-heading span {
  font-weight: 500;
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
  width: 100%;
  max-width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  border-radius: 4px;
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
  -webkit-line-clamp: 4;
  line-clamp: 4;
  overflow: hidden;
  margin-bottom: 18px;
}

.description {
  font-family: 'Barlow';
  font-size: 16px;
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
  font-size: 16px;
  padding: 12px 24px;
  background-color: #ae3737;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  width: 100%;
}

.cta-button:hover {
  background-color: #8c2b2b;
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
  .studenac-header {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 38px;
  }
  .studenac-header .left-heading {
    font-size: 18px;
  }
  .studenac-header .parent {
    font-size: 24px;
  }
  .content-container {
    flex-direction: row;
  }

  :deep(.slick-slider) {
    width: 100%;
    min-width: 0;
  }

  :deep(.slick-prev) {
    left: 10px;
  }

  :deep(.slick-next) {
    right: 10px;
  }
}
</style>
