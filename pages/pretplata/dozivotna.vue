<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Telegram Premium. Doživotni pristup za samo 399 EUR"
      ></theader>
    </div>
    <div class="full flex relative pretplata-page">
      <div class="container relative flex mobile-side-pad stretch">
        <div
          class="half center flex-responsive relative column-full-pad m-order-2"
        >
          <div class="full flex relative">
            <h1 class="full center-text">
              Samo danas na Telegramu – doživotna pretplata za samo 399 €!
            </h1>
            <p class="full center-text pretplata-tagline">
              Iskoristite ovu ekskluzivnu priliku i osigurajte neograničen
              pristup zauvijek.
            </p>
            <div class="full center column-vertical-pad mobile-vertical-pad">
              <div
                class="newbtn gigantic-newbtn animate green-newbtn clickable"
              >
                Kupite za 399€. Zauvijek
              </div>
            </div>
          </div>
        </div>
        <div
          class="half center flex-responsive relative column-full-pad m-order-1"
        >
          <img
            src="@/assets/img/tg_mockup_lifetime.png"
            alt="Mockup Telegram portala s tekstom LIFETIME u pozadini"
          />
        </div>
      </div>
    </div>
    <div class="full flex darkened-bg relative pretplata-page">
      <div
        class="container relative flex mobile-side-pad stretch column-full-pad smallest-container mobile-top-pad"
      >
        <div class="full flex relative align-children-end">
          <p class="full center-text column-vertical-pad barlow faded">
            Ponuda istječe za:
          </p>
          <div class="full center countdown-element relative mobile-top-pad">
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-day-2" class="countdown-tile">0</div>
                <div id="cd-day-3" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">dana</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-hour-1" class="countdown-tile">0</div>
                <div id="cd-hour-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sati</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-min-1" class="countdown-tile">0</div>
                <div id="cd-min-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">minuta</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-sec-1" class="countdown-tile">0</div>
                <div id="cd-sec-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sekundi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex relative pretplata-page">
      <div
        class="container smaller-container relative flex mobile-side-pad stretch column-full-pad"
      >
        <div class="full flex relative column-top-pad mobile-top-pad">
          <h2 class="full center-text">Zajedno gradimo ovu zajednicu</h2>
          <p class="full center-text pretplata-tagline">
            Vi ste razlog zašto ovo radimo. Hvala vam na svakom shareu, poruci i
            povjerenju. Ova ponuda je način da vam zahvalimo i omogućimo da nas
            podržite — jednom, zauvijek.
          </p>
          <div class="full center column-top-pad mobile-top-pad">
            <div class="full pretplata-benefits" style="max-width: 20rem">
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telegrama doživotno
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                neograničeno čitanje Telesporta doživotno
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                čitanje bez oglasa
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                posebni popusti I pogodnosti unutar Telegram kluba
              </p>
              <p class="full animate">
                <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
                specijalni newsletter
              </p>
            </div>
          </div>
          <p class="full center-text pretplata-tagline">
            Zauvijek ćemo se boriti protiv kriminala i korupcije ali ova prilika
            se neće ponoviti
          </p>
          <div class="full center column-top-pad mobile-top-pad">
            <div v-if="screen === 2" class="full flex relative">
              <div class="half flex flex-responsive remp-miniboxes">
                <div v-show="!loggedIn">
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
                    class="full remp-new-input"
                    placeholder="Upišite lozinku"
                    name="password"
                  />
                  <small v-show="!showPassword"
                    >Ukoliko niste registrirani korisnik, na navedenu email
                    adresu ćete zaprimiti pristupne podatke.</small
                  >
                  <button
                    v-if="showPassword"
                    class="full newbtn huge-newbtn center-text clickable"
                    @click="login"
                  >
                    Prijavi se
                  </button>
                  <p class="full remp-mini-text center-text faded">ili</p>
                  <div class="full flex relative">
                    <div class="half flex column-mini-right-pad">
                      <a
                        :href="`http://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr/pretplata/`"
                        class="full center remp-social-logbtn animate"
                      >
                        <i class="fa-brands fa-google"></i>
                        Google
                      </a>
                    </div>
                    <div class="half flex column-mini-left-pad">
                      <a
                        href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/"
                        class="full center remp-social-logbtn animate"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                        Facebook
                      </a>
                    </div>
                    <p class="full remp-mini-text center-text faded hide">
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
              <div class="half flex flex-responsive remp-miniboxes">
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
            <button
              class="newbtn gigantic-newbtn animate green-newbtn clickable center-text"
              @click="submit"
            >
              Kupite za 399€. Zauvijek
            </button>
          </div>
          <p
            class="full remp-mini-text column-mini-top-pad column-bottom-pad center-text faded"
          >
            Ponuda vrijedi još samo danas — iskoristite je dok traje
          </p>
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
          <input type="hidden" name="price" :value="price" />
          <input type="hidden" name="email" :value="email" />
        </form>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import braintree from 'braintree-web'
import _ from 'lodash'

export default {
  name: 'Dozivotna',
  data() {
    return {
      counter: null,
      screen: 1,
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
      funnel_url_key: 'main',
      auth: 0,
      url_key: 'main',
      creditCard: false,
      cvv: false,
      expirationDate: false,
      instance: null,
      customerId: null,
      payment: 'braintree_default_recurrent',
      subscription_type: 'lifetime_premium_subscription_dozivotna',
      price: 399,
    }
  },
  computed: {
    buyable() {
      if (
        this.email &&
        this.terms &&
        this.privacy &&
        this.token &&
        this.creditCard &&
        this.cvv &&
        this.expirationDate
      ) {
        return true
      }
      return false
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
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
      this.createCounter()
      this.getToken()
    })
  },
  destroyed() {
    this.counter = null
  },
  methods: {
    createCounter() {
      // Countdown
      const countDownDate = new Date('May 07, 2025 23:59:59').getTime()
      this.counter = setInterval(function () {
        const now = new Date().getTime()
        const distance = countDownDate - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        const day2 = Math.floor((days % 100) / 10)
        const day3 = Math.floor(days % 10)

        const hour1 = Math.floor(hours / 10)
        const hour2 = Math.floor(hours % 10)

        const min1 = Math.floor(minutes / 10)
        const min2 = Math.floor(minutes % 10)

        const sec1 = Math.floor(seconds / 10)
        const sec2 = Math.floor(seconds % 10)

        document.getElementById('cd-day-2').innerHTML = day2
        document.getElementById('cd-day-3').innerHTML = day3

        document.getElementById('cd-hour-1').innerHTML = hour1
        document.getElementById('cd-hour-2').innerHTML = hour2

        document.getElementById('cd-min-1').innerHTML = min1
        document.getElementById('cd-min-2').innerHTML = min2

        document.getElementById('cd-sec-1').innerHTML = sec1
        document.getElementById('cd-sec-2').innerHTML = sec2
        if (distance < 0) {
          clearInterval(this.counter)
        }
      }, 1000)
    },
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
      if (this.email === '') {
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
      console.log('submit', this.screen)
      if (this.screen === 1) {
        console.log('screen 1')
        this.screen = 2
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
            amount: this.price,
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
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/dozivotna',
      },
    ]
    return {
      title: 'Doživotna pretplata',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Doživotna pretplata',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Doživotna pretplata',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Doživotna pretplata',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/dozivotna',
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
