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
              <div :style="{ width: soldP }"></div>
            </div>
            <div class="two-thirds flex">
              {{ sold }}/{{ cilj * 1000 }} novih pretplatnika
            </div>
            <a
              href="#ciljevi"
              class="third flex bold align-children-end all-caps"
            >
              {{ cilj }}. cilj
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
            Telegramova rođendanska ponuda više nije aktivna. Za sve dodatne
            informacije, molimo da nas kontaktirate putem e-mail adrese
            <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a>.
          </div>
        </div>
      </div>
    </div>
    <div id="ciljevi" class="full flex relative column-top-pad">
      <div
        class="container smallest-container flex column-full-pad mobile-full-pad"
      >
        <client-only>
          <div
            v-if="$mobile"
            class="full center mobile-side-pad column-bottom-margin column-bottom-pad"
          >
            <div class="newbtn huge-newbtn center-text" @click="share">
              Podijeli ovu ponudu prijatelju
            </div>
          </div>
        </client-only>
        <h2 class="full center-text">10 obećanja za Hrvatsku</h2>
        <h3 class="full center-text column-bottom-margin column-bottom-pad">
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
      sold: 3174,
    }
  },
  computed: {
    hasSub() {
      return !!this.$store.state.user.access.length
    },
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
    soldP() {
      return (this.sold / (this.cilj * 1000)) * 100 + '%'
    },
    cilj() {
      return 3
    },
  },
  watch: {
    email: _.debounce(function (value) {
      if (!value) {
        return
      }
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
      if (this.$route.query.amount !== undefined) {
        this.totalPrice = this.$route.query.amount
        this.screen = 2
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      this.email = this.$store.state.user.emai
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
    async share() {
      const shareData = {
        title: 'Proslavite s nama 10 godina Telegrama!',
        url: 'https://www.telegram.hr/pretplata/10-godina-telegrama-ekskluzivna-ponuda',
      }
      await navigator.share(shareData)
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
.deset-checkout-btn-disabled:before {
  background-color: #ccc !important;
  border-color: #ccc !important;
}
.check svg {
  stroke: #ccc;
}
</style>
