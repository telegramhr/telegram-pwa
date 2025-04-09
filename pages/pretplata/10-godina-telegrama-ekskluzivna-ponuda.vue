<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader headline="Proslavite s nama 10 godina Telegrama!"></theader>
    </div>
    <!-- Special half element -->
    <div id="checkout" class="full flex relative stretch pretplata-deset">
      <div
        class="half flex flex-responsive relative center column-full-pad mobile-full-pad"
      >
        <div class="full deset-box column-mini-horizontal-pad flex relative">
          <img
            width="500"
            height="150"
            class="deset-logo"
            src="@/assets/img/tg_logo_10godina.svg"
            alt="10 godina Telegrama logo"
          />
          <div class="full flex deset-counter column-top-pad mobile-top-pad">
            <div class="full flex deset-counter-bar relative">
              <div style="width: 18.9%"></div>
            </div>
            <div class="two-thirds flex">
              {{ sold }}/1000 novih pretplatnika
            </div>
            <a
              href="#ciljevi"
              class="third flex bold align-children-end all-caps"
            >
              1. cilj
              <font-awesome-icon
                :icon="['far', 'circle-question']"
              ></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
      <div
        class="half flex flex-responsive relative center column-full-pad mobile-full-pad"
      >
        <div class="full deset-box flex relative">
          <div
            class="full nothtwo column-mini-horizontal-pad column-mini-bottom-pad"
          >
            Čitajte Telegram idućih 10 tjedana po cijeni koju sami odaberete
          </div>
          <p class="full column-mini-horizontal-pad">
            10 godina Telegrama. 10 obećanja za Hrvatsku
          </p>
          <div
            v-show="screen === 1"
            class="full flex deset-price-picker column-mini-vertical-pad"
          >
            <div
              class="third flex column-mini-full-pad"
              @click="totalPrice = 0"
            >
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 0 }"
              >
                <span>0€</span>
              </div>
            </div>
            <div
              class="third flex column-mini-full-pad"
              @click="totalPrice = 3"
            >
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 3 }"
              >
                <span>3€</span>
              </div>
            </div>
            <div
              class="third flex column-mini-full-pad"
              @click="totalPrice = 5"
            >
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 5 }"
              >
                <span>5€</span>
              </div>
              <div class="full deset-price-note center-text smaller-text">
                naša preporuka
              </div>
            </div>
            <div
              class="third flex column-mini-full-pad"
              @click="totalPrice = 9"
            >
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 9 }"
              >
                <span>9€</span>
              </div>
            </div>
            <div
              class="third flex column-mini-full-pad"
              @click="totalPrice = 15"
            >
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 15 }"
              >
                <span>15€</span>
              </div>
            </div>
            <div
              class="third flex column-mini-full-pad"
              @click="totalPrice = 25"
            >
              <div
                class="full deset-price center relative"
                :class="{ 'deset-price-selected': totalPrice === 25 }"
              >
                <span>25€</span>
              </div>
              <div class="full deset-price-note center-text smaller-text">
                redovna cijena
              </div>
            </div>
            <div
              class="two-thirds align-children-end flex column-mini-full-pad"
            >
              <span class="deset-price-note smaller-text"
                >ili unesite iznos:</span
              >
            </div>
            <!--<div class="third flex column-mini-full-pad">
              <input
                type="number"
                min="0.00"
                max="1000.00"
                step="0.01"
                class="deset-input-price"
              />
            </div>-->
            <div class="third flex column-mini-full-pad">
              <div
                class="full deset-price center relative deset-price-no-hover"
              >
                <input v-model="price" type="text" class="deset-price-input" />
                <span class="deset-price-input-note">€</span>
              </div>
            </div>
          </div>
          <div
            v-show="screen === 2"
            class="full flex deset-price-picker column-mini-full-pad"
          >
            <p v-show="!loggedIn" class="full column-mini-bottom-pad">
              Unesite svoje podatke:
            </p>
            <div id="login" class="full flex relative">
              <div class="full flex flex-responsive remp-miniboxes">
                <div v-show="!loggedIn" class="full flex stretch">
                  <div class="half flex-responsive flex relative">
                    <input
                      id="pretplata-email"
                      v-model="email"
                      type="text"
                      class="full remp-new-input"
                      placeholder="Upišite email"
                      name="email"
                    />
                    <input
                      v-if="showPassword"
                      id="pretplata-password"
                      v-model="password"
                      type="password"
                      class="full remp-new-input column-top-margin"
                      placeholder="Upišite lozinku"
                      name="password"
                    />
                    <div
                      v-show="!showPassword"
                      class="full deset-price-note smaller-text column-mini-bottom-pad hide"
                    >
                      Ukoliko niste registrirani korisnik, na navedenu email
                      adresu ćete zaprimiti pristupne podatke.
                    </div>
                    <button
                      v-if="showPassword"
                      class="full newbtn huge-newbtn center-text clickable"
                      @click="login"
                    >
                      Prijavi se
                    </button>
                  </div>
                  <p class="sixth center flex-responsive relative">ili</p>
                  <div class="third flex relative">
                    <div class="full flex">
                      <a
                        href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/"
                        class="full center remp-social-logbtn animate"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                        Facebook
                      </a>
                    </div>
                    <div v-show="false" class="full flex">
                      <div class="full center remp-social-logbtn animate">
                        <i class="fa-brands fa-google"></i>
                        Google
                      </div>
                    </div>
                    <p
                      class="full deset-price-note smaller-text column-mini-top-pad hide"
                    >
                      Privremeno ćemo vas preusmjeriti na stranicu odabranog
                      davatelja usluga kako bi povezali račune.
                    </p>
                  </div>
                </div>
                <div
                  class="full flex column-top-pad mobile-bottom-pad mobile-top-pad"
                >
                  <input
                    id="terms"
                    v-model="terms"
                    type="checkbox"
                    class="cbx"
                    name="terms"
                  />
                  <label for="terms" class="check flex full">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                    <span
                      >Prihvaćam
                      <a
                        target="_blank"
                        href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
                        class="highlight-text"
                        >uvjete korištenja</a
                      ></span
                    >
                  </label>
                </div>
                <div
                  class="full flex column-top-pad mobile-bottom-pad mobile-top-pad"
                >
                  <input
                    id="privacy"
                    v-model="privacy"
                    type="checkbox"
                    class="cbx"
                    name="privacy"
                  />
                  <label for="privacy" class="check flex full">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                    <span
                      >Prihvaćam
                      <a
                        target="_blank"
                        href="https://www.telegram.hr/stranica/pravila-privantnosti/"
                        class="highlight-text"
                        >pravila privatnosti</a
                      ></span
                    >
                  </label>
                </div>
              </div>
              <div
                class="full flex flex-responsive remp-miniboxes column-top-pad"
              >
                <div
                  v-if="payment === 'braintree_default_recurrent'"
                  id="pretplata-kartica-broj"
                  class="full flex relative"
                >
                  <div
                    v-show="token"
                    id="credit-card"
                    class="full remp-new-input hosted-field"
                  ></div>
                  <div
                    v-show="token"
                    id="cvv"
                    class="full remp-new-input hosted-field"
                  ></div>
                  <div
                    v-show="token"
                    id="expiration-date"
                    class="full remp-new-input hosted-field"
                  ></div>
                  <p class="full remp-mini-text center-text faded hide">
                    Vaši podaci za plaćanje biti će enkriptirani i sigurno
                    spremljeni po najvišim sigurnosnim standardima.
                  </p>
                </div>
                <div
                  v-if="payment === 'pretplata-uplata'"
                  class="full flex relative"
                >
                  <p class="full smaller-text faded">
                    Tekst za bankovnu uplatu.
                  </p>
                </div>
              </div>
            </div>
            <form
              id="payment-form"
              class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
              method="post"
              action="https://pretplata.telegram.hr/sales-funnel/sales-funnel-frontend/submit"
            >
              <input type="hidden" name="funnel_url_key" :value="url_key" />
              <input
                type="hidden"
                name="payment_metadata[payment_method_nonce]"
                :value="nonce"
              />
              <input
                type="hidden"
                name="payment_metadata[device_data]"
                :value="deviceData"
              />
              <input
                type="hidden"
                name="subscription_type"
                :value="subscription_type"
              />
              <input type="hidden" name="payment_gateway" :value="payment" />
              <input type="hidden" name="customer_id" :value="customerId" />
              <input type="hidden" name="price" :value="totalPrice" />
              <input type="hidden" name="email" :value="email" />
              <input
                type="hidden"
                name="additional_amount"
                :value="totalPrice"
              />
              <input type="hidden" name="additional_type" value="single" />
            </form>
          </div>
          <div
            class="full flex relative column-mini-horizontal-pad column-top-pad"
          >
            <div
              id="deset-checkout-btn"
              class="full center relative"
              @click="finish"
            >
              <span v-show="screen === 1"
                >Nastavite kupnju za
                {{
                  new Intl.NumberFormat('hr-HR', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(totalPrice)
                }}</span
              >
              <span v-show="screen === 2"
                >Završite kupnju za
                {{
                  new Intl.NumberFormat('hr-HR', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(totalPrice)
                }}</span
              >
            </div>
          </div>
          <p
            class="full center-text smaller-text column-mini-horizontal-pad column-mini-top-pad"
          >
            PDV je uključen. Nakon isteka prvih 10 tjedana, pretplata prelazi na
            mjesečni plan i nastavlja se po 50% sniženoj cijeni mjesečne Premium
            pretplate.
          </p>
        </div>
      </div>
    </div>
    <div id="ciljevi" class="full flex relative column-mega-top-pad">
      <div
        class="container smallest-container flex column-full-pad mobile-full-pad"
      >
        <h2 class="full center-text">10 obećanja za Hrvatsku</h2>
        <h3 class="full center-text" style="margin-bottom: 20px">
          Telegram s pretplatnicima gura društvo naprijed
        </h3>
        <div
          :class="{
            full: true,
            flex: true,
            relative: true,
            'deset-goal': true,
            'deset-goal-unlocked': sold >= 1000,
          }"
        >
          <div class="full flex relative deset-goal-header alt-vertical-center">
            <span>1. cilj</span> 1000 novih pretplatnika
          </div>
          <div class="full flex relative deset-counter-bar-parent">
            <div class="full flex deset-counter-bar relative">
              <div :style="{ width: soldP1 }"></div>
            </div>
            <font-awesome-icon
              :icon="sold >= 1000 ? ['fas', 'check'] : ['far', 'lock-keyhole']"
            />
            <span v-if="sold >= 1000">Hvala vam!</span>
            <span v-if="sold < 1000">{{ sold }}/1000</span>
          </div>
          <ul class="goals full column-mini-top-pad">
            <li>
              svim čitateljima omogućit ćemo besplatno čitanje arhive prvih 10
              godina
            </li>
            <li>
              darovat ćemo pretplatu svakom tko prvi put glasa na izborima
            </li>
            <li>
              radikalno ćemo povećati produkciju video formata i audio
              podcastova
            </li>
            <li>
              napravit ćemo 10 velikih intervjua s ljudima koji još nisu
              odustali od Hrvatske
            </li>
          </ul>
        </div>
        <div
          :class="{
            full: true,
            flex: true,
            relative: true,
            'deset-goal': true,
            'deset-goal-unlocked': sold >= 2000,
          }"
        >
          <div class="full flex relative deset-goal-header alt-vertical-center">
            <span>2. cilj</span> 2000 novih pretplatnika
          </div>
          <div class="full flex relative deset-counter-bar-parent">
            <div class="full flex deset-counter-bar relative">
              <div :style="{ width: soldP2 }"></div>
            </div>
            <font-awesome-icon
              :icon="sold >= 2000 ? ['fas', 'check'] : ['far', 'lock-keyhole']"
            />
            <span v-if="sold >= 2000">Hvala vam!</span>
            <span v-if="sold < 2000">{{ sold }}/2000</span>
          </div>
          <ul class="goals full column-mini-top-pad">
            <li>
              donirat ćemo 10 milijuna oglasnih impresija neprofitnim
              organizacijama i udrugama
            </li>
            <li>
              lansirat ćemo novu mobilnu aplikaciju za lakše praćenje i čitanje
              Telegrama
            </li>
            <li>
              objavit ćemo 10 dubinskih serijala o ključnim društvenim
              problemima u Hrvatskoj
            </li>
          </ul>
        </div>
        <div
          :class="{
            full: true,
            flex: true,
            relative: true,
            'deset-goal': true,
            'deset-goal-unlocked': sold >= 3000,
          }"
        >
          <div class="full flex relative deset-goal-header alt-vertical-center">
            <span>3. cilj</span> 3000 novih pretplatnika
          </div>
          <div class="full flex relative deset-counter-bar-parent">
            <div class="full flex deset-counter-bar relative">
              <div :style="{ width: soldP3 }"></div>
            </div>
            <font-awesome-icon
              :icon="sold >= 3000 ? ['fas', 'check'] : ['far', 'lock-keyhole']"
            />
            <span v-if="sold >= 3000">Hvala vam!</span>
            <span v-if="sold < 3000">{{ sold }}/3000</span>
          </div>
          <ul class="goals full column-mini-top-pad">
            <li>
              poklonit ćemo 100 godišnjih pretplata umirovljenicima koji nemaju
              za punu cijenu
            </li>
            <li>
              educirat ćemo mlade novinare za rad u neovisnim i relevantnim
              medijima
            </li>
            <li>
              organizirat ćemo mjesečne live chatove pretplatnika s redakcijom
            </li>
          </ul>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import braintree from 'braintree-web'
