<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <div class="hero-family center">
      <div class="overlay"></div>
      <img class="img-as-bg" :src="hero.background" alt="Hero Background" />
      <img class="logo" :src="hero.logo" alt="Telesport Logo" />
      <div class="content">
        <div ref="lottieContainer" style="width: auto; height: 80px"></div>
        <div class="hero-family-wrapper">
          <span class="novo-badge">Novo</span>
          <div class="hero-family-info">
            <h2>{{ hero.title }}</h2>
            <p v-html="hero.description"></p>
            <a href="#pretplataWrapper">
              <button class="activate-subscription-btn">
                Aktivirajte pretplatu
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="content-family">
      <h3 class="title">
        Jedna pretplata - Tri odvojena računa. Naša najpovoljnija opcija.
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

    <div id="pretplataWrapper" class="pretplata-family-wrapper">
      <h2 class="pretplata-title">
        Dvije vrste pretplate. <br />
        Odabir je vaš.
      </h2>
      <div class="pretplata-wrapper">
        <div class="pretplata-packages">
          <div class="pretplata-content">
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
              class="full flex relative pretplata-pack animate clickable"
            >
              <div class="flex flex-column">
                <div class="pack-header">
                  <span class="discount-highlight">Uštedite 30% u grupi</span>
                  <span class="pack-title">Standard</span>
                  <p class="pack-price">
                    {{ standardPrice }}€ <span>/ Mjesečno</span>
                  </p>

                  <p class="pack-price">
                    {{ standardPriceAnnual }}€ <span>/ Godišnje</span>
                  </p>
                </div>
                <div class="pack-benefits">
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Neograničeno čitanje <strong>Telesporta</strong> i pristup
                      arhivi svih članaka
                    </p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Ekskluzivni newsletteri s posebnim analizama nagrađivanih
                      autora
                    </p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Surfanje uz <strong>manje reklama</strong>
                    </p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">10 poklon članaka mjesečno</p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Posebni popusti i pogodnost Telegram Kluba
                    </p>
                  </div>
                </div>
              </div>
              <div class="pack-button-wrapper">
                <div class="choose-btn">Odaberite standardnu pretplatu</div>
                <span>Otkažite u bilo kojem trenutku.</span>
              </div>
            </label>
          </div>
          <div class="pretplata-content">
            <input
              id="pretplata-premium"
              v-model="pack"
              type="radio"
              name="pretplata-paket"
              value="pretplata-premium"
              class="hide"
            />
            <label
              for="pretplata-premium"
              class="full flex relative pretplata-pack animate clickable"
            >
              <div class="flex flex-column">
                <div class="pack-header">
                  <span class="discount-highlight">Uštedite 30% u grupi</span>
                  <span class="pack-title">Premium</span>
                  <p class="pack-price">
                    {{ premiumPrice }}€ <span>/ Mjesečno</span>
                  </p>

                  <p class="pack-price">
                    {{ premiumPriceAnnual }}€ <span>/ Godišnje</span>
                  </p>
                </div>

                <div class="pack-benefits">
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">Surfanje bez oglasa</p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Neograničeno čitanje <strong>Telegrama</strong> i pristup
                      arhivi svih članaka
                    </p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Neograničeno čitanje <strong>Telesporta</strong> i pristup
                      arhivi svih članaka
                    </p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Ekskluzivni newsletteri s posebnim analizama nagrađivanih
                      autora
                    </p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Fokus na sadržaj — <strong>surfanje bez reklama</strong>
                    </p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">10 poklon članaka mjesečno</p>
                  </div>
                  <div class="single-benefit">
                    <font-awesome-icon
                      class="benefit-icon"
                      :icon="['fas', 'check']"
                    />
                    <p class="full">
                      Posebni popusti i pogodnosti Telegram Kluba
                    </p>
                  </div>
                </div>
              </div>
              <div class="pack-button-wrapper">
                <div class="choose-btn">Odaberite premium pretplatu</div>
                <span>Otkažite u bilo kojem trenutku.</span>
              </div>
            </label>
          </div>
        </div>
        <div class="pack-payment-wrapper">
          <!-- Trajanje pretplate -->
          <div class="pack-duration">
            <span class="pack-duration-title"
              >Odaberite trajanje pretplate</span
            >
            <div class="duration-options">
              <div class="full relative flex">
                <input
                  id="pretplata-godisnje"
                  v-model="term"
                  type="radio"
                  name="pretplata-termin"
                  class="hide"
                  value="pretplata-godisnje"
                />
                <label for="pretplata-godisnje" class="animate clickable">
                  <div class="remp-radio-indicator center">
                    <div class="outer-circle">
                      <div
                        v-if="term === 'pretplata-godisnje'"
                        class="inner-circle"
                      ></div>
                    </div>
                  </div>
                  <div class="radio-label">
                    <p class="title">
                      Godišnja pretplata (<span class="highlight-text"
                        >42% </span
                      >popusta)
                    </p>
                    <p class="full description">
                      {{ interimYearPrice }}€ za godinu dana unaprijed
                    </p>
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
                <label for="pretplata-mjesecno" class="animate clickable">
                  <div class="remp-radio-indicator center">
                    <div class="outer-circle">
                      <div
                        v-if="term === 'pretplata-mjesecno'"
                        class="inner-circle"
                      ></div>
                    </div>
                  </div>
                  <div class="radio-label">
                    <p class="title">
                      4 tjedna (<span class="highlight-text">30% </span>popusta)
                    </p>

                    <p class="description">
                      {{ interimMonthPrice }}€/mj, možete otkazati u bilo kojem
                      trenutku
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Načini plaćanja -->
          <div class="pack-duration">
            <span class="pack-duration-title">Odaberite način plaćanja</span>
            <div class="duration-options">
              <div class="full relative flex">
                <input
                  id="pretplata-kartica"
                  v-model="payment"
                  type="radio"
                  name="pretplata-placanje"
                  class="hide"
                  value="trustpay_recurrent"
                />
                <label for="pretplata-kartica" class="animate clickable">
                  <div class="remp-radio-indicator center">
                    <div class="outer-circle">
                      <div
                        v-if="payment === 'trustpay_recurrent'"
                        class="inner-circle"
                      ></div>
                    </div>
                  </div>
                  <div class="radio-label">
                    <p class="title">Kartica</p>
                    <p class="remp-special-note">
                      Visa, Mastercard, Apple Pay i Google Pay
                    </p>
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
                <label for="pretplata-uplata" class="animate clickable">
                  <div class="remp-radio-indicator center">
                    <div class="outer-circle">
                      <div
                        v-if="payment === 'bank_transfer'"
                        class="inner-circle"
                      ></div>
                    </div>
                  </div>
                  <div class="radio-label">
                    <p class="title">Bankovna uplata</p>
                    <p class="remp-special-note">
                      Generirat ćemo uplatnicu s podacima za plaćanje
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="login-wrapper">
          <p class="login-subtitle">Unesite podatke</p>
          <div id="login" class="login-content">
            <div
              v-show="!loggedIn"
              class="full flex flex-responsive remp-miniboxes"
            >
              <div class="full flex loginContainer">
                <div class="emailInput">
                  <input
                    id="pretplata-email"
                    v-model="email"
                    type="text"
                    class="full remp"
                    placeholder="Vaša email adresa"
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
                </div>
                <p class="remp-mini-text center-text faded iliText">ili</p>
                <div class="flex relative loginBtns">
                  <div class="btnContainer google">
                    <a
                      href="http://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr/pretplata/telegram-family"
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
                  <div class="btnContainer facebook">
                    <a
                      href="https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/telegram-family"
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
            </div>
            <div class="flex termsContainer">
              <div class="">
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
              <div class="">
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
              <div class="promo-input-wrapper">
                <input type="text" placeholder="Promo kod" />
                <button type="button" @click.prevent="checkPromo">
                  Primjeni
                </button>

                <p v-show="promo_error" class="">
                  {{ promo_error }}
                </p>
              </div>
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
              <p class="full smaller-text faded">Tekst za bankovnu uplatu.</p>
            </div>
          </div>
        </div>
        <client-only>
          <form
            id="payment-form"
            class="full flex"
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
            <input type="hidden" name="payment_gateway" :value="payment" />
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
              class="full barlow remp-mini-text center-text"
            >
              Molimo da se prijavite kako bi dovršili kupnju
            </div>
            <template v-else>
              <div
                v-if="!buyable"
                class="full barlow remp-mini-text center-text"
              >
                Ispunite sve korake iznad kako bi dovršili kupnju.
              </div>
              <button v-if="buyable" class="" @click.prevent="submit">
                Dovršite kupnju
                {{ totalPrice ? 'za ' + totalPrice + '€' : '' }}
              </button>
            </template>
            <p class="full remp-mini-text center-text">
              Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
              automatski obnavlja.
            </p>
            <p v-if="show_msg" class="full remp-mini-text center-text red-text">
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
    <iframe id="TrustPayFrame" :src="iframeUrl"></iframe>
    <tfooter></tfooter>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import _ from 'lodash'
