<template>
  <div class="flex red-header-page pretplata-page">
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <div class="hero-wrapper">
      <div class="hero-left-container">
        <div class="hero-left-wrapper">
          <div class="hero-text-wrapper-desktop">
            <h1 class="hero-title">
              Pružite nam podršku: Doživotna pretplata za samo
              <span style="font-weight: 700">399€</span>
            </h1>
            <p class="hero-subtitle">
              Jednom platite – Telegram čitate zauvijek. Ne propustite ovu
              ekskluzivnu priliku koja se više neće ponoviti.
            </p>
            <a href="#pretplataPayment" class="lifetime-subscribe-btn">
              Kupite za 399€. Zauvijek
            </a>
          </div>
          <p class="hero-disclaimer">
            Osigurajte neograničen pristup bez reklama – zauvijek.
          </p>
        </div>
      </div>
      <div class="hero-main">
        <div class="hero-content-wrapper">
          <div class="hero-text-wrapper">
            <h1>
              Pružite nam podršku: Doživotna pretplata za samo
              <span style="font-weight: 700">399€</span>
            </h1>
            <p>Jednom platite – Telegram čitate zauvijek.</p>
            <a href="#pretplataPayment" class="lifetime-subscribe-btn">
              Kupite za 399€. Zauvijek
            </a>
          </div>
          <div class="hero-images">
            <img
              class="hero-mockup"
              src="@/assets/img/tg_mockup_lifetime.png"
              alt="Mockup Telegram portala s tekstom LIFETIME u pozadini"
            />
          </div>
        </div>
      </div>
    </div>
    <!--<div class="full flex darkened-bg relative pretplata-page">
      <div
        class="container relative flex mobile-side-pad stretch column-full-pad smallest-container mobile-top-pad"
      >
        <div class="full flex relative align-children-end">
          <p class="full center-text column-vertical-pad barlow faded">
            Ponuda istječe za:
          </p>
          <div class="full center countdown-element relative mobile-top-pad">
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-day-2" class="countdown-tile">0</div>
                <div id="cd-day-3" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">dana</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-hour-1" class="countdown-tile">0</div>
                <div id="cd-hour-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sati</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-min-1" class="countdown-tile">0</div>
                <div id="cd-min-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">minuta</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-sec-1" class="countdown-tile">0</div>
                <div id="cd-sec-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sekundi</div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="payment-content">
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
    <div class="lifetime-intro">
      <p>
        Vi ste razlog zašto ovo radimo. Ovom ponudom želimo Vas pozvati da nas
        podržite zauvijek.
      </p>
      <p class="lifetime-intro-closing">
        Zauvijek ćemo se boriti protiv kriminala i korupcije, ali ova prilika se
        neće ponoviti.
      </p>
    </div>
    <Features
      section-title="Zajedno gradimo ovu zajednicu"
      :cards="[
        {
          title: 'Doživotan pristup vrhunskom novinarstvu',
          text: 'Jednom platite i čitajte Telegram zauvijek - bez ograničenja, bez obnove, bez reklama.',
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
          title: 'Neograničeno čitanje Telegrama i Telesporta',
          text: 'Uživajte u ekskluzivnom sadržaju bez reklama. Doživotno.',
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
    <div class="cta">
      <span>Jednom platite – Telegram čitate zauvijek.</span>
      <a
        href="#pretplataPayment"
        class="lifetime-subscribe-btn"
        rel="noopener noreferrer"
      >
        Iskoristite ponudu
      </a>
    </div>
    <Footer></Footer>
    <client-only>
      <Chatbot />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Dozivotna',
  data() {
    return {
      loading: false,
      subscriptionType: 'individual',
      loginUrl: 'lifetime',
      selectedTerm: 'annual',
      payment: 'trustpay_recurrent',
      price: '399',
      pack: 'lifetime_premium_subscription_dozivotna',
      annualPrice: '399',
      monthlyPrice: '399',
      email: this.$store.state.user.email,
      urlKey: 'dozivotna',
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
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/lifetime',
      },
    ]
    return {
      title: 'Doživotna pretplata',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Doživotna pretplata',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Doživotna pretplata',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Doživotna pretplata',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/lifetime',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('@/assets/img/tg_mockup_lifetime.png'),
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
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
.payment-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 16px 60px 16px;
  margin: 0 auto;
  max-width: 865px;
  width: 100%;
}
@media screen and (min-width: 1024px) {
  .payment-content {
    padding: 40px 0 60px 0;
  }
}
#pretplataPayment {
  border-top: none !important;
}
.lifetime-intro {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
}
.lifetime-intro p {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #343434;
  margin: 0;
}
.lifetime-intro .lifetime-intro-closing {
  font-style: italic;
  color: #5f5f5f;
}
@media (min-width: 1024px) {
  .lifetime-intro {
    padding: 0 24px 24px;
  }
  .lifetime-intro p {
    font-size: 18px;
    line-height: 26px;
  }
}

