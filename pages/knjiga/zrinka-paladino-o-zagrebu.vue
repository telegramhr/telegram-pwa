<template>
  <div class="main-container flex red-header-page single-article knjiga-page">
    <div class="full flex tg-red">
      <theader></theader>
    </div>
    <div class="full flex relative">
      <div
        class="full flex relative center knjiga-header article-head mobile-side-pad column-full-pad"
      >
        <div class="container relative flex">
          <h3 class="full center-text overtitle">Ekskluzivna ponuda</h3>
          <h1 class="full center-text">Nova knjiga Zrinke Paladino</h1>
          <p class="full center-text">
            Čuvena arhitektica, konzervatorica i kolumnistica donosi veliku
            kroniku Zagreba, njegove arhitekture, devastacije, i društva. Sve
            kolumne prvi put na jednom mjestu, obogaćene novim zapisima,
            ilustracijama i fotografijama.
          </p>
        </div>
      </div>
      <div class="full flex relative single-article-body">
        <div class="container flex relative mobile-side-pad">
          <div
            class="full flex knjiga-hero pretplata-packbox relative column-full-pad"
          >
            <div class="full flex knjiga-cover">
              <img
                src="@/assets/img/paladino_cover.jpg"
                alt="Naslovnica nove knjige Zrinke Paladino 'O Zagrebu i... Telegramovih 48 (+2)'"
              />
            </div>
            <div class="full flex knjiga-features">
              <h1 class="full relative center-text">Cijena: 179 kn</h1>
              <h2 class="full relative center-text">
                Za Telegram pretplatnike: {{ free ? 'Besplatno' : '149kn' }}
              </h2>
              <div class="full knjiga-keypoints">
                <p class="full center-text">Broj stranica: 378</p>
                <p class="full center-text">Godinja izdavanja: 2021.</p>
                <p class="full center-text">Izdavač: Telegram Media Grupa</p>
              </div>
              <div class="full center btn-parent">
                <div
                  v-if="$store.state.user.email"
                  class="btn animate"
                  @click="buy"
                >
                  {{ free ? 'Preuzmite' : 'Kupite' }}
                </div>
                <div v-else class="btn animate" @click="login">
                  Prijavite se kako bi kupili
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative book-quote">
        <div class="container relative mobile-side-pad column-full-pad">
          <div class="full center-text">
            <p>
              „Povjesničarka arhitekture Zrinka Paladino nesvakidašnja je pojava
              na hrvatskoj arhitektonskoj sceni“
            </p>
            <div class="quote-author full center-text">
              - dr.sc. Ana Šverko, Institut za povijest umjetnosti
            </div>
          </div>
        </div>
        <img src="@/assets/img/zagreb_skyline.jpg" alt="Ilustracija Zagreba" />
      </div>
    </div>
    <div class="full flex relative single-article-body">
      <div class="container relative mobile-side-pad column-full-pad">
        <h2 class="full relative">Iz knjige</h2>
        <div class="full flex gallery-content relative">
          <VueSlickCarousel
            ref="carousel"
            :arrows="false"
            style="display: block; width: 100%"
          >
            <figure class="full relative">
              <img src="@/assets/img/paladino1.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino2.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino3.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino4.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino5.jpg" aria-hidden="true" />
            </figure>
            <figure class="full relative">
              <img src="@/assets/img/paladino6.jpg" aria-hidden="true" />
            </figure>
          </VueSlickCarousel>

          <div
            class="gallery-left center gallery-arrow desktop-only animate"
            @click="$refs.carousel.prev()"
          >
            <i class="far fa-angle-left animate"></i>
          </div>
          <div
            class="gallery-right center gallery-arrow desktop-only animate"
            @click="$refs.carousel.next()"
          >
            <i class="far fa-angle-right animate"></i>
          </div>
        </div>
        <h2 class="full relative">O autorici</h2>
        <p>
          Zrinka Paladino (48) rođena je u Splitu. Od četvrte godine živi u
          Zagrebu, gdje je 1997. diplomirala na Arhitektonskom fakultetu te
          2011. godine doktorirala na Filozofskom fakultetu Sveučilišta u
          Zagrebu.
        </p>
        <p>
          U znanstveno zvanje višeg znanstvenog suradnika u području tehničkih
          znanosti – polje arhitektura i urbanizam izabrana je 2013. godine. U
          znanstveno-nastavno zvanje docenta na Građevinskom fakultetu
          Sveučilišta u Mostaru, na kojem predaje kolegije ”Povijest umjetnosti
          III” i ”Suvremena umjetnost”, izabrana je 2018. godine.
        </p>
        <p>
          Na mjestu stručne suradnice za konzervatorski nadzor zagrebačkog
          Gradskog zavoda za zaštitu spomenika kulture i prirode radila je od
          2001. do 2007. godine godine, nakon čega je od 2010. do 2017. godine
          radila i na mjestu zamjenice pročelnika Zavoda.
        </p>
        <p>
          Od rujna 2017. godine kolumnistica je Telegrama, za koji piše članke o
          hrvatskoj baštinjenoj i suvremenoj arhitekturi te umjetnosti uopće.
          Autorica je većeg broja znanstvenih i stručnih radova te je aktivna
          sudionica različitih znanstvenih i stručnih skupova s područja
          povijesti hrvatske arhitekture, a posebno zaštite hrvatske
          graditeljske baštine. Izdržljiva je majka trojice sinova.
        </p>
        <h3 class="full center-text overtitle exclusive-msg">
          <span>Knjiga dostupna samo na Telegramu</span>
        </h3>
      </div>
    </div>

    <braintree v-show="showModal" @close="close"></braintree>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Paladino',
  data() {
    return {
      access: {},
      showModal: false,
    }
  },
  computed: {
    free() {
      return (
        this.access &&
        this.access.resource &&
        this.access.resource.rid === 'BR92VTWM' &&
        this.access.start_date < 1619820000
      )
    },
  },
  mounted() {
    const that = this
    window.tp.push([
      'init',
      function () {
        const user = window.tp.pianoId.getUser()
        if (user) {
          window.tp.api.callApi('/access/list', {}, function (response) {
            if (response.data) {
              if (response.data[0]) {
                that.access = response.data[0]
              }
            }
          })
        }
      },
    ])
  },
  methods: {
    buy() {
      this.showModal = true
    },
    close() {
      this.showModal = false
    },
    login() {
      const _that = this
      window.tp.pianoId.show({
        screen: 'login',
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
      title: 'Zrinka Paladino - O Zagrebu i... Telegramovih 48',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Čuvena arhitektica, konzervatorica i kolumnistica donosi veliku kroniku Zagreba, njegove arhitekture, devastacije, i društva. Sve kolumne prvi put na jednom mjestu, obogaćene novim zapisima, ilustracijama i fotografijama. ',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            ' Čuvena arhitektica, konzervatorica i kolumnistica donosi veliku kroniku Zagreba, njegove arhitekture, devastacije, i društva. Sve kolumne prvi put na jednom mjestu, obogaćene novim zapisima, ilustracijama i fotografijama. ',
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
          content: 'Zrinka Paladino: O Zagrebu i ... Telegramovih 48',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/_nuxt/assets/img/paladino_cover.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegra.hr/knjiga/zrinka-paladino-o-zagrebu',
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
          href: 'https://www.telegra.hr/knjiga/zrinka-paladino-o-zagrebu',
        },
      ],
    }
  },
}
</script>

