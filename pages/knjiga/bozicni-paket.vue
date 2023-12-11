<template>
  <div
    class="main-container flex red-header-page single-article knjiga-page reset-flex-order"
  >
    <div class="full flex tg-red">
      <theader headline="Telegram božićni paket"></theader>
    </div>
    <div
      class="full flex relative center mobile-side-pad newbook-xmas column-full-pad"
    >
      <img
        src="@/assets/img/tg_visual_2023_xmasbg_green.jpg"
        class="img-as-bg"
        aria-hidden="true"
      />
      <img
        class="ps-xmas1"
        src="@/assets/img/tg_xmas_1.png"
        aria-hidden="true"
      />
      <img
        class="ps-xmas2"
        src="@/assets/img/tg_xmas_2.png"
        aria-hidden="true"
      />
      <div class="container relative flex stretch">
        <div class="forty tablet-full flex flex-responsive center">
          <div class="full center-text newbook-overtitle">
            Najbolji božićni poklon
          </div>
          <h1 class="full center-text newbook-title">
            Telegram bestseller megapaket
          </h1>
          <div class="full center-text newbook-intro">
            <span class="ib">Hit knjige iz naše biblioteke, </span
            ><span class="ib">po najboljoj cijeni dosad</span>
          </div>
          <p class="full center-text newbook-intro hide">
            Paket sadrži 4 top betselera: Depra, Bili libar, Neispričane priče i
            Igla, pila, ravnalo. Besplatna dostava unutar Hrvatske.
          </p>
        </div>
        <div class="forty tablet-full flex flex-responsive center">
          <img
            src="@/assets/img/tg_visual_2023_bookpack.png"
            alt="Telegram božićni paket knjiga"
          />
        </div>
        <div class="fifth tablet-full flex flex-responsive center">
          <div class="full relative center-text newbook-price">
            <span class="faded strikethrough">83,52€</span> 49,99€
          </div>
          <div class="full relative center-text neat-numbers">
            (<span class="faded strikethrough">629,28 kn</span> 376,65 kn)
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
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <p class="full relative">
          Paket sadrži 4 top bestselera: Depra, Bili libar, Neispričane priče i
          Igla, pila, ravnalo. Besplatna dostava unutar Hrvatske.
        </p>
        <h2 class="full relative">1. Depra, Aleksandar Stanković</h2>
        <p>
          <app-link to="/knjiga/aleksandar-stankovic-depra"
            >Redovna cijena: 19,99€ (150,61 kn)</app-link
          >
        </p>
        <p>
          Poznati novinar i voditelj godinama boluje od depresije, a sada je, u
          ovoj knjizi, prvi put odlučio progovoriti o svojoj borbi s tom bolesti
        </p>
        <h2 class="full relative">2. Igla, pila, ravnalo, Sanja Modrić</h2>
        <p>
          <app-link to="/knjiga/sanja-modric-igla-pila-ravnalo"
            >Redovna cijena: 19,99€ (150,61 kn)</app-link
          >
        </p>
        <p>
          Prva knjiga Sanje Modrić, jedne od najboljih i najpoznatijih hrvatskih
          novinarki, dobitnici nagrada Hrvatskog novinarskog društva za
          Novinarku godine i za životno djelo. U velikom izdanju od 318
          stranica, u Telegramovoj nakladi, knjiga najboljih kolumni Sanje
          Modrić špajza je novinskih priča o tome gdje smo i kamo idemo.
        </p>
        <h2 class="full relative">3. Neispričane priče, Rajko Grlić</h2>
        <p>
          <app-link to="/knjiga/rajko-grlic-neispricane-price"
            >Redovna cijena: 23,76€ (179 kn)</app-link
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
        <h2 class="full relative">4. Bili libar, Boris Dežulović</h2>
        <p>
          <app-link to="/knjiga/boris-dezulovic-bili-libar"
            >Redovna cijena: 19,78€ (149 kn)</app-link
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
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="bozic2023paket"
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
      price: 349,
    }
  },
  mounted() {
    this.getPrice()
  },
  methods: {
    getPrice() {
      this.$axios
        .get('/pretplate/get_price/?book=bozic2023paket', {
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
      title: 'Telegram božićni paket',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hit knjige iz naše biblioteke',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Hit knjige iz naše biblioteke',
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
          content: 'Telegram božićni paket',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/tg_share_xmas_books.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/knjiga/bozicni-paket/',
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
          href: 'https://www.telegram.hr/knjiga/bozicni-paket/',
        },
      ],
    }
  },
}
</script>
