<template>
  <div class="main-container flex single-article reset-flex-order t-magazin">
    <div class="full flex">
      <theader
        headline="T Magazin - Specijalno izdanje portala Telegram"
      ></theader>
    </div>
    <div class="full flex relative reset-flex-order">
      <div
        class="full flex relative center mobile-side-pad darkened-bg column-full-pad"
      >
        <div class="container relative flex stretch">
          <div class="thirty tablet-full flex flex-responsive center m-order-2">
            <div class="full center-text newbook-overtitle hide">
              Telegram naklada
            </div>
            <h1 class="full center-text newbook-title newbook-title-smaller">
              T Magazin
            </h1>
            <div class="full center-text newbook-author column-mini-top-pad">
              Specijalno izdanje portala Telegram
            </div>
            <p class="full center-text newbook-intro">
              Ekskluzivni magazin za ključna društvena i kulturna pitanja, s
              najboljim autorima i velikim, originalnim tekstovima u predivnom
              dizajnu
            </p>
          </div>

          <div
            class="half tablet-full column-full-pad mobile-vertical-pad flex flex-responsive center m-order-1 relative"
          >
            <img
              src="@/assets/img/tg_book_mockup_magazin_wsticker.png"
              alt="Naslovnica T Magazina"
            />
          </div>
          <div class="fifth tablet-full flex flex-responsive center m-order-2">
            <div
              class="full relative center-text newbook-price bigger-newbook-price"
            >
              9,99€
            </div>
            <div
              class="full relative center-text neat-numbers barlow faded column-mini-top-pad"
            >
              Besplatna dostava po cijeloj Hrvatskoj
            </div>
            <div class="full center btn-parent newbook-btn mobile-bottom-pad">
              <div
                v-if="$store.state.user.email"
                class="newbtn clickable huge-newbtn animate"
                @click="buy"
              >
                {{ price ? 'Kupite' : 'Naručite' }}
                <font-awesome-icon
                  :icon="['fab', 'cc-visa']"
                ></font-awesome-icon>
                <font-awesome-icon
                  :icon="['fab', 'cc-mastercard']"
                ></font-awesome-icon>
                <font-awesome-icon
                  :icon="['fab', 'cc-diners-club']"
                ></font-awesome-icon>
              </div>
              <div
                v-else
                class="newbtn clickable huge-newbtn animate"
                @click="login"
              >
                Kupite
                <font-awesome-icon
                  :icon="['fab', 'cc-visa']"
                ></font-awesome-icon>
                <font-awesome-icon
                  :icon="['fab', 'cc-mastercard']"
                ></font-awesome-icon>
                <font-awesome-icon
                  :icon="['fab', 'cc-diners-club']"
                ></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative single-article-body mobile-side-pad">
        <div class="full">
          <p class="full center-text book-page-highlights column-bottom-pad">
            <b>EKSKLUZIVNI ULOMAK IZ NOVE KNJIGE DRAGE HEDLA O GUBITKU SINA:</b>
            "Nema više našeg Matije" - donosimo scenu za koju Miljenko Jergović
            kaže da je nezabilježena u našoj književnosti i filmu
          </p>
          <p class="full center-text book-page-highlights column-bottom-pad">
            <b>NIKAD VIĐENI MIROSLAV KRLEŽA:</b> Nepoznati detalji iz života i
            dosad neobjavljene fotografije, iz čuvene zbirke autora i Krležinog
            prijatelja Enesa Čengića
          </p>
          <p class="full center-text book-page-highlights column-bottom-pad">
            <b>DOSJE BORAS:</b> Tajni nalaz inspekcije Sveučilišta u Zagrebu:
            kako su se pumpali troškovi, izmišljala radna mjesta i namještali
            poslovi... Skandaloznu istinu otkriva novinarka godine Dora Kršul
          </p>
          <p class="full center-text book-page-highlights">
            <b>VELIKA ZABLUDA O MILKI PLANINC:</b> Nepoznati život i drugo lice
            omražene hrvatske političarke. Piše Tvrtko Jakovina, čija je obitelj
            bila gubitnik u Hrvatskom proljeću i eri Milke Planinc
          </p>
        </div>
      </div>
    </div>
    <div class="full center">
      <img
        src="@/assets/img/extras/knjiga/tg_magazin_normal.jpg"
        alt="T Magazin"
        class="light-mode-only"
      />
      <img
        src="@/assets/img/extras/knjiga/tg_magazin_light.jpg"
        alt="T Magazin"
        class="contrast-mode-only"
      />
      <img
        src="@/assets/img/extras/knjiga/tg_magazin_dark.jpg"
        alt="T Magazin"
        class="dark-mode-only"
      />
    </div>
    <div class="full flex relative book-quote no-margin-book-quote">
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center-text">
          <p>
            Za T magazin pišu: Tvrtko Jakovina, Silvana Menđušić, Dora Kršul,
            Drago Hedl, Monika Herceg, Jasmin Klarić, Davor Butković, Jagoda
            Marić, Denis Mahmutović, Goran Redžepović, Srđan Sandić
          </p>
        </div>
      </div>
      <img src="@/assets/img/zagreb_skyline.jpg" alt="Ilustracija Zagreba" />
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <p class="full center-text book-page-highlights column-bottom-pad">
          <b
            >INTIMNO-DRUŠTVENI ESEJ MONIKE HERCEG O OCU, ALKOHOLIZMU I
            NELIJEČENOJ DEPRESIJI NA SELU:</b
          >
          Sve smrti moga oca
        </p>
        <p class="full center-text book-page-highlights column-bottom-pad">
          <b>KAKO ŽIVE ONI ZA KOJE SE PRAVIMO DA NE ŽIVE OVDJE:</b> Reportaža iz
          kuće u Zagrebu u kojoj žive 33 strana radnika, nagomilani u nekoliko
          ležajeva, bez tople vode
        </p>
        <p class="full center-text book-page-highlights column-bottom-pad">
          <b>DUBINSKA REKAPITULACIJA HDZ-OVE POREZNE POLITIKE:</b> Jagoda Marić
          analizira osam godina lutanja i prijelaznih rješenja zbog koji je
          Plenković dodatno unazadio ekonomski model Hrvatske
        </p>
        <p class="full center-text book-page-highlights column-bottom-pad">
          <b>
            PRVI ISTUP LORDANA ZAFRANOVIĆA ZA HRVATSKE MEDIJE O NOVOM FILMU O
            JASENOVCU:</b
          >
          "Samo plitke neznalice kazat će da je film kontroverzan"
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="t-magazin"
      @close="close"
    ></braintree>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Dezulovic',
  data() {
    return {
      access: {},
      showModal: false,
      price: 149,
    }
  },
  mounted() {
    this.getPrice()
    if (this.$route.query.checkout) {
      this.showModal = true
    }
  },
  methods: {
    getPrice() {
      this.$axios
        .get('/pretplate/get_price/?book=t-magazin', {
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
      title: 'T Magazin',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Ekskluzivni magazin za ključna društvena i kulturna pitanja, s najboljim autorima i velikim, originalnim tekstovima u predivnom dizajnu.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Ekskluzivni magazin za ključna društvena i kulturna pitanja, s najboljim autorima i velikim, originalnim tekstovima u predivnom dizajnu.',
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
          content: 'T Magazin',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/tg_book_share_magazin.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/knjiga/t-magazin/',
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
          href: 'https://www.telegram.hr/knjiga/t-magazin/',
        },
      ],
    }
  },
}
</script>
