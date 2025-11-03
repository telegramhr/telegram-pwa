<template>
  <div class="black-friday-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-background">
        <img
          class="hero-image"
          src="@/assets/img/pretplata/hero-bg.jpg"
          alt=""
        />
      </div>
      <div class="hero-content">
        <div class="hero-header">
          <img
            src="@/assets/img/pretplata/telegram-white-logo.webp"
            class="telegram-logo"
            alt="Telegram logo"
          />
          <span class="black-friday-label">BLACK FRIDAY</span>
        </div>
        <div class="hero-offer">
          <div class="offer-numbers">
            <span class="big-number">2</span>
            <span class="for-text">za</span>
            <span class="big-number">1</span>
          </div>
          <p class="offer-description">
            Platite <span class="font-bold">1</span> godinu Premium pretplate
            bez reklama i dobivate <span class="font-bold">2</span> godine po
            cijeni od <span class="price-old">198</span>
            <span class="font-bold">99€</span>
          </p>
          <div class="cta-container">
            <button class="cta-button" @click="setShowOffer">
              <a href="#offerWrap">Iskoristite ponudu</a>
            </button>
            <span class="cancel-text">Otkažite u bilo kojem trenutku.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Countdown Section -->
    <div class="countdown-section">
      <div class="countdown-wrapper">
        <div class="countdown-header">
          <span class="countdown-label">PONUDA JE VREMENSKI OGRANIČENA</span>
          <div class="countdown-timer">
            <div class="timer-box">
              <span class="timer-value">{{ countdown.days }}</span>
              <span class="timer-label">Dana</span>
            </div>
            <div class="timer-box">
              <span class="timer-value">{{ countdown.hours }}</span>
              <span class="timer-label">Sati</span>
            </div>
            <div class="timer-box">
              <span class="timer-value">{{ countdown.minutes }}</span>
              <span class="timer-label">Minuta</span>
            </div>
            <div class="timer-box">
              <span class="timer-value">{{ countdown.seconds }}</span>
              <span class="timer-label">Sekundi</span>
            </div>
          </div>
        </div>
        <div id="offerWrap" class="countdown-offer">
          <div class="offer-info">
            <h3 class="offer-title">Iskoristite ovu ponudu</h3>
            <p class="offer-subtitle">
              I uživajte pune 2 godine u Premium sadržaju bez reklama!
            </p>
          </div>
          <div class="offer-box">
            <div class="offer-heading">
              <div class="offer-price">
                <span class="price-strike-text">198</span>
                <span class="price-current">99€</span>
              </div>
              <p class="offer-text">
                Black Friday cijena 2 godine za cijenu 1!
              </p>
            </div>
            <button class="offer-button" @click="setShowOffer">
              <span>Iskoristite ponudu</span>
              <font-awesome-icon :icon="['fal', 'arrow-right']" />
            </button>
          </div>
          <div class="offer-container">
            <PretplataCheckoutBlackFriday
              v-show="showOffer"
              :period="period"
              :payment="payment"
              :pack="pack"
              :price="price"
              :email="email"
              :password="password"
              :showPassword="showPassword"
              :loggedIn="loggedIn"
              :terms="terms"
              :privacy="privacy"
              :promo_code="promo_code"
              :promo_error="promo_error"
              :discount="discount"
              :funnel_url_key="funnel_url_key"
              :url_key="url_key"
              :subscription_type="subscription_type"
              :totalPrice="totalPrice"
              @update:period="period = $event"
              @update:payment="payment = $event"
              @update:email="email = $event"
              @update:password="password = $event"
              @update:terms="terms = $event"
              @update:promo_code="promo_code = $event"
              @update:privacy="privacy = $event"
              @login="login"
              @checkPromo="checkPromo"
              @submit="submit"
            ></PretplataCheckoutBlackFriday>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <img
        src="@/assets/img/pretplata/content-background.svg"
        class="content-background"
        alt=""
      />
      <div class="content-wrapper">
        <h2 class="content-title">Zašto odabrati Telegram Premium?</h2>
        <div class="features-list">
          <div class="feature-item">
            <div class="feature-image-wrapper">
              <img
                src="@/assets/img/pretplata/content-1.png"
                class="feature-image"
                alt=""
              />
            </div>
            <h3 class="feature-title">
              Neograničeni pristup ekskluzivnim člancima, istraživačkim
              reportažama i podcastima
            </h3>
          </div>
          <div class="feature-item feature-reverse">
            <div class="feature-image-wrapper">
              <img
                src="@/assets/img/pretplata/content-2.png"
                class="feature-image"
                alt=""
              />
            </div>
            <h3 class="feature-title">Neograničeni pristup Telesportu</h3>
          </div>
          <div class="feature-item">
            <div class="feature-image-wrapper">
              <img
                src="@/assets/img/pretplata/content-3.png"
                class="feature-image"
                alt=""
              />
            </div>
            <h3 class="feature-title">
              Čitanje bez reklama - neprekinuto iskustvo
            </h3>
          </div>
          <div class="feature-item feature-reverse">
            <div class="feature-image-wrapper">
              <img
                src="@/assets/img/pretplata/content-4.png"
                class="feature-image"
                alt=""
              />
            </div>
            <h3 class="feature-title">
              Posebni sadržaji dostupni samo pretplatnicima
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonials Section -->
    <div class="testimonials-section">
      <div class="testimonials-content">
        <h2 class="testimonials-title">Izjave čitatelja</h2>

        <!-- Desktop Cards -->
        <div class="testimonials-grid desktop-only">
          <div class="testimonial-card">
            <p class="testimonial-quote">
              "Stranice Telegrama u meni bude nadu da nije sve oko nas uzaludno.
              I bude zahvalnost za jedan humani pokušaj pružanja utjehe svojim
              čitaocima"
            </p>
            <div class="testimonial-author">
              <img
                src="@/assets/img/pretplata/rade.png"
                class="author-image"
                alt=""
              />
              <div class="author-info">
                <span class="author-name">Rade Šerbedžija</span>
                <p class="author-title">Pretplatnik i umjetnik</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <p class="testimonial-quote">
              "Telegram opravdano drži posebno mjesto u civilizacijskom
              ekosustavu. Temama pozitivno utječe na trendove u društvu, na svim
              razinama"
            </p>
            <div class="testimonial-author">
              <img
                src="@/assets/img/pretplata/emil.png"
                class="author-image"
                alt=""
              />
              <div class="author-info">
                <span class="author-name">Emil Tedeschi</span>
                <p class="author-title">Pretplatnik i poduzetnik</p>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <p class="testimonial-quote">
              "U državi u kojoj institucije ne funkcioniraju, neovisno
              novinarstvo drži nam glavu iznad vode. Telegram čitam jer se još
              uvijek bavi pravim novinarstvom"
            </p>
            <div class="testimonial-author">
              <img
                src="@/assets/img/pretplata/sever.png"
                class="author-image"
                alt=""
              />
              <div class="author-info">
                <span class="author-name">Maja Sever</span>
                <p class="author-title">Pretplatnica i novinarka</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Swiper -->
        <VueSlickCarousel v-bind="slickOptions" class="mobile-only">
          <div class="slide-item">
            <div class="testimonial-card mobile">
              <p class="testimonial-quote">
                "Stranice Telegrama u meni bude nadu da nije sve oko nas
                uzaludno. I bude zahvalnost za jedan humani pokušaj pružanja
                utjehe svojim čitaocima"
              </p>
              <div class="testimonial-author">
                <img
                  src="@/assets/img/pretplata/rade.png"
                  class="author-image"
                  alt=""
                />
                <div class="author-info">
                  <span class="author-name">Rade Šerbedžija</span>
                  <p class="author-title">Pretplatnik i umjetnik</p>
                </div>
              </div>
            </div>
          </div>

          <div class="slide-item">
            <div class="testimonial-card mobile">
              <p class="testimonial-quote">
                "Telegram opravdano drži posebno mjesto u civilizacijskom
                ekosustavu. Temama pozitivno utječe na trendove u društvu, na
                svim razinama"
              </p>
              <div class="testimonial-author">
                <img
                  src="@/assets/img/pretplata/emil.png"
                  class="author-image"
                  alt=""
                />
                <div class="author-info">
                  <span class="author-name">Emil Tedeschi</span>
                  <p class="author-title">Pretplatnik i poduzetnik</p>
                </div>
              </div>
            </div>
          </div>

          <div class="slide-item">
            <div class="testimonial-card mobile">
              <p class="testimonial-quote">
                "U državi u kojoj institucije ne funkcioniraju, neovisno
                novinarstvo drži nam glavu iznad vode. Telegram čitam jer se još
                uvijek bavi pravim novinarstvom"
              </p>
              <div class="testimonial-author">
                <img
                  src="@/assets/img/pretplata/sever.png"
                  class="author-image"
                  alt=""
                />
                <div class="author-info">
                  <span class="author-name">Maja Sever</span>
                  <p class="author-title">Pretplatnica i novinarka</p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>

      <!-- Footer Section -->
      <div class="footer-section">
        <div class="footer-cta">
          <img
            src="@/assets/img/pretplata/telegram-white-logo.webp"
            class="footer-logo"
            alt="Telegram white logo"
          />
          <p class="footer-text">
            Pretplatite se sada i iskoristite ovu Black Friday ponudu!
          </p>
          <button class="footer-button" @click="setShowOffer">
            <a href="#offerWrap">Iskoristite ponudu</a>
          </button>
        </div>
        <div class="footer-bottom">
          <span class="copyright">Telegram ©2025</span>
          <div class="social-links">
            <div class="social-icon">
              <img
                src="@/assets/img/pretplata/fb-logo.svg"
                alt="facebook logo"
              />
            </div>
            <div class="social-icon">
              <img src="@/assets/img/pretplata/x-logo.svg" alt="twitter logo" />
            </div>
            <div class="social-icon">
              <img
                src="@/assets/img/pretplata/instagram.svg"
                alt="instagram logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'PretplataBlackFriday',
  data() {
    return {
      showOffer: false,
      show_msg: '',
      payment: 'trustpay_recurrent',
      pack: 'pretplata-standard',
      period: 'pretplata-godisnje',
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
      funnel_url_key: 'black-friday',
      auth: 0,
      url_key: 'black-friday',
      creditCard: false,
      cvv: false,
      expirationDate: false,
      instance: null,
      customerId: null,
      iframeUrl: '',
      canLogIn: true,
      voucher_log_id: null,
      discount: null,
      discountedPrice: null,
      loadingPromo: false,
      promo_error: '',
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      countdownInterval: null,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        variableWidth: true,
      },
    }
  },
  computed: {
    buyable() {
      if ((this.email || this.loggedIn) && this.terms && this.privacy) {
        return true
      }
      return false
    },
    price() {
      return 99
    },
    totalPrice() {
      return '99'
    },
    subscription_type() {
      return 'telegram_premium_pretplata_black_friday_2024'
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
  },
  watch: {
    pack() {
      this.discount = null
      this.promo_error = ''
      this.discountedPrice = null
      this.voucher_log_id = null
      if (this.promo_code && this.promo_code.trim() !== '') {
        this.checkPromo()
      }
    },

    period() {
      this.discount = null
      this.discountedPrice = null
      this.promo_error = ''
      this.voucher_log_id = null
      if (this.promo_code && this.promo_code.trim() !== '') {
        this.checkPromo()
      }
    },

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
    this.updateCountdown()
    this.countdownInterval = setInterval(this.updateCountdown, 1000)

    // Listen for TrustPay popup messages
    this.messageHandler = (event) => {
      if (event.data === 'popupLoaded') {
        this.loading = false
      }
    }
    window.addEventListener('message', this.messageHandler, false)
  },
  beforeDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval)
    }

    // Clean up the event listener
    if (this.messageHandler) {
      window.removeEventListener('message', this.messageHandler, false)
    }
    if (this.animation) {
      this.animation.destroy()
    }
  },
  methods: {
    updateCountdown() {
      const targetDate = new Date('2025-12-01T00:00:00').getTime()
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 }
        if (this.countdownInterval) {
          clearInterval(this.countdownInterval)
        }
        return
      }

      this.countdown = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      }
    },
    bankTransfer() {
      this.$axios
        .post('/pretplate/api/pretplata/bank', {
          subscription_type: this.subscription_type,
          price: this.price,
          email: this.email,
          referer: this.$store.getters['pretplata/link'],
          voucher_log_id: this.voucher_log_id,
          promo_code: this.promo_code,
        })
        .then((response) => {
          if (response.data.id) {
            this.$router.push('/pretplata/bank/' + response.data.id)
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
        .get('/crm/api/v2/voucher/check', {
          params: {
            code: this.promo_code,
            subscription_type_code: this.subscription_type,
            include_discounted_amount: true,
          },
        })
        .then((res) => {
          this.discountedPrice = res.data.discounted_amount
          this.discount = (
            this.price - parseFloat(res.data.discounted_amount)
          ).toFixed(2)
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
        .then((response) => {
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
    setShowOffer() {
      this.showOffer = !this.showOffer
    },
  },
  head() {
    return {
      title: 'Telegram Black Friday Pretplata',
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
          content: 'Telegram Black Friday Pretplata',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2025/11/black-friday-preview.webp',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/black-friday/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/black-friday/',
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

<style scoped>
.black-friday-page {
  font-family: 'Barlow', sans-serif;
  width: 100%;
  overflow: hidden;
}

/* Hero Section */
.hero-section {
  width: 100%;
  overflow: hidden;
  max-height: 640px;
  position: relative;
}

.hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 88px;
  z-index: 10;
  padding: 72px 16px 123px;
  position: relative;
}

.hero-header {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.telegram-logo {
  width: 100%;
  max-width: 171px;
  margin: 0 auto;
}

.black-friday-label {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 1rem;
  text-align: center;
  letter-spacing: 0.2em;
  color: white;
}

.hero-offer {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.offer-numbers {
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  margin: 0 auto;
  max-height: 78px;
  overflow: hidden;
}

.big-number {
  background: linear-gradient(192.48deg, #fff3ac 8.76%, #946d29 96.86%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 100px;
}

.for-text {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  line-height: 127px;
  text-align: center;
  color: white;
}

.offer-description {
  color: white;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
}

.price-old {
  text-decoration: line-through;
  color: #b5b5b5;
}

.cta-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 171px;
  margin: 0 auto;
}

.cta-button {
  padding: 14px 18px;
  border-radius: 5px;
  background: #f3e0bb;
  color: #7b5509;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #d2ba89;
}

.cancel-text {
  color: white;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}

/* Content Section */
.content-section {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.content-background {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-wrapper {
  max-width: 740px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 56px 16px;
  gap: 56px;
  position: relative;
}

.content-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: white;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 56px;
  text-align: left;
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}

.feature-image-wrapper {
  width: 100%;
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-title {
  width: 100%;
  color: white;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.02em;
}

/* Countdown Section */
.countdown-section {
  width: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #840002 0%, #000000 100%);
  padding: 0px 16px;
}

.countdown-wrapper {
  width: 100%;
  max-width: 510px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  text-align: center;
  gap: 48px;
}

.countdown-header {
  display: flex;
  flex-direction: column;
  padding: 0 58px;
  text-align: center;
  gap: 18px;
}

.countdown-label {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: white;
}

.countdown-timer {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 0 auto;
}

.timer-box {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 3px 8px 6px;
  text-align: center;
  color: white;
  background: #4f0001;
  border-radius: 3px;
}

.timer-value {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
}

.timer-label {
  font-size: 12px;
}

.countdown-offer {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
}

.offer-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.offer-title {
  color: white;
  font-weight: 500;
  font-size: 24px;
  font-family: 'Barlow', sans-serif;
}

.offer-subtitle {
  font-size: 16px;
  line-height: 20px;
  color: white;
}

.offer-box {
  background: white;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 6px;
}
.offer-heading {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.offer-price {
  max-width: 234px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 500;
  gap: 8px;
}

.price-strike-text {
  color: #747474;
  font-size: 36px;
  position: relative;
}

.price-strike-text::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 4px;
  background: #c1000d;
  transform: translateY(-50%) rotate(-15deg);
}

.price-current {
  color: black;
  font-size: 36px;
}

.offer-text {
  max-width: 234px;
  margin: 0 auto;
  color: #747474;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}

.offer-button {
  width: 100%;
  background: black;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  justify-content: center;
  border: none;
  cursor: pointer;
}
.offer-button {
  transition: all 0.6s;
}
.offer-button:hover svg {
  margin-left: 6px;
}

/* Testimonials Section */
.testimonials-section {
  width: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #000000 0%, #840002 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 151px;
  padding: 48px 16px 76px;
}

.testimonials-content {
  display: flex;
  flex-direction: column;
  gap: 54px;
  text-align: center;
}

.testimonials-title {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: white;
}

.testimonials-grid {
  display: flex;
  flex-direction: row;
  gap: 32px;
  max-width: 980px;
  margin: 0 auto;
}

.testimonial-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 28px;
  width: 100%;
  max-width: 305px;
  background: white;
  color: black;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.testimonial-card.mobile {
  max-width: 264px;
  padding: 24px;
  border-radius: 8px;
  margin-right: 16px;
}

.testimonial-quote {
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.testimonial-card.mobile .testimonial-quote {
  font-size: 18px;
  line-height: 24px;
}

.testimonial-author {
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
}

.testimonial-card.mobile .testimonial-author {
  gap: 0.75rem;
}

.author-image {
  width: 100%;
  max-width: 64px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.testimonial-card.mobile .author-image {
  max-width: 48px;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: left;
}

.author-name {
  color: black;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.03em;
}

.testimonial-card.mobile .author-name {
  font-size: 18px;
}

.author-title {
  color: black;
  font-size: 14px;
  line-height: 20px;
}

.desktop-only {
  display: none;
}

.mobile-only {
  display: block;
}

.swiper-container {
  max-width: 980px;
  margin: 0 auto;
}

.swiper-slide {
  max-width: 264px;
}

/* Footer Section */
.footer-section {
  width: 100%;
  max-width: 1363px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 105px;
}

.footer-cta {
  width: 100%;
  max-width: 308px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer-logo {
  width: 100%;
  max-width: 158px;
  margin: 0 auto;
}

.footer-text {
  color: white;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.02em;
  text-align: center;
  font-weight: 400;
}

.footer-button {
  max-width: 200px;
  margin: 0 auto;
  padding: 14px 18px;
  border-radius: 2px;
  background: #f3e0bb;
  color: #7b5509;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.footer-button:hover {
  background: #d2ba89;
}

.footer-bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 26px;
  justify-content: space-between;
  text-align: center;
  align-items: center;
}

.copyright {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: white;
}

.social-links {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.social-icon {
  width: 44px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s;
}

.social-icon:hover {
  background-color: #f0f0f0;
}

/* Tablet and Desktop */
@media (min-width: 1024px) {
  .hero-content {
    gap: 76px;
    padding: 84px 0px 68px;
  }

  .telegram-logo {
    max-width: 288px;
  }
  .hero-header {
    gap: 24px;
  }

  .black-friday-label {
    font-size: 22px;
    line-height: 28px;
  }

  .hero-offer {
    gap: 32px;
  }
  .offer-numbers {
    max-height: 127px;
  }

  .big-number {
    font-size: 148px;
  }

  .for-text {
    font-size: 34px;
    margin-top: 14px;
  }

  .big-number {
    font-size: 164px;
  }

  .for-text {
    font-size: 40px;
    line-height: 208px;
  }

  .offer-description {
    font-size: 28px;
    line-height: 36px;
  }

  .cta-container {
    max-width: 200px;
  }

  .cta-button {
    padding: 16px 28px;
    border-radius: 8px;
    font-size: 18px;
  }

  .cancel-text {
    font-size: 14px;
  }

  .content-wrapper {
    padding: 64px 0px;
    gap: 80px;
  }
  .content-title {
    font-size: 40px;
    line-height: 48px;
  }

  .features-list {
    gap: 48px;
  }

  .feature-item {
    flex-direction: row;
    gap: 50px;
  }
  .feature-image-wrapper {
    max-width: 250px;
    aspect-ratio: 1;
  }

  .feature-reverse {
    flex-direction: row-reverse;
  }

  .feature-title {
    font-size: 28px;
    line-height: 34px;
  }

  .countdown-wrapper {
    padding: 48px 0px;
    gap: 72px;
  }
  .countdown-offer {
    gap: 44px;
  }

  .countdown-header {
    gap: 32px;
  }

  .countdown-label {
    font-size: 18px;
  }

  .timer-box {
    padding: 6px 20px 12px;
    border-radius: 6px;
  }

  .timer-value {
    font-size: 34px;
  }

  .timer-label {
    font-size: 14px;
  }

  .offer-info {
    gap: 24px;
  }

  .offer-title {
    font-size: 32px;
  }

  .offer-subtitle {
    font-size: 18px;
    line-height: 24px;
  }

  .offer-box {
    padding: 29px 39px;
    gap: 16px;
  }
  .offer-heading {
    gap: 28px;
  }

  .price-strike-text,
  .price-current {
    font-size: 46px;
  }

  .offer-text {
    font-size: 24px;
    line-height: 32px;
  }

  .offer-button {
    padding: 12px;
    border-radius: 8px;
    line-height: 24px;
    gap: 8px;
  }

  .testimonials-section {
    gap: 140px;
    padding: 64px 16px 28px;
  }

  .testimonials-content {
    gap: 80px;
  }

  .testimonials-title {
    font-size: 40px;
    line-height: 56px;
  }

  .desktop-only {
    display: flex;
  }

  .mobile-only {
    display: none;
  }

  .footer-section {
    gap: 80px;
    padding-top: 40px;
  }

  .footer-cta {
    max-width: 480px;
    gap: 36px;
  }

  .footer-logo {
    max-width: 246px;
  }

  .footer-text {
    font-size: 40px;
    line-height: 3rem;
    letter-spacing: -2px;
  }

  .footer-button {
    padding: 16px 28px;
    border-radius: 8px;
    font-size: 18px;
  }

  .footer-bottom {
    flex-direction: row;
    text-align: left;
  }
}

.font-bold {
  font-weight: 700;
}
</style>
