<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <PretplataHero
      title="Čitajte najbolje članke renomiranih autora. Podržite slobodno novinarstvo pretplatom."
    ></PretplataHero>
    <div class="content">
      <div class="box-wrapper">
        <Switcher
          @subscription-type-changed="handleSubscriptionChange"
        ></Switcher>
        <div class="boxes">
          <PretplataNewBox
            type="standard"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'standard'"
            @select="selectPlan"
          ></PretplataNewBox>
          <PretplataNewBox
            type="premium"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'premium'"
            @select="selectPlan"
          ></PretplataNewBox>
        </div>
      </div>
      <div>
        <PretplataPayment
          :term="selectedTerm"
          :payment-type="payment"
          :annual-price="annualPrice"
          :monthly-price="monthlyPrice"
          :subscription-type="subscriptionType"
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
        ></PretplataPaymentConfirm>
      </div>
    </div>
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
      urlKey: 'main',
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
          this.urlKey = 'main'
          switch (this.selectedPlan) {
            case 'standard':
              if (this.selectedTerm === 'monthly') {
                this.pack = 'telegram_standard_4_tjedna_pretplata_2024'
                this.price = '7.99'
              } else {
                this.pack = 'telegram_standard_godisnja_pretplata_2024'
                this.price = '79'
              }
              this.monthlyPrice = '7.99'
              this.annualPrice = '79'
              break
            case 'premium':
              if (this.selectedTerm === 'monthly') {
                this.pack = 'telegram_premium_4_tjedna_pretplata_2024'
                this.price = '9.99'
              } else {
                this.pack = 'telegram_premium_godisnja_pretplata_2024'
                this.price = '99'
              }
              this.monthlyPrice = '9.99'
              this.annualPrice = '99'
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
    padding: 24px 0px 60px 0px;
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
