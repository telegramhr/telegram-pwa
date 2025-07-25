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
          class="half center flex-responsive relative column-full-pad m-order-1"
        >
          <img
            src="@/assets/img/pretplata/75percent.png"
            alt="telegram pretplata"
          />
        </div>
        <div class="half flex-responsive relative column-full-pad m-order-2">
          <div class="full flex relative">
            <div
              class="noththree overtitle"
              style="
                text-transform: uppercase;
                font-size: 0.7rem;
                color: #ae3737;
                margin-top: 10px;
              "
            >
              Vremenski ograničena ponuda
            </div>
            <h1 class="full" style="font-size: 1.2rem; margin-top: 5px">
              Propuštate vijesti koje čine razliku? Otključajte ih za samo
              <strike>7,99</strike>
              <span class="highlight-text">1,99€</span> EUR
            </h1>
            <p class="full pretplata-tagline" style="font-size: 0.9rem">
              Isprobajte Telegram uz 75% popusta i postanite dio informirane
              zajednice!
            </p>
            <div class="full center column-vertical-pad mobile-vertical-pad">
              <div v-if="screen === 2" class="full flex relative">
                <div class="flex flex-responsive remp-miniboxes">
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
              </div>
              <div
                class="newbtn gigantic-newbtn animate green-newbtn clickable"
                @click="submit"
              >
                Kupite pretplatu
              </div>
            </div>
            <div class="full center column-top-pad mobile-top-pad">
              <div class="half pretplata-benefits">
                <p class="full animate" style="font-size: 0.8rem">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  možete otkazati u bilo kojem trenutku
                </p>
                <p class="full animate" style="font-size: 0.8rem">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  neograničeno čitanje Telegrama
                </p>
              </div>
              <div class="half pretplata-benefits">
                <p class="full animate" style="font-size: 0.8rem">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  najbolji autori i tekstovi u Hrvatskoj
                </p>
                <p class="full animate" style="font-size: 0.8rem">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                  ></font-awesome-icon>
                  limitirana ponuda, uskoro ističe
                </p>
              </div>
            </div>
            <a
              href="mailto:pretplata@telegram.hr"
              class="full center-text undertitle"
              style="font-size: 0.6rem"
              >Trebat će vam R1 račun ili želite ponudu za pravne osobe? Javite
              nam se.</a
            >
            <client-only>
              <iframe id="TrustPayFrame" :src="iframeUrl"></iframe>
              <form
                id="payment-form"
                class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
                method="post"
                :action="`/crm/sales-funnel/sales-funnel-frontend/submit?referer=${$store.getters['pretplata/link']}`"
              >
                <input type="hidden" name="funnel_url_key" :value="url_key" />
                <input
                  type="hidden"
                  name="subscription_type"
                  :value="subscription_type"
                />
                <input type="hidden" name="payment_gateway" :value="payment" />
                <input type="hidden" name="price" :value="price" />
                <input type="hidden" name="email" :value="email" />
              </form>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
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
      auth: 0,
      url_key: 'mjesecna-75',
      creditCard: false,
      cvv: false,
      expirationDate: false,
      instance: null,
      customerId: null,
      payment: 'trustpay_recurrent',
      subscription_type: 'telegram_standard_4_tjedna_pretplata_75_%_popusta',
      price: 1.99,
      iframeUrl: null,
    }
  },
  computed: {
    buyable() {
      return !!(this.email && this.terms && this.privacy)
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
          }
        })
        .catch(() => {
          _this.showPassword = false
        })
    }, 1000),
  },
  destroyed() {
    this.counter = null
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
    submit() {
      if (this.screen === 1) {
        this.screen = 2
        return
      }
      this.loading = true
      const form = document.getElementById('payment-form')
      const formData = new FormData(form)
      const actionUrl = form.action
      fetch(actionUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.status === 'ok') {
            const trustpayIframe = document.getElementById('TrustPayFrame')
            if (trustpayIframe) {
              trustpayIframe.src = data.url + '&Localization=hr'
            }
            // Open TrustPay Popup
            /* global openPopup */
            openPopup()
          } else {
            this.show_msg = 'Došlo je do greške s plaćanjem.'
          }
        })
        .catch(() => {
          this.show_msg = 'Došlo je do greške prilikom slanja podataka.'
        })
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/lifetime',
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
          content: 'https://www.telegram.hr/pretplata/lifetime',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('@/assets/img/tg_mockup_lifetime.png'),
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
      script: [
        {
          hid: 'jquery',
          src: 'https://code.jquery.com/jquery-3.7.1.min.js',
        },
        {
          hid: 'trustpay-popup',
          src: 'https://mapi.trustpay.eu/mapi5/Scripts/TrustPay/popup.js',
        },
      ],
    }
  },
}
</script>
