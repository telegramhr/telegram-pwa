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
          <h1 class="full center-text">Igla, pila, ravnalo</h1>
          <h4 class="full center-text">Sanja Modrić</h4>
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
                src="@/assets/img/tg_book_mockup_modric.png"
                alt="Naslovnica nove knjige Sanje Modrić 'Igla, pila, ravnalo'"
              />
            </div>
            <div class="full flex knjiga-features">
              <h1 class="full relative center-text">
                <span class="faded strikethrough">19,99€</span> 13,99€
              </h1>
              <h1 class="full relative center-text">
                (<span class="faded strikethrough">150,61 kn</span> 105,41 kn)
                <br />
                posebna cijena za sve pretplatnike Telegrama
              </h1>
              <h4 class="full relative center-text">
                Naručite još danas i osigurajte svoj primjerak prije nego dođe u
                knjižare, početkom svibnja. Besplatna dostava unutar Hrvatske.
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
      <div class="full flex relative single-article-body mobile-side-pad">
        <p class="full center-text">
          Prva knjiga Sanje Modrić, jedne od najboljih i najpoznatijih hrvatskih
          novinarki, dobitnici nagrada Hrvatskog novinarskog društva za
          Novinarku godine i za životno djelo. U velikom izdanju od 318
          stranica, u Telegramovoj nakladi, knjiga najboljih kolumni Sanje
          Modrić špajza je novinskih priča o tome gdje smo i kamo idemo.
        </p>
      </div>
    </div>
    <div class="full flex relative book-quote">
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center-text">
          <p>
            ‘’Sanja Modrić mnogo je puta napisala tekst koji sam sâm želio
            napisati. Ona to radi lucidno, izrav­no, precizno, bez izmotavanja i
            prenemaganja, uspijevajući i najsloženije državne i javne poslo­ve
            rastumačiti svakodnevnim jezikom.’’
          </p>
          <div class="quote-author full center-text">- Ante Tomić</div>
        </div>
      </div>
      <img src="@/assets/img/zagreb_skyline.jpg" alt="Ilustracija Zagreba" />
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <h2 class="full relative">Iz predgovora Sanje Modrić</h2>
        <p>
          Ljudi pogrešno misle da je naše zanimanje glamurozno dočim mi jedemo
          jednom dnevno i radimo kao psi. Treba procesuirati sve te silne afere,
          stranputice i pomutnje o kojima se ništa ne bi znalo da ih ova struka
          ne otkriva, ne opisuje i ne gura sve što treba DORH-u pod vrata. Onda,
          treba lijepo, a ne grbavo, pisati našim jezikom jer je jezik naša
          prava domovina. I treba pisati za sve ljude, čisto, jasno i bez
          prenemaganja, za vozača autobusa, kemičara koji zna napamet
          Mendeljejevu tablicu, ali nije vičan za ustavna pitanja, za baku
          Stanku iz Prološca koja je završila šest razreda osnovne pa se udala i
          za gimnazijalca koji još ne glasa na izborima.
        </p>
        <p>
          Važno je ljudima reći da je ono što misle ispravno i da se ne boje
          naglas izgovoriti svoje misli. I da, treba biti pristran i pokazati
          stav jer je naše da budemo na strani ljudskosti, poštenja, vrijednog
          rada i zakona, a ne da se ‘objektivno’ ograđujemo. Bojim se da se
          takvo novinarstvo ne povuče u zadnje klupe pred onim koje reklamira
          lijekove, kockarnice i štetne politike, koje mlati praznu slamu ili
          vodi vesele emisije pozivajući slušatelje da podijele svoje britke
          misli o jedenju slatkiša ili da u eter oponašaju glasanje goluba. Da
          se to ne dogodi bore se i ovi tekstovi.
        </p>
        <p>
          Jer će u protivnom biti sve više nevoljnih ljudi koji šute i gledaju
          svoja posla dok stvari odlaze dođavola, budući da se, navodno, ne može
          ništa i jer ništa ne vrijedi pokušati. Bar to je ono što, na koncu
          konca, ipak valja s ovom ne-knjigom, nazvanom po igli da se pokuša
          sastaviti rastavljeno, pili da se odreže škart i ravnalu da se točno
          izmjeri.
        </p>
        <p></p>
        <p class="center-text bold">
          Izdavač: Telegram Media Grupa<br />
          Uvez: Meki<br />
          Broj stranica: 318<br />
          Godina izdanja: 2023.<br />
          Dimenzije: 160 x 235 mm<br />
          Urednik: Miran Pavić<br />
          ISBN: 978-953-49501-3-5
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
      this.$store.dispatch('user/login')
    },
  },
  head() {
    return {
      title: 'Sanja Modrić: Igla, pila, ravnalo',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Prva knjiga Sanje Modrić, jedne od najboljih i najpoznatijih hrvatskih novinarki, dobitnici nagrada Hrvatskog novinarskog društva za Novinarku godine i za životno djelo.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Prva knjiga Sanje Modrić, jedne od najboljih i najpoznatijih hrvatskih novinarki, dobitnici nagrada Hrvatskog novinarskog društva za Novinarku godine i za životno djelo.',
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
          content: 'Sanja Modrić: Igla, pila, ravnalo',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2023/04/tg-naslovna-2023-04-18-modric.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content:
            'https://www.telegram.hr/knjiga/sanja-modric-igla-pila-ravnalo',
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
          href: 'https://www.telegram.hr/knjiga/sanja-modric-igla-pila-ravnalo',
        },
      ],
    }
  },
}
</script>
