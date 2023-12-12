<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Poklonite Telegram pretplatu, poklon koji se otvara svaki dan"
      ></theader>
    </div>
    <client-only>
      <div v-if="$store.state.user.access" class="full flex">
        class="full flex relative center mobile-side-pad newbook-xmas
        newbook-gifting column-full-pad dark-mode" >
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
          <div class="half tablet-full flex flex-responsive center m-order-2">
            <div class="full newbook-title all-caps">Poklonite Telegram</div>
            <div class="full newbook-author all-caps">
              dar koji se otvara svaki dan
            </div>
            <p class="full newbook-intro">
              Ovih praznika prijateljima, partnerima ili ukućanima poklonite
              godinu dana pretplate, po posebnoj cijeni samo za vas
            </p>
            <div class="full relative newbook-price">
              <span class="faded strikethrough">78€</span> 29,99€
            </div>
            <div class="full flex btn-parent newbook-btn">
              <div class="newbtn clickable huge-newbtn animate" @click="promo">
                Poklonite
              </div>
            </div>
            <div class="full pretplata-benefits">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                godinu dana neograničenog pristupa
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                premium iskustvko čitanja bez oglasa
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                popusti na top knjige, izložbe i predstave
              </p>
            </div>
          </div>
          <div class="half tablet-full flex flex-responsive center m-order-1">
            <img
              src="@/assets/img/tg_visual_xmas_pretplata_alt.png"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </client-only>
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
      <div class="full flex relative">
        <div
          class="container center relative mobile-side-pad pretplata-packs pretplata-packboxes"
        >
          <div
            class="half flex-responsive flex relative pretplata-packbox stretch"
          >
            <div class="full flex overtitle-parent">
              <div class="noththree overtitle">Standard</div>
            </div>
            <div class="full sub-price bold">62€</div>
            <div class="nothfour full center-text undertitle">
              godišnja pretplata (467kn)
            </div>
            <div class="full pretplata-benefits">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telegrama
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                posebni popusti i pogodnosti
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                specijalni newsletteri
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                verificirani profil u komentarima
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
              <div class="noththree overtitle">Premium</div>
            </div>
            <div class="full sub-price bold">78€</div>
            <div class="nothfour full center-text undertitle">
              godišnja pretplata (588kn)
            </div>
            <div class="full pretplata-benefits">
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
                posebni popusti i pogodnosti
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                specijalni newsletteri
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                verificirani profil u komentarima
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                surfanje bez oglasa
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
            <div class="full fancy-quote-heading">
              Telegram je letvicu istraživačkog novinarstva podignuo dosta
              visoko. Pokazao je da internet novinarstvo može biti zanimljivo i
              ozbiljno, ako ne i ozbiljnije od tradicionalnih medija.
            </div>
            <div class="noththree fancy-quote-author">Zoran Šprajc</div>
            <div class="quotation-marks">“</div>
          </div>
          <div class="fancy-quote relative">
            <div class="quotation-marks">„</div>
            <img
              class="quote-author-image"
              src="@/assets/img/extras/people/maja-sever.png"
              alt="Maja Sever"
            />
            <div class="full fancy-quote-heading">
              Pretplatila sam se na Telegram zato što je novinarstvo u našem
              društvu jedan od rijetkih korektiva vlasti. U državi u kojoj
              institucije ne funkcioniraju, neovisno novinarstvo treba podržati.
            </div>
            <div class="noththree fancy-quote-author">Maja Sever</div>
            <div class="quotation-marks">“</div>
          </div>
          <div class="fancy-quote relative">
            <div class="quotation-marks">„</div>
            <img
              class="quote-author-image"
              src="https://telegram.hr/wp-content/themes/telegram2-desktop/templates/native/erste/tgneue/img/vukovic-vuk.png?ver=2.0"
              alt="Vuk Vukoviić"
            />
            <div class="full fancy-quote-heading">
              Podržavam Telegram da bi nastavili otkrivati još veće koruptivne i
              političke skandale te time činili društvo boljim. Kako bi
              Amerikanci rekli, ‘put your money where your mouth is’.
            </div>
            <div class="noththree fancy-quote-author">Vuk Vuković</div>
            <div class="quotation-marks">“</div>
          </div>
          <div class="fancy-quote relative">
            <div class="quotation-marks">„</div>
            <img
              class="quote-author-image"
              src="@/assets/img/extras/people/miljenko-jergovic.png"
              alt="Miljenko Jergović"
            />
            <div class="full fancy-quote-heading">
              U nedovršenim društvima, kakvo je hrvatsko, neovisno novinarstvo i
              jest jedino novinarstvo. Telegram čitam svakodnevno, a to košta,
              ustvari to mora koštati da bi išta vrijedilo.
            </div>
            <div class="noththree fancy-quote-author">Miljenko Jergović</div>
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
      promo_code: '',
      terms: {
        TM1LSJL22UJP: {
          title: 'Telegram Standard Poklon',
          price: 62.11,
          gtm: 'standard-annual-gift',
        },
        TMMT1WONB6S8: {
          title: 'Telegram Premium Poklon',
          price: 78.04,
          gtm: 'premium-annual-gift',
        },
      },
    }
  },
  computed: {
    one() {
      return 'TM1LSJL22UJP'
    },
    two() {
      return 'TMMT1WONB6S8'
    },
  },
  mounted() {
    window.fbq = window.fbq || function () {}
    window.fbq('track', 'ViewContent', {
      content_ids: ['TM1LSJL22UJP', 'TMMT1WONB6S8'],
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
    this.$gtm.push({
      event: 'subscription-funnel',
      'subscription-category': 'subscription-gift',
      'subscription-action': 'viewed',
      'article-title': this.$store.state.history.title,
      'article-category': this.$store.state.history.category,
      'article-author': this.$store.state.history.author,
      'user-type': this.$store.state.user.type,
    })
    if (this.$route.query.promo_code) {
      this.promo_code = this.$route.query.promo_code
      this.checkout(this.two)
    }
  },
  methods: {
    promo() {
      this.promo_code = 'OU1FMSFRMS'
      this.checkout(this.two)
    },
    checkout(termId) {
      this.$gtm.push({
        event: 'subscription-funnel',
        'subscription-category': 'subscription-gift',
        'subscription-action': 'selected',
        'subscription-type': this.terms[termId].gtm,
        'subscription-value': this.terms[termId].price,
        'article-title': this.$store.state.history.title,
        'article-category': this.$store.state.history.category,
        'article-author': this.$store.state.history.author,
        'user-type': this.$store.state.user.type,
      })
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
        currency: 'EUR',
        value: this.terms[termId].price,
      })
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OFZJIAYJJ98S',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            promoCode: this.promo_code,
            closeOnLogout: true,
            complete: (data) => {
              _that.$store.dispatch('user/checkAccess')
              window.fbq('track', 'Purchase', {
                content_ids: [termId],
                currency: 'EUR',
                value: this.terms[termId].price,
              })
              _that.$gtm.push({
                event: 'subscription-funnel',
                'subscription-category': 'subscription-gift',
                'subscription-action': data.promotionId
                  ? 'purchased-with-coupon'
                  : 'purchased',
                'subscription-type': _that.terms[data.termId].gtm,
                'subscription-value': data.chargeAmount,
                'article-title': this.$store.state.history.title,
                'article-category': this.$store.state.history.category,
                'article-author': this.$store.state.history.author,
                'user-type': this.$store.state.user.type,
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
          content: 'https://www.telegram.hr/pretplata/poklon/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/poklon/',
        },
      ],
    }
  },
}
</script>
