<template>
  <div class="main-container flex">
    <div class="full flex tg-red">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full flex pretplata-page">
      <div class="full flex relative pretplata-page-content">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">Telegram, svaki dan, u vašem inboxu.</h1>
          <p class="full center-text pretplata-tagline">
            Lorem ipsum dolor sit amet sit lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <div class="full flex relative">
      <div
        class="container newsletters-list flex relative stretch mobile-side-pad"
      >
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-dnevni">
                <img
                  src="@/assets/img/tg_newsletter_avatars_dnevni_text.png"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Svaki dan</h3>
                <h2 class="full newsletter-title">Dnevni Telegram</h2>
                <h3 class="full subtitle">Personaliziran za čitatelja</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                otkrivaju krupne afere radi kojih odlaze ministri i objašnjavaju
                kontekst dnevnih događaja.
              </p>
              <div
                v-if="hasSub(2128)"
                class="btn animate btn-unsub"
                @click="unsub(2128)"
              >
                Odjavi me <i class="fal fa-minus-square"></i>
              </div>
              <div v-else class="btn animate" @click="sub(2128)">
                Prijavi me <i class="fal fa-plus-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-tjedni">
                <img
                  src="@/assets/img/tg_newsletter_avatars_propustili_text.png"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Ponedjeljkom</h3>
                <h2 class="full newsletter-title">Možda ste propustili</h2>
                <h3 class="full subtitle">
                  Vijesti koje možda niste pročitali
                </h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                otkrivaju krupne afere radi kojih odlaze ministri i objašnjavaju
                kontekst dnevnih događaja.
              </p>
              <div
                v-if="hasSub(2554)"
                class="btn animate btn-unsub"
                @click="unsub(2554)"
              >
                Odjavi me <i class="fal fa-minus-square"></i>
              </div>
              <div v-else class="btn animate" @click="sub(2554)">
                Prijavi me <i class="fal fa-plus-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-tag">
                <img
                  src="@/assets/img/tg_newsletter_avatars_vikend_text.png"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Petak</h3>
                <h2 class="full newsletter-title">Vikend na Telegramu</h2>
                <h3 class="full subtitle">Personaliziran za čitatelja</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                otkrivaju krupne afere radi kojih odlaze ministri i objašnjavaju
                kontekst dnevnih događaja.
              </p>
              <div
                v-if="hasSub(2555)"
                class="btn animate btn-unsub"
                @click="unsub(2555)"
              >
                Odjavi me <i class="fal fa-minus-square"></i>
              </div>
              <div v-else class="btn animate" @click="sub(2555)">
                Prijavi me <i class="fal fa-plus-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="full column-horizontal-pad">
          <h2 class="full flex section-title">Komentari i analize</h2>
        </div>
        <div class="full flex newsletter-komentari relative">
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2017/09/goranko_fizulic.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Redovito izdanje</h3>
                  <h2 class="full newsletter-title">Goranko Fižulić</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Goranko Fižulić poduzetnik je od 1984. godine. Jedan je od
                  utemeljitelja HSLS-a 1989. Od 1992. do 1995., obnašao je
                  dužnost saborskog zastupnika, a jedan je od utemeljitelja
                  Hrvatske udruge poslodavaca 1993. godine. Ministar
                  gospodarstva bio je od 2000. do 2003., a osam godina je proveo
                  na čelu Hrvatskog jedriličarskog saveza, od 2000. do 2008.
                  Objavljuje redovne kolumne i analize u Telegramu.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2019/06/tg-sanja-modric.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Redovito izdanje</h3>
                  <h2 class="full newsletter-title">Sanja Modrić</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Diplomirala Komparativnu književnost i Engleski jezik i
                  književnost na Filozofskom fakultetu u Zagrebu. Radila u
                  zagrebačkom dopisništvu Borbe (reporter), Slobodnoj Dalmaciji
                  (komentatorica), Novom listu (komentatorica, pomoćnica glavnog
                  urednika), Tjedniku (novinarka, glavna urednica), Jutarnjem
                  listu (urednica Politike, pomoćnica glavnog urednika). Pisala
                  za Feral i niz drugih izdanja.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2017/06/divo_durovic_2.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Jednom tjedno</h3>
                  <h2 class="full newsletter-title">Đivo Đurović</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Đivo Đurović, urednik, novinar i analitičar, za Telegram će
                  svaki tjedan pisati iz New Yorka gdje je, na Sveučilištu
                  Columbia, magistrirao međunarodne odnose. Na Institutu
                  Harriman istog sveučilišta stekao je i diplomu iz ruskih,
                  eurazijskih i istočnoeuropskih studija.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2020/04/repecki-marko1.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Jednom tjedno</h3>
                  <h2 class="full newsletter-title">Marko Repecki</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                  istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                  otkrivaju krupne afere radi kojih odlaze ministri i
                  objašnjavaju kontekst dnevnih događaja.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2017/09/dragan_markovina.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Jednom tjedno</h3>
                  <h2 class="full newsletter-title">Dragan Markovina</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                  istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                  otkrivaju krupne afere radi kojih odlaze ministri i
                  objašnjavaju kontekst dnevnih događaja.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="full column-horizontal-pad">
          <h2 class="full flex section-title">Telegram autori</h2>
        </div>
        <div class="full flex newsletter-komentari relative">
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2017/09/drago_hedl-1.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Redovito izdanje</h3>
                  <h2 class="full newsletter-title">Drago Hedl</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Drago Hedl rođen je 1950. godine u Osijeku, a novinarstvom se
                  profesionalno bavi od 1980., kad se zapošljava u Glasu
                  Slavonije. Dužnost glavnog urednika tog lista obnašao je od
                  1986. do 1991., a osim za Glas Slavonije, u dosadašnjoj
                  karijeri pisao je za Slobodnu Dalmaciju, Novi list, Feral
                  Tribune i Jutarnji list, u kojem je bio zaposlen od 2008.
                  godine kao jedan od glavnih istraživačkih novinara.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2017/09/ana_raic_3.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Redovito izdanje</h3>
                  <h2 class="full newsletter-title">Ana Raić Knežević</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Ana je novinarka s dugogodišnjim iskustvom. Karijeru je
                  započela 1992. u Slobodnoj Dalmaciji, pa nastavila na
                  Hrvatskom radiju i Novom listu. Gotovo da nema većeg sudskog
                  procesa što ga nije pratila ili teškog kriminala o kojem nije
                  izvještavala.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2019/09/tg_krsul.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Redovito izdanje</h3>
                  <h2 class="full newsletter-title">Dora Kršul</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                  istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                  otkrivaju krupne afere radi kojih odlaze ministri i
                  objašnjavaju kontekst dnevnih događaja.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2017/09/mladen_plese_3.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Redovito izdanje</h3>
                  <h2 class="full newsletter-title">Mladen Pleše</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                  istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                  otkrivaju krupne afere radi kojih odlaze ministri i
                  objašnjavaju kontekst dnevnih događaja.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2018/11/tg_irena.png"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Redovito izdanje</h3>
                  <h2 class="full newsletter-title">Irena Frlan Gašparović</h2>
                  <h3 class="full subtitle">Puni članci autora</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                  istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                  otkrivaju krupne afere radi kojih odlaze ministri i
                  objašnjavaju kontekst dnevnih događaja.
                </p>
                <div class="btn animate">
                  Prijavi me <i class="fal fa-plus-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Newsletters',
  data() {
    return {
      api_key: 'V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
      lists: {
        2128: false,
        2554: false,
        2555: false,
      },
    }
  },
  mounted() {
    this.checkAccess()
  },
  methods: {
    checkAccess() {
      Object.keys(this.lists).forEach((key) => {
        if (this.$store.state.user.email && key) {
          this.$axios
            .get(
              `https://api-esp.piano.io/tracker/securesub/email/${this.$store.state.user.email}/ml/${key}?api_key=${this.api_key}`
            )
            .then(() => {
              this.lists[key] = true
            })
            .catch(() => {
              this.lists[key] = false
            })
        }
      })
    },
    hasSub(mlid) {
      return this.lists[mlid]
    },
    sub(mlid) {
      if (!this.$store.state.user.email) {
        // no user, prompt to login
        const _that = this
        window.tp.pianoId.show({
          screen: 'login',
          width: window.innerWidth > 720 ? 600 : 375,
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data.user)
            // window.location.reload()
            _that.sub(mlid)
          },
        })
      } else {
        this.$axios
          .post(
            'https://api-esp.piano.io/tracker/securesub?api_key=V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
            {
              email: this.$store.state.user.email,
              mlids: [mlid],
            }
          )
          .then(() => {
            this.lists[mlid] = true
          })
      }
    },
    unsub(mlid) {
      this.$axios
        .delete(
          'https://api-esp.piano.io/tracker/securesub?api_key=V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
          {
            data: {
              email: this.$store.state.user.email,
              mlids: [mlid],
            },
          }
        )
        .then(() => {
          this.lists[mlid] = false
        })
    },
  },
}
</script>