<style scoped>
.knjiga-header {
  padding-top: 48px;
}
.knjiga-header h3.overtitle,
.exclusive-msg {
  font-size: 14px;
  margin-top: 0px;
  font-size: 0.7rem;
  text-transform: uppercase;
}
.knjiga-hero {
  margin-top: 45vw;
  max-width: 100%;
  padding-bottom: 48px;
}
.exclusive-msg span {
  padding-top: 3px;
  margin-top: 24px;
  padding-bottom: 4px;
  display: inline-block;
  border-top: 2px solid #ae3737;
  border-bottom: 2px solid #ae3737;
}
.knjiga-header h1 {
  font-size: 64px;
  font-size: 3.2rem;
  margin-bottom: 16px;
}
.knjiga-cover {
  padding: 0px 15vw;
  margin-top: -40vw;
}
.knjiga-cover img {
  margin: 0 auto;
  width: 100%;
}
.book-quote {
  margin-top: 32px;
  padding-top: 24px;
  margin-bottom: 24px;
  background-color: #212121;
  color: white;
  overflow: hidden;
}
.book-quote p {
  font-size: 18px;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.3em;
  margin-top: 24px;
  position: relative;
  z-index: 5;
}
.quote-author {
  margin-top: 16px;
  font-style: italic;
  font-size: 14px;
  font-size: 0.7rem;
  position: relative;
  z-index: 5;
}
.knjiga-hero {
  border: 1px solid #c8c8c8;
}
.knjiga-hero .btn {
  font-size: 20px;
  font-size: 1rem;
}
.knjiga-features h1 {
  margin-top: 32px;
  font-size: 28px;
  font-size: 2.4rem;
  line-height: 1em;
}
.knjiga-features h2 {
  margin-top: 16px;
}
.book-quote img {
  width: 200vw;
  max-width: 200vw;
  position: relative;
  left: -50vw;
}
.single-article .single-article-body .knjiga-keypoints p {
  opacity: 0.7;
  font-size: 14px;
  font-size: 0.7rem;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  margin-bottom: 0px;
  text-transform: uppercase;
}
.knjiga-page .gallery-content {
  padding: 0px;
}
@media screen and (min-width: 1025px) {
  .knjiga-cover {
    padding: 0px;
    margin-top: -200px;
  }
  .knjiga-hero {
    margin-top: 170px;
  }
  .knjiga-cover img {
    max-width: 300px;
  }
  .knjiga-header h1 {
    font-size: 74px;
    font-size: 3.7rem;
  }
  .knjiga-header {
    padding-top: 5vw;
  }
  .knjiga-header h3.overtitle {
    font-size: 18px;
    font-size: 0.9rem;
  }
  .book-quote p {
    font-size: 36px;
    font-size: 1.8rem;
  }
  .book-quote img {
    width: 100%;
    max-width: 100%;
    margin-top: -48px;
    left: auto;
  }
}
</style>
