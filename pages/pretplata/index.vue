<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <!-- Above header banner -->
    <div class="full flex remp-pretplata">
      <div class="full flex remp-pretplata">
        <div class="full flex relative">
          <div class="full flex">
            <div
              class="container relative flex pretplata-packs mobile-side-pad column-horizontal-pad"
            >
              <h1 class="full center-text">
                Pridružite se tisućama pretplatnika i podržite neovisno
                novinarstvo - odaberite Telegram
              </h1>
              <p class="full bold remp-subtitle faded">
                1) Odaberite pretplatu
              </p>
              <div class="full flex center pretplata-packboxes remp-halfpad">
                <div
                  class="half flex-responsive flex relative stretch mobile-bottom-pad"
                >
                  <input
                    id="pretplata-standard"
                    v-model="pack"
                    type="radio"
                    value="pretplata-standard"
                    name="pretplata-paket"
                    class="hide"
                  />
                  <label
                    for="pretplata-standard"
                    class="full flex relative pretplata-packbox animate clickable"
                  >
                    <div class="full flex mobile-third relative">
                      <div class="full flex overtitle-parent">
                        <div class="noththree overtitle">Standard</div>
                      </div>
                      <div class="full sub-price bold">
                        {{ standardPrice }}€
                      </div>
                      <div class="nothfour full center-text undertitle">
                        {{
                          term === 'pretplata-mjesecno'
                            ? 'Mjesečno'
                            : 'Godišnje'
                        }}
                      </div>
                    </div>
                    <div class="full pretplata-benefits mobile-two-thirds">
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        neograničeno čitanje Telegrama
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        posebni popusti i pogodnosti
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        specijalni newsletteri
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        surfanje s manje oglasa
                      </p>
                    </div>
                    <div class="full center btn-parent">
                      <div class="btn animate">
                        <span class="input-reverse">Odaberi</span
                        ><span class="input-expand">Odabrano</span>
                      </div>
                    </div>
                  </label>
                </div>
                <div
                  class="half flex-responsive flex relative stretch mobile-bottom-pad"
                >
                  <input
                    id="pretplata-premium"
                    v-model="pack"
                    type="radio"
                    name="pretplata-paket"
                    class="hide"
                    value="pretplata-premium"
                  />
                  <label
                    for="pretplata-premium"
                    class="full flex relative pretplata-packbox animate clickable"
                  >
                    <div class="full flex mobile-third relative">
                      <div class="full flex overtitle-parent">
                        <div class="noththree overtitle">
                          Premium <span class="ib">(bez oglasa)</span>
                        </div>
                      </div>
                      <div class="full sub-price bold">{{ premiumPrice }}€</div>
                      <div class="nothfour full center-text undertitle">
                        {{
                          term === 'pretplata-mjesecno'
                            ? 'Mjesečno'
                            : 'Godišnje'
                        }}
                      </div>
                    </div>
                    <div class="full pretplata-benefits mobile-two-thirds">
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        neograničeno čitanje Telegrama
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        neograničeno čitanje Telesporta
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        posebni popusti i pogodnosti
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        specijalni newsletteri
                      </p>
                      <p class="full animate">
                        <i class="fa-solid fa-check"></i>
                        surfanje bez oglasa
                      </p>
                    </div>
                    <div class="full center btn-parent">
                      <div class="btn animate">
                        <span class="input-reverse">Odaberi</span
                        ><span class="input-expand">Odabrano</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="full flex relative remp-halfpad pretplata-packboxes">
                <div class="half flex flex-responsive remp-miniboxes">
                  <p class="full remp-subtitle bold faded">
                    2) Odaberite trajanje pretplate
                  </p>
                  <div class="full relative flex">
                    <input
                      id="pretplata-godisnje"
                      v-model="term"
                      type="radio"
                      name="pretplata-termin"
                      class="hide"
                      value="pretplata-godisnje"
                    />
                    <label
                      for="pretplata-godisnje"
                      class="full center relative remp-minibox animate clickable"
                    >
                      <div class="remp-radio-indicator center">
                        <div></div>
                      </div>
                      <div class="full">
                        Godišnje
                        <span class="highlight-text">24% popusta</span>
                      </div>
                      <div class="full remp-special-note">
                        {{ interimYearPrice }}€ za godinu dana unaprijed
                      </div>
                    </label>
                  </div>
                  <div class="full relative flex">
                    <input
                      id="pretplata-mjesecno"
                      v-model="term"
                      type="radio"
                      name="pretplata-termin"
                      class="hide"
                      value="pretplata-mjesecno"
                    />
                    <label
                      for="pretplata-mjesecno"
                      class="full flex relative remp-minibox animate clickable"
                    >
                      <div class="remp-radio-indicator center">
                        <div></div>
                      </div>
                      <div class="full">4 tjedna</div>
                      <div class="full remp-special-note">
                        {{ interimMonthPrice }}€/mj, možete otkazati kad god
                      </div>
                    </label>
                  </div>
                </div>
                <div class="half flex flex-responsive remp-miniboxes">
                  <div class="full relative flex">
                    <p class="full bold remp-subtitle faded">
                      3) Odaberite način plaćanja
                    </p>
                    <input
                      id="pretplata-kartica"
                      v-model="payment"
                      type="radio"
                      name="pretplata-placanje"
                      class="hide"
                      value="trustpay_recurrent"
                    />
                    <label
                      for="pretplata-kartica"
                      class="full flex relative remp-minibox animate clickable"
                    >
                      <div class="remp-radio-indicator center">
                        <div></div>
                      </div>
                      <div>Kartica</div>
                      <div class="flex remp-icon-list">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-mastercard"></i>
                        <i class="fa-brands fa-cc-diners-club"></i>
                        <i class="fa-brands fa-apple-pay"></i>
                        <i class="fa-brands fa-google-pay"></i>
                      </div>
                      <div class="full remp-special-note">
                        Visa, Mastercard, Diners, Apple Pay i Google Pay
                      </div>
                    </label>
                  </div>
                  <!--<div class="full relative flex">
                    <input
                      id="pretplata-uplata"
                      v-model="payment"
                      type="radio"
                      name="pretplata-placanje"
                      class="hide"
                      value="bank_transfer"
                    />
                    <label
                      for="pretplata-uplata"
                      class="full flex relative remp-minibox animate clickable"
                    >
                      <div class="remp-radio-indicator center"><div></div></div>
                      <div class="full">Bankovna uplata</div>
                      <div class="full remp-special-note">
                        Izdat ćemo vam uplatnicu
                      </div>
                    </label>
                  </div>-->
                </div>
              </div>
              <p v-show="!loggedIn" class="full bold remp-subtitle faded">
                4) Unesite podatke
              </p>
              <div id="login" class="full flex relative remp-halfpad">
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
                    v-if="payment === 'trustpay_recurrent'"
                    id="pretplata-kartica-broj"
                    class="full flex relative"
                  >
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
                <input
                  type="hidden"
                  name="referer"
                  :value="$store.getters['pretplata/link']"
                />
                <input type="hidden" name="funnel_url_key" :value="url_key" />
                <input
                  type="hidden"
                  name="subscription_type"
                  :value="subscription_type"
                />
                <input type="hidden" name="payment_gateway" :value="payment" />
                <input type="hidden" name="price" :value="price" />
                <input type="hidden" name="email" :value="email" />
                <div
                  v-if="!buyable"
                  class="full newbtn huge-newbtn center-text clickable locked-newbtn"
                >
                  Dovršite kupnju
                  {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
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
                  {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
                </button>
                <p class="full remp-mini-text center-text faded">
                  Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
                  automatski obnavlja.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <iframe id="TrustPayFrame" :src="iframeUrl"></iframe>
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
      show_msg: '',
      payment: 'trustpay_recurrent',
      pack: null,
      term: 'pretplata-godisnje',
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
      funnel_url_key: 'main',
      auth: 0,
      url_key: 'main',
      creditCard: false,
      cvv: false,
      expirationDate: false,
      instance: null,
      customerId: null,
    }
  },
  computed: {
    buyable() {
      if (this.email && this.terms && this.privacy) {
        return true
      }
      return false
    },
    interimMonthPrice() {
      if (this.pack === 'pretplata-premium') {
        return '9,99'
      } else {
        return '7,99'
      }
    },
    interimYearPrice() {
      if (this.pack === 'pretplata-premium') {
        return '99'
      } else {
        return '79'
      }
    },
    standardPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '7,99'
      } else {
        return '79'
      }
    },
    premiumPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '9,99'
      } else {
        return '99'
      }
    },
    price() {
      if (this.term === 'pretplata-mjesecno') {
        if (this.pack === 'pretplata-standard') {
          return 7.99
        } else {
          return 9.99
        }
      }
      if (this.pack === 'pretplata-standard') {
        return 79
      } else {
        return 99
      }
    },
    totalPrice() {
      if (!this.pack || !this.term) {
        return 0
      }
      if (this.pack === 'pretplata-standard') {
        if (this.term === 'pretplata-mjesecno') {
          return '7,99'
        } else {
          return '79'
        }
      } else if (this.term === 'pretplata-mjesecno') {
        return '9,99'
      } else {
        return '99'
      }
    },
    subscription_type() {
      if (this.pack === 'pretplata-standard') {
        if (this.term === 'pretplata-mjesecno') {
          return 'telegram_standard_4_tjedna_pretplata_2024'
        } else {
          return 'telegram_standard_godisnja_pretplata_2024'
        }
      } else if (this.term === 'pretplata-mjesecno') {
        return 'telegram_premium_4_tjedna_pretplata_2024'
      } else {
        return 'telegram_premium_godisnja_pretplata_2024'
      }
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
      this.loading = true
      const form = document.getElementById('payment-form')
      const formData = new FormData(form)
      const actionUrl = form.action
      fetch(actionUrl, {
        method: 'POST',
        body: formData,
        withCredentials: true,
      })
        .then((response) => response.json())
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
            console.log('Payment error:', data)
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
  },
  head() {
    return {
      title: 'Telegram.hr Pretplata',
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
          content: 'https://www.telegram.hr/pretplata/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/',
        },
      ],
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