<style scoped>
.newsletter-listing {
  padding-top: 16px;
}
.pretplata-page-content {
  margin-bottom: 20px;
}
.section-title {
  margin-bottom: 0px;
}
.newsletter-header {
  flex-wrap: nowrap;
  padding: 16px;
  align-items: flex-end;
}
.newsletter-box {
  margin-top: -48px;
  border: 1px solid #c8c8c8;
  padding: 16px;
  padding-top: 42px;
}
.newsletter-header > .full {
  width: auto;
}
.newsletter-avatar {
  padding: 0px;
  width: 100px;
  height: 100px;
  z-index: 5;
  background-image: url('@/assets/img/yellow_paper.png');
  margin-right: 16px;
  align-items: flex-end;
  display: flex;
}
.newsletter-avatar img {
  object-fit: contain;
}
.newsletter-komentari .newsletter-avatar img {
  filter: grayscale(100);
}
.newsletter-komentari .third:nth-child(2n-1) .newsletter-avatar {
  background-image: url('@/assets/img/green_paper.png');
}
.newsletter-komentari .third:nth-child(3n) .newsletter-avatar {
  background-image: url('@/assets/img/blue_paper.png');
}
.newsletter-tjedni {
  background-color: #c4ded8;
}
.newsletter-header .overtitle,
.newsletter-header .subtitle {
  font-size: 11px;
  padding-left: 1px;
  font-size: 0.55rem;
  text-transform: uppercase;
}
.newsletter-header .overtitle {
  color: #ae3737;
  margin-bottom: 4px;
}
.newsletter-header .subtitle {
  padding-top: 16px;
  opacity: 0.5;
  padding-bottom: 8px;
}
.newsletter-tag {
  background-color: #c4decf;
}
.newsletter-title {
  font-size: 1.6rem;
  letter-spacing: -0.05em;
}
.newsletter-box .btn {
  margin-top: 16px;
  cursor: pointer;
  background-color: #ae3737;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  font-size: 0.65rem;
  padding: 5px 20px;
}
.newsletter-box .btn i {
  margin-left: 8px;
}
.newsletter-box .btn-unsub {
  border: 1px solid #111;
  background-color: transparent;
  color: #111;
}
.newsletter-box p {
  line-height: 1.55em;
  color: #333;
}
@media screen and (max-width: 1025px) {
  .newsletter-title {
    font-size: 1.6rem;
  }
}
</style>