import lottie from 'lottie-web'
import animationData from '@/assets/img/pretplata/animation-people.json'

export default {
  name: 'PretplataTelesportFamilyPage',
  data() {
    return {
      hero: {
        logo: require('@/assets/img/telesport_logo.png'),
        background: require('@/assets/img/telesport-family-hero.jpg'),
        title:
          'Navijajte zajedno - uštedite 30% uz grupnu pretplatu Telesporta',
        description:
          'Dijelite pretplatu s još 2 člana obitelji ili prijatelja.',
      },
      steps: [
        {
          image: require('@/assets/img/pretplata/family/step1.png'),
          title: 'Jedna pretplata za sve',
          description:
            'Aktivirajte pretplatu i odmah uštedite <span>30%</span>.',
        },
        {
          image: require('@/assets/img/pretplata/family/step2-sport.png'),
          title: 'Pozovite još 2 člana',
          description: 'Podijelite pretplatu s obitelji ili prijateljima.',
        },
        {
          image: require('@/assets/img/pretplata/family/step3.png'),
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
      loading: false,
      dropin: null,
      terms: false,
      privacy: false,
      funnel_url_key: 'family',
      auth: 0,
      url_key: 'family',
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
      if ((this.email || this.loggedIn) && this.terms && this.privacy) {
        return true
      }
      return false
    },
    interimMonthPrice() {
      if (this.pack === 'pretplata-premium') {
        return '20,99'
      } else {
        return '8,39'
      }
    },
    interimYearPrice() {
      if (this.pack === 'pretplata-premium') {
        return '208'
      } else {
        return '81,90'
      }
    },
    standardPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '8,39'
      } else {
        return '8,39'
      }
    },
    standardPriceAnnual() {
      if (this.term === 'pretplata-mjesecno') {
        return '81,90'
      } else {
        return '81,90'
      }
    },
    premiumPrice() {
      if (this.term === 'pretplata-mjesecno') {
        return '20,99'
      } else {
        return '20,99'
      }
    },
    premiumPriceAnnual() {
      if (this.term === 'pretplata-mjesecno') {
        return '208'
      } else {
        return '208'
      }
    },
    price() {
      if (this.term === 'pretplata-mjesecno') {
        if (this.pack === 'pretplata-standard') {
          return 8.39
        } else {
          return 20.99
        }
      }
      if (this.pack === 'pretplata-standard') {
        return 81.9
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
          return '8,39'
        } else {
          return '81,90'
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
          return 'telesport_4_tjedna_family_pretplata_admin'
        } else {
          return 'telesport_godisnja_family_pretplata_admin'
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
        .$post('/crm/api/v2/users/email', formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then((data) => {
          if (data.status && data.status === 'taken') {
            _this.showPassword = true
            _this.canLogIn = true
          } else if (data.status === 'error') {
            if (data.code === 'email_missing') {
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

    this.animation = lottie.loadAnimation({
      container: this.$refs.lottieContainer, // the DOM element
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })
    // Listen for TrustPay popup messages
    this.messageHandler = (event) => {
      if (event.data === 'popupLoaded') {
        this.loading = false
      }
    }
    window.addEventListener('message', this.messageHandler, false)
  },
  beforeDestroy() {
    // Clean up the event listener
    if (this.messageHandler) {
      window.removeEventListener('message', this.messageHandler, false)
    }
    if (this.animation) {
      this.animation.destroy()
    }
  },
  methods: {
    bankTransfer() {
      this.$axios
        .$post('/pretplate/api/pretplata/bank', {
          subscription_type: this.subscription_type,
          price: this.price,
          email: this.email,
          referer: this.$store.getters['pretplata/link'],
          voucher_log_id: this.voucher_log_id,
          promo_code: this.promo_code,
        })
        .then((data) => {
          if (data.id) {
            this.$router.push('/pretplata/bank/' + data.id)
          } else {
            this.show_msg = 'Došlo je do greške s plaćanjem.'
          }
        })
    },
    checkPromo() {
      this.loadingPromo = true
      this.promo_error = ''
      // check if promo code is valid
      this.$axios
        .$get('/crm/api/v2/voucher/check', {
          params: {
            code: this.promo_code,
            subscription_type_code: this.subscription_type,
            include_discounted_amount: true,
          },
        })
        .then((data) => {
          // this.voucher_log_id = data.voucher_log_id
          this.discount = data.discounted_amount
        })
        .catch(() => {
          this.promo_error = 'Promo kod nije važeći'
          this.loadingPromo = false
        })
    },
    applyPromo() {
      // check if promo code is valid
      this.$axios
        .$post('/crm/api/v1/voucher/activate', {
          code: this.promo_code,
          subscription_type_code: this.subscription_type,
          include_discounted_amount: true,
        })
        .then((data) => {
          this.voucher_log_id = data.voucher_log_id
          // this.discount = data.discounted_amount
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
    submitForm(retryCount = 0) {
      this.loading = true
      if (this.payment === 'bank_transfer') {
        this.bankTransfer()
        return
      }
      const form = document.getElementById('payment-form')
      const formData = new FormData(form)

      const actionUrl = form.action
      fetch(actionUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        redirect: 'follow', // Add this to handle redirects properly
      })
        .then((data) => {
          return response.json()
        })
        .then((data) => {
          if (data.status === 'ok') {
            const trustpayIframe = document.getElementById('TrustPayFrame')
            trustpayIframe.style.opacity = '1'
            trustpayIframe.style.zIndex = '100'
            trustpayIframe.style.position = 'fixed'
            trustpayIframe.style.top = '0'
            if (trustpayIframe) {
              trustpayIframe.src = data.url + '&Localization=hr'
            }
            // Open TrustPay Popup
            /* global openPopup */
            openPopup()
          } else {
            this.loading = false
            this.show_msg = 'Došlo je do greške s plaćanjem.'
          }
        })
        .catch(() => {
          // Retry logic: retry once if it's the first attempt
          if (retryCount === 0) {
            // Wait a bit before retrying
            setTimeout(() => {
              this.submitForm(1) // Retry with count = 1
            }, 500)
          } else {
            // Failed after retry
            this.loading = false
            this.show_msg = 'Došlo je do greške prilikom slanja podataka.'
          }
        })
    },
  },
  head() {
    return {
      title: 'Telesport Family Pretplata',
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
          content: 'Telesport Family Pretplata',
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
          content: 'https://www.telegram.hr/pretplata/telesport-family/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/telesport-family/',
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
<style>
#TrustPayFrame {
  height: 0;
}
.loginBtns {
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.loginBtns .btnContainer {
  width: 100%;
}
.loginBtns .remp-social-logbtn {
  width: 100%;
}
/* HERO SECTION */
.hero-family {
  position: relative;
  overflow: hidden;
  width: 100%;
  background: linear-gradient(180deg, #ae3737 0%, #481717 100%);
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 90px;
  padding-bottom: 40px;
  padding-left: 34px;
  padding-right: 34px;
  gap: 132px;
}
.hero-family .logo {
  z-index: 2;
  max-width: 170px;
}
.hero-family .content {
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.hero-family .content .family-icons {
  max-width: 170px;
  margin: 0 auto;
}
.hero-family-wrapper {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.hero-family .hero-family-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}
.hero-family-info h2 {
  font-family: 'Lora', serif;
  color: white;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
}
.hero-family-info p {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  color: white;
}
.hero-family-info p > span {
  font-weight: 700;
  text-decoration: underline;
}
.novo-badge {
  background-color: black;
  text-transform: uppercase;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 16px;
  width: fit-content;
  margin: 0 auto;
}
.activate-subscription-btn {
  background-color: #37ae37;
  font-family: 'Barlow', sans-serif;
  color: white;
  border: none;
  padding: 16px 28px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.activate-subscription-btn:hover {
  background-color: #237023;
}
/* CONTENT SECTION */

.content-family {
  display: flex;
  flex-direction: column;
  padding: 40px 16px 64px 16px;
  gap: 52px;
}
.content-family .title {
  font-family: 'Lora', serif;
  color: black;
  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
}
.content-family .steps {
  display: flex;
  flex-direction: column;
  gap: 56px;
}
.content-family .steps .step {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.content-family .steps .step .step-image {
  width: 100%;
  aspect-ratio: 1.426;
}
.step .step-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.step-content .step-title {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}

.step-content .step-title .circle {
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 18px;
  color: black;
  padding: 6px 12px;
  background-color: #f1e3d7;
  border-radius: 100%;
  aspect-ratio: square;
}
.step-content .step-title h4 {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
}
.step-content .step-description {
  font-family: 'Lora', serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.step-content .step-description > span {
  color: #902e2e;
  font-weight: 600;
}
/* PRETPLATA WRAPPER */
.pretplata-family-wrapper {
  background-color: #f1e3d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 16px 60px 16px;
  gap: 48px;
  margin-bottom: 30px;
}
.pretplata-title {
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 28px;
  text-align: center;
}
.pretplata-subtitle {
  display: none;
}
.pretplata-packages {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 700px;
}
.pretplata-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 870px;
}
.pretplata-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.pretplata-pack {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #dfdfdf;
  justify-content: space-between;
  height: 100%;
  border-radius: 9px;
  text-align: center;
  padding: 36px 28px;
  margin: 0px !important;
}
.pack-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 28px;
}
.discount-highlight {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  padding: 4px 8px;
  color: #478041;
  background-color: #e5ffe2;
  border: 1px solid #e5ffe2;
  border-radius: 4px;
}
/* Style label when radio is checked */
input[type='radio']:checked + label.pretplata-pack {
  border-color: #6d4726;
}

/* Style button when radio is checked */
input[type='radio']:checked + label.pretplata-pack .choose-btn {
  background-color: #37ae37;
  color: white;
}
.pack-title {
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  text-align: center;
}
.pack-price {
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  color: black;
}
.pack-price span {
  font-weight: 600px;
  color: #9e9e9e;
}
.iliText {
  align-self: center;
  margin-bottom: 14px;
}
.pack-benefits {
  border-top: 1px solid #dfdfdf;
  display: flex;
  width: 100%;
  padding-top: 15px;
  flex-direction: column;
  gap: 16px;
}
.single-benefit {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
}
.single-benefit > svg {
  color: #8d5b31;
}
.pack-button-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 36px;
}
.choose-btn {
  width: 100%;
  background: #b5b5b5;
  font-family: 'Barlow', sans-serif;
  color: white;
  border-radius: 2px;
  padding: 18px 48px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.pack-button-wrapper span {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #121212;
}
/* PAYMENT WRAPPER */
.pack-payment-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 28px 0px;
  border-top: 1px solid #b5b5b5;
  border-bottom: 1px solid #b5b5b5;
}
.pack-duration {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.pack-duration .duration-options {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.pack-duration-title {
  font-family: Barlow, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5f5f5f;
}
.radio-label {
  width: 100%;
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: fit-content;
}
.radio-label .title {
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: black;
}
.radio-label .title > span {
  font-weight: 600;
  color: #ae3737;
}
.radio-label .description {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0px;
  color: #5f5f5f;
}
.outer-circle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-circle {
  background-color: white !important;
  border: 6px solid black !important;
  width: 9px !important;
  height: 9px !important;
}

/* LOGIN WRAPPER */
.login-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.login-subtitle {
  display: none;
}

.loginContainer {
  display: flex;
  flex-direction: column;
}
.loginContainer input {
  align-items: center;
  padding: 12px 16px 12px 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #dfdfdf;
  border-radius: 6px;
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5f5f5f;
  margin-bottom: 12px;
}
.loginContainer p {
  margin-top: 14px;
}
.remp-social-logbtn {
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background: rgba(249, 244, 239, 1);
  border-radius: 4px;
  padding: 10px 14px;
  width: 200px;
  height: 48px;
}
.termsContainer {
  flex-direction: column-reverse;
  align-items: center;
  gap: 22px;
}
.termsContainer > div {
  width: 100% !important;
}
.termsContainer span {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
}
.termsContainer span .highlight-text {
  color: #000000;
  font-weight: 600;
}
.promo-input-wrapper button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background-color: transparent;
  color: #902e2e;
  font-family: 'Barlow', sans-serif;
  border: none;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s;
}
.promo-input-wrapper {
  position: relative;
}
.promo-input-wrapper p {
  position: absolute;
}
#payment-form button,
#payment-form .locked-newbtn {
  width: 100%;
  padding: 14px;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 600;
  background-color: #ae3737;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  border: none;
  margin-bottom: 20px;
}
#payment-form .locked-newbtn {
  background-color: #b5b5b5;
}
#login .remp-miniboxes {
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 28px;
  padding-bottom: 32px;
}
.remp-mini-text {
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #5f5f5f;
}
.promo-input-wrapper input[type='text'] {
  width: 100%;
  padding: 12px 100px 12px 15px;
  border: 1px solid #d4d4d4;
  border-radius: 6px;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.6);
  color: #333;
  outline: none;
  transition: border-color 0.2s;
}

.promo-input-wrapper input[type='text']::placeholder {
  color: #999;
}
.telegram-overlay {
  position: fixed;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  text-align: center;
  align-content: center;
  background: rgb(0, 0, 0, 0.5);
}
.telegram-loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    border-color: #ae3737 rgba(255, 255, 255, 0) rgba(255, 255, 255, 0)
      rgba(255, 255, 255, 0);
  }
  33% {
    border-color: #ae3737 #ae3737 rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }
  66% {
    border-color: #ae3737 #ae3737 #ae3737 rgba(255, 255, 255, 0);
  }
  100% {
    border-color: #ae3737 #ae3737 #ae3737 #ae3737;
  }
}

@media (min-width: 1024px) {
  /* HERO SECTION */
  .iliText {
    margin-top: -30px;
  }
  .loginBtns {
    width: 50%;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .termsContainer {
    flex-direction: row;
    gap: 36px;
    justify-content: space-between;
  }
  .termsContainer > div {
    width: unset !important;
  }
  .promo-input-wrapper {
    max-width: 300px;
  }
  .hero-family {
    padding: 80px;
    gap: 121px;
    position: relative;
  }
  .hero-family .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #004487 0%, #004487 100%);
    z-index: 2;
    opacity: 0.7;
  }
  .hero-family .logo {
    max-width: 280px;
  }
  .hero-family .content .family-icons {
    max-width: 196px;
  }
  .hero-family .content {
    max-width: 533px;
    margin: 0 auto;
    gap: 25px;
  }
  .hero-family .hero-family-info {
    gap: 32px;
  }
  .hero-family-wrapper {
    gap: 32px;
  }
  .hero-family-info h2 {
    font-size: 40px;
    line-height: 46px;
  }
  .novo-badge {
    font-size: 18px;
    padding: 12px 24px;
    border-radius: 24px;
  }
  /* CONTENT SECTION */

  .loginContainer {
    flex-direction: row;
    gap: 40px;
  }
  .loginContainer .emailInput {
    flex: 1;
    max-width: 350px;
  }

  .pretplata-family-wrapper {
    margin-bottom: 60px;
  }
  .pack-duration {
    padding-right: 50px;
  }
  .pretplata-packages {
    flex-direction: row;
    gap: 60px;
    max-width: unset;
  }

  .pack-payment-wrapper {
    flex-direction: row;
  }
  .content-family {
    padding: 60px 0px 112px 0px;
    gap: 78px;
    width: 100%;
    max-width: 866px;
    margin: auto;
  }
  .content-family .title {
    font-size: 40px;
    line-height: 46px;
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
  }
  .content-family .steps {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .content-family .steps .step {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 102px;
  }

  .content-family .steps .step .step-image {
    max-width: 400px;
  }
  .even {
    flex-direction: row-reverse !important;
  }
  .step .step-content {
    gap: 20px;
  }
  .step-content .step-title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    align-items: flex-start;
  }
  .step-content .step-title .circle {
    font-size: 18px;
    padding: 12px 16px;
    border-radius: 100%;
  }
  .step-content .step-title h4 {
    font-size: 28px;
  }
  .step-content .step-description {
    font-size: 18px;
  }
  .step-content .step-description > span {
    color: #902e2e;
    font-weight: 600;
  }
}
</style>
