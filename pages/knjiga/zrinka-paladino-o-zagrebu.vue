<template>
  <div
    class="main-container flex red-header-page single-article knjiga-page reset-flex-order"
  >
    <div class="full flex tg-red">
      <theader></theader>
    </div>
    <div class="full flex relative reset-flex-order">
      <div
        class="full flex relative center knjiga-header article-head mobile-side-pad column-full-pad"
      >
        <div class="container relative flex">
          <div class="noththree full center-text overtitle">
            Ekskluzivna ponuda
          </div>
          <h1 class="full center-text">Nova knjiga Zrinke Paladino</h1>
          <p class="full center-text">
            Čuvena arhitektica, konzervatorica i kolumnistica donosi veliku
            kroniku Zagreba, njegove arhitekture, devastacije, i društva. Sve
            kolumne prvi put na jednom mjestu, obogaćene novim zapisima,
            ilustracijama i fotografijama.
          </p>
        </div>
      </div>
      <div class="full flex relative single-article-body">
        <div class="container flex relative mobile-side-pad">
          <div
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full center knjiga-cover knjiga-cover-2d relative">
              <div class="flex relative">
                <div class="klub-sticker center">
                  <div class="full center-text klub-sticker-amount">44%</div>
                  <div class="full center-text klub-sticker-text">popusta</div>
                </div>
                <img
                  src="@/assets/img/paladino_cover.jpg"
                  alt="Naslovnica nove knjige Zrinke Paladino 'O Zagrebu i... Telegramovih 48 (+2)'"
                />
              </div>
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                <span class="faded strikethrough">23,76€</span> 13,14€
              </div>
              <div class="full relative center-text big-book-price">
                posebna cijena za sve pretplatnike Telegrama
              </div>
              <div class="nothfour full relative center-text">
                Naručite 'O Zagrebu i... Telegramovih 48' danas, s besplatnom
                dostavom na kućnu adresu unutar Hrvatske.
              </div>
              <div class="full knjiga-keypoints">
                <p class="full center-text">Broj stranica: 378</p>
                <p class="full center-text">Godina izdavanja: 2021.</p>
                <p class="full center-text">Izdavač: Telegram Media Grupa</p>
              </div>
              <app-link
                v-show="!$store.state.user.uid"
                to="https://pretplata.telegram.hr/sales-funnel/sales-funnel-frontend/show?funnel=main"
                class="special-sub-cta full relative center-text"
              >
                Za pristup sniženoj cijeni, <br />
                <u>prijavite se ili pretplatite</u>
              </app-link>
              <div class="full center btn-parent">
                <div
                  v-if="$store.state.user.email"
                  class="btn animate"
                  @click="buy"
                >
                  {{ price ? 'Kupite' : 'Naručite' }}
                </div>
                <div v-else class="btn animate" @click="login">Kupite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative book-quote">
        <div class="container relative mobile-side-pad column-full-pad">
          <div class="full center-text">
            <p>
              „Povjesničarka arhitekture Zrinka Paladino nesvakidašnja je pojava
              na hrvatskoj arhitektonskoj sceni“
            </p>
            <div class="quote-author full center-text">
              - dr.sc. Ana Šverko, Institut za povijest umjetnosti
            </div>
          </div>
        </div>
        <img src="@/assets/img/zagreb_skyline.jpg" alt="Ilustracija Zagreba" />
      </div>
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <h2 class="full relative">Iz knjige</h2>
        <div class="full flex gallery-content relative">
          <VueSlickCarousel
            ref="carousel"
            :arrows="false"
            style="display: block; width: 100%"
          >
            <figure class="full relative">
              <img src="@/assets/img/paladino1.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino2.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino3.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino4.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino5.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino6.jpg" aria-hidden="true" />
            </figure>
          </VueSlickCarousel>

          <div
            class="gallery-left center gallery-arrow desktop-only animate"
            @click="$refs.carousel.prev()"
          >
            <font-awesome-icon
              :icon="['far', 'angle-left']"
              class="animate"
            ></font-awesome-icon>
          </div>
          <div
            class="gallery-right center gallery-arrow desktop-only animate"
            @click="$refs.carousel.next()"
          >
            <font-awesome-icon
              :icon="['far', 'angle-right']"
              class="animate"
            ></font-awesome-icon>
          </div>
        </div>
        <h2 class="full relative">O autorici</h2>
        <p>
          Zrinka Paladino (48) rođena je u Splitu. Od četvrte godine živi u
          Zagrebu, gdje je 1997. diplomirala na Arhitektonskom fakultetu te
          2011. godine doktorirala na Filozofskom fakultetu Sveučilišta u
          Zagrebu.
        </p>
        <p>
          U znanstveno zvanje višeg znanstvenog suradnika u području tehničkih
          znanosti – polje arhitektura i urbanizam izabrana je 2013. godine. U
          znanstveno-nastavno zvanje docenta na Građevinskom fakultetu
          Sveučilišta u Mostaru, na kojem predaje kolegije ”Povijest umjetnosti
          III” i ”Suvremena umjetnost”, izabrana je 2018. godine.
        </p>
        <p>
          Na mjestu stručne suradnice za konzervatorski nadzor zagrebačkog
          Gradskog zavoda za zaštitu spomenika kulture i prirode radila je od
          2001. do 2007. godine godine, nakon čega je od 2010. do 2017. godine
          radila i na mjestu zamjenice pročelnika Zavoda.
        </p>
        <p>
          Od rujna 2017. godine kolumnistica je Telegrama, za koji piše članke o
          hrvatskoj baštinjenoj i suvremenoj arhitekturi te umjetnosti uopće.
          Autorica je većeg broja znanstvenih i stručnih radova te je aktivna
          sudionica različitih znanstvenih i stručnih skupova s područja
          povijesti hrvatske arhitekture, a posebno zaštite hrvatske
          graditeljske baštine. Izdržljiva je majka trojice sinova.
        </p>
        <div class="noththree full center-text overtitle exclusive-msg">
          <span>Knjiga dostupna samo na Telegramu</span>
        </div>
      </div>
    </div>

    <braintree v-if="showModal" :price="price" @close="close"></braintree>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Paladino',
  data() {
    return {
      access: {},
      showModal: false,
      price: 179,
    }
  },
  mounted() {
    this.getPrice()
  },
  methods: {
    getPrice() {
      this.$axios
        .get('/pretplate/get_price/', {
          withCredentials: true,
        })
        .then((res) => {
          this.price = res.data.price
        })
    },
    buy() {
      this.showModal = true
    },
    close() {
      this.showModal = false
    },
    login() {
      this.$store.dispatch('user/login')
    },
  },
  head() {
    return {
      title: 'Zrinka Paladino - O Zagrebu i... Telegramovih 48',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Čuvena arhitektica, konzervatorica i kolumnistica donosi veliku kroniku Zagreba, njegove arhitekture, devastacije, i društva. Sve kolumne prvi put na jednom mjestu, obogaćene novim zapisima, ilustracijama i fotografijama. ',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Čuvena arhitektica, konzervatorica i kolumnistica donosi veliku kroniku Zagreba, njegove arhitekture, devastacije, i društva. Sve kolumne prvi put na jednom mjestu, obogaćene novim zapisima, ilustracijama i fotografijama. ',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Zrinka Paladino: O Zagrebu i ... Telegramovih 48',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/_nuxt/img/paladino_cover.8a4431d.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegra.hr/knjiga/zrinka-paladino-o-zagrebu/',
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegra.hr/knjiga/zrinka-paladino-o-zagrebu/',
        },
      ],
    }
  },
}
</script>
