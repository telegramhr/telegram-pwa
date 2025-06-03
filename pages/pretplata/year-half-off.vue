<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <div class="full flex">
      <div class="container relative flex mobile-side-pad column-full-pad">
        <h1 class="full center-text column-top-pad smaller-h1">
          Čitajte Telegram cijelu godinu uz 50% popusta!
        </h1>
      </div>
    </div>
    <!-- Special half element -->
    <div class="full flex relative stretch pretplata-duo">
      <div
        class="full center-text relative column-bottom-pad mobile-bottom-pad pretplata-duo-overtitle"
      >
        Vremenski ograničena ponuda
      </div>
      <div
        class="half flex flex-responsive relative center pretplata-blue column-full-pad mobile-side-pad mobile-top-pad"
      >
        <div
          class="full flex center pretplata-packboxes full-width-packs column-vertical-pad"
        >
          <div class="full center">
            <input
              id="pretplata-regular"
              v-model="subscription_package"
              type="radio"
              name="pretplata-pack"
              class="hide"
              value="Telegram_Standard_Godišnja_Pretplata_50%_popust_za prvu godinu"
            />
            <label
              for="pretplata-regular"
              class="full animate flex-responsive flex relative pretplata-packbox smaller-packbox stretch fix-sticker"
            >
              <div class="best-price-sticker alt-bigger-sticcer animate">
                Popust<br />50%
              </div>
              <div class="smaller-packbox-radio">
                <div class="remp-radio-indicator center"><div></div></div>
              </div>
              <div class="full sub-price bold">
                Standard: <span class="faded strikethrough">79€</span> 39€<span>
                  u prvoj godini</span
              >
              </div>
              <div class="full pretplata-benefits">
                <p class="full animate">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  neograničeno čitanje Telegrama
                </p>
                <p class="full animate">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  specijalni newsletteri i posebne pogodnosti
                </p>
              </div>
            </label>
          </div>
          <div class="full center">
            <input
              id="pretplata-premium"
              v-model="subscription_package"
              type="radio"
              name="pretplata-pack"
              class="hide"
              value="Telegram_Premium_Godišnja_Pretplata_50%_popust_za prvu godinu"
            />
            <label
              for="pretplata-premium"
              class="full animate flex-responsive flex relative pretplata-packbox smaller-packbox stretch fix-sticker"
            >
              <div class="best-price-sticker alt-bigger-sticcer animate">
                Popust<br />50%
              </div>
              <div class="smaller-packbox-radio">
                <div class="remp-radio-indicator center"><div></div></div>
              </div>
              <div class="full sub-price bold">
                Premium: <span class="faded strikethrough">99€</span> 49€<span>
                  u prvoj godini</span
              >
              </div>
              <div class="full pretplata-benefits">
                <p class="full animate">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  neograničeno čitanje Telegrama i Telesporta
                </p>
                <p class="full animate">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  čitanje bez reklama
                </p>
                <p class="full animate">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  specijalni newsletteri i posebne pogodnosti
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div
        class="half flex flex-responsive relative center darkened-bg column-full-pad mobile-full-pad"
      >
        <div class="full flex relative column-full-pad pretplata-duo-text">
          <div class="full barlow center-text relative column-mini-bottom-pad">
            Pridružite se tisućama pretplatnika koji su prepoznali kvalitetu
            informacija
          </div>
          <div
            class="full barlow center-text bold relative column-bottom-pad mobile-bottom-pad"
          >
            Ne propustite 50% popusta za cijelu godinu
          </div>
          <div
            v-if="!subscription_package"
            class="full barlow smaller-text faded center-text"
          >
            Odaberite paket za nastavak
          </div>
          <div
            v-if="subscription_package"
            class="full center flex-wrap relative column-top-pad force-stretch"
          >
            <div
              class="half flex flex-responsive remp-miniboxes column-horizontal-pad mobile-bottom-pad"
            >
              <template v-if="!this.$store.state.user.email">
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
                <button
                  v-if="showPassword"
                  class="full newbtn huge-newbtn center-text clickable"
                  @click="login"
                >
                  Prijavi se
                </button>
                <p
                  class="full remp-mini-text center-text faded column-mini-vertical-pad"
                >
                  ili
                </p>
                <div class="full flex relative">
                  <div v-show="false" class="full flex">
                    <div class="full center remp-social-logbtn animate">
                      <i class="fa-brands fa-google"></i>
                      Google
                    </div>
                  </div>
                  <div class="full flex">
                    <a
                      href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/pola"
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
              </template>
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
                      href="https://www.telegram.hr/stranica/pravila-privatnosti/"
                      class="highlight-text"
                    >pravila privatnosti</a
                    ></span
                  >
                </label>
              </div>
            </div>
            <div
              class="half flex flex-responsive remp-miniboxes column-horizontal-pad mobile-bottom-pad"
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
            </div>
            <form
              id="payment-form"
              class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
              method="post"
              action="https://pretplata.telegram.hr/sales-funnel/sales-funnel-frontend/submit"
            >
              <input
                type="hidden"
                name="referer"
                :value="$store.getters['pretplata/link']"
              />
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
                :value="subscription_package"
              />
              <input
                id="customer_id"
                type="hidden"
                name="customer_id"
                :value="customerId"
              />
              <input type="hidden" name="payment_gateway" :value="payment" />
              <input type="hidden" name="price" :value="price" />
              <input type="hidden" name="email" :value="email" />
              <div
                v-if="!buyable"
                class="full newbtn huge-newbtn center-text clickable locked-newbtn"
              >
                Dovršite kupnju
              </div>
              <div
                v-if="!buyable"
                class="full barlow smaller-text faded center-text column-mini-top-pad"
              >
                Ispunite sve korake iznad kako bi dovršili kupnju.
              </div>
              <button
                v-if="buyable"
                class="full newbtn huge-newbtn center-text clickable green-newbtn"
                @click.prevent="submit"
              >
                Dovršite kupnju
              </button>
              <div
                class="full barlow smaller-text faded center-text column-mini-top-pad"
              >
                Nakon isteka prve godine pretplata se automatski obnavlja po
                punoj cijeni
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import _ from 'lodash'
import braintree from 'braintree-web'
export default {
  name: 'Pretplata',
  data() {
    return {
      subscription_package: null,
      email: this.$store.state.user.email,
      password: '',
      terms: false,
      privacy: false,
      showPassword: false,
      nonce: '',
      deviceData: '',
      payment: 'braintree_default_recurrent',
      url_key: 'half-off-2025',
      token: null,
      creditCard: false,
      cvv: false,
      expirationDate: false,
      instance: null,
      customerId: null,
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
    price() {
      if (this.subscription_package === '3_mjeseca_po_1euro') {
        return 1
      }
      if (
        this.subscription_package ===
        'Telegram_Standard_Godišnja_Pretplata_50%_popust_za prvu godinu'
      ) {
        return 39
      }
      return 49
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
    subscription_package(value) {
      if (this.$store.state.user.email) {
        this.getToken()
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
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
        href: 'https://www.telegram.hr/pretplata/pola',
      },
    ]
    return {
      title: 'Telegram',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Checkout',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Checkout',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/',
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
