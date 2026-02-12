<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <PretplataHeroOld
      title="Neovisno novinarstvo vas treba.<br/> Čitajte Telegram po cijeni koju<br/> sami odaberete."
      :mobile-image="heroMobile"
      :desktop-image="heroDesktop"
    ></PretplataHeroOld>

    <div v-if="hasSubscription" class="subscriber-msg">
      <h2>Poštovani,</h2>
      <p>
        promotivna ponuda namijenjena je isključivo
        <strong>novim pretplatnicima</strong> te se može iskoristiti samo
        jednokratno.
      </p>
      <p>Zahvaljujemo na razumijevanju.</p>
      <p>Vaš Telegram</p>
    </div>
    <template v-else>
      <div class="content">
        <div id="amount-selection" class="amount-section">
          <h2>
            Odaberite &nbsp;cijenu koju biste platili za svoju Premium pretplatu
          </h2>

          <div class="amount-grid">
            <button
              v-for="amt in predefinedAmounts"
              :key="amt"
              class="amount-btn"
              :class="{ active: selectedAmount === amt && !customActive }"
              @click="selectAmount(amt)"
            >
              <span class="amount-value">{{ amt }} €</span>
              <span v-if="amt === 4" class="amount-label">Naša preporuka</span>
              <span v-if="amt === 20" class="amount-label">Redovna cijena</span>
            </button>

            <div class="custom-input-wrapper" :class="{ filled: customAmount }">
              <input
                v-model="customAmount"
                type="number"
                step="0.01"
                min="0"
                max="1000000"
                autocomplete="off"
                placeholder="ili unesite iznos"
                class="custom-input"
                @focus="activateCustom"
                @input="validateCustomAmount"
                @keydown="blockInvalidKeys"
                @keydown.enter="confirmPrice"
              />
              <span v-show="customAmount" class="input-suffix">€</span>
            </div>
          </div>
          <p v-if="customError" class="custom-error">{{ customError }}</p>

          <button
            v-show="!priceConfirmed"
            class="cta-button"
            :disabled="!!customError"
            @click="confirmPrice"
          >
            Dovršite kupnju za {{ ctaPrice }} €
          </button>

          <div v-show="!priceConfirmed" class="fine-print">
            <p>Možete otkazati u bilo kojem trenutku.</p>
          </div>
        </div>

        <div
          ref="paymentSection"
          class="payment-reveal"
          :class="{ open: priceConfirmed }"
        >
          <PretplataLogin
            :login-url="loginUrl"
            :email="email"
            :can-log-in="canLogIn"
            :login-error="loginError"
            :vertical="true"
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
            :price="displayPrice"
            :email="email"
            :discounted-amount="0"
            :additional-amount="additionalAmount"
            :additional-type="additionalType"
            :hide-promo="true"
            :hide-submit="false"
            :show-msg="false"
            copy-version="intro"
            @updateLoading="handleUpdateLoading"
            @updateDiscount="handleUpdateDiscount"
          ></PretplataPaymentConfirm>

          <div class="fine-print">
            <p>Možete otkazati u bilo kojem trenutku.</p>
          </div>
        </div>
      </div>
      <div class="features-bg">
        <Features :cards="featureCards" :sectionTitle="''" />
      </div>
      <Testimonials></Testimonials>
      <div class="cta">
        <span
          >U svijetu brzih naslova, vaša podrška daje nam slobodu da radimo
          temeljito, odgovorno i u službi istine.</span
        >
        <a href="#amount-selection" rel="noopener noreferrer">
          <button>Podržite Telegram</button>
        </a>
      </div>
      <client-only>
        <Chatbot />
      </client-only>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroMobile: require('@/assets/img/pretplata/odaberi-cijenu/hero-mob.webp'),
      heroDesktop: require('@/assets/img/pretplata/odaberi-cijenu/hero-desktop.webp'),
      loading: false,
      email: this.$store.state.user.email,
      payment: 'trustpay_recurrent',
      pack: 'telegram_premium_platite_koliko_zelite_prva_2_mjeseca',
      urlKey: '2-months-free',
      loginUrl: 'odaberi-cijenu',
      canLogIn: true,
      featureCards: [
        {
          title:
            'Vjerujete u kvalitetno i neovisno novinarstvo? Sada ga možete podržati na način koji vama najviše odgovara.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature1.webp'),
        },
        {
          title:
            'Prva 2 mjeseca Telegram Premiuma - za cijenu koju birate sami. Bez obaveza i bez pritiska.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature2.webp'),
        },
        {
          title:
            'Nakon isteka početnog razdoblja, pretplata se automatski obnavlja uz popust od 50% na redovnu cijenu.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature3.webp'),
        },
        {
          title:
            'Kao pretplatnik dobivate puni pristup svim sadržajima bez reklama i izravno sudjelujete u očuvanju neovisnog novinarstva.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature4.webp'),
        },
      ],
      predefinedAmounts: [0, 2, 4, 6, 10, 20],
      selectedAmount: 4,
      customActive: false,
      customAmount: '',
      customError: '',
      priceConfirmed: false,
    }
  },
  computed: {
    hasSubscription() {
      return this.$store.getters['user/hasPremium']
    },
    loginError() {
      return this.$store.state.user.error
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
    effectiveAmount() {
      if (this.customActive) {
        const val = parseFloat(this.customAmount)
        return isNaN(val) || val < 0 ? 0 : val
      }
      return this.selectedAmount
    },
    displayPrice() {
      return this.effectiveAmount.toFixed(2)
    },
    additionalAmount() {
      if (this.effectiveAmount <= 0) {
        return 0
      }
      return this.effectiveAmount.toFixed(2)
    },
    additionalType() {
      if (this.additionalAmount > 0) {
        return 'single'
      }
      return ''
    },
    ctaPrice() {
      const amt = this.effectiveAmount
      return Number.isInteger(amt) ? amt.toString() : amt.toFixed(2)
    },
  },
  watch: {
    hasSubscription(val) {
      if (val) {
        setTimeout(() => {
          this.$router.replace('/')
        }, 3000)
      }
    },
  },
  methods: {
    selectAmount(amt) {
      this.selectedAmount = amt
      this.customActive = false
      this.customAmount = ''
      this.customError = ''
    },
    activateCustom() {
      this.customActive = true
      this.selectedAmount = null
    },
    blockInvalidKeys(e) {
      if (['-', '+', 'e', 'E'].includes(e.key)) {
        e.preventDefault()
      }
      if (e.key === '0' && e.target.value === '0') {
        e.preventDefault()
      }
    },
    validateCustomAmount() {
      const raw = this.customAmount.toString()
      const val = parseFloat(raw)
      if (raw && (isNaN(val) || val < 0)) {
        this.customError = 'Unesite ispravan iznos'
      } else if (val > 1000000) {
        this.customAmount = 1000000
        this.customError = ''
      } else if (raw.includes('.') && raw.split('.')[1].length > 2) {
        this.customAmount = val.toFixed(2)
        this.customError = ''
      } else {
        this.customError = ''
      }
    },
    updateEmail(email) {
      this.email = email
    },
    updateCanLogIn(value) {
      this.canLogIn = value
    },
    handleUpdateLoading(state) {
      this.loading = state
    },
    handleUpdateDiscount() {
      // No discount handling on this page
    },
    confirmPrice() {
      this.priceConfirmed = true
      this.$nextTick(() => {
        window.scrollBy({ top: 200, behavior: 'smooth' })
      })
    },
  },

  mounted() {
    if (this.hasSubscription) {
      setTimeout(() => {
        this.$router.replace('/')
      }, 3000)
    }
  },

  head() {
    return {
      title: 'Telegram Premium - Odaberite svoju cijenu',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Isprobajte Telegram Premium. Vi odabirete cijenu za prva 2 mjeseca.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Isprobajte Telegram Premium. Vi odabirete cijenu za prva 2 mjeseca.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram Premium - Odaberite svoju cijenu',
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
          content: 'https://www.telegram.hr/pretplata/odaberi-cijenu/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplata/odaberi-cijenu/',
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

.subscriber-msg {
  max-width: 520px;
  margin: 0 auto;
  padding: 40px 16px;
  text-align: center;
}
.subscriber-msg h2 {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: #343434;
  font-weight: 500;
  margin: 0 0 12px 0;
}
.subscriber-msg p {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 28px;
  color: #343434;
  margin: 0 0 12px 0;
}
.subscriber-msg p:last-child {
  margin-top: 24px;
  font-weight: 600;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 16px;
  margin: 0 auto;
  max-width: 520px;
}

.amount-section {
  display: flex;
  flex-direction: column;
}

.amount-section h2 {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #343434;
  margin: 0 0 32px 0;
}

.amount-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
}

.amount-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 60px;
  padding: 0 12px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  background: white;
  font-family: 'Barlow', sans-serif;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.amount-btn:hover {
  border-color: #494949;
}

.amount-btn.active {
  border-color: #494949;
}

.amount-value {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
}

.amount-label {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  color: #5f5f5f;
}

.custom-input-wrapper {
  grid-column: span 2;
  display: flex;
  align-items: center;
  height: 60px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  background: white;
  padding: 0 24px;
}
.custom-input-wrapper:focus-within {
  border-color: #494949;
}
.custom-input-wrapper.filled {
  border-color: #494949;
}
.custom-input {
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 18px;
  outline: none;
}
.custom-input::placeholder {
  text-align: center;
  color: #8a8a8a;
}
.input-suffix {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #343434;
  margin-left: 4px;
}
.custom-input::-webkit-outer-spin-button,
.custom-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.custom-input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
.custom-input:-webkit-autofill,
.custom-input:-webkit-autofill:hover,
.custom-input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px white inset;
  -webkit-text-fill-color: #343434;
  transition: background-color 5000s ease-in-out 0s;
}

.custom-error {
  font-family: 'Barlow', sans-serif;
  color: red;
  font-size: 13px;
  margin: 8px 0 0 0;
}

.cta-button:disabled {
  background-color: #b5b5b5;
  cursor: not-allowed;
}

.cta-button {
  width: 100%;
  padding: 14px;
  margin-top: 32px;
  background-color: #37ae37;
  color: #fff;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #2e902e;
}

.fine-print {
  text-align: center;
  margin-top: 16px;
}

.fine-print p {
  font-family: 'Barlow', sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #5f5f5f;
  margin: 0;
}

.payment-reveal {
  max-height: 0;
  overflow: hidden;
  margin-bottom: -24px;
  transition: max-height 0.5s ease, margin-bottom 0.5s ease;
}

.payment-reveal.open {
  max-height: 1200px;
  margin-bottom: 0;
}

.features-bg {
  background-color: #eee3d8;
  padding-top: 40px;
}

.cta {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px;
  padding-bottom: 32px;
}

.cta span {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  max-width: 644px;
}

.cta button {
  background-color: #37ae37;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 18px 28px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
}

.cta button:hover {
  background-color: #237023;
}

@media screen and (min-width: 1024px) {
  .content {
    padding: 40px 0px;
  }
  .amount-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .amount-btn {
    height: 60px;
  }
  .custom-input-wrapper {
    height: 60px;
  }
  .amount-value {
    font-size: 18px;
  }
  .features-bg {
    padding-top: 32px;
  }
  .cta {
    gap: 24px;
    padding-bottom: 72px;
  }
  .cta span {
    font-size: 22px;
    line-height: 32px;
  }
}
</style>
