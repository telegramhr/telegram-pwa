<template>
  <div class="page-bf" :class="{ 'has-sticky-bar': stickyVisible }">
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>

    <HeroBf2026 button-link="#pretplataPayment" />
    <OfferCountdown end-date="2026-11-30T23:59:59+01:00" />

    <div class="content dark-payment">
      <div>
        <PretplataPayment
          id="pretplataPayment"
          :allow-terms-change="false"
          :term="selectedTerm"
          :payment-type="payment"
          :annual-price="annualPrice"
          :monthly-price="monthlyPrice"
          :subscription-type="subscriptionType"
          :gift="false"
          @selectTerm="selectTerm"
          @selectPaymentType="selectPaymentType"
        />
        <PretplataLogin
          :email="email"
          :can-log-in="canLogIn"
          :login-error="loginError"
          :login-url="loginUrl"
          @updateCanLogIn="updateCanLogIn"
          @updateEmail="updateEmail"
        ></PretplataLogin>
        <PretplataPaymentConfirm
          :url-key="urlKey"
          :loading="loading"
          :can-log-in="canLogIn"
          :logged-in="loggedIn"
          :payment-type="payment"
          :pack="pack"
          :price="price"
          :email="email"
          :discounted-amount="discount"
          @updateLoading="handleUpdateLoading"
          @updateDiscount="handleUpdateDiscount"
        ></PretplataPaymentConfirm>
      </div>
    </div>

    <FeatureTiles />
    <QuoteTestimonials />
    <FinalCta id="finalCta" button-link="#pretplataPayment" />
    <Footer dark></Footer>

    <client-only>
      <StickyOfferBar
        show-after="#hero-cta"
        :hide-when-visible="['#pretplataPayment', '#finalCta']"
        button-link="#pretplataPayment"
        @visible="stickyVisible = $event"
      />
      <!-- Chatbot Component -->
      <Chatbot />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      subscriptionType: 'individual',
      loginUrl: 'black-friday-popust',
      selectedTerm: 'annual',
      payment: 'trustpay_recurrent',
      price: '99',
      pack: 'telegram_premium_pretplata_black_friday_2024',
      annualPrice: '99',
      monthlyPrice: '',
      email: this.$store.state.user.email,
      urlKey: 'black-friday',
      canLogIn: true,
      discount: 0,
      stickyVisible: false,
    }
  },
  computed: {
    loginError() {
      return this.$store.state.user.error
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
    userEmail() {
      return this.$store.state.user.email
    },
  },
  methods: {
    handleUpdateLoading(state) {
      this.loading = state
    },
    handleUpdateDiscount(value) {
      this.discount = value
    },
    selectTerm(term) {
      this.selectedTerm = term
    },
    selectPaymentType(paymentType) {
      this.payment = paymentType
    },
    updateEmail(email) {
      this.email = email
    },
    updateCanLogIn(value) {
      this.canLogIn = value
    },
  },

  head() {
    const title = 'Telegram.hr Black Friday - 2 godine za cijenu 1'
    const description =
      'Neovisno novinarstvo, bez reklama. Dvije godine Telegram Premium pretplate za 99 € umjesto 198 €.'
    const url = 'https://www.telegram.hr/pretplata/black-friday-popust/'
    const image =
      'https://www.telegram.hr/wp-content/uploads/2026/10/bf-2026-share.png'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Telegram' },
        { hid: 'og:locale', property: 'og:locale', content: 'hr_HR' },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        { hid: 'og:url', property: 'og:url', content: url },
        // TODO: replace with the final share image (1200x630 recommended)
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
        { hid: 'og:image:height', property: 'og:image:height', content: '630' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: title },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        { hid: 'twitter:image', name: 'twitter:image', content: image },
      ],
      link: [{ hid: 'canonical', rel: 'canonical', href: url }],
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
.page-bf {
  background-color: #000;
  color: #f5f5f7;
}
.telegram-overlay {
  position: fixed;
  top: 0;
  z-index: 101;
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
/* Figma: countdown -> payment divider 44 (mobile) / 32 (desktop);
   confirmation text -> features section 32 (mobile) / 64 (desktop) */
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 16px 32px;
  margin: 0 auto;
  max-width: 960px;
}
@media screen and (min-width: 1024px) {
  .content {
    padding: 32px 0 64px;
  }
}

/* lift the (globally styled) chatbot bubble above the sticky offer bar */
@media screen and (max-width: 1023px) {
  .has-sticky-bar ::v-deep .chatbot-toggle {
    bottom: 120px;
  }
  .has-sticky-bar ::v-deep .chatbot-hint {
    bottom: 185px;
  }
}

/*
 * The payment, login and confirm blocks are the shared components, untouched;
 * these overrides only recolour them for the black page (Figma 2328:3399).
 */
.dark-payment ::v-deep .main {
  border-top-color: #2b2b2b;
}
.dark-payment ::v-deep .column-wrapper > span,
.dark-payment ::v-deep .radio-description,
.dark-payment ::v-deep .promo-wrapper span,
.dark-payment ::v-deep .submit-wrapper p,
.dark-payment ::v-deep .email-wrapper p,
.dark-payment ::v-deep .divider,
.dark-payment ::v-deep .main > span {
  color: #a3a3a3;
}
.dark-payment ::v-deep .radio-heading span,
.dark-payment ::v-deep .radio-heading p,
.dark-payment ::v-deep .checkbox-label,
.dark-payment ::v-deep .promo-wrapper > span {
  color: #fff;
}
.dark-payment ::v-deep .checkbox-label a {
  color: inherit;
}
.dark-payment ::v-deep .custom-radio {
  border-color: #fff;
}
.dark-payment ::v-deep .custom-radio:checked {
  background-color: #fff;
  border-color: #fff;
}
.dark-payment ::v-deep .custom-radio:checked::after {
  background-color: #000;
}
.dark-payment ::v-deep .checkmark {
  border-color: #fff;
}
.dark-payment ::v-deep .checkbox-input:checked + .checkmark {
  background-color: #fff;
  border-color: #fff;
}
.dark-payment ::v-deep .checkbox-input:checked + .checkmark::after {
  border-color: #000;
}
.dark-payment ::v-deep .checkbox:hover .checkmark {
  border-color: #d0d0d0;
}
.dark-payment ::v-deep .toggle {
  background-color: #3a3a3a;
}
.dark-payment ::v-deep .toggle.is-on {
  background-color: #35c220;
}
.dark-payment ::v-deep .login-input,
.dark-payment ::v-deep .promo-input {
  border: 1px solid #2b2b2b;
}
</style>
