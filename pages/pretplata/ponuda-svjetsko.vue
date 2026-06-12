<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <PretplataHeroSvjetsko />
    <div class="content">
      <div class="box-wrapper">
        <div class="boxes">
          <PretplataNewBoxSvjetsko
            :card="telesportCard"
            :selected="selectedPlan === 'telesport'"
            @select="selectPlan"
          ></PretplataNewBoxSvjetsko>
          <PretplataNewBoxSvjetsko
            :card="premiumCard"
            :selected="selectedPlan === 'premium'"
            @select="selectPlan"
          ></PretplataNewBoxSvjetsko>
        </div>
      </div>
      <div>
        <PretplataPayment
          id="pretplataPayment"
          :allow-terms-change="false"
          :term="'annual'"
          :payment-type="payment"
          :subscription-type="'individual'"
          :annual-price="annualPrice"
          :monthly-price="''"
          @selectPaymentType="selectPaymentType"
        />
        <PretplataLogin
          :email="email"
          :login-url="'telesport'"
          :can-log-in="canLogIn"
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
          text: 'Većina svjetskih, a i hrvatskih afera otkrili su upravo – mediji. Baš iz tog razloga, bez razmišljanja, dajem svoj skromni doprinos godišnjom pretplatom na Telegram.',
          name: 'Daniel Ackermann',
          description: 'Suosnivač agencije Degordian',
          avatar: require('@/assets/img/pretplata/ackermann.png'),
        },
      ]"
    ></Testimonials>
    <PretplataCTA
      :text="'Iskoristite 75% popusta dok traje Svjetsko prvenstvo'"
      :link="{
        url: '#pretplataPayment',
        text: 'Aktivirajte pretplatu',
      }"
    ></PretplataCTA>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      selectedPlan: 'premium',
      payment: 'trustpay_recurrent',
      price: '',
      pack: 'pretplata-standard',
      annualPrice: '',
      promo_code: '',
      email: this.$store.state.user.email,
      password: '',
      showPassword: false,
      terms: false,
      privacy: false,
      auth: 0,
      urlKey: 'telesport-svjetsko',
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
    loggedIn() {
      return !!this.$store.state.user.id
    },
    telesportCard() {
      return {
        type: 'telesport',
        title: 'Telesport',
        price: '9,99€',
        priceSuffix: '/godišnje',
        tags: ['PRISTUP RUBRICI TELESPORT'],
        features: [
          'Neograničeno čitanje Telesporta i pristup arhivi svih članaka',
          'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
          '10 poklon članaka mjesečno',
          'Posebni popusti i pogodnost Telegram Kluba',
        ],
        buttonText: 'Odaberite',
        footerText:
          'Nakon isteka prve godine pretplata se automatski obnavlja po punoj cijeni',
      }
    },
    premiumCard() {
      return {
        type: 'premium',
        title: 'Telegram Premium',
        premium: true,
        recommended: true,
        recommendedText: 'Preporuka',
        price: '23,99€',
        priceSuffix: '/godišnje',
        tags: ['0,46€ TJEDNO'],
        features: [
          'Neograničeno čitanje Telegrama i Telesporta uz pristup kompletnoj arhivi',
          'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
          'Fokus na sadržaj - <b>čitanje bez reklama</b>',
          '10 poklon članaka mjesečno',
          'Posebni popusti i pogodnost Telegram Kluba',
        ],
        highlight:
          'Najniža cijena Telegram Premiuma ikada – čitajte sve članke, ne samo sportske.',
        buttonText: 'Odaberite',
        footerText:
          'Nakon isteka prve godine pretplata se automatski obnavlja po punoj cijeni',
      }
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
    selectPaymentType(paymentType) {
      this.payment = paymentType
    },
    updateEmail(email) {
      this.email = email
    },
    updateCanLogIn(value) {
      this.canLogIn = value
    },
    calculatePrice() {
      this.discount = 0
      this.urlKey = 'telesport-svjetsko'
      if (this.selectedPlan === 'telesport') {
        this.pack = 'telesport_svjetsko_prvenstvo'
        this.price = '9.99'
        this.annualPrice = '9.99'
      } else {
        this.pack = 'telegram_premium_svjetsko_prvenstvo'
        this.price = '23.99'
        this.annualPrice = '23.99'
      }
    },
  },

  head() {
    return {
      title: 'Telesport Svjetsko – Pretplata',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Od prvog zvižduka do finala - pratite prvenstvo uz Telegram i Telesport. Odaberite paket i iskoristite popust.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Od prvog zvižduka do finala - pratite prvenstvo uz Telegram i Telesport. Odaberite paket i iskoristite popust.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telesport Svjetsko – Pretplata',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/telesport_svjetsko_share.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/telesport-svjetsko',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/telesport-svjetsko',
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
