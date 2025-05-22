<template>
  <div
    id="offer-premium-ht"
    class="container cantha-small-block flex relative native-block offers-widget column-top-pad stretch mobile-side-pad"
  >
    <div class="noththree full center-text column-full-pad subsection-title">
      <div class="full center ht-line" style="position: relative">
        <img
          src="https://poslovni.ht.hr/tbusiness_logo_white.svg"
          alt="HT logo"
          class="ht-logo"
        />
        <div class="flex center desktop-only">
          VAŠA DIGITALIZACIJA JE NAŠ POSAO
        </div>
      </div>
    </div>
    <div class="full flex stretch column-bottom-pad gallery-content">
      <VueSlickCarousel
        ref="offer_carousel"
        v-bind="slider_settings"
        style="display: block; width: 100%"
      >
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a
            class="full flex article-standard article-medium article relative"
            href="https://poslovni.ht.hr/nis2-sigurnost"
            target="_blank"
            rel="sponsored"
            @click.prevent="trackClick('https://poslovni.ht.hr/nis2-sigurnost')"
          >
            <img
              src="https://www.telegram.hr/wp-content/uploads/2025/05/fotka-1.jpg"
              alt="TG promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex">
              <div class="noththree overtitle">
                Osigurajte poslovanje svoje tvrtke protiv kibernetičkih
                prijetnji uz NIS2 paket
              </div>
            </div>
            <div class="full">
              <ul class="list">
                <li>GAP analiza</li>
                <li>Sigurnosni Operativni Centar (20 licenci)</li>
                <li>Skeniranje ranjivosti</li>
                <li>Usluge phishing kampanja (PHISHINGaaS)</li>
                <li>Cloud Backup</li>
              </ul>
            </div>
            <div class="newbtn">Saznaj više</div>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a
            class="full flex article-standard article-medium article relative"
            href="https://poslovni.ht.hr/startup"
            target="_blank"
            rel="sponsored"
            @click.prevent="trackClick('https://poslovni.ht.hr/startup')"
          >
            <img
              src="https://www.telegram.hr/wp-content/uploads/2025/05/pozicija-1.png"
              alt="TG promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex">
              <div class="noththree overtitle">
                Za uspješan početak poslovanja odaberite Poslovni START za samo
                15,51 €/mj.
              </div>
            </div>
            <div class="full">
              <ul class="list">
                <li>Bez ugovorne obveze uz najpovoljnije cijene</li>
                <li>Mobilne tarife i uređaji</li>
                <li>Superbrzi internet</li>
                <li>Izrada vaše web stranice i shopa</li>
              </ul>
            </div>
            <div class="newbtn">Naruči odmah</div>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a
            class="full flex article-standard article-medium article relative"
            href="https://poslovni.ht.hr/startup"
            target="_blank"
            rel="sponsored"
            @click.prevent="trackClick('https://poslovni.ht.hr/fiskalizacija')"
          >
            <img
              src="https://www.telegram.hr/wp-content/uploads/2025/05/pozicija-2.png"
              alt="TG promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex">
              <div class="noththree overtitle">
                Premium fiskalna blagajna za tvrtke svih veličina po promotivnoj
                cijeni od samo 6,27 €/mj.
              </div>
            </div>
            <div class="full">
              <ul class="list">
                <li>Mogućnost kartičnog plaćanja</li>
                <li>20 GB Internet prometa</li>
                <li>Instalacija na vašoj lokaciji</li>
                <li>Održavanje i podrška 24/7</li>
              </ul>
            </div>
            <div class="newbtn">Zatraži ponudu</div>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a
            class="full flex article-standard article-medium article relative"
            href="https://poslovni.ht.hr/akademija-poslovni-start"
            target="_blank"
            rel="sponsored"
            @click.prevent="
              trackClick('https://poslovni.ht.hr/akademija-poslovni-start')
            "
          >
            <img
              src="https://www.telegram.hr/wp-content/uploads/2025/05/pozicija-4.png"
              alt="TG promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex">
              <div class="noththree overtitle">
                Genijalna prilika za poduzetnike: Besplatna akademija u svim
                većim gradovima Hrvatske
              </div>
            </div>
            <div class="full">
              <ul class="list">
                <li>8.5.2025., Slavonski Brod</li>
                <li>28.5.2025., Zadar</li>
                <li>11.6.2025., Pula</li>
                <li>10.9.2025., Čakovec</li>
              </ul>
            </div>
            <div class="newbtn">Prijavi se</div>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a
            class="full flex article-standard article-medium article relative"
            href="https://poslovni.ht.hr/startup"
            target="_blank"
            rel="sponsored"
            @click.prevent="
              trackClick('https://poslovni.ht.hr/magenta-1-business')
            "
          >
            <img
              src="https://www.telegram.hr/wp-content/uploads/2025/05/pozicija-3.png"
              alt="TG promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex">
              <div class="noththree overtitle">
                Spojite svoje fiksne i mobilne usluge, a Magenta 1 Business vas
                nagrađuje mobilnim uređajem
              </div>
            </div>
            <div class="full">
              <ul class="list">
                <li>Timska ušteda</li>
                <li>Premium uređaji</li>
                <li>Ekskluzivne ponude</li>
                <li>Podrška 24/7</li>
              </ul>
            </div>
            <div class="newbtn">Saznaj više</div>
          </a>
        </div>
        <div class="fourth flex-responsive column-full-pad mobile-side-pad">
          <a
            class="full flex article-standard article-medium article relative"
            href="https://poslovni.ht.hr/sigurnosni-operativni-centar"
            target="_blank"
            rel="sponsored"
            @click.prevent="
              trackClick('https://poslovni.ht.hr/sigurnosni-operativni-centar')
            "
          >
            <img
              src="https://www.telegram.hr/wp-content/uploads/2025/05/fotka-2.jpg"
              alt="TG promo"
              loading="lazy"
              width="400"
              height="400"
            />
            <div class="full flex">
              <div class="noththree overtitle">
                Sigurnosni operativni sustav i vrhunska zaštita 24/7, 365 dana u
                godini
              </div>
            </div>
            <div class="full">
              <ul class="list">
                <li>Učinkovit nadzor sigurnosnih aktivnosti</li>
                <li>Iskusni stručnjaci za cyber tehnologije</li>
                <li>Pravodobno otkrivanje cyber prijetnji</li>
                <li>NIS2 i Zakon o kibernetičkoj sigurnosti</li>
              </ul>
            </div>
            <div class="newbtn">Zatraži ponudu</div>
          </a>
        </div>
      </VueSlickCarousel>
      <div
        class="gallery-left center gallery-arrow desktop-only animate"
        @click="$refs.offer_carousel.prev()"
      >
        <font-awesome-icon
          :icon="['far', 'angle-left']"
          class="animate"
        ></font-awesome-icon>
      </div>
      <div
        class="gallery-right center gallery-arrow desktop-only animate"
        @click="$refs.offer_carousel.next()"
      >
        <font-awesome-icon
          :icon="['far', 'angle-right']"
          class="animate"
        ></font-awesome-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTPremium',
  data() {
    return {
      timestamp: Date.now(),
      slider_settings: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              centerMode: true,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'ht-premium',
      'webshop-action': 'view',
      'webshop-label': 'impression',
      'webshop-value': 1,
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'ht-premium',
        'webshop-action': 'click',
        'webshop-label': 'click',
        'webshop-value': 1,
      })
      window.open(link, '_blank')
    },
  },
}
</script>

