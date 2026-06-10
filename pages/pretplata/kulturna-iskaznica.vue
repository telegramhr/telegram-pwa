<template>
  <div class="kulturna-page">
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <PretplataHeroKooltura></PretplataHeroKooltura>
    <div class="content">
      <div class="box-wrapper">
        <div id="paymentBoxes" class="boxes">
          <PretplataNewBoxKooltura
            type="standard"
            :selected="selectedPlan === 'standard'"
            @select="selectPlan"
          ></PretplataNewBoxKooltura>
          <PretplataNewBoxKooltura
            type="premium"
            :selected="selectedPlan === 'premium'"
            @select="selectPlan"
          ></PretplataNewBoxKooltura>
        </div>
      </div>
      <div>
        <PretplataPaymentKooltura></PretplataPaymentKooltura>
        <PretplataLogin
          :email="email"
          :can-log-in="canLogIn"
          :login-error="loginError"
          :login-url="loginUrl"
          @updateCanLogIn="updateCanLogIn"
          @updateEmail="updateEmail"
        ></PretplataLogin>
        <PretplataPaymentConfirm
          variant="overlay"
          :url-key="urlKey"
          :loading="loading"
          :can-log-in="canLogIn"
          :logged-in="loggedIn"
          :payment-type="payment"
          :pack="pack"
          :price="price"
          :email="email"
          :hide-promo="true"
          :eculture-content-name="ecultureContentName"
          :discounted-amount="discount"
          @updateLoading="handleUpdateLoading"
          @updateDiscount="handleUpdateDiscount"
        ></PretplataPaymentConfirm>
      </div>
    </div>
    <Features :cards="featureCards"></Features>
    <FAQ></FAQ>
    <Testimonials></Testimonials>
    <PretplataCTA
      variant="overlay"
      :text="'Pretplatite se na Telegram uz Kulturnu iskaznicu'"
      :link="{
        url: '#paymentBoxes',
        text: 'Iskoristite ponudu',
      }"
    ></PretplataCTA>
    <Footer></Footer>
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
      loginUrl: 'kulturna-iskaznica',
      selectedPlan: 'premium',
      selectedTerm: 'annual',
      payment: 'eculture',
      price: '',
      pack: 'kulturna-iskaznica-premium',
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
      urlKey: 'kulturna-iskaznica',
      instance: null,
      customerId: null,
      iframeUrl: '',
      canLogIn: true,
      voucher_log_id: null,
      discount: 0,
      loadingPromo: false,
      promo_error: '',
      featureCards: [
        {
          title: 'Kooltura - Kulturna iskaznica',
          text: 'Uz kulturnu iskaznicu, kao 18-godišnjak imate mogućnost aktiviranja Telegram pretplate koja nudi cjelogodišnji pristup vrhunskom novinarstvu.',
          image: require('@/assets/img/pretplata/kooltura/kooltura.png'),
        },
        {
          title: 'Neovisno i nagrađivano novinarstvo',
          text: 'Pretplatom podržavate redakciju koja je višestruko nagrađivana za istraživačko i analitičko novinarstvo.',
          image: require('@/assets/img/pretplata/features/neovisno.png'),
        },
        {
          title: 'Relevantne analize i komentari',
          text: 'Analize onoga što se zapravo događa - kroz tekstove koji idu dublje od naslova.',
          image: require('@/assets/img/pretplata/features/relevantne.png'),
        },
        {
          title: 'Bez reklama u sklopu Premium pretplate',
          text: 'Uživajte u čistom, preglednom čitanju - bez ometajućih reklama. Samo informacije koje vrijede vašeg vremena.',
          image: require('@/assets/img/pretplata/features/reklame.png'),
        },
        {
          title: 'Pristup Telegram klubu i pogodnostima',
          text: 'U Telegram Klubu vas očekuju dodatne pogodnosti, posebni popusti i pozivnice na ekskluzivne događaje.',
          image: require('@/assets/img/pretplata/features/klub.png'),
        },
      ],
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
    ecultureContentName() {
      return this.selectedPlan === 'premium'
        ? 'Telegram Premium godišnja pretplata'
        : 'Telegram Standard godišnja pretplata'
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
      this.discount = 0
      this.urlKey = 'kulturna-iskaznica'
      switch (this.selectedPlan) {
        case 'standard':
          this.pack = 'kulturna-iskaznica-standard'
          this.price = '16.99'
          this.monthlyPrice = '16.99'
          this.annualPrice = '16.99'
          break
        case 'premium':
          this.pack = 'kulturna-iskaznica-premium'
          this.price = '19.99'
          this.monthlyPrice = '19.99'
          this.annualPrice = '19.99'
          break
      }
    },
  },

  head() {
    return {
      title: 'Telegram.hr Pretplata - Kulturna iskaznica',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pretplatite se na Telegram sredstvima Kulturne iskaznice',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Pretplatite se na Telegram sredstvima Kulturne iskaznice',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram.hr Pretplata - Kulturna iskaznica',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/kulturna-iskaznica-share.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/kulturna-iskaznica/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/kulturna-iskaznica/',
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
