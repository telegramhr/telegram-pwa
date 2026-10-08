<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <HeroKerum></HeroKerum>
    <div id="placanje" class="content">
      <div>
        <PretplataPayment
          :allowTermsChange="false"
          :allowBank="true"
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
          :login-url="loginUrl"
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
    <Features
      :cards="[
        {
          title: 'Cjelogodišnji pristup vrhunskom novinarstvu',
          text: 'Čitajte sve članke bez ograničenja - od istraživačkih priča do analiza koje oblikuju javni razgovor u Hrvatskoj.',
          image: require('@/assets/img/pretplata/features/pristup.png'),
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
      ]"
    ></Features>
    <Testimonials
      :testimonials="[
        {
          text: 'Telegram nije samo nada da će se kriminal razotkriti, nego i mjesto kvalitetnog novinarstva. Jedan je od rijetkih medija koji pokazuje što se događa izvan Zagreba.',
          name: 'Tvrtko Jakovina',
          description: 'Pretplatnik i povjesničar',
          avatar: require('@/assets/img/pretplata/jakovina.png'),
        },
        {
          text: 'Na Telegram sam se pretplatila od samih početaka jer u vremenu promjena medija upravo istraživačko i vjerodostojno novinarstvo vraća izgubljeno povjerenje.',
          name: 'Ivana Dragičević',
          description: 'Pretplatnica i novinarka',
          avatar: require('@/assets/img/pretplata/dragicevic.png'),
        },
        {
          text: 'Većina svjetskih, a i hrvatskih afera otkrili su upravo - mediji. Baš iz tog razloga, bez razmišljanja, dajem svoj skromni doprinos godišnjom pretplatom na Telegram.',
          name: 'Daniel Ackermann',
          description: 'Suosnivač agencije Degordian',
          avatar: require('@/assets/img/pretplata/ackermann.png'),
        },
      ]"
    ></Testimonials>
    <PretplataCTA
      :text="'Uz vašu podršku nastavljamo bespoštedno razotkrivati afere'"
      :link="{
        url: '#placanje',
        text: 'Podržite Telegram',
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
      loginUrl: 'telegram-otkrio-aferu-kerum',
      subscriptionType: 'individual',
      selectedPlan: 'premium',
      selectedTerm: 'annual',
      payment: 'trustpay_recurrent',
      price: '',
      pack: 'telegram_premium_godisnja_pretplata_2024',
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
      urlKey: 'kerum',
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
      this.price = '99'
      this.monthlyPrice = '9.99'
      this.annualPrice = '99'
    },
    pad(n) {
      return n < 10 ? '0' + n : n
    },
    timezoneOffset(offset) {
      if (offset === 0) {
        return 'Z'
      }
      const sign = offset > 0 ? '-' : '+'
      offset = Math.abs(offset)
      return (
        sign + this.pad(Math.floor(offset / 60)) + ':' + this.pad(offset % 60)
      )
    },
  },

  head() {
    return {
      title: 'Telegram.hr - Telegram otkrio aferu Kerum - Podržite nas',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Telegram otkrio aferu Kerum - Podržite nas',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Telegram otkrio aferu Kerum - Podržite nas',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram.hr Podrška Telegramu - 50% popusta za prvu godinu',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2026/07/kerum-og.webp',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content:
            'https://www.telegram.hr/pretplata/telegram-otkrio-aferu-kerum/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/telegram-otkrio-aferu-kerum/',
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
/* PretplataPayment sits directly under the hero here — drop its top rule/space */
.content ::v-deep .main:first-child {
  border-top: none;
  padding-top: 0;
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
