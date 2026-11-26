<template>
  <div class="campaign-page page-gift">
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>

    <HeroPoklon />

    <div class="content dark-payment">
      <div id="paymentBoxes" class="boxes">
        <PretplataNewBoxBozic
          type="standard"
          :subscription-type="subscriptionType"
          :selected="selectedPlan === 'standard'"
          @select="selectPlan"
        />
        <PretplataNewBoxBozic
          class="box-premium"
          type="premium"
          :subscription-type="subscriptionType"
          :selected="selectedPlan === 'premium'"
          @select="selectPlan"
        />
      </div>
      <div>
        <PretplataPayment
          :allow-terms-change="false"
          :allow-bank="false"
          :term="selectedTerm"
          :payment-type="payment"
          :annual-price="annualPrice"
          :monthly-price="monthlyPrice"
          :subscription-type="subscriptionType"
          :gift="false"
          @selectTerm="selectTerm"
          @selectPaymentType="selectPaymentType"
        />
        <PretplataLoginGiftData
          :gift-email="giftEmail"
          :gift-date="giftDateFormatted"
          @updateGiftEmail="updateGiftEmail"
          @updateGiftDate="updateGiftDate"
        ></PretplataLoginGiftData>
        <PretplataLogin
          :login-url="loginUrl"
          :email="email"
          :can-log-in="canLogIn"
          :login-error="loginError"
          @updateCanLogIn="updateCanLogIn"
          @updateEmail="updateEmail"
        ></PretplataLogin>
        <PretplataPaymentConfirm
          :is-gift="true"
          :url-key="urlKey"
          :loading="loading"
          :can-log-in="canLogIn"
          :logged-in="loggedIn"
          :payment-type="payment"
          :pack="pack"
          :price="price"
          :email="email"
          :discounted-amount="discount"
          :gift-email="giftEmail"
          :gift-date="giftDateFormatted"
          @updateLoading="handleUpdateLoading"
          @updateDiscount="handleUpdateDiscount"
        ></PretplataPaymentConfirm>
      </div>
    </div>

    <FeatureTiles class="campaign-section" />
    <QuoteTestimonials
      class="campaign-section"
      title="Što kažu naši Premium pretplatnici"
    />
    <FinalCtaPoklon button-link="#paymentBoxes" />
    <Footer class="campaign-section" dark></Footer>

    <client-only>
      <!-- Chatbot Component -->
      <Chatbot />
    </client-only>
  </div>
</template>

<script>
// Same 50% gift packs as /pretplata/poklon-popust
const PLANS = {
  standard: {
    pack: 'Telegram_Standard_Poklon 2024_blagdanski_popust',
    price: '39',
    monthlyPrice: '7.99',
  },
  premium: {
    pack: 'Telegram_Premium_Poklon_2024_blagdanski_popust',
    price: '49',
    monthlyPrice: '9.99',
  },
}

const pad = (n) => String(n).padStart(2, '0')

// "+01:00" style offset, as the CRM expects for gift_starts_at
const timezoneOffset = (offsetMinutes) => {
  if (offsetMinutes === 0) return 'Z'
  const sign = offsetMinutes > 0 ? '-' : '+'
  const abs = Math.abs(offsetMinutes)
  return `${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`
}

export default {
  data() {
    return {
      loading: false,
      subscriptionType: 'individual',
      loginUrl: 'popust-poklon-50',
      selectedPlan: 'premium',
      selectedTerm: 'annual',
      payment: 'trustpay_recurrent',
      email: this.$store.state.user.email,
      urlKey: 'half-off-2025',
      canLogIn: true,
      discount: 0,
      giftEmail: '',
      giftDate: '',
    }
  },
  computed: {
    plan() {
      return PLANS[this.selectedPlan]
    },
    pack() {
      return this.plan.pack
    },
    price() {
      return this.plan.price
    },
    annualPrice() {
      return this.plan.price
    },
    monthlyPrice() {
      return this.plan.monthlyPrice
    },
    loginError() {
      return this.$store.state.user.error
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
    // empty until a valid date is picked, so checkout waits for it
    giftDateFormatted() {
      const d = new Date(this.giftDate)
      if (!this.giftDate || Number.isNaN(d.getTime())) return ''
      return (
        `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` +
        `T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}` +
        timezoneOffset(d.getTimezoneOffset())
      )
    },
  },
  methods: {
    handleUpdateLoading(state) {
      this.loading = state
    },
    handleUpdateDiscount(value) {
      this.discount = value
    },
    selectPlan(plan) {
      if (!PLANS[plan]) return
      this.selectedPlan = plan
      this.discount = 0
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
    updateGiftEmail(giftEmail) {
      this.giftEmail = giftEmail
    },
    updateGiftDate(giftDate) {
      this.giftDate = giftDate
    },
    updateCanLogIn(value) {
      this.canLogIn = value
    },
  },

  head() {
    const title = 'Telegram.hr Poklon pretplata - 50% blagdanskog popusta'
    const description =
      'Darujte ono što vrijedi čitati. Godinu dana neovisnog novinarstva, ekskluzivnih priča i analiza uz 50% popusta na Telegram poklon pretplatu.'
    const url = 'https://www.telegram.hr/pretplata/popust-poklon-50/'
    // TODO: replace with the final share image (1200x630 recommended)
    const image =
      'https://www.telegram.hr/wp-content/uploads/2026/11/popust-poklon-50-share.png'
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

<style scoped src="~/assets/css/pretplata-campaign.css"></style>

<style scoped>
.page-gift {
  --page-bg: #062714;
  /* Figma: white quote marks and accents on phones, red on desktop */
  --quote-accent: #fff;
}
@media screen and (min-width: 1024px) {
  .page-gift {
    --quote-accent: #b03838;
  }
}
/* Figma: hero -> cards 56 (mobile); cards -> payment 68 (desktop) */
.content {
  padding-top: 56px;
}
@media screen and (min-width: 1024px) {
  .content {
    gap: 68px;
    padding-top: 44px;
  }
}
</style>
