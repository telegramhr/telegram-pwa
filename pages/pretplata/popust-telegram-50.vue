<template>
  <div class="campaign-page page-xmas">
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>

    <HeroBlagdani />

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

    <FeatureTiles class="campaign-section" />
    <QuoteTestimonials
      class="campaign-section"
      title="Što kažu naši Premium pretplatnici"
      :testimonials="testimonials"
    />
    <FinalCtaBlagdani button-link="#paymentBoxes" />
    <Footer class="campaign-section" dark></Footer>

    <client-only>
      <!-- Chatbot Component -->
      <Chatbot />
    </client-only>
  </div>
</template>

<script>
// Same first-year 50% packs as /pretplata/50-popust
const PLANS = {
  standard: {
    pack: 'Telegram_Standard_Godišnja_Pretplata_50%_popust_za prvu godinu',
    price: '39',
    monthlyPrice: '7.99',
  },
  premium: {
    pack: 'Telegram_Premium_Godišnja_Pretplata_50%_popust_za prvu godinu',
    price: '49',
    monthlyPrice: '9.99',
  },
}

const TESTIMONIALS = [
  {
    text: 'Telegram opravdano drži posebno mjesto u civilizacijskom ekosustavu',
    name: 'Emil Tedeschi',
    description: 'Pretplatnik i poduzetnik',
  },
  {
    text: 'Telegramovo razotkrivanje korupcije pridonosi formiranju zdravijeg društva',
    name: 'Ivana Gažić',
    description: 'pretplatnica i predsjednica Zagrebačke burze',
  },
  {
    text: 'Stranice Telegrama u meni bude nadu da nije sve oko nas uzaludno',
    name: 'Rade Šerbedžija',
    description: 'pretplatnik i umjetnik',
  },
]

export default {
  data() {
    return {
      loading: false,
      subscriptionType: 'individual',
      loginUrl: 'popust-telegram-50',
      selectedPlan: 'premium',
      selectedTerm: 'annual',
      payment: 'trustpay_recurrent',
      email: this.$store.state.user.email,
      urlKey: 'half-off-2025',
      canLogIn: true,
      discount: 0,
      testimonials: TESTIMONIALS,
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
    updateCanLogIn(value) {
      this.canLogIn = value
    },
  },

  head() {
    const title = 'Telegram.hr Blagdanska akcija - 50% popusta na pretplatu'
    const description =
      'Blagdani su idealna prilika da počnete novu godinu informirani. Neovisno novinarstvo, dubinske analize i istraživački članci uz 50% popusta na godišnju pretplatu.'
    const url = 'https://www.telegram.hr/pretplata/popust-telegram-50/'
    // TODO: replace with the final share image (1200x630 recommended)
    const image =
      'https://www.telegram.hr/wp-content/uploads/2026/11/popust-telegram-50-share.png'
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
.page-xmas {
  --page-bg: #051829;
  --quote-accent: #fff;
}
</style>
