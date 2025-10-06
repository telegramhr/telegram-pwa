<template>
  <div>
    <div class="hero-family center">
      <img class="img-as-bg" :src="hero.background" alt="Hero Background" />
      <img class="logo" :src="hero.logo" alt="Telegram Logo" />
      <div class="content">
        <img
          data-aos="fade-up"
          class="family-icons"
          src="@/assets/img/family-hero-icons.png"
          alt="Telegram Family Icons"
        />
        <div class="hero-family-wrapper">
          <span class="novo-badge">Novo</span>
          <div class="hero-family-info">
            <h2>{{ hero.title }}</h2>
            <p v-html="hero.description"></p>
            <button class="activate-subscription-btn">
              Aktivirajte pretplatu
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="content-family">
      <h3 class="title">
        Jedna pretplata – Tri odvojena računa. Naša najpovoljnija opcija.
      </h3>
      <div class="steps">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
          :class="(index + 1) % 2 === 0 ? 'even' : 'odd'"
        >
          <img
            :src="step.image"
            :alt="`Step ${index + 1}`"
            class="step-image"
          />
          <div class="step-content">
            <div class="step-title">
              <div class="circle">{{ index + 1 }}.</div>
              <h4>{{ step.title }}</h4>
            </div>
            <p class="step-description" v-html="step.description"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="full flex remp-pretplata bg-brown">
      <div class="full flex remp-pretplata">
        <div class="full flex relative">
          <div class="full flex">
            <div
              class="container relative flex pretplata-packs mobile-side-pad column-horizontal-pad"
            >
              <h1 class="full center-text">
                Dvije vrste pretplate. <br />
                Odabir je vaš.
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
                        <div class="noththree overtitle all-caps">Standard</div>
                      </div>
                      <div class="full sub-price bold">
                        {{ standardPrice }}€
                      </div>
                      <div class="nothfour full center-text undertitle">
                        <!-- {{
                          term === 'pretplata-mjesecno'
                            ? 'Mjesečno'
                            : 'Godišnje'
                        }} -->
                        Mjesečno
                      </div>
                    </div>
                    <div class="full pretplata-benefits mobile-two-thirds">
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Neograničeno čitanje <strong>Telegrama</strong> i
                          pristup arhivi svih članaka
                        </p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Ekskluzivni newsletteri s posebnim analizama
                          nagrađivanih autora
                        </p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Surfanje uz <strong>manje reklama</strong>
                        </p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">10 poklon članaka mjesečno</p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Posebni popusti i pogodnost Telegram Kluba
                        </p>
                      </div>
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
                        <div class="noththree overtitle all-caps">
                          Premium <span class="ib all-small">(bez oglasa)</span>
                        </div>
                      </div>
                      <div class="full sub-price bold">{{ premiumPrice }}€</div>
                      <div class="nothfour full center-text undertitle">
                        <!-- {{
                          term === 'pretplata-mjesecno'
                            ? 'Mjesečno'
                            : 'Godišnje'
                        }} -->
                        Mjesečno
                      </div>
                    </div>
                    <div class="full pretplata-benefits mobile-two-thirds">
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Neograničeno čitanje <strong>Telegrama</strong> i
                          pristup arhivi svih članaka
                        </p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Neograničeno čitanje <strong>Telesporta</strong> i
                          pristup arhivi svih članaka
                        </p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Ekskluzivni newsletteri s posebnim analizama
                          nagrađivanih autora
                        </p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Fokus na sadržaj -
                          <strong>surfanje bez reklama</strong>
                        </p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">10 poklon članaka mjesečno</p>
                      </div>
                      <div class="full animate flex no-wrap">
                        <font-awesome-icon :icon="['fas', 'check']" />
                        <p class="full">
                          Posebni popusti i pogodnost Telegram Kluba
                        </p>
                      </div>
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
                      <div class="flex remp-icon-list"></div>
                      <div class="full remp-special-note">
                        Visa, Mastercard, Apple Pay i Google Pay
                      </div>
                    </label>
                  </div>
                  <div class="full relative flex">
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
                        Generirat ćemo uplatnicu s podacima za plaćanje
                      </div>
                    </label>
                  </div>
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
                    <small v-show="!showPassword" class="under-pretplata-email"
                      >Ukoliko niste registrirani korisnik, na navedenu email
                      adresu ćete zaprimiti pristupne podatke.</small
                    >
                    <button
                      v-if="showPassword"
                      class="full newbtn huge-newbtn center-text clickable"
                      @click="login"
                    >
                      Prijavite se
                    </button>
                    <p class="full remp-mini-text center-text faded">ili</p>
                    <div class="full flex relative">
                      <div class="half flex column-mini-right-pad">
                        <a
                          href="http://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr/pretplata/"
                          class="full center remp-social-logbtn animate"
                        >
                          <!-- <font-awesome-icon :icon="['fab', 'google']" /> -->
                          <img
                            src="@/assets/img/google-logo.svg"
                            alt="Google Logo"
                            class="google-logo"
                            width="25"
                            height="8"
                          />
                          <i class="fa-brands fa-google"></i>
                          Google
                        </a>
                      </div>
                      <div class="half flex column-mini-left-pad">
                        <a
                          href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/"
                          class="full center remp-social-logbtn animate"
                        >
                          <font-awesome-icon
                            :icon="['fab', 'facebook-f']"
                            class="fb-fill"
                          />
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
                  <div class="full flex">
                    <p class="full bold column-full-pad faded">
                      Imate promo kod?
                    </p>
                    <input
                      id="pretplata-promo"
                      v-model="promo_code"
                      type="text"
                      class="full remp-new-input"
                      placeholder="Upišite promo kod"
                    />
                    <a class="newbtn" @click.prevent="checkPromo">Primjeni</a>
                    <p
                      v-show="promo_error"
                      class="column-left-pad remp-mini-text center-text"
                    >
                      {{ promo_error }}
                    </p>
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
              <client-only>
                <form
                  id="payment-form"
                  class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
                  method="post"
                  :action="`/crm/sales-funnel/sales-funnel-frontend/submit?referer=${$store.getters['pretplata/link']}`"
                >
                  <input type="hidden" name="allow_redirect" value="1" />
                  <input type="hidden" name="funnel_url_key" :value="url_key" />
                  <input
                    type="hidden"
                    name="subscription_type"
                    :value="subscription_type"
                  />
                  <input
                    type="hidden"
                    name="payment_gateway"
                    :value="payment"
                  />
                  <input type="hidden" name="price" :value="price" />
                  <input type="hidden" name="auth" value="1" />
                  <input type="hidden" name="email" :value="email" />
                  <input
                    id="voucher_log_id"
                    type="hidden"
                    name="payment_metadata[voucher_log_id]"
                    :value="voucher_log_id"
                  />
                  <input
                    id="voucher_code"
                    type="hidden"
                    name="payment_metadata[voucher_code]"
                    :value="promo_code"
                  />
                  <p
                    v-if="discount"
                    class="full barlow remp-mini-text smaller-text center-text column-mini-top-pad"
                  >
                    Ostvarili ste {{ price - discount }}€ popusta
                  </p>
                  <div
                    v-if="!buyable"
                    class="full newbtn huge-newbtn center-text clickable locked-newbtn"
                  >
                    Dovršite kupnju
                    {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
                  </div>
                  <div
                    v-if="!loggedIn && canLogIn"
                    class="full barlow remp-mini-text smaller-text center-text column-mini-top-pad"
                  >
                    Molimo da se prijavite kako bi dovršili kupnju
                  </div>
                  <template v-else>
                    <div
                      v-if="!buyable"
                      class="full barlow remp-mini-text smaller-text center-text column-mini-top-pad"
                    >
                      Ispunite sve korake iznad kako bi dovršili kupnju.
                    </div>
                    <button
                      v-if="buyable"
                      class="ninety newbtn huge-newbtn center-text clickable green-newbtn"
                      @click.prevent="submit"
                    >
                      Dovršite kupnju
                      {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
                    </button>
                  </template>
                  <p class="full remp-mini-text center-text">
                    Pretplatu možete otkazati u bilo kojem trenutku. Pretplata
                    se automatski obnavlja.
                  </p>
                  <p
                    v-if="show_msg"
                    class="full remp-mini-text center-text red-text"
                  >
                    {{ show_msg }}
                  </p>
                </form>
              </client-only>
              <client-only>
                <!-- Chatbot Component -->
                <Chatbot />
              </client-only>
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import _ from 'lodash'
export default {
  name: 'PretplataTelegramFamilyPage',
  data() {
    return {
      hero: {
        logo: require('@/assets/img/telegram_logo_white.svg'),
        background: require('@/assets/img/family-hero-background.png'),
        title: 'Predstavljamo Telegram Family pretplatu',
        description:
          'Uštedite <span>30%</span> uz Family pretplatu Telegrama. Dijelite pretplatu s još 2 člana obitelji ili prijatelja.',
      },
      steps: [
        {
          image: require('@/assets/img/family-step1.png'),
          title: 'Jedna pretplata za sve',
          description:
            'Aktivirajte pretplatu i odmah uštedite <span>30%</span>.',
        },
        {
          image: require('@/assets/img/family-step2.png'),
          title: 'Pozovite još 2 člana',
          description: 'Podijelite pretplatu s obitelji ili prijateljima.',
        },
        {
          image: require('@/assets/img/family-step3.png'),
          title: 'Svi uživate jednake pogodnosti',
          description:
            'Aktivirajte pretplatu i odmah uštedite <span>30%</span>.',
        },
      ],

      show_msg: '',
      payment: 'trustpay_recurrent',
      pack: 'pretplata-standard',
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
      iframeUrl: '',
      canLogIn: true,
      voucher_log_id: null,
      discount: null,
      loadingPromo: false,
      promo_error: '',
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
        return '20,99'
      } else {
        return '16,79'
      }
    },
    interimYearPrice() {
      if (this.pack === 'pretplata-premium') {
        return '208'
      } else {
        return '166'
      }
    },
    standardPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '16,79'
      } else {
        return '16,79'
      }
    },
    premiumPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '20,99'
      } else {
        return '20,99'
      }
    },
    price() {
      if (this.term === 'pretplata-mjesecno') {
        if (this.pack === 'pretplata-standard') {
          return 16.79
        } else {
          return 20.99
        }
      }
      if (this.pack === 'pretplata-standard') {
        return 166
      } else {
        return 208
      }
    },
    totalPrice() {
      if (!this.pack || !this.term) {
        return 0
      }
      if (this.discount) {
        return this.discount.toString().replace(',', ',')
      }
      if (this.pack === 'pretplata-standard') {
        if (this.term === 'pretplata-mjesecno') {
          return '16,79'
        } else {
          return '166'
        }
      } else if (this.term === 'pretplata-mjesecno') {
        return '20,99'
      } else {
        return '208'
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
            _this.canLogIn = true
          } else if (response.data.status === 'error') {
            if (response.data.code === 'email_missing') {
              return
            }
            _this.show_msg = 'Prijavite se kako biste dovršili kupnju.'
            _this.canLogIn = true
          } else {
            _this.showPassword = false
            _this.canLogIn = false
          }
        })
        .catch(() => {
          _this.showPassword = false
          _this.canLogIn = false
        })
    }, 1000),
  },
  mounted() {
    AOS.init({
      duration: 300,
      once: true,
    })
  },
  methods: {
    checkPromo() {
      this.loadingPromo = true
      this.promo_error = ''
      // check if promo code is valid
      this.$axios
        .get('/crm/api/v2/voucher/check', {
          params: {
            code: this.promo_code,
            subscription_type_code: this.subscription_type,
            include_discounted_amount: true,
          },
        })
        .then((res) => {
          // this.voucher_log_id = res.data.voucher_log_id
          this.discount = res.data.discounted_amount
        })
        .catch(() => {
          this.promo_error = 'Promo kod nije važeći'
          this.loadingPromo = false
        })
    },
    applyPromo() {
      // check if promo code is valid
      this.$axios
        .post('/crm/api/v1/voucher/activate', {
          code: this.promo_code,
          subscription_type_code: this.subscription_type,
          include_discounted_amount: true,
        })
        .then((res) => {
          this.voucher_log_id = res.data.voucher_log_id
          // this.discount = res.data.discounted_amount
        })
        .then(() => {
          this.submitForm()
        })
    },
    login() {
      if (!this.showPassword) {
        return
      }
      this.$store.dispatch('user/loginSubmit', {
        email: this.email,
        password: this.password,
        reload: false,
      })
    },
    submit() {
      this.loading = true
      if (this.promo_code) {
        this.applyPromo()
      } else {
        this.submitForm()
      }
    },
    submitForm() {
      const form = document.getElementById('payment-form')
      const formData = new FormData(form)
      console.log(formData)
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
