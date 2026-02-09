<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <PretplataHeroOld
      title="Istina ima vrijednost.<br>Vi određujete koliku."
      :mobile-image="heroMobile"
      :desktop-image="heroDesktop"
    ></PretplataHeroOld>
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
            <span v-if="amt === 4" class="amount-label">naša preporuka</span>
            <span v-if="amt === 20" class="amount-label">redovna cijena</span>
          </button>
        </div>

        <input
          v-model="customAmount"
          type="number"
          step="0.01"
          min="0"
          max="999"
          placeholder="ili unesite iznos"
          class="custom-input"
          :class="{ filled: customAmount }"
          @focus="activateCustom"
          @input="validateCustomAmount"
          @keydown="blockInvalidKeys"
        />
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
          <p>
            Nakon isteka početnog razdoblja, pretplata se automatski obnavlja uz
            popust od 50% redovne cijene.
          </p>
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
          <p>
            Nakon isteka početnog razdoblja, pretplata se automatski obnavlja uz
            popust od 50% redovne cijene.
          </p>
        </div>
      </div>
    </div>
    <div class="features-bg">
      <Features :cards="featureCards" section-title="Kako funkcionira model" />
    </div>
    <Testimonials></Testimonials>
    <div class="cta">
      <span
        >U svijetu brzih naslova i pritisaka, vaša podrška daje nam slobodu da
        radimo temeljito, odgovorno i u službi istine.</span
      >
      <a href="#amount-selection" rel="noopener noreferrer">
        <button>Podržite Telegram</button>
      </a>
    </div>
    <client-only>
      <Chatbot />
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroMobile: require('@/assets/img/pretplata/odaberi-cijenu/hero-mob.png'),
      heroDesktop: require('@/assets/img/pretplata/odaberi-cijenu/hero-desktop.png'),
      loading: false,
      email: this.$store.state.user.email,
      payment: 'trustpay_recurrent',
      pack: 'telegram_premium_platite_koliko_zelite_prva_2_mjeseca',
      urlKey: 'half-off-2025',
      loginUrl: 'odaberi-cijenu',
      canLogIn: true,
      featureCards: [
        {
          title:
            'Ako vjerujete da je kvalitetno, neovisno novinarstvo važno — sada ga možete podržati na način koji vama ima smisla.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature1.png'),
        },
        {
          title:
            'Za prva 2 mjeseca Telegram Premium pretplate birate cijenu sami. Bez obaveze, bez pritiska.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature2.png'),
        },
        {
          title:
            'Nakon isteka početnog razdoblja, pretplata se automatski obnavlja uz popust od 50% redovne cijene.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature3.png'),
        },
        {
          title:
            'Kao pretplatnik dobivate puni pristup Telegram Premium sadržaju i izravno sudjelujete u očuvanju neovisnog novinarstva.',
          text: '',
          image: require('@/assets/img/pretplata/odaberi-cijenu/feature4.png'),
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
    },
    validateCustomAmount() {
      const raw = this.customAmount.toString()
      const val = parseFloat(raw)
      if (raw && (isNaN(val) || val < 0)) {
        this.customError = 'Unesite ispravan iznos'
      } else if (val > 999) {
        this.customError = 'Maksimalni iznos je 999€'
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

.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 16px;
  margin: 0 auto;
  max-width: 865px;
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
  margin-bottom: 16px;
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
  font-size: 14px;
  line-height: 1;
  color: #5f5f5f;
}

.custom-input {
  width: 100%;
  height: 60px;
  padding: 0 24px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 18px;
  background: white;
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
.custom-input:focus {
  outline: none;
  border-color: #494949;
}

.custom-input.filled {
  border-color: #494949;
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
  padding: 16px;
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
  line-height: 24px;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .amount-btn {
    height: 72px;
  }
  .custom-input {
    height: 72px;
  }
  .amount-value {
    font-size: 24px;
  }
  .features-bg {
    padding-top: 32px;
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
