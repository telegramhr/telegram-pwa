<template>
  <div
    class="main-container flex red-header-page single-article knjiga-page reset-flex-order"
  >
    <div class="full flex tg-red">
      <theader
        headline="Rajko Grlić: Neispričane priče, novo izdanje, novo izdanje"
      ></theader>
    </div>
    <div class="full flex relative reset-flex-order">
      <div
        class="full flex relative center knjiga-header article-head mobile-side-pad column-full-pad"
      >
        <div class="container relative flex single-article-body">
          <div class="noththree full center-text overtitle">
            Telegram naklada
          </div>
          <h1 class="full center-text">Neispričane priče</h1>
          <div class="nothfour full center-text">
            (novo i nadopunjeno izdanje)<br />Rajko Grlić
          </div>
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
                src="@/assets/img/tg_book_mockup_grlic.png"
                alt="Naslovnica nove knjige Rajka Grlića 'Neispričane priče'"
              />
            </div>
            <div class="full flex knjiga-features">
              <div class="full relative center-text big-book-price bold">
                <span class="faded strikethrough">23,76€</span> 15,79€
              </div>
              <div class="full relative center-text big-book-price">
                (<span class="faded strikethrough">179 kn</span> 119 kn) <br />
                posebna cijena za sve pretplatnike Telegrama
              </div>
              <div class="nothfour full relative center-text">
                U prodaji od 21.10., naručite još danas i osigurajte svoj
                primjerak. Besplatna dostava unutar Hrvatske.
              </div>
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
                <!--<div class="btn animate">Rasprodano!</div>-->
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
          Novo, dopunjeno izdanje hit-knjige čuvenog redatelja Rajka Grlića,
          koja se rasprodala odmah nakon što se pojavila u hrvatskim knjižarama.
          U ovom golemom izdanju od 436 stranica, koje izlazi u Telegramovoj
          nakladi, Grlić je pripremio još dvadeset i jednu novu, nikad
          objavljenu priču. Kako kaže urednica Marina Vujčić: „na sreću svih nas
          koji vole čitati ovog režisera i pripovjedača“.
        </p>
      </div>
    </div>
    <div class="full flex relative book-quote">
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center-text">
          <p>
            „Kad su iz memorije ili iz sadašnjosti izronile nove priče vrijedne
            bilježenja, one više nisu mogle ostati neispričane pa je novo,
            prošireno izdanje bilo prirodan slijed događaja. Na sreću svih nas
            koji vole čitati ovog režisera i pripovjedača“
          </p>
          <div class="quote-author full center-text">- Marina Vujčić</div>
        </div>
        <div class="full center-text column-top-pad">
          <p>
            „Lijepo, veličanstveno, vrijedno svake buduće zavisti koju ćete
            osjetiti prema ovom čovjeku!“
          </p>
          <div class="quote-author full center-text">- Miljenko Jergović</div>
        </div>
        <div class="full center-text column-top-pad">
          <p>
            „Iznenađenje sezone. Zanimljivo, inspirativno i dobro napisano
            štivo.“
          </p>
          <div class="quote-author full center-text">- Slavenka Drakulić</div>
        </div>
        <div class="full center-text column-top-pad">
          <p>
            „Nezaobilazan dokument vremena, vrhunska memoaristika te filmski
            živopisnim i lijepim jezikom napisana književnost.“
          </p>
          <div class="quote-author full center-text">- Branimir Pofuk</div>
        </div>
      </div>
      <img src="@/assets/img/zagreb_skyline.jpg" alt="Ilustracija Zagreba" />
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <p>
          „Predočena u formi filmskog pojmovnika, čiji su pojmovi dramaturški
          organizirani kao mali scenariji, ili kao svojevrsna potraga za
          scenarijem, Grlićeva knjiga istovremeno je piščeva autobiografija,
          fizička, intelektualna i duhovna, rasprava o jednom prelomljenom i
          polomljenom vremenu, moj obračun s njima u kojem se Grlić nesmiljeno i
          s fascinantnim – i u svakom pogledu pozitivnim, ljekovitim
          zlopamćenjem razračunava sa svima koji su se, da li iz hobističkog
          domoljublja ili iz stvarnih uvjerenja, bavili njegovim progonom, ali
          to je i knjiga, blaga i nježna, na trenutke gotovo poetski minuciozna,
          čiji pisac u svemu, u baš svakoj životnoj okolnosti, po kušava pronaći
          film. I što je najbolje, on ga i nalazi: koliko god pojedine rečenice,
          scene i pasaži bili nesnimljivi, i koliko god ništa od svega toga neće
          u formalnom smislu postati film, pisac čitatelja uspijeva navesti da
          mu se u glavi odvije jedin- stvena filmska predstava, u kojoj se, s
          unutrašnje strane oka, odigra cijeli Grlićev život. Lijepo,
          veličanstveno, vrijedno svake buduće zavisti koju ćete osjetiti prema
          ovom čovjeku!“
        </p>
        <p><i>Miljenko Jergović</i></p>
        <p></p>
        <p class="center-text bold">
          Izdavač: Telegram Media Grupa<br />
          Uvez: Meki<br />
          Broj stranica: 439<br />
          Godina izdanja: 2022.<br />
          Dimenzije: 160 x 235 mm<br />
          Urednica: Marina Vujčić<br />
          ISBN 978-953-49501-2-8
        </p>
      </div>
    </div>

    <braintree
      v-if="showModal"
      :price="price"
      book="rajko"
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
        .get('/pretplate/get_price/?book=rajko', {
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
      title: 'Rajko Grlić: Neispričane priče, novo izdanje',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Novo, dopunjeno izdanje hit-knjige čuvenog redatelja Rajka Grlića',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Novo, dopunjeno izdanje hit-knjige čuvenog redatelja Rajka Grlića',
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
          content: 'Rajko Grlić: Neispričane priče, novo izdanje',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2022/10/tg-share-grlic.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content:
            'https://www.telegram.hr/knjiga/rajko-grlic-neispricane-price/',
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
          href: 'https://www.telegram.hr/knjiga/rajko-grlic-neispricane-price/',
        },
      ],
    }
  },
}
</script>
