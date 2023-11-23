<template>
  <div class="main-container flex single-article reset-flex-order">
    <div class="full flex">
      <theader headline="Depra - nova knjiga Borisa Dežulovića"></theader>
    </div>
    <div class="full flex relative reset-flex-order">
      <div
        class="full flex relative center mobile-side-pad darkened-bg column-full-pad"
      >
        <div class="container relative flex stretch">
          <div class="forty tablet-full flex flex-responsive center">
            <div class="full center-text newbook-overtitle">
              Telegram naklada
            </div>
            <h1
              class="full center-text newbook-title newbook-title-smaller newbook-title-double"
            >
              BILI LIBAR 1 <br />
              <span class="smaller-text">&</span><br />
              BILI LIBAR 2
            </h1>
            <div class="full center-text newbook-author">Boris Dežulović</div>
            <p class="full center-text newbook-intro">
              Jedinstveni paket, dostupan samo na Telegramu: veliki književni
              hit Borisa Dežulovića Bili libar i upravo objavljeni nastavak Bili
              libar 2, s posebnom cijenom i besplatnom dostavom.
            </p>
          </div>

          <div class="forty tablet-full flex flex-responsive center">
            <img
              src="@/assets/img/tg_book_bili_libar_pack.png"
              alt="Naslovnica knjiga Borisa Dežulovića 'BILI LIBAR' i 'BILI LIBAR 2'"
            />
          </div>
          <div class="fifth tablet-full flex flex-responsive center">
            <div class="full relative center-text newbook-price">
              <span class="faded strikethrough">39,98€</span> 29,99€
            </div>
            <div class="full relative center-text neat-numbers">
              (<span class="faded strikethrough">301,23 kn</span> 225,96 kn)
              <br />
              Besplatna dostava po cijeloj Hrvatskoj
            </div>
            <div class="full center btn-parent newbook-btn">
              <div
                v-if="$store.state.user.email"
                class="newbtn clickable huge-newbtn animate"
                @click="buy"
              >
                {{ price ? 'Kupite' : 'Naručite' }}
              </div>
              <div
                v-else
                class="newbtn clickable huge-newbtn animate"
                @click="login"
              >
                Kupite
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative single-article-body mobile-side-pad">
        <div class="full">
          <p class="full center-text">
            „U ovoj knjizi reći će vam Dežulović mnogo toga o sebi, mnogo više
            nego što ste mogli saznati čitajući njegove kolumne o poslovično
            teškim domaćim društveno-političkim temama, ali neće vam dati da se
            za to uhvatite čak i ako zaigrate bunker protiv njega. Koristit će
            Hajduk kao medij razotkrivajući sebe, a sebe da bi razotkrio Hajduk
            na način na koji nitko nikad nije. Bili libar knjiga je o ljubavi i
            vječnom životu.“
          </p>
          <p class="full center-text">– ulomak iz knjige</p>
        </div>
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
        <div class="full center-text">
          <p>
            „Dežulović svijet gleda najčešće s tribine, a vidi ga bolje nego
            Gagarin. I to što vidi on izlaže tako da čitaocu zastaje dah, pa kad
            dođe do kraja, hoće produžetke. Neće penale, hoće uzvrat.“
          </p>
          <div class="quote-author full center-text">- Sinan Gudžević</div>
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
        <p class="center-text bold">
          Izdavač: Telegram Media Grupa<br />
          Uvez: Tvrdi<br />
          Dimenzije: 145 x 205 mm<br />
          Urednik: Aleksandar Holiga <br />
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="bili-komplet"
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
      price: 39.98,
    }
  },
  mounted() {
    this.getPrice()
  },
  methods: {
    getPrice() {
      this.$axios
        .get('/pretplate/get_price/?book=bili-komplet', {
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
      title: 'Boris Dežulović: Bili libar 2',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Veliki Telegramov hit dobio je nastavak, s 12 još raskošnijih, još čudesnijih i luđih priča o jednom nogometnom klubu. I, naravno, ne samo o njemu.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Veliki Telegramov hit dobio je nastavak, s 12 još raskošnijih, još čudesnijih i luđih priča o jednom nogometnom klubu. I, naravno, ne samo o njemu.',
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
          content: 'Boris Dežulović: Bili libar 2',
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
          content:
            'https://www.telegram.hr/knjiga/boris-dezulovic-bili-libar-2/',
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
          href: 'https://www.telegram.hr/knjiga/boris-dezulovic-bili-libar-2/',
        },
      ],
    }
  },
}
</script>
