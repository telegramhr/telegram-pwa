<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Poklonite Telegram pretplatu, poklon koji se otvara svaki dan"
      ></theader>
    </div>
    <div class="full flex pretplata-page-content">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">
            Poklonite Telegram pretplatu, <br />poklon koji se otvara svaki dan
          </h1>
          <p class="full center-text smaller-pretplata-tagline">
            Neovisno poklanjate li roditeljima, prijateljima ili poslovnim
            partnerima, Telegram poklon pretplata omogućuje 365 dana
            neograničenog pristupa svim našim specijalima, velikim pričama,
            komentarima i analizama. Najbolji uvid u sve što je važno, za one
            koji su vama važni.
          </p>
        </div>
      </div>
      <div class="full flex relative pretplata-sale">
        <div
          class="container center relative mobile-side-pad pretplata-packs pretplata-packboxes"
        >
          <div
            class="half flex-responsive flex relative pretplata-packbox stretch"
          >
            <div class="full flex overtitle-parent">
              <h3 class="overtitle">Standard</h3>
            </div>
            <h2 class="full">468kn</h2>
            <h4 class="full center-text undertitle">godišnja pretplata</h4>
            <div class="full pretplata-benefits">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                365 dana pristupa
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
            <div class="full flex overtitle-parent">
              <h3 class="overtitle">Premium</h3>
            </div>
            <h2 class="full">588kn</h2>
            <h4 class="full center-text undertitle">godišnja pretplata</h4>
            <div class="full pretplata-benefits">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                365 dana pristupa
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
      <div class="full flex relative fancy-quotes">
        <div class="container relative flex mobile-side-pad column-full-pad">
          <div class="fancy-quote relative">
            <div class="quotation-marks">„</div>
            <img
              class="quote-author-image"
              src="https://telegram.hr/wp-content/themes/telegram2-desktop/templates/native/erste/tgneue/img/sprajc.png?ver=2.0"
              alt="Zoran Šprajc"
            />
            <h2 class="full">
              Telegram je letvicu istraživačkog novinarstva podignuo dosta
              visoko. Pokazao je da internet novinarstvo može biti zanimljivo i
              ozbiljno, ako ne i ozbiljnije od tradicionalnih medija.
            </h2>
            <h3 class="fancy-quote-author">Zoran Šprajc</h3>
            <div class="quotation-marks">“</div>
          </div>
          <div class="fancy-quote relative">
            <div class="quotation-marks">„</div>
            <img
              class="quote-author-image"
              src="@/assets/img/extras/people/maja-sever.png"
              alt="Maja Sever"
            />
            <h2 class="full">
              Pretplatila sam se na Telegram zato što je novinarstvo u našem
              društvu jedan od rijetkih korektiva vlasti. U državi u kojoj
              institucije ne funkcioniraju, neovisno novinarstvo treba podržati.
            </h2>
            <h3 class="fancy-quote-author">Maja Sever</h3>
            <div class="quotation-marks">“</div>
          </div>
          <div class="fancy-quote relative">
            <div class="quotation-marks">„</div>
            <img
              class="quote-author-image"
              src="https://telegram.hr/wp-content/themes/telegram2-desktop/templates/native/erste/tgneue/img/vukovic-vuk.png?ver=2.0"
              alt="Vuk Vukoviić"
            />
            <h2 class="full">
              Podržavam Telegram da bi nastavili otkrivati još veće koruptivne i
              političke skandale te time činili društvo boljim. Kako bi
              Amerikanci rekli, ‘put your money where your mouth is’.
            </h2>
            <h3 class="fancy-quote-author">Vuk Vuković</h3>
            <div class="quotation-marks">“</div>
          </div>
          <div class="fancy-quote relative">
            <div class="quotation-marks">„</div>
            <img
              class="quote-author-image"
              src="@/assets/img/extras/people/miljenko-jergovic.png"
              alt="Miljenko Jergović"
            />
            <h2 class="full">
              U nedovršenim društvima, kakvo je hrvatsko, neovisno novinarstvo i
              jest jedino novinarstvo. Telegram čitam svakodnevno, a to košta,
              ustvari to mora koštati da bi išta vrijedilo.
            </h2>
            <h3 class="fancy-quote-author">Miljenko Jergović</h3>
            <div class="quotation-marks">“</div>
          </div>
        </div>
      </div>
      <div class="full flex pretplata-faq">
        <div
          class="container relative flex mobile-side-pad column-full-pad single-article-body"
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
              li da poklon stigne odmah ili neki drugi dan, naprimjer za
              rođendan, imendan ili godišnjicu. Slobodno odaberite opciju koja
              Vama više odgovara, 365 dana pretplate počet će teći od dana kada
              ju osoba kojoj ste pretplatu poklonili aktivira.
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
        TM6L5G5WJDIH: {
          title: 'Telegram Standard Poklon',
          price: 468,
        },
        TMC2CGIYTVI0: {
          title: 'Telegram Premium Poklon',
          price: 588,
        },
        TMF58Q2TEDY0: {
          title: 'Telegram Standard Mjesec Poklon',
          price: 49,
        },
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
    three() {
      return 'TMF58Q2TEDY0'
    },
  },
  mounted() {
    window.fbq = window.fbq || function () {}
    window.fbq('track', 'ViewContent', {
      content_ids: ['TM6L5G5WJDIH', 'TMC2CGIYTVI0', 'TMF58Q2TEDY0'],
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

    if (
      this.$route.query.promo_code &&
      (this.$route.query.promo_code === 'TG2022-310H2R' ||
        this.$route.query.promo_code === 'TG2022-287H2R')
    ) {
      this.checkout('TMF58Q2TEDY0')
    }
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
        value: this.terms[termId].price,
      })
      const promo = this.$route.query.promo_code
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OFZJIAYJJ98S',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            promoCode: promo,
            closeOnLogout: true,
            complete: (data) => {
              _that.$store.dispatch('user/checkAccess')
              window.fbq('track', 'Purchase', {
                content_ids: [termId],
                currency: 'HRK',
                value: this.terms[termId].price,
              })
              _that.$gtm.push({ ecommerce: null })
              _that.$gtm.push({
                ecommerce: {
                  purchase: {
                    actionField: {
                      id: data.termConversionId,
                      affiliation: 'Telegram.hr',
                      revenue: data.chargeAmount,
                      tax: data.chargeAmount - data.chargeAmount / 1.05,
                    },
                    products: [
                      {
                        id: data.termId,
                        name: _that.terms[data.termId].title,
                        quantity: 1,
                        price: _that.terms[data.termId].price,
                      },
                    ],
                  },
                },
              })
              _that.$gtm.push({ ecommerce: null })
              _that.$gtm.push({
                ecommerce: {
                  purchase: {
                    actionField: {
                      id: data.termConversionId,
                      affiliation: 'Telegram.hr',
                      revenue: data.chargeAmount,
                      tax: data.chargeAmount - data.chargeAmount / 1.05,
                    },
                    products: [
                      {
                        id: data.termId,
                        name: _that.terms[data.termId].title,
                        quantity: 1,
                        price: _that.terms[data.termId].price,
                      },
                    ],
                  },
                },
              })
            },
          })
        },
      ])
    },
  },
  head() {
    return {
      title: 'Telegram.hr - Poklonite pretplatu',
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
          content:
            'Poklonite Telegram pretplatu, poklon koji se otvara svaki dan',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/pretplata_poklon.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/poklon',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/poklon',
        },
      ],
    }
  },
}
</script>
