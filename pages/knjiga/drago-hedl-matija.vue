<template>
  <div class="main-container flex single-article reset-flex-order">
    <div class="full flex">
      <theader headline="Matija - nova knjiga Drage Hedla"></theader>
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
            <h1 class="full center-text newbook-title">Matija</h1>
            <div class="full center-text newbook-author column-mini-top-pad">
              Drago Hedl
            </div>
            <p class="full center-text newbook-intro">
              Knjiga Matija, žanrovski najbliža dnevniku, tragična je Hedlova
              priča o samoubojstvu sina Matije, doktora biokemije i znanstvenog
              suradnika na američkom Yaleu.
            </p>
          </div>

          <div class="forty tablet-full flex flex-responsive center">
            <img
              src="@/assets/img/tg_book_mockup_hedl.png"
              alt="Naslovnica nove knjige Drage Hedla 'Matija'"
            />
          </div>
          <div class="fifth tablet-full flex flex-responsive center">
            <div
              class="full relative center-text newbook-price bigger-newbook-price"
            >
              24,99€
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
          <p class="full center-text">
            Scena kojom Drago Hedl kreće nezabilježena je u našoj književnosti i
            filmu. Nema je ni u onoj mnogo široj, razgovornoj prozi naših
            života. A nema je naprosto zato što pripada neizgovorivom, onom za
            što ljudi ne žele znati, jer misle da to, ako oni ne znaju, nikad
            neće dogoditi. Čovjek odlazi da svojoj bivšoj ženi kaže da im se
            ubio sin jedinac (...) “Matija” je knjiga o Americi, jedna od boljih
            i strašnijih naših knjiga o toj velikoj, izmaštanoj zemlji.
          </p>
          <p class="full center-text">
            To je knjiga o Osijeku, o ratu, o nastojanjima tolikih naših
            roditelja da spasu svoje sinove od toga da postanu ratni heroji.
            Mala tužna knjiga o Hrvatskoj, koja se uslijed rata i poslijeratnog
            beznađa rasula po svijetu. “Matija” je knjiga o plaču i očaju, o
            čovjekovoj potrebi da artikulira svoj očaj, o toj čudnoj i
            nezaustavljivoj potrebi čovjekova uspravljanja. To je knjiga o onom
            što živa ljudska usta ne mogu izreći. Ne mogu, ali moraju.
          </p>
          <p class="full center-text bold italic">
            Miljenko Jergović, iz pogovora
          </p>
        </div>
      </div>
    </div>
    <div class="full center">
      <img
        src="@/assets/img/extras/people/hedl_book.png"
        alt="Autor knjige Drago Hedl"
        class="bookauthor-headtop"
      />
    </div>
    <div class="full flex relative book-quote">
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center-text">
          <p>
            „Knjiga o ocu i sinu. I knjiga o tome koliko je život lijep. I
            koliko u životu boli sve što je lijepo“
          </p>
          <div class="quote-author full center-text">- Miljenko Jergović</div>
        </div>
      </div>
      <img src="@/assets/img/zagreb_skyline.jpg" alt="Ilustracija Zagreba" />
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <p class="full center-text">
          Kao posvećeni neimar tuge Drago Hedl je u sebi sabrao rubno iskustvo
          oca koji se suočava sa drastičnim činom gubitka sina, iz sebe izbacio
          i napisao „Matiju“. Knjiga je to željeznog novinarskog dokumentarizma
          prepunog tjeskobne autobiografije ali i čudesna romaneskna građa jedne
          opore fikcije koja se zaista dogodila. Vijest o samoubojstvu sina koja
          jedne jesenje zore stiže iz Amerike i udara oca u pleksus, gusto je
          izložena u potresnu građu.
        </p>
        <p class="full center-text">
          Vulkanskim darom Hedl barata jednostavno, stišano i golo. Nebranjeno
          nas darujući pričom u kojoj se mnogi slojevi beskonačno otvaraju.
          „Matija“ je priča o jednom fragilnom vječnom dječaku rođenom za
          metafiziku glazbe, ranjivo izloženom kastinskom mehanizmu američke
          znanstvene zajednice. „Matija“ je i priča o bljeskovima, usponima i
          beznadežnim nasukavanjima jednog braka, o samoćama i strahovima,
          politička i sociološka analiza američkog, jugoslavenskog i hrvatskog
          društva, bitnički putopis po drumovima izgubljenosti.
        </p>
        <p
          class="full center-text bold italic column-bottom-pad mobile-bottom-pad"
        >
          Davor Špišić
        </p>
        <p class="center-text bold">
          Izdavač: Telegram Media Grupa<br />
          Uvez: Tvrdi<br />
          Broj stranica: 358<br />
          Godina izdanja: 2024.<br />
          Dimenzije: 160 x 235 mm<br />
          Urednik: Miran Pavić <br />
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="matija"
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
        .get('/pretplate/get_price/?book=matija', {
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
      title: 'Drago Hedl: Matija',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Knjiga Matija, žanrovski najbliža dnevniku, tragična je Hedlova priča o samoubojstvu sina Matije, doktora biokemije i znanstvenog suradnika na američkom Yaleu',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Knjiga Matija, žanrovski najbliža dnevniku, tragična je Hedlova priča o samoubojstvu sina Matije, doktora biokemije i znanstvenog suradnika na američkom Yaleu',
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
          content: 'Drago Hedl: Matija',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/tg_share_hedl.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/knjiga/drago-hedl-matija/',
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
          href: 'https://www.telegram.hr/knjiga/drago-hedl-matija/',
        },
      ],
    }
  },
}
</script>
