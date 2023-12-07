<template>
  <div class="main-container flex single-article reset-flex-order">
    <div class="full flex">
      <theader headline="Boris Dežulović: Bili libar 2"></theader>
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
            <h1 class="full center-text newbook-title newbook-title-smaller">
              BILI LIBAR 2
            </h1>
            <div class="full center-text newbook-author">Boris Dežulović</div>
            <p class="full center-text newbook-intro">
              Veliki Telegramov hit dobio je nastavak, s 12 još raskošnijih, još
              čudesnijih i luđih priča o jednom nogometnom klubu. I, naravno, ne
              samo o njemu.
            </p>
          </div>

          <div class="forty tablet-full flex flex-responsive center">
            <img
              src="@/assets/img/tg_book_clean_dezulovic2.png"
              alt="Naslovnica nove knjige Borisa Dežulovića 'BILI LIBAR 2'"
            />
          </div>
          <div class="fifth tablet-full flex flex-responsive center">
            <div class="full relative center-text newbook-price">19,99€</div>
            <div class="full relative center-text neat-numbers">
              (150,61 kn)
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
            „Barba Luka je tako šalovao temelje velikog Hajduka, koji je u tih
            pet-šest godina roaring twenties postao ono što je danas: urbana
            religija jednog malog velog mista od trideset hiljada sada već
            sasvim lijepo infišanih i išempjanih stanovnika - samog protiv svih,
            na dalekom rubu svake države u kojoj će se naći.
          </p>
          <p class="full center-text">
            Okruglo je stoljeće tako prošlo od Hajdukove povijesne 1923. godine:
            prve prvenstvene utakmice, prve službene sudačke pljačke, prve
            žalbe, prvog domaćeg trenera, prve smjene generacija, prve turneje
            kluba, prve pobjede u inozemstvu, prve europske utakmice i prve
            europske pobjede, te prvog organiziranog dočeka sportaša u sada već
            potpuno Hajdukovu gradu.
          </p>
          <p class="full center-text">
            Godine kad se rodio Hajdukov kroničar Miljenko Smoje, a Stari plac
            pružio po osi jug-sjever, kontra buri, kontra jugu, kontra sili,
            kontra mraku: sve što su nam suci i savezi radili u stoljeću koje je
            slijedilo, mi smo vidjeli još prije stotinu godina.“
          </p>
          <p class="full center-text">– ulomak iz knjige</p>
        </div>
      </div>
    </div>
    <div class="full flex relative book-quote">
      <div class="container relative mobile-side-pad column-full-pad">
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
        <h2 class="full relative">Riječ autora</h2>
        <p>
          „Kad je o Hajduku riječ onda je sve moguće“, zabilježio je još i stari
          Meštar, ali slabo bi se pisci i izdavači kruha najeli oslonjeni na
          mogućnosti svemogućeg Hajduka i čekajući savršeni tajming. Ja sam
          stoga domislio bolju ideju.
        </p>
        <p>
          Pred vama je Bili libar 2, drugi dakle po redu, drugi od koliko god ih
          bude trebalo. Jednom, naime, jednog dana, kad-tad, i ja ću završiti
          rukopis i dati novi Bili libar u štampu - Bili libar 5 ili 12,
          svejedno - Hajduk će onda iznenada porazbijati Dinamo 4-2 i naći se
          pred dugo i predugo, biblijski iščekivanim naslovom prvaka, a urednik
          Aleksandar Holiga nazvat će me iz štamparije i pitati što da radimo.
        </p>
        <p>
          Jednom, jednog dana, kad-tad, i ja ću posljednje poglavlje Bilog libra
          dovršavati pred trideset pet hiljada pomahnitalih gledatelja u divljoj
          plebejskoj svetkovini na Poljudu.
        </p>
        <p>
          A do tada, čitaoci, dragi hajdukovci naši, dozvolite i piscu ove
          knjige da završi posao i pohita pred televizor, pa da zajedno s vama
          uroni u snove.
        </p>
        <p></p>
        <p class="center-text bold">
          Izdavač: Telegram Media Grupa<br />
          Uvez: Tvrdi<br />
          Broj stranica: 290<br />
          Godina izdanja: 2023.<br />
          Dimenzije: 145 x 205 mm<br />
          Urednik: Aleksandar Holiga <br />
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="bili2"
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
      price: 19.99,
    }
  },
  mounted() {
    this.getPrice()
  },
  methods: {
    getPrice() {
      this.$axios
        .get('/pretplate/get_price/?book=bili2', {
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
          content: 'https://www.telegram.hr/img/tg_share_dezulovic2.jpg',
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