import _ from 'lodash'
export default {
  name: 'PretplataTen',
  async fetch() {
    this.sold = (await this.$axios.get('/api/pretplate')).data.number
  },
  data() {
    return {
      price: 5,
      screen: 1,
      show_msg: '',
      payment: 'braintree_default_recurrent',
      pack: null,
      term: 'Telegram_Premium_-_10_tjedana_za_10 godina_Telegrama',
      promo_code: '',
      email: this.$store.state.user.email,
      password: '',
      showPassword: false,
      hostedInstance: null,
      threeDS: null,
      deviceData: null,
      nonce: null,
      token: null,
      dropin: null,
      terms: false,
      privacy: false,
      auth: 0,
      url_key: '10year',
      creditCard: false,
      cvv: false,
      expirationDate: false,
      instance: null,
      customerId: null,
      sold: 0,
    }
  },
  computed: {
    totalPrice: {
      get() {
        const price = parseFloat(this.price.toString().replace(',', '.'))
        if (!price || price === '' || isNaN(price) || price < 0) {
          return 0
        }
        if (price - parseInt(price) > 0) {
          return parseFloat(price).toFixed(2)
        }
        return parseInt(price)
      },
      set(value) {
        this.price = value
      },
    },
    buyable() {
      return !!(
        this.email &&
        this.terms &&
        this.privacy &&
        this.token &&
        this.creditCard &&
        this.cvv &&
        this.expirationDate
      )
    },
    subscription_type() {
      return 'Telegram_Premium_-_10_tjedana_za_10 godina_Telegrama'
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
    soldP1() {
      return (this.sold / 1000) * 100 + '%'
    },
    soldP2() {
      return (this.sold / 2000) * 100 + '%'
    },
    soldP3() {
      return (this.sold / 3000) * 100 + '%'
    },
  },
  watch: {
    email: _.debounce(function (value) {
      const _this = this
      const formData = new FormData()
      formData.append('email', value)
      this.$axios
        .post('/crm/api/v2/users/email', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((response) => {
          if (response.data.status && response.data.status === 'taken') {
            _this.showPassword = true
          } else if (response.data.status === 'error') {
            if (response.data.code === 'email_missing') {
              return
            }
            _this.show_msg = 'error-not-finished'
          } else {
            _this.showPassword = false
            this.getToken()
          }
        })
        .catch(() => {
          _this.showPassword = false
          this.getToken()
        })
    }, 1000),
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.amount) {
        this.totalPrice = this.$route.query.amount
        this.screen = 2
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      this.getToken()
    })
  },
  methods: {
    login() {
      if (!this.showPassword) {
        return
      }
      this.$store.dispatch('user/loginSubmit', {
        email: this.email,
        password: this.password,
      })
    },
    getToken() {
      if (this.email === '' || this.totalPrice === 0) {
        return
      }
      const _this = this
      this.$axios
        .get('/crm/api/v1/braintree/token', {
          params: {
            email: _this.email,
          },
        })
        .then((res) => {
          _this.token = res.data.token
          _this.customerId = res.data.customer_id
          braintree.client
            .create({
              authorization: res.data.token,
            })
            .then((clientInstance) => {
              return Promise.all([
                braintree.hostedFields.create({
                  client: clientInstance,
                  styles: {
                    input: {
                      'font-size': '16px',
                      color: '#666',
                    },
                    'input.invalid': {
                      color: '#ae3737',
                    },
                    'input.valid': {
                      color: '#35a843',
                    },
                  },
                  fields: {
                    number: {
                      selector: '#credit-card',
                      placeholder: 'Broj kartice',
                    },
                    cvv: {
                      selector: '#cvv',
                      placeholder: 'CVV sigurnosni kod',
                    },
                    expirationDate: {
                      selector: '#expiration-date',
                      placeholder: 'MM/GGGG',
                    },
                  },
                }),
                braintree.threeDSecure.create({
                  authorization: res.data.token,
                  version: 2,
                }),
                braintree.dataCollector.create({
                  client: clientInstance,
                }),
              ])
            })
            .then((instances) => {
              _this.instance = instances[0]
              _this.instance.on('validityChange', function (event) {
                const field = event.fields[event.emittedBy]

                if (field.isValid || field.isPotentiallyValid) {
                  switch (event.emittedBy) {
                    case 'number':
                      _this.creditCard = true
                      break
                    case 'cvv':
                      _this.cvv = true
                      break
                    case 'expirationDate':
                      _this.expirationDate = true
                      break
                    default:
                      break
                  }
                } else {
                  switch (event.emittedBy) {
                    case 'number':
                      _this.creditCard = false
                      break
                    case 'cvv':
                      _this.cvv = false
                      break
                    case 'expirationDate':
                      _this.expirationDate = false
                      break
                    default:
                      break
                  }
                }
              })
              _this.threeDS = instances[1]
              _this.deviceData = instances[2].deviceData
            })
        })
    },
    submit() {
      if (!this.buyable) {
        return
      }
      this.loading = true
      this.instance
        .tokenize()
        .then((payload) => {
          return this.threeDS.verifyCard({
            onLookupComplete: (data, next) => {
              next()
            },
            amount: this.totalPrice,
            nonce: payload.nonce,
            bin: payload.details.bin,
            email: this.email,
          })
        })
        .then((payload) => {
          this.loading = false
          if (!payload.liabilityShifted) {
            this.error =
              '3DS autorizacija kartice nije prošla. Probajte ponovo.'
          } else {
            this.nonce = payload.nonce
            this.$store.commit('pretplata/setSubscriptionStarted', true)
            setTimeout(
              () => document.getElementById('payment-form').submit(),
              500
            )
          }
        })
    },
    finish() {
      if (this.screen === 1) {
        this.screen = 2
        return
      }
      this.submit()
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/10-godina-telegrama-ekskluzivna-ponuda',
      },
    ]
    return {
      title: 'Proslavite s nama 10 godina Telegrama!',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '10 godina Telegrama',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content:
            'https://www.telegram.hr/pretplata/10-godina-telegrama-ekskluzivna-ponuda',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/img/Telegram_10_godina_feed_7-2.jpg',
        },
        {
          hid: 'fb:app_id',
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
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
    }
  },
}
</script>

<style>
.goals li:before {
  content: '✓';
}
</style>
