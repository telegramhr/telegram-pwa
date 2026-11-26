<template>
  <div class="page-xmas">
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

    <FeatureTiles class="navy-section" />
    <QuoteTestimonials
      class="navy-section"
      title="Što kažu naši Premium pretplatnici"
      :testimonials="testimonials"
    />
    <FinalCtaBlagdani button-link="#paymentBoxes" />
    <Footer class="navy-section" dark></Footer>

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

<style scoped>
.page-xmas {
  --xmas-navy: #051829;
  background-color: var(--xmas-navy);
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

/* Figma: hero -> cards 49 (mobile) / 44 (desktop), cards -> payment 16 / 54 */
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 880px;
  margin: 0 auto;
  padding: 49px 16px 32px;
}
.boxes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
/* phones lead with the recommended plan */
.box-premium {
  order: -1;
}
@media screen and (min-width: 1024px) {
  .content {
    gap: 54px;
    padding: 44px 0 42px;
  }
  .boxes {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    gap: 76px;
  }
  .box-premium {
    order: 0;
  }
}

/* the reused sections were drawn for the black BF page; recolour them navy */
.page-xmas .navy-section,
.page-xmas .navy-section.dark {
  background-color: var(--xmas-navy);
}
.navy-section ::v-deep .qt-quote__accent {
  background-color: #fff;
}
/* Premium card: magenta → orange instead of the shared card's gold */
.boxes ::v-deep .premium-title,
.boxes ::v-deep .premium-recommended,
.boxes ::v-deep .premium-recommended::before {
  background: linear-gradient(90.58deg, #8f2284 15.27%, #e4633a 100.28%);
}
.boxes ::v-deep .premium-title,
.boxes ::v-deep .premium-recommended {
  -webkit-background-clip: text;
  background-clip: text;
}

.navy-section ::v-deep .qt-quote__mark {
  color: #fff;
}

/*
 * The payment, login and confirm blocks are the shared components, untouched;
 * these overrides only recolour them for the dark page (same as BF 2026).
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
  background-color: var(--xmas-navy);
}
.dark-payment ::v-deep .checkmark {
  border-color: #fff;
}
.dark-payment ::v-deep .checkbox-input:checked + .checkmark {
  background-color: #fff;
  border-color: #fff;
}
.dark-payment ::v-deep .checkbox-input:checked + .checkmark::after {
  border-color: var(--xmas-navy);
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
