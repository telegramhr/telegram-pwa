<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <div class="hero-wrapper">
      <div class="hero-left-container">
        <div class="hero-left-wrapper">
          <a href="/">
            <img
              class="telegram-logo"
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram Logo"
            />
          </a>
          <div class="hero-text-wrapper-desktop">
            <h1 class="hero-title">
              Podržite neovisno novinarstvo za<br />
              <span class="oldPrice"
                >79€
                <span class="line">/</span>
              </span>
              29€ godišnje
            </h1>
            <p class="hero-subtitle">
              Do neovisnog novinarstva sada možete već od
              <span style="font-weight: 700">0,56€</span>
              tjedno.
            </p>
            <a href="#pretplataPayment" class="hero-subscribe-btn">
              Aktivirajte pretplatu
            </a>
          </div>
          <p class="hero-disclaimer">
            Nakon isteka prve godine po cijeni od 29€, pretplata se automatski
            obnavlja po redovnoj cijeni.
          </p>
        </div>
      </div>
      <div class="hero-main">
        <div class="hero-content-wrapper">
          <div class="hero-text-wrapper">
            <h1>
              Podržite neovisno novinarstvo za
              <span class="oldPrice"
                >79€
                <span class="line">/</span>
              </span>
              29€ godišnje
            </h1>
            <p>
              Čitajte sve sadržaje već od
              <span style="font-weight: 600">0,56€</span> tjedno.
            </p>
            <a href="#pretplataPayment" class="hero-subscribe-btn"
              >Aktivirajte pretplatu</a
            >
          </div>
          <div class="hero-images">
            <img
              class="hero-iphone"
              src="@/assets/img/pretplata/popust-standard/benefits_mobile.png"
              alt="Iphone"
            />
            <img
              class="hero-macbook"
              src="@/assets/img/pretplata/popust-standard/benefits_desktop.png"
              alt="Macbook"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="content">
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
          title: 'Neograničeno čitanje Telegram članaka čitavu godinu',
          text: 'Uživajte u ekskluzivnom sadržaju neovisnog novinarstva. Samo informacije koje su provjerene.',
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
      :text="'Iskoristite 63% popusta i počnite čitati već danas.'"
      :link="{
        url: '#pretplataPayment',
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
      loginUrl: 'popust-standard',
      selectedTerm: 'annual',
      payment: 'trustpay_recurrent',
      price: '29',
      pack: 'standard_godisnja_29e',
      annualPrice: '29',
      monthlyPrice: '0.56',
      email: this.$store.state.user.email,
      urlKey: 'popust-godine',
      canLogIn: true,
      discount: 0,
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
    return {
      title: 'Telegram.hr Pretplata - 63% popusta za prvu godinu',
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
          content: 'Telegram.hr Pretplata - 63% popusta za prvu godinu',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2026/04/popust-naslovna.png',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/popust-standard/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/popust-standard/',
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
#pretplataPayment {
  border-top: none !important;
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
@media screen and (min-width: 1024px) {
  .content {
    padding: 40px 0px 60px 0px;
  }
}

/* Hero */
.hero-wrapper {
  background: radial-gradient(
    60.06% 51.64% at 50.07% 48.36%,
    #008ef4 0%,
    #003152 100%
  );
}
.hero-main {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 32px;
}
.hero-left-container {
  background-color: transparent;
  display: none;
}
.hero-content-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
}
.hero-content-wrapper h1 {
  text-align: center;
  font-size: 22px;
  line-height: 25px;
  font-weight: 500;
  font-family: 'Lora', serif;
  color: white;
}
.hero-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
}
.hero-text-wrapper .oldPrice {
  color: #9f9f9f87;
  position: relative;
}
.hero-text-wrapper .oldPrice .line {
  position: absolute;
  left: 4px;
  top: 0px;
  color: #9f9f9f87;
  font-size: 36px;
  rotate: 20deg;
}
.hero-text-wrapper p {
  text-align: center;
  font-size: 14px;
  line-height: 15px;
  font-weight: 400;
  font-family: 'Barlow', sans-serif;
  color: white;
}
.hero-subscribe-btn {
  background-color: #217613;
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 14px;
  border: none;
  width: fit-content;
  border-radius: 10px;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
}
.hero-subscribe-btn:hover {
  background-color: #1a5e0f;
}
.hero-listen-wrapper {
  padding: 0 16px;
}
.hero-duration {
  display: none;
}
.hero-listen-section {
  display: flex;
  flex-direction: row;
  gap: 28px;
  width: fit-content;
  justify-content: space-between;
  padding: 9px 7px;
  margin: 0 auto;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(153, 153, 153, 0.15) 100%
  );
}
.hero-listen-section button {
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
}
.hero-listen-button {
  display: flex;
  flex-direction: row;
  gap: 4px !important;
  font-size: 10px;
  line-height: 17px;
  cursor: pointer;
}
.hero-listen-button img {
  width: 17px;
  height: 17px;
}
.hero-share-section {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.hero-share-section button {
  border: 0.53px solid white;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-size: 8px;
  line-height: 14px;
}
.hero-share-section button img {
  width: 10px;
  height: 10px;
}
.hero-share-section .hero-share {
  border-radius: 99999px;
  padding: 0 4px;
}
.hero-images {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.hero-images .hero-iphone {
  display: block;
  margin-bottom: 0;
}
.hero-images .hero-macbook {
  display: none;
}
@media (min-width: 1024px) {
  .hero-content-wrapper h1 {
    text-align: center;
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    font-family: 'Lora', serif;
    color: white;
  }
  .hero-main {
    padding-top: 64px;
    width: 535px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .hero-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .hero-left-container {
    display: flex;
    width: 330px;
    padding: 64px 0px 30px 0px;
  }
  .telegram-logo {
    max-width: 156px;
  }
  .hero-text-wrapper {
    display: none;
  }
  .hero-text-wrapper-desktop {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .hero-text-wrapper-desktop button,
  .hero-text-wrapper-desktop a {
    margin: 0;
  }
  .hero-left-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 381px;
    gap: 40px;
  }
  .hero-listen-section {
    margin: 0;
  }
  .hero-listen-button {
    font-size: 12px;
    line-height: 24px;
  }
  .hero-share-section {
    gap: 8px;
  }
  .hero-share-section button img {
    width: 16px;
    height: 16px;
  }
  .hero-listen-button img {
    width: 24px;
    height: 24px;
  }
  .hero-share-section button {
    font-size: 12px;
    line-height: 22px;
    border: 0.76px solid white;
    border-radius: 12px;
  }
  .hero-left-container h1 {
    text-align: left;
    font-size: 35px;
    line-height: 40px;
    font-weight: 500;
    font-family: 'Lora', serif;
    color: white;
  }
  .oldPrice {
    color: rgba(255, 255, 255, 0.5);
    position: relative;
  }
  .oldPrice .line {
    position: absolute;
    left: 7px;
    top: 0px;
    rotate: 25deg;
    font-size: 46px;
    color: rgba(255, 255, 255, 0.5);
  }
  .hero-title .oldPrice,
  .hero-title .oldPrice .line {
    font-weight: 500;
  }
  .hero-left-container p {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Barlow', sans-serif;
    color: white;
  }
  .hero-subscribe-btn {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 20px;
    margin: 0px;
    box-shadow: 0px 0px 8px -2px rgba(255, 255, 255, 0.48) inset,
      0px 3px 4px -3px rgba(255, 255, 255, 0.56) inset,
      0px 3px 3px -1.5px rgba(0, 0, 0, 0.03),
      0px 1px 1px -0.5px rgba(0, 0, 0, 0.03);
  }
  .hero-listen-section {
    padding: 10px;
  }
  .hero-left-container .hero-disclaimer {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0%;
    color: white;
    font-family: 'Barlow', sans-serif;
  }
  .hero-images {
    margin: 0px;
    justify-content: flex-start;
  }
  .hero-images .hero-iphone {
    display: none;
  }
  .hero-images .hero-macbook {
    display: block;
    margin-bottom: 0;
  }
}
@media (min-width: 1261px) {
  .hero-duration {
    display: block;
  }
}
</style>
