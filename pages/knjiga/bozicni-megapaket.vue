<template>
  <div
    class="main-container flex red-header-page single-article knjiga-page reset-flex-order"
  >
    <div class="full flex tg-red">
      <theader headline="Telegram božićni megapaket"></theader>
    </div>
    <div class="full flex relative reset-flex-order">
      <div
        class="full flex relative center knjiga-header article-head mobile-side-pad column-full-pad"
      >
        <div class="container relative flex single-article-body">
          <h3 class="full center-text overtitle">Najbolji božićni poklon</h3>
          <h1 class="full center-text">Telegram božićni megapaket</h1>
          <h4 class="full center-text">
            Hit knjige iz naše biblioloteke i premium godišnja pretplata
          </h4>
        </div>
      </div>
      <div class="full flex relative single-article-body">
        <div
          class="container flex relative mobile-side-pad pretplata-packboxes"
        >
          <div
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover knjiga-cover-3d">
              <img
                src="/img/tg_knjiga_vizual_megapack.png"
                alt="Telegram božićni megapaket"
              />
            </div>
            <div class="full flex knjiga-features">
              <client-only>
                <h1
                  v-if="$store.state.user.access"
                  class="full relative center-text"
                >
                  <span class="faded strikethrough">1095 kn</span> 599 kn
                </h1>
                <h1 v-else class="full relative center-text">
                  <span class="faded strikethrough">1095 kn</span> 799 kn
                </h1>
                <h1
                  v-if="$store.state.user.access"
                  class="full relative center-text"
                >
                  (<span class="faded strikethrough">145,33€</span> 79,50€)
                  <br />
                  posebna cijena za sve pretplatnike Telegrama
                </h1>
                <h1 v-else class="full relative center-text">
                  (<span class="faded strikethrough">145,33€</span> 106,05€)
                  <br />
                  posebna cijena za Božić
                </h1>
              </client-only>
              <h4 class="full relative center-text">
                Paket sadrži Bili libar Borisa Dežulovića, O Zagrebu Zrinke
                Paladino, Neispričane priče Rajka Grlića i godišnju premium
                pretplatu koja omogućuje neograničeno čitanje Telegrama i
                Telesporta. Besplatna dostava unutar Hrvatske.
              </h4>
              <div class="full knjiga-keypoints">
                <p class="full center-text">Izdavač: Telegram Media Grupa</p>
              </div>
              <app-link
                v-show="!$store.state.user.uid"
                to="/pretplata"
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
          <a
            href="mailto:pretplata@telegram.hr"
            class="full center-text undertitle"
          >
            Želite platiti virmanom? Javite nam se
          </a>
        </div>
      </div>
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <h2 class="full relative">Paket sadrži:</h2>
        <h2 class="full relative">1. Godišnja premium pretplata na Telegram</h2>
        <p>
          <app-link to="/pretplata"
            >Redovna cijena: 588 kn (78,04€) godišnje</app-link
          >
        </p>
        <p>
          U nedavnom međunarodnom istraživanju navika potrošača, Telegram je
          proglašen najkvalitetnijim hrvatskim portalom, a njegovi novinari
          redovno dobivaju nacionalna i svjetska priznanja za svoj istraživački
          rad. Premium pretplata omogućuje vam neograničeno čitanje članaka
          Telegrama i Telesporta, članstvo u Telegram Klubu, specijalne
          newslettere i surfanje bez oglasa.
        </p>
        <h2 class="full relative">2. Bili libar, Boris Dežulović</h2>
        <p>
          <app-link to="/knjiga/boris-dezulovic-bili-libar"
            >Redovna cijena: 149 kn (19,78€)</app-link
          >
        </p>
        <p>
          U ovoj knjizi reći će vam Dežulović mnogo toga o sebi, mnogo više nego
          što ste mogli saznati čitajući njegove kolumne o poslovično teškim
          domaćim društveno-političkim temama, ali neće vam dati da se za to
          uhvatite čak i ako zaigrate bunker protiv njega. Koristit će Hajduk
          kao medij razotkrivajući sebe, a sebe da bi razotkrio Hajduk na način
          na koji nitko nikad nije. Bili libar knjiga je o ljubavi i vječnom
          životu.
        </p>
        <h2 class="full relative">3. Neispričane priče, Rajko Grlić</h2>
        <p>
          <app-link to="/knjiga/rajko-grlic-neispricane-price"
            >Redovna cijena: 179 kn (23,76€)</app-link
          >
        </p>
        <p>
          Novo, dopunjeno izdanje hit-knjige čuvenog redatelja Rajka Grlića,
          koja se rasprodala odmah nakon što se pojavila u hrvatskim knjižarama.
          U ovom golemom izdanju od 436 stranica, koje izlazi u Telegramovoj
          nakladi, Grlić je pripremio još dvadeset i jednu novu, nikad
          objavljenu priču. Kako kaže urednica Marina Vujčić: „na sreću svih nas
          koji vole čitati ovog režisera i pripovjedača“.
        </p>
        <h2 class="full relative">4. O Zagrebu, Zrinka Paladino</h2>
        <p>
          <app-link to="/knjiga/zrinka-paladino-o-zagrebu"
            >Redovna cijena: 179 kn (23,76€)</app-link
          >
        </p>
        <p>
          Čuvena arhitektica, konzervatorica i kolumnistica donosi veliku
          kroniku Zagreba, njegove arhitekture, devastacije, i društva. Sve
          kolumne prvi put na jednom mjestu, obogaćene novim zapisima,
          ilustracijama i fotografijama.
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="bozic2022megapaket"
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
      price: 799,
    }
  },
  mounted() {
    this.getPrice()
  },
  methods: {
    getPrice() {
      this.$axios
        .get('/pretplate/get_price/?book=bozic2022megapaket', {
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
      title: 'Telegram božićni megapaket',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Hit knjige iz naše biblioloteke i premium godišnja pretplata',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Hit knjige iz naše biblioloteke i premium godišnja pretplata',
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
          content: 'Telegram božićni megapaket',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2022/12/tg-book-share-megapaket.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/knjiga/bozicni-megapaket',
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
          href: 'https://www.telegram.hr/knjiga/bozicni-megapaket',
        },
      ],
    }
  },
}
</script>