/* Hero (popust-standard inspired) */
.hero-wrapper {
  width: 100%;
  max-width: 100%;
  background: radial-gradient(
    60.06% 51.64% at 50.07% 48.36%,
    #2a3a5a 0%,
    #0a1424 100%
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
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  font-family: 'Lora', serif;
  color: white;
  margin: 0;
  padding: 0 16px;
}
.hero-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
  align-items: center;
}
.hero-text-wrapper p {
  text-align: center;
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  font-family: 'Barlow', sans-serif;
  color: white;
  margin: 0;
}
.hero-images {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.hero-images .hero-mockup {
  display: block;
  width: 100%;
  max-width: 360px;
  height: auto;
  margin-bottom: 0;
}
@media (min-width: 1024px) {
  .hero-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .hero-left-container {
    display: flex;
    width: 380px;
    padding: 64px 0 30px 0;
  }
  .hero-main {
    padding-top: 64px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .hero-text-wrapper {
    display: none;
  }
  .hero-left-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 381px;
    gap: 40px;
    padding: 0 24px;
  }
  .hero-text-wrapper-desktop {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .hero-text-wrapper-desktop button {
    margin: 0;
  }
  .hero-left-container .hero-title {
    text-align: left;
    font-size: 35px;
    line-height: 40px;
    font-weight: 500;
    font-family: 'Lora', serif;
    color: white;
    margin: 0;
  }
  .hero-left-container .hero-subtitle {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Barlow', sans-serif;
    color: white;
    margin: 0;
  }
  .hero-left-container .hero-disclaimer {
    font-size: 12px;
    line-height: 16px;
    color: white;
    font-family: 'Barlow', sans-serif;
    margin: 0;
  }
  .hero-images {
    margin: 0;
    justify-content: center;
  }
}

.lifetime-hero-title {
  font-family: 'Lora', serif;
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;
  margin: 0 0 8px;
}
.lifetime-hero-sub {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 6px;
}
.lifetime-subscribe-btn {
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
  display: inline-block;
  text-align: center;
}
.lifetime-subscribe-btn:hover {
  background-color: #1a5e0f;
}
.cta {
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 406px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 32px;
}
.cta span {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
@media (min-width: 1024px) {
  .lifetime-hero-title {
    font-size: 36px;
    line-height: 40px;
  }
  .lifetime-subscribe-btn {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 20px;
    box-shadow: 0px 0px 8px -2px rgba(255, 255, 255, 0.48) inset,
      0px 3px 4px -3px rgba(255, 255, 255, 0.56) inset,
      0px 3px 3px -1.5px rgba(0, 0, 0, 0.03),
      0px 1px 1px -0.5px rgba(0, 0, 0, 0.03);
  }
  .cta {
    gap: 36px;
    padding-bottom: 72px;
  }
  .cta span {
    font-size: 28px;
    line-height: 36px;
  }
}
</style>