<style>
.ht-line {
  background-color: #e20074;
  color: white;
  font-size: 16px;
  min-height: 50px;
}

#offer-premium-ht .overtitle {
  color: black;
}

#offer-premium-ht .newbtn {
  position: absolute;
  background-color: #e20074;
  bottom: 0;
}
/*
.jgl-line > div {
  background-color: #fcf1e7;
  width: 200px;
}

.contrast-mode .jgl-line > div {
  background-color: white;
}
.dark-mode .jgl-line > div {
  background-color: #212121;
}*/

.noththree.subsection-title .ht-line img {
  height: 40px;
  bottom: 0px;
}

#offer-premium-ht .slick-slide {
  border-right: 1px solid #c8c8c8;
}

#offer-premium-ht .dark-mode .slick-slide {
  border-right: 1px solid #e20074;
}

#offer-premium-ht .article-pad {
  flex-direction: column;
  min-height: 150px;
  justify-content: space-between;
}

#offer-premium-ht .article-medium {
  padding-right: 0;
}

#offer-premium-ht .article-medium img {
  width: 100%;
  height: 100%;
}

.list li {
  list-style: disc;
  font-size: 12px;
}

#offer-premium-ht img {
  max-height: 120px;
  object-position: top;
}

#offer-premium-ht .article {
  min-height: 330px;
}

@media screen and (min-width: 767px) {
  .ht-logo {
    height: 30px !important;
    position: absolute !important;
    left: 10px;
    top: 10px;
  }
}
@media screen and (max-width: 767px) {
  #offer-premium-ht .article img {
    aspect-ratio: 1/1 !important;
  }
}
</style>
