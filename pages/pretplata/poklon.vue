<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Ovog Božića, poklonite pretplatu na Telegram."
      ></theader>
    </div>
    <div class="full flex pretplata-page-content">
      <div class="full flex relative">
        <div
          class="
            container
            relative
            flex
            mobile-side-pad
            stretch
            column-full-pad
          "
        >
          <h1 class="full center-text">
            Ovog Božića, poklonite pretplatu na Telegram.
          </h1>
          <p class="full center-text smaller-pretplata-tagline">
            Zamislite poklon kojeg će vama drage osobe otvarati svakog dana,
            sljedećih 365 dana? Poklonite im pretplatu na Telegram i
            neograničeno čitanje svih naših specijala, velikih priča, komentara
            i analiza. Najbolji uvid u sve što je važno, za one koji su vama
            važni.
          </p>
        </div>
      </div>
      <div class="full flex relative pretplata-sale">
        <div
          class="
            container
            center
            relative
            mobile-side-pad
            pretplata-packs pretplata-packboxes
          "
        >
          <div
            class="half flex-responsive flex relative pretplata-packbox stretch"
          >
            <img
              class="ps-xmas4"
              src="@/assets/img/tg_xmas_2.png"
              aria-hidden="true"
            />
            <div class="full flex overtitle-parent">
              <h3 class="overtitle">Standard</h3>
            </div>
            <h2 class="full">468kn</h2>
            <h4 class="full center-text undertitle">godišnja pretplata</h4>
            <div class="full pretplata-benefits">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                najbolji poklon ove sezone
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telegrama
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                specijalni newsletteri
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                surfanje s manje oglasa
              </p>
            </div>
            <div class="full center btn-parent" @click="checkout(one)">
              <div class="btn animate">Odaberi</div>
            </div>
          </div>
          <div
            class="half flex-responsive flex relative pretplata-packbox stretch"
          >
            <img
              class="ps-xmas3"
              src="@/assets/img/tg_xmas_1.png"
              aria-hidden="true"
            />
            <div class="full flex overtitle-parent">
              <h3 class="overtitle">Premium</h3>
            </div>
            <h2 class="full">588kn</h2>
            <h4 class="full center-text undertitle">godišnja pretplata</h4>
            <div class="full pretplata-benefits">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                najbolji poklon ove sezone
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telegrama
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telesporta
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                specijalni newsletteri
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                surfanje bez oglasa
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                gratis knjiga u izdanju Telegrama<a
                  href="#knjige-disclaimer"
                  onclick="document.getElementById('knjige-disclaimer').open = true;"
                  >*</a
                >
              </p>
            </div>
            <div class="full center btn-parent" @click="checkout(two)">
              <div class="btn animate">Odaberi</div>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex pretplata-faq">
        <div
          class="
            container
            relative
            flex
            mobile-side-pad
            column-full-pad
            single-article-body
          "
        >
          <h2 class="full">Često postavljana pitanja</h2>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kako mogu nekome pokloniti pretplatu?
            </summary>
            <p>
              Vrlo je jednostavno: odaberite jedan od dva paketa pretplate,
              Standard ili Premium, zatim upišite podatke osobe kojoj poklanjate
              pretplatu i svoje podatke za plaćanje. Po uspješno izvršenoj
              kupovini, Vaš poklon stići će emailom osobi kojoj ste pretplatu
              poklonili.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Što je pretplata na Telegram?
            </summary>
            <p>
              Pretplata na Telegram omogućuje pretplatnicima, ovisno o paketu,
              neograničeno čitanje Telegrama i Telesporta, ali i brojne druge
              benefite i funkcionalnosti poput surfanja bez oglasa, popusta i
              ekskluzivnih newslettera.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kako mogu platiti pretplatu koju poklanjam?
            </summary>
            <p>
              Pretplatu možete sigurno platiti svim Maestro, Mastercard, Visa i
              Diners karticama.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mogu li odabrati kada će poklon stići?
            </summary>
            <p>
              Možete, pri kupovini poklon pretplate bit će Vam ponuđeno želite
              li da poklon stigne odmah ili neki drugi dan, naprimjer baš na
              Božić. Slobodno odaberite opciju koja Vama više odgovara, 365 dana
              pretplate počinje teći od dana kada ju osoba kojoj ste pretplatu
              poklonili aktivira.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mogu li kupiti više poklon pretplata?
            </summary>
            <p>
              Naravno, možete pokloniti koliko god pretplata želite. Jedino za
              svaki poklon trebate posebno unijeti podatke o primatelju.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kupujem poklon preko firme, mogu li dobiti R1 račun?
            </summary>
            <p>
              Naravno, samo nam se javite na pretplata@telegram.hr nakon što
              kupite poklon pretplatu online, a mi ćemo Vam izdati R1 račun.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Može li se pretplata čitati na svim uređajima?
            </summary>
            <p>
              Naravno, svaki pretplatnik može čitati Telegram na svakom uređaju,
              bio to mobitel, računalo ili tablet.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Može li osoba dijeliti poklonjenu pretplatu s drugima?
            </summary>
            <p>
              Ne, dijeljenje pretplate nije dopušteno, a u slučaju sumnje u
              dijeljenje pretplate zadržavamo pravo zatvoriti korisnički račun.
            </p>
          </details>
          <details id="knjige-disclaimer" class="full flex relative">
            <summary class="full flex relative">
              Što će se dogoditi s pretplatom kada istekne?
            </summary>
            <p>
              Po isteku godinu dana, pretplata će postati neaktivna te ćete ju
              moći ili Vi ponovno pokloniti, ili osoba kojoj je poklonjena
              produžiti.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Ne mogu pronaći odgovor na svoje pitanje.
            </summary>
            <p>
              Javite nam se na
              <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a> i
              odgovorit ćemo vam u najkraćem roku.
            </p>
          </details>
        </div>
      </div>
      <div class="full flex relative">
        <div class="container relative flex">
          <div
            class="
              pretplata-keypoint
              fourth
              flex-responsive
              column-full-pad
              mobile-side-pad
            "
          >
            <a class="full flex relative" href="#keypoint-autori">
              <img
                src="@/assets/img/tg_pretplata_mini_vizual_autori.jpg"
                aria-hidden="true"
              />
              <div class="keypoint-text full center">
                <h3>Vrhunski autori</h3>
              </div>
            </a>
          </div>
          <div
            class="
              pretplata-keypoint
              fourth
              flex-responsive
              column-full-pad
              mobile-side-pad
            "
          >
            <a class="full flex relative" href="#keypoint-korupcija">
              <img
                src="@/assets/img/tg_pretplata_mini_vizual_korupcija.jpg"
                aria-hidden="true"
              />
              <div class="keypoint-text full center">
                <h3>Otkrivanje korupcije</h3>
              </div>
            </a>
          </div>
          <div
            class="
              pretplata-keypoint
              fourth
              flex-responsive
              column-full-pad
              mobile-side-pad
            "
          >
            <a class="full flex relative" href="#keypoint-istrazivacki">
              <img
                src="@/assets/img/tg_pretplata_mini_vizual_istrazivacki.jpg"
                aria-hidden="true"
              />
              <div class="keypoint-text full center">
                <h3>Istraživački specijali</h3>
              </div>
            </a>
          </div>
          <div
            class="
              pretplata-keypoint
              fourth
              flex-responsive
              column-full-pad
              mobile-side-pad
            "
          >
            <a class="full flex relative" href="#keypoint-inspiracija">
              <img
                src="@/assets/img/tg_pretplata_mini_vizual_inspiracija.jpg"
                aria-hidden="true"
              />
              <div class="keypoint-text full center">
                <h3>Inspirativne reportaže</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="keypoint-autori" class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Autorski pristup i dublji uvid u ključne društvene teme
              </h2>
              <p>
                Telegramovu ekipu čine renomirana imena i nagrađivani novinari
                kao što su Drago Hedl, Sanja Modrić, Andrej Dimitrijević, Ana
                Raić Knežević, Jasmin Klarić, Marko Repecki, Dora Kršul, Goranko
                Fižulić, Aleksandar Holiga, Mladen Pleše, Vjekoslav Skledar,
                Đivo Đurović i mnogi drugi. A želimo se, naravno, i pojačati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="keypoint-korupcija"
        class="full flex relative sub-point alt-sub-point"
      >
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Bespoštedne istrage koje moćnici ne mogu ignorirati.
              </h2>
              <p>
                Telegramova otkrića zataškanih kvadrata, nesrazmjera primanja i
                imovine i drugih sumnjivih radnji dovela su do smjene
                potpredsjednika Vlade Tomislava Tolušića, ministra Kuščevića i
                ministra Kujundžića, kao i velikog broja lokalnih moćnika. No,
                ne mislimo stati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="keypoint-istrazivacki" class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Istraživački serijali i otvaranje tema o kojima se šuti.
              </h2>
              <p>
                Otkrili smo i otvorili stotine priča i tema, a među najvažnijima
                bio je istraživački serijal o zataškanom seksualnom
                uznemiravanju na Sveučilištu u Zagrebu, nakon čega nas je rektor
                Boras optužio da izmišljamo iskaze žrtava. A ima još puno tema
                koje želimo otvoriti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="keypoint-inspiracija"
        class="full flex relative sub-point alt-sub-point"
      >
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija_white.jpg"
              aria-hidden="true"
              class="contrast-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Inspirativne priče o ljudima koji guraju Hrvatsku naprijed.
              </h2>
              <p>
                Pozitivne priče o nevjerojatnim postignućima marginaliziranih
                pojedinca koji su nadvladali teške životne okolnosti i poslovnim
                uspjesima domaćih genija koji marljivo prkose močvarnom tlu
                hrvatske ekonomije. To su priče na kakve želimo stavljati sve
                više fokusa.
              </p>
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
  name: 'Pretplata',
  data() {
    return {
      terms: {
        TM6L5G5WJDIH: 468,
        TMC2CGIYTVI0: 588,
      },
    }
  },
  computed: {
    one() {
      return 'TM6L5G5WJDIH'
    },
    two() {
      return 'TMC2CGIYTVI0'
    },
  },
  mounted() {
    window.fbq = window.fbq || function () {}
    window.fbq('track', 'ViewContent', {
      content_ids: ['TM6L5G5WJDIH', 'TMC2CGIYTVI0'],
    })
    window.tp.push([
      'addHandler',
      'checkoutComplete',
      function (conversion) {
        if (conversion.rid === '') {
          this.$store.commit('user/setTerm', true)
        }
      },
    ])
  },
  methods: {
    checkout(termId) {
      if (this.$store.state.user.token) {
        this.checkout2(termId, -1)
      } else {
        const _that = this
        window.tp.pianoId.show({
          screen: 'register',
          width: window.innerWidth > 720 ? 600 : 375,
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data.user)
            // window.location.reload()
            _that.checkout2(termId, -2)
          },
        })
      }
    },
    checkout2(termId, back) {
      const _that = this
      window.fbq = window.fbq || function () {}
      window.fbq('track', 'InitiateCheckout', {
        content_ids: [termId],
        currency: 'HRK',
        value: this.terms[termId],
      })
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OFZJIAYJJ98S',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            closeOnLogout: true,
            complete: () => {
              _that.$store.dispatch('user/checkAccess')
              window.fbq('track', 'Purchase', {
                content_ids: [termId],
                currency: 'HRK',
                value: this.terms[termId],
              })
            },
          })
        },
      ])
    },
  },
  head() {
    return {
      title: 'Poklonite Telegram.hr Pretplatu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Odaberite jedan od paketa i podržite nas',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Odaberite jedan od paketa i podržite nas',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram.hr Pretplata',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata-poklon',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata-poklon',
        },
      ],
    }
  },
}
</script>
