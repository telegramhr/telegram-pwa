<template>
  <div
    class="main-container flex red-header-page single-article knjiga-page reset-flex-order"
  >
    <div class="full flex tg-red">
      <theader headline="Bili libar - nova knjiga Borisa Dežulovića"></theader>
    </div>
    <div class="full flex relative reset-flex-order">
      <div
        class="full flex relative center knjiga-header article-head mobile-side-pad column-full-pad"
      >
        <div class="container relative flex single-article-body">
          <h3 class="full center-text overtitle">Ekskluzivna prednarudžba</h3>
          <h1 class="full center-text">Bili libar</h1>
          <h4 class="full center-text">Boris Dežulović</h4>
        </div>
      </div>
      <div class="full flex relative single-article-body">
        <div
          class="container flex relative mobile-side-pad pretplata-packboxes"
        >
          <div
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover">
              <img
                src="@/assets/img/tg_book_mockup_wsticker.png"
                alt="Naslovnica nove knjige Borisa Dežulovića 'Bili libar'"
              />
            </div>
            <div class="full flex knjiga-features">
              <h1 class="full relative center-text">
                <span class="faded strikethrough">149 kn</span> 99 kn
              </h1>
              <h1 class="full relative center-text">
                posebna cijena za sve pretplatnike Telegrama
              </h1>
              <h4 class="full relative center-text">
                Prednaručite danas i budite među prvima koji će krajem lipnja
                dobiti Bili libar, s besplatnom dostavom na adresu.
              </h4>
              <h4 class="full relative bold center-text">
                Izdavač: Telegram Media Grupa
              </h4>
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
      <div class="full flex relative single-article-body mobile-side-pad">
        <p class="full center-text">
          U ovoj knjizi reći će vam Dežulović mnogo toga o sebi, mnogo više nego
          što ste mogli saznati čitajući njegove kolumne o poslovično teškim
          domaćim društveno-političkim temama, ali neće vam dati da se za to
          uhvatite čak i ako zaigrate bunker protiv njega. Koristit će Hajduk
          kao medij razotkrivajući sebe, a sebe da bi razotkrio Hajduk na način
          na koji nitko nikad nije. Bili libar knjiga je o ljubavi i vječnom
          životu.
        </p>
      </div>
    </div>
    <div class="full flex relative book-quote">
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center-text">
          <p>
            „Žalosna je činjenica da je Hajduk uvijek djelovao bolje na papiru
            nego na travnjaku. Imao je bolje pisce nego nogometaše, a najbolji
            je među njima, treba li to uopće napominjati, Boris Dežulović“
          </p>
          <div class="quote-author full center-text">- Ante Tomić</div>
        </div>
        <div class="full center-text column-top-pad">
          <p>
            „Pitate li Borisa Dežulovića, po svoj prilici će vam slagati da Bili
            libar nije, barem dijelom, i knjiga o Borisu Dežuloviću. Pitate li
            mene, koji sam imao tu čast sudjelovati u ovoj akciji iz koje je pao
            gol, to je knjiga o ljubavi i vječnom životu“
          </p>
          <div class="quote-author full center-text">- Aleksandar Holiga</div>
        </div>
      </div>
      <img
        src="@/assets/img/tg_visual_skyline_split.png"
        alt="Ilustracija Splita"
      />
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <h2 class="full relative">Božja ruka Borisa Dežulovića</h2>
        <p>
          Nema valjda na čitavom svijetu nogometnog kluba da je u isto vrijeme
          tako omiljen i tako loš, kluba čije poraze uživo gleda više
          gledatelja. Hajdukovi navijači, pretplaćeni na poniženja, iz tjedna u
          tjedan odano pune poljudske tribine. Otkud taj mazohizam, upitao bi
          koji namjernik? Zašto se oni vraćaju stalno po nove doze očaja?
          Objašnjenje je, mislim, u nekolicini koji su krasno pisali ili još
          uvijek pišu o Hajduku. U nekoliko generacija genijalnih novinskih
          autora koji su jedan komično neuspješni provincijski klub učinili
          herojskim, koji su svako ispadanje u pretkolu europskog natjecanja,
          svaku jebenu katastrofu koji bi normalna osoba što prije željela
          zaboraviti, svojim nadahnutim tekstovima učinili nezaboravnim.
        </p>
        <p>
          Žalosna je činjenica da je Hajduk uvijek djelovao bolje na papiru nego
          na travnjaku. Imao je bolje pisce nego nogometaše, a najbolji je među
          njima, treba li to uopće napominjati, Boris Dežulović, pisac takvog
          veličanstvenog talenta da vas duša zaboli da je još uvijek u Hajduku.
          S njegovom rečenicom on bi mogao pisati u jednoj Barceloni. Jedan bi
          Liverpool suhim zlatom platio njegov tečni, zaigrani stil, jedan Inter
          ubio za njegova lucidna opažanja, čitava Allianz Arena bi oduševljeno
          klicala njegovim duhovitim metaforama. Čitajući ga shvaćate da se
          Diega Armanda Maradonu krivo optužuje. Boris Dežulović je zapravo
          Božja ruka.
        </p>
        <p><i>Ante Tomić</i></p>
        <h3 class="full center-text overtitle exclusive-msg">
          <span>Knjiga dostupna samo na Telegramu</span>
        </h3>
        <p></p>
        <p class="center-text bold">
          Izdavač: Telegram Media Grupa<br />
          Uvez: Tvrdi<br />
          Broj stranica: 300<br />
          Godina izdanja: 2022.<br />
          Dimenzije: 145 x 205 mm<br />
          Urednik: Aleksandar Holiga<br />
          ISBN: 978-953-49501-1-1
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="boro"
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
  },
  methods: {
    getPrice() {
      this.$axios
        .get('/pretplate/get_price/?book=boro', {
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
      const _that = this
      window.tp.pianoId.show({
        screen: 'register',
        loggedIn(data) {
          _that.$store.dispatch('user/setUser', data.user)
          _that.$store.commit('user/setToken', data.token)
          window.tp.api.callApi('/access/list', {}, function (response) {
            _that.$store.dispatch('user/setAccess', response).then(() => {
              window.location.reload()
            })
          })
        },
      })
    },
  },
  head() {
    return {
      title: 'Boris Dežulović: Bili libar',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Nova knjiga priča Borisa Dežulovića, o nogometu, Hajduku, ljubavi i životu',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Nova knjiga priča Borisa Dežulovića, o nogometu, Hajduku, ljubavi i životu',
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
          content: 'Boris Dežulović: Bili libar',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2022/05/dezulovic-image-article-tg2.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/knjiga/boris-dezulovic-bili-libar',
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
          href: 'https://www.telegram.hr/knjiga/boris-dezulovic-bili-libar',
        },
      ],
    }
  },
}
</script>

<style scoped>
.knjiga-cover {
  margin-bottom: -32px;
}
.knjiga-hero h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
}
.knjiga-hero h1:nth-child(2) {
  font-weight: 400;
  font-size: 40px;
  font-size: 2rem;
  line-height: 1.2em;
}
.knjiga-hero h4 {
  font-family: 'Barlow', sans-serif;
  opacity: 0.7;
  line-height: 1.1em;
  margin-top: 24px;
  margin-bottom: 24px;
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
}
.pretplata-packboxes a.undertitle {
  text-transform: none;
  font-weight: 400;
  opacity: 0.5;
  font-size: 14px;
  font-size: 0.7rem;
}
.knjiga-header h3.overtitle {
  text-transform: none;
}
@media screen and (min-width: 1025px) {
  .knjiga-cover img {
    max-width: 450px;
  }
  .book-quote img {
    margin-top: -144px;
  }
}
@media screen and (max-width: 767px) {
  .knjiga-cover {
    padding: 0px;
    margin-bottom: -5vw;
  }
  .knjiga-hero h1:nth-child(2) {
    font-size: 32px;
    font-size: 1.6rem;
  }
  .book-quote img {
    margin-top: -8vw;
  }
}
</style>
