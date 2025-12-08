<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <HeroChristmas
      title="Blagdani su idealna prilika da počnete novu godinu informirani"
      subtitle="Neovisno novinarstvo, dubinske analize i istraživački članci - sada uz "
      highlighted="50% popusta na godišnju pretplatu."
      version="green"
    ></HeroChristmas>
    <div class="content">
      <div class="box-wrapper">
        <div id="paymentBoxes" class="boxes">
          <PretplataNewBoxBozic
            type="standard"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'standard'"
            @select="selectPlan"
          ></PretplataNewBoxBozic>
          <PretplataNewBoxBozic
            type="premium"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'premium'"
            @select="selectPlan"
          ></PretplataNewBoxBozic>
        </div>
      </div>
      <div>
        <PretplataPayment
          :allowTermsChange="false"
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
          copyVersion="christmas"
        ></PretplataPaymentConfirm>
      </div>
    </div>
    <Features></Features>
    <FAQ></FAQ>
    <Testimonials></Testimonials>
    <PretplataCTA
      :text="'Blagdanska akcija traje do kraja ovog mjeseca'"
      :link="{
        url: '#paymentBoxes',
        text: 'Iskoristite ponudu',
      }"
    ></PretplataCTA>
    <client-only>
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
      selectedPlan: 'premium',
      selectedTerm: 'annual',
      payment: 'trustpay_recurrent',
      price: '',
      pack: 'pretplata-standard',
      term: 'pretplata-godisnje',
      annualPrice: '',
      monthlyPrice: '',
      promo_code: '',
      email: this.$store.state.user.email,
      password: '',
      showPassword: false,
      terms: false,
      privacy: false,
      auth: 0,
      urlKey: 'half-off-2025',
      instance: null,
      customerId: null,
      iframeUrl: '',
      canLogIn: true,
      voucher_log_id: null,
      discount: 0,
      loadingPromo: false,
      promo_error: '',
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
  mounted() {
    this.calculatePrice()
  },
  methods: {
    handleSubscriptionChange(type) {
      this.subscriptionType = type
      this.calculatePrice()
    },
    handleUpdateLoading(state) {
      this.loading = state
    },
    handleUpdateDiscount(value) {
      this.discount = value
    },
    selectPlan(planType) {
      this.selectedPlan = planType
      this.calculatePrice()
    },
    selectTerm(term) {
      this.selectedTerm = term
      this.calculatePrice()
    },
    selectPaymentType(paymentType) {
      this.payment = paymentType
      this.calculatePrice()
    },
    updateEmail(email) {
      this.email = email
    },
    updateCanLogIn(value) {
      this.canLogIn = value
    },
    calculatePrice() {
      switch (this.subscriptionType) {
        case 'individual':
          this.discount = 0
          this.urlKey = 'half-off-2025'
          switch (this.selectedPlan) {
            case 'standard':
              this.pack =
                'Telegram_Standard_Godišnja_Pretplata_50%_popust_za prvu godinu'
              this.price = '39'
              this.monthlyPrice = '7.99'
              this.annualPrice = '39'
              break
            case 'premium':
              this.pack =
                'Telegram_Premium_Godišnja_Pretplata_50%_popust_za prvu godinu'
              this.price = '49'
              this.monthlyPrice = '9.99'
              this.annualPrice = '49'
              break
          }
          break
        case 'family':
          this.discount = 0
          this.urlKey = 'family'
          switch (this.selectedPlan) {
            case 'standard':
              if (this.selectedTerm === 'monthly') {
                this.pack = 'telegram_standard_4_tjedna_family_pretplata_admin'
                this.price = '16.79'
              } else {
                this.pack = 'telegram_standard_godisnja_family_pretplata_admin'
                this.price = '166'
              }
              this.monthlyPrice = '16.79'
              this.annualPrice = '166'
              break
            case 'premium':
              if (this.selectedTerm === 'monthly') {
                this.pack = 'telegram_premium_4_tjedna_family_pretplata_admin'
                this.price = '20.99'
              } else {
                this.pack = 'telegram_premium_godisnja_family_pretplata_admin'
                this.price = '208'
              }
              this.monthlyPrice = '20.99'
              this.annualPrice = '208'
              break
          }
          break
      }
    },
  },

  head() {
    return {
      title: 'Telegram.hr Pretplata - 50% popusta za prvu godinu',
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
          content: 'Telegram.hr Pretplata - 50% popusta za prvu godinu',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2025/12/gift.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/50-popust/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/50-popust/',
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
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 16px 60px 16px;
  margin: 0 auto;
  max-width: 865px;
}
.box-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
}
.boxes {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  max-width: 865px;
}
@media screen and (min-width: 1024px) {
  .content {
    padding: 40px 0px 60px 0px;
  }
  .boxes {
    flex-direction: row;
    gap: 60px;
  }
  .box-wrapper {
    gap: 24px;
  }
}
</style>
