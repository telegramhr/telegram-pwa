<template>
  <div>
    <div v-if="loading" class="telegram-overlay">
      <span class="telegram-loader"></span>
    </div>
    <PretplataHeroOld
      title="Isprobajte Telegram Premium. Vi odabirete cijenu."
    ></PretplataHeroOld>
    <div class="content">
      <div class="amount-section">
        <h2>Odaberite koliko želite platiti za prva 2 mjeseca</h2>
        <p class="amount-subtitle">
          Nakon 2 mjeseca, pretplata se nastavlja po redovnoj cijeni od 9,99€
          mjesečno. Možete otkazati u bilo kojem trenutku.
        </p>

        <div class="amount-grid">
          <button
            v-for="amt in predefinedAmounts"
            :key="amt"
            class="amount-btn"
            :class="{ active: selectedAmount === amt && !customActive }"
            @click="selectAmount(amt)"
          >
            {{ amt === 0 ? 'Besplatno' : amt + ' €' }}
          </button>
          <button
            class="amount-btn"
            :class="{ active: customActive }"
            @click="activateCustom"
          >
            Drugi iznos
          </button>
        </div>

        <div v-if="customActive" class="custom-amount-wrapper">
          <div class="custom-input-row">
            <input
              v-model="customAmount"
              type="number"
              min="0"
              max="999"
              step="0.01"
              placeholder="0.00"
              class="custom-input"
              @input="validateCustomAmount"
            />
            <span class="currency-label">€</span>
          </div>
          <p v-if="customError" class="custom-error">{{ customError }}</p>
        </div>

        <div v-if="effectiveAmount === 0" class="info-box">
          <p>
            Za aktivaciju besplatnog probnog razdoblja autorizirat ćemo 0,01€ na
            vašoj kartici kako bismo potvrdili podatke. Iznos neće biti
            naplaćen.
          </p>
        </div>

        <div class="summary-box">
          <div class="summary-row">
            <span>Cijena za prva 2 mjeseca:</span>
            <span class="summary-price">{{ displayPrice }} €</span>
          </div>
          <div class="summary-row faded">
            <span>Nakon toga:</span>
            <span>9,99 €/mjesec</span>
          </div>
        </div>
      </div>

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
        copy-version="intro"
        @updateLoading="handleUpdateLoading"
        @updateDiscount="handleUpdateDiscount"
      ></PretplataPaymentConfirm>
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
      loading: false,
      email: this.$store.state.user.email,
      payment: 'trustpay_recurrent',
      pack: 'telegram_premium_2_mjeseca_besplatno',
      urlKey: 'half-off-2025',
      loginUrl: 'odaberi-cijenu',
      canLogIn: true,
      predefinedAmounts: [0, 2, 4, 6, 10, 20],
      selectedAmount: 6,
      customActive: false,
      customAmount: '',
      customError: '',
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
    validateCustomAmount() {
      const val = parseFloat(this.customAmount)
      if (this.customAmount && (isNaN(val) || val < 0)) {
        this.customError = 'Unesite ispravan iznos'
      } else if (val > 999) {
        this.customError = 'Maksimalni iznos je 999€'
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
  padding: 24px 16px 60px 16px;
  margin: 0 auto;
  max-width: 865px;
}

.amount-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.amount-section h2 {
  font-family: 'Lora', serif;
  font-size: 22px;
  line-height: 28px;
  font-weight: 600;
  margin: 0;
}

.amount-subtitle {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #5f5f5f;
  margin: 0;
}

.amount-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.amount-btn {
  padding: 16px;
  border: 1.5px solid #d9d9d9;
  border-radius: 8px;
  background: white;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.amount-btn:hover {
  border-color: #ae3737;
}

.amount-btn.active {
  border-color: #ae3737;
  background-color: #fdf2f2;
  color: #ae3737;
}

.custom-amount-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.custom-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.custom-input {
  padding: 12px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-size: 18px;
  width: 150px;
  font-family: 'Barlow', sans-serif;
}

.custom-input:focus {
  outline: none;
  border-color: #ae3737;
}

.currency-label {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #5f5f5f;
}

.custom-error {
  color: red;
  font-size: 13px;
  margin: 0;
}

.info-box {
  background: #fff8e1;
  border: 1px solid #ffd54f;
  border-radius: 8px;
  padding: 12px 16px;
}

.info-box p {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: #5f5f5f;
}

.summary-box {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
}

.summary-row.faded {
  color: #5f5f5f;
  font-size: 14px;
}

.summary-price {
  font-weight: 700;
  font-size: 20px;
}

@media screen and (max-width: 600px) {
  .amount-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .content {
    padding: 24px 0px 60px 0px;
  }
}
</style>
