<template>
  <div
    id="a1-widget"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-full-pad">
      <div class="a1-header flex">
        <div class="flex a1-header-logo">
          <img
            src="@/assets/img/widgets/a1/a1-logo.png"
            height="44"
            alt="A1 logo"
            class="a1-logo"
          />
          <span>#BoljiOnline</span>
        </div>
        <p>Ovo nisu samo dječja posla.</p>
      </div>
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="(item, index) in items" :key="index" class="slide-item">
          <div class="card">
            <div class="image-wrapper">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="content">
              <h3 class="title">{{ item.title }}</h3>
              <p class="description">{{ item.description }}</p>
              <a
                :href="item.link"
                target="_blank"
                @click="trackClick(item.link)"
              >
                <button class="cta-button">{{ item.buttonText }}</button>
              </a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'A1Widget',
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
            breakpoint: 920,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      items: [
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/07/g12a8603-02.jpg',
          title:
            "Nataša Janjić Medančić prvi put progovara o bullyingu: 'Kad sam bila mala, djeca u školi maltretirala su me zbog izgleda'",
          description:
            'Ne sjećam se kad se dogodilo po prvi put, ali bilo je već u nižim razredima',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/natasa-janjic-medancic-prvi-put-progovara-o-bullyingu-kad-sam-bila-mala-djeca-u-skoli-maltretirala-su-me-zbog-izgleda/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/08/dizajn-bez-naslova-85.png',
          title:
            "Ugledni psiholog: 'Samica je oduvijek bila okrutna kazna, a njenoj modernoj verziji klinci su danas sve izloženiji'",
          description: 'Igor Mikloušić o sveopćem trendu nasilja na internetu',
          buttonText: 'Pročitaj više',
          link: 'https://www.telegram.hr/zivot/ugledni-psiholog-samica-je-oduvijek-bila-okrutna-kazna-a-njenoj-modernoj-verziji-klinci-su-danas-sve-izlozeniji/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/09/g12a0028-3.jpg',
          title:
            "Poznati kuhar iz Masterchefa prvi put otkriva: 'U školi su me progonili zbog debljine, frendovi su pitali hoću li i njih pojesti'",
          description:
            'S omiljenim chefom o vršnjačkom nasilju, odrastanju, sportu i strasti prema kuhinji',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/melkior-basic-prvi-put-progovara-o-bullyingu-bio-sam-debeli-klinac-s-razbijenim-nosom-kuhinja-me-spasila/',
        },
        {
          image: require('@/assets/img/widgets/a1/a1_kartice.png'),
          title:
            'Ovo je razgovor koji trebaš započeti sa svojom djecom i bližnjima. Osvoji kartice s pitanjima koja će ti olakšati prve korake',
          description: 'Pripremili su ih stručnjaci i sasvim su besplatne',
          buttonText: 'Zatraži besplatne kartice',
          link: 'https://www.a1.hr/boljionline/djecja-posla',
        },
        {
          image:
            'https://images.telegram.hr/UwTDPg0I0zi1-C9o6bfo897TWe3aXDlcBuckNzmM_Pc/preset:single1/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjUvMDkvbmFzbG92bmEtMi53ZWJw.webp',
          title:
            'Snimili smo nevjerojatna svjedočanstva nasilja među djecom, ali i reakcije roditelja. Morate ih pogledati',
          description:
            'Radionica je završetak najveće kampanje za zaštitu djece na internetu',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/snimili-smo-nevjerojatna-svjedocanstva-nasilja-medu-djecom-ali-i-reakcije-roditelja-morate-ih-pogledati/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/09/g12a8679-3.jpg',
          title:
            "Lana Gojak Bajt prvi put o najvećoj traumi iz djetinjstva: 'Nazvala sam mamu i rekla joj da sam istukla Vanju'",
          description:
            'Poznata kazališna i televizijska glumica potpuno iskreno za Telegram',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/lana-gojak-bajt-prvi-put-o-najvecoj-traumi-iz-djetinjstva-nazvala-sam-mamu-i-rekla-joj-da-sam-istukla-vanju/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/09/vori01-120925.jpg',
          title:
            "Igor Vori sasvim osobno: 'Bojim se za svoju djecu. Online nasilje teže je od fizičkih udaraca'",
          description:
            'Legenda hrvatskog rukometa po prvi put o izazovima u odgoju',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/igor-vori-sasvim-osobno-bojim-se-za-svoju-djecu-online-nasilje-teze-je-od-fizickih-udaraca/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/08/iva-jovovic04-270825.jpg',
          title:
            'Vršnjačko nasilje veća je epidemija od korone, a umjesto počinitelja, kažnjava se žrtve premještajem u drugu školu',
          description:
            'Donosimo priču Ive Jovović, osnivačice Udruge Let koja se već godinama bavi ovim izazovom',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/vrsnjacko-nasilje-veca-je-epidemija-od-korone-a-umjesto-pocinitelja-kaznjava-se-zrtve-premjestajem-u-drugu-skolu/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/07/shutterstock-2278172011.jpg',
          title:
            'Fotomontaža učenice na porno sadržaj šokirala razred. Djeca više ne znaju gdje prestaje šala, a počinje nasilje',
          description:
            'Evo kako to izgleda na terenu i zašto škole same ne mogu protiv online nasilja',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/fotomontaza-ucenice-na-porno-sadrzaj-sokirala-razred-djeca-vise-ne-znaju-gdje-prestaje-sala-a-pocinje-nasilje/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/08/g12a8833-full-crop.jpg',
          title:
            "Remi iz Elementala o brutalnom zlostavljanju u školi: 'Rugala sam se izbjeglici iz Sarajeva da ne bih i ja bila meta'",
          description: 'Mirela Priselac i danas traga za Jasminom',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/remi-iz-elementala-o-brutalnom-zlostavljanju-u-skoli-rugala-sam-se-izbjeglici-iz-sarajeva-da-ne-bih-i-ja-bila-meta/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/08/a119-070724.jpg',
          title:
            "Tomislav već 20 godina spašava djecu od nasilja vršnjaka: 'Zbog užasa koji je prošla jedna curica imao sam noćne more'",
          description:
            'Donosimo priču Tomislava Ramljaka, voditelja i jednog od osnivača Centra za nestalu i zlostavljanu djecu',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/tomislav-vec-20-godina-spasava-djecu-od-nasilja-vrsnjaka-zbog-uzasa-koji-je-prosla-jedna-curica-imao-sam-nocne-more/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/08/g12a8780-2.jpg',
          title:
            "Morana iz Potjere ekskluzivno o bullyingu u školi: 'Uvijek je jedan predvodio, nisam im izgledala dovoljno žensko'",
          description:
            'Najpoznatija Lovkinja po prvi put progovara o vršnjačkom nasilju',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/morana-iz-potjere-ekskluzivno-o-bullyingu-u-skoli-uvijek-je-jedan-predvodio-nisam-im-izgledala-dovoljno-zensko/',
        },
        {
          image:
            'https://www.telegram.hr/wp-content/uploads/2025/07/irena-rojnic-palavra-4.jpg',
          title:
            "Potresna ispovijest psihijatrice o online nasilju: 'I ja se nekad osjećam bespomoćno, ali ovo više ne možemo ignorirati'",
          description:
            'Upozorava kako mlade gubimo u svijetu koji ni sami dovoljno ne poznajemo',
          buttonText: 'Pogledaj video',
          link: 'https://www.telegram.hr/zivot/potresna-ispovijest-psihijatrice-o-online-nasilju-i-ja-se-nekad-osjecam-bespomocno-ali-ovo-vise-ne-mozemo-ignorirati/',
        },
      ],
    }
  },
  mounted() {
    this.items = this.shuffleArray(this.items)
    // Find the kartice card (index 3 in original array)
    const karticeIndex = this.items.findIndex(
      (item) => item.link === 'https://www.a1.hr/boljionline/djecja-posla'
    )

    // Duplicate and insert 4 spaces after
    if (karticeIndex !== -1) {
      const itemToDuplicate = { ...this.items[karticeIndex] }
      let insertPosition = karticeIndex + 4

      // If there aren't 4 spots after, place it 4 spots before instead
      if (insertPosition >= this.items.length) {
        insertPosition = Math.max(0, karticeIndex - 4)
      }

      this.items.splice(insertPosition, 0, itemToDuplicate)
    }

    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'a1-widget',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    shuffleArray(array) {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    },
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'a1-widget',
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
.a1-header {
  position: relative;
  gap: 24px;
  margin-bottom: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.89) 0%,
    rgba(235, 20, 10, 0.89) 100%
  );
  padding: 22px 36px;
  border: 2px solid #ffcac8;
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

.carousel-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;
}

/* Equal height carousel slides */
:deep(.slick-track) {
  display: flex !important;
}

:deep(.slick-slide) {
  height: inherit !important;
}

:deep(.slick-slide > div) {
  height: 100%;
}

.slide-item {
  padding: 0 12px;
  height: 100%;
  display: flex;
}

.card {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: 'Barlow';
  width: 100%;
  height: 100%;
}

.image-wrapper {
  margin-bottom: 24px;
}

.image-wrapper img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 3px;
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
  background-color: #eb140a;
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
  background-color: #c10511;
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

@media screen and (min-width: 693px) {
  .a1-header {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.89) 0%,
      rgba(235, 20, 10, 0.89) 100%
    );
  }
}
@media screen and (min-width: 768px) {
  .image-wrapper img {
    height: 200px;
  }
}
</style>
