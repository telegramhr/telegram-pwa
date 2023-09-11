<template>
  <div class="main-container flex single-article reset-flex-order">
    <div class="full flex">
      <theader headline="Depra - nova knjiga Aleksandra Stankovića"></theader>
    </div>
    <div class="full flex relative reset-flex-order">
      <div
        class="full flex relative center mobile-side-pad darkened-bg column-full-pad"
      >
        <div class="container relative flex stretch">
          <div class="forty tablet-full flex flex-responsive center">
            <div class="full center-text newbook-overtitle">
              Ekskluzivna prednarudžba
            </div>
            <h1 class="full center-text newbook-title">DEPRA</h1>
            <div class="full center-text newbook-author">
              Aleksandar Stanković
            </div>
            <p class="full center-text newbook-intro">
              Poznati novinar i voditelj godinama boluje od teške depresije, a
              sada je, u ovoj knjizi, prvi put odlučio progovoriti o svojoj
              borbi s tom bolesti
            </p>
          </div>

          <div class="forty tablet-full flex flex-responsive center">
            <img
              src="@/assets/img/tg_book_mockup_stankovic.png"
              alt="Naslovnica nove knjige Aleksandra Stankovića 'DEPRA'"
            />
          </div>
          <div class="fifth tablet-full flex flex-responsive center">
            <div class="full relative center-text newbook-price">
              <span class="faded strikethrough">19,99€</span> 14,99€
            </div>
            <div class="full relative center-text neat-numbers">
              (<span class="faded strikethrough">150,61 kn</span> 112,94 kn)
              <br />
              posebna cijena za sve pretplatnike Telegrama
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
            „Bilo mi je toliko loše da sam odlučio otkazati emisiju. Rekoh to i
            producentici koja je radila sa mnom. „Stvarno, danas ne mogu“. Popio
            sam antidepresiv i anksiolitik i nema pomoći. Noge mi se tresu, usta
            su suha i potpuno sam dezorijentiran. Moglo bi se dogoditi tijekom
            emisije da zaboravim kako se gost zove, ili da mu ne uspijem
            postaviti pitanje. Teško sastavljam rečenice. Ne mogu se prisjetiti
            pojedinih riječi. Stvarno mi je grozno!
          </p>
          <p class="full center-text">
            „Možeš li čitati?“ pitala me. „Mogu.“ „Onda samo čitaj pitanja i to
            je sve. Ništa ne propituj, ne upuštaj se u rasprave, ne zaključuj.“
            Tako je i bilo. Ne znam je li Pilić primijetio moju dezorijentaciju,
            ali nadao sam se da nećemo puno pričati nakon emisije. Na kraju sam
            se srušio u krevet i zatrpao tabletama. Nikad mi poslije nije bilo
            toliko loše“
          </p>
          <p class="full center-text">– ulomak iz knjige</p>
        </div>
      </div>
    </div>
    <div class="full center">
      <img
        src="@/assets/img/stankovic_headtop.png"
        alt="Autor knjige Aleksandar Stanković"
        class="bookauthor-headtop"
      />
    </div>
    <div class="full flex relative book-quote">
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center-text">
          <p>
            „Depresija je kada 3 mjeseca čekaš da ti 15 minuta bude bolje.
            Depresija je razmišljanje kako bi svijet bio bolje mjesto bez tebe i
            kako bi ti bio sretniji bez svijeta“
          </p>
          <div class="quote-author full center-text">
            - Aleksandar Stanković
          </div>
        </div>
      </div>
      <img src="@/assets/img/zagreb_skyline.jpg" alt="Ilustracija Zagreba" />
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <h2 class="full relative">Riječ autora</h2>
        <p>
          Pripremajući knjigu razmišljao sam kako bi bilo dobro o depresiji
          pisati s dozom ironije, ubaciti poneku šalu, relaksirati situaciju
          kako ne bih ubio čitatelja. Čak sam ciljano napisao nekoliko takvih
          pjesama, ali naknadno čitajući shvatio sam da to ne ide. Ne mogu poput
          Roberta Benignija napraviti romantičan film o Holokaustu. Rijetki mogu
          i imaju taj dar, ja nemam. Od kada znam za sebe, na život gledam kao
          na borbu u kojoj neprestano zaokupljam misli da ne bih razmišljao o
          upitnicima. Smijeh jest jedan od načina da se pobjegne od pitanja, ali
          moraš biti majstor da se sakriješ u apsurd pa na taj način pokažeš
          bol. Nisam taj majstor. Štoviše, čitajući te svoje „smiješne“ pjesme,
          shvatio sam da razmišljam k’o oni self-help gurui s tezom „sad ću da
          ti objasnim“, „zini da ti kažem“ i slično, a to je valjda posljednje
          što bih želio postići ovom knjigom. Žao mi je ako ona uznemiri nekoga.
          Moj život je puno više od ove knjige, ljepši je i sadržajniji, ali
          nisam pisao autobiografiju, pisao sam o jednom posebnom stanju
          svijesti koje nije slika sreće. Nisam psiholog i ne mogu sugerirati
          kako treba živjeti. Mogu tek prenijeti vlastito iskustvo bolesti,
          pojedincu pružiti spoznaju da ima još ljudi koji se osjećaju kao on.
          Da budem iskren, pišem kako bih pomogao sebi
        </p>
        <p></p>
        <p class="center-text bold">
          Izdavač: Telegram Media Grupa<br />
          Uvez: Tvrdi<br />
          Broj stranica: 170<br />
          Godina izdanja: 2023.<br />
          Dimenzije: 145 x 205 mm<br />
          Urednik: Miran Pavić <br />
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="aco"
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
        .get('/pretplate/get_price/?book=aco', {
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
      title: 'Aleksandar Stanković: DEPRA',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Poznati novinar i voditelj godinama boluje od teške depresije, a sada je, u ovoj knjizi, prvi put odlučio progovoriti o svojoj borbi s tom bolesti',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Poznati novinar i voditelj godinama boluje od teške depresije, a sada je, u ovoj knjizi, prvi put odlučio progovoriti o svojoj borbi s tom bolesti',
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
          content: 'Aleksandar Stanković: DEPRA',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/tg_share_stankovic.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/knjiga/aleksandar-stankovic-depra',
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
          href: 'https://www.telegram.hr/knjiga/aleksandar-stankovic-depra',
        },
      ],
    }
  },
}
</script>
