<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <div class="hero-wrapper">
      <div class="hero-left-container">
        <div class="hero-left-wrapper">
          <img
            class="telegram-logo"
            src="@/assets/img/telegram_logo_grey.svg"
            alt="Telegram Logo"
          />
          <div class="hero-text-wrapper-desktop">
            <h1 class="hero-title">
              Čitajte Telegram cijelu godinu za
              <span class="oldPrice"
                >79€
                <span class="line">/</span>
              </span>
              <span style="font-weight: 700">29€</span>
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
            Možete otkazati u bilo kojem trenutku. Nakon isteka prve godine po
            cijeni od 29€, pretplata se automatski obnavlja po redovnoj cijeni.
          </p>
        </div>
      </div>
      <div class="hero-main">
        <div class="hero-content-wrapper">
          <div class="hero-text-wrapper">
            <h1>
              Čitajte Telegram cijelu godinu za
              <span class="oldPrice"
                >79€
                <span class="line">/</span>
              </span>
              29€
            </h1>
            <p>
              Do neovisnog novinarstva sada možete već od
              <span style="font-weight: 700">0.56€</span> tjedno.
            </p>
            <a href="#pretplataPayment" class="hero-subscribe-btn"
              >Aktivirajte pretplatu</a
            >
          </div>
          <div class="hero-listen-wrapper">
            <div class="hero-listen-section">
              <button class="hero-listen-button">
                <img src="@/assets/img/pretplata/standard/play.png" alt="" />
                Poslušajte ovaj članak
                <span class="hero-duration"> • 6:25 min</span>
              </button>
              <div class="hero-share-section">
                <button class="hero-gift">
                  <img src="@/assets/img/pretplata/standard/gift.png" alt="" />
                  Poklonite članak
                </button>
                <button class="hero-comments">
                  <img
                    src="@/assets/img/pretplata/standard/comment.png"
                    alt=""
                  />
                  24
                </button>
                <button class="hero-share">
                  <img src="@/assets/img/pretplata/standard/share.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="hero-images">
            <img
              class="hero-iphone"
              src="@/assets/img/pretplata/standard/iphone.png"
              alt="Iphone"
            />
            <img
              class="hero-macbook"
              src="@/assets/img/pretplata/standard/macbook-desktop.png"
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
    <Features></Features>
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
      :text="'Iskoristite 60% popusta i počnite čitati već danas.'"
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
      loginUrl: 'popust-godine',
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
      title: 'Telegram.hr Pretplata - 60% popusta za prvu godinu',
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
          content: 'Telegram.hr Pretplata - 60% popusta za prvu godinu',
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
          content: 'https://www.telegram.hr/pretplata/popust-godine/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/popust-godine/',
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
.hero-main {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 32px;
  background: radial-gradient(
    50.13% 47.95% at 50.13% 47.85%,
    #3c82b3 0%,
    #041c2c 100%
  );
}
.hero-left-container {
  background-color: #e8dacd;
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
  font-size: 28px;
  line-height: 32px;
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
  font-size: 18px;
  line-height: 24px;
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
  min-height: 196px;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
}
.hero-images .hero-iphone {
  position: absolute;
  bottom: 0px;
  left: 30px;
  width: 98px;
}
.hero-images .hero-macbook {
  position: absolute;
  bottom: -60px;
  right: -50px;
  width: 480px;
}
@media (min-width: 1024px) {
  .hero-main {
    padding-top: 64px;
    flex: 1;
  }
  .hero-wrapper {
    display: flex;
    flex-direction: row;
  }
  .hero-left-container {
    display: flex;
    flex: 1;
    padding: 64px 67px 30px 0px;
    justify-content: end;
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
    gap: 72px;
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
    font-size: 36px;
    line-height: 40px;
    font-weight: 500;
    font-family: 'Lora', serif;
    color: #343434;
  }
  .oldPrice {
    color: #8a8a8a;
    position: relative;
  }
  .oldPrice .line {
    position: absolute;
    left: 7px;
    top: 0px;
    rotate: 25deg;
    font-size: 46px;
    color: #343434;
  }
  .hero-left-container span {
    font-weight: 700;
  }
  .hero-left-container p {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Barlow';
    color: #343434;
  }
  .hero-subscribe-btn {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 20px;
    margin: 0px;
  }
  .hero-listen-section {
    padding: 10px;
  }
  .hero-left-container .hero-disclaimer {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0%;
    color: #342f2f;
    font-family: 'Barlow', sans-serif;
  }
  .hero-content-wrapper {
    padding-left: 86px;
  }
  .hero-images {
    max-width: 700px;
    margin: 0px;
    min-height: 378px;
  }
  .hero-images .hero-iphone {
    display: block;
    position: absolute;
    bottom: -20px;
    right: 120px;
    left: auto;
    z-index: 10;
    width: 198px;
  }
  .hero-images .hero-macbook {
    position: absolute;
    bottom: 0px;
    left: -160px;
    right: auto;
    width: 580px;
  }
}
@media (min-width: 1024px) and (max-width: 1260px) {
  .hero-content-wrapper {
    padding-left: 24px;
  }
  .hero-images .hero-iphone {
    left: auto;
    right: 30px;
    width: 178px;
  }
  .hero-images .hero-macbook {
    left: -100px;
    right: auto;
    width: 550px;
  }
}
@media (min-width: 1261px) {
  .hero-duration {
    display: block;
  }
}
</style>
