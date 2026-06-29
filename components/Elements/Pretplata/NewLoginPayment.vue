<template>
  <div class="main">
    <div class="status">
      <div class="step active"></div>
      <div class="step" :class="{ active: step === 'payment' }"></div>
    </div>
    <div class="content">
      <div v-show="step === 'login'" class="login">
        <span class="title">Prijavite se</span>
        <div class="login-wrapper">
          <input
            v-model="email"
            type="email"
            placeholder="Vaša e-mail adresa"
          />
          <input v-model="password" type="password" placeholder="Lozinka" />
          <span>ili</span>
          <div class="social">
            <a :href="googleUrl">
              <img src="@/assets/img/google-logo.svg" alt="" /> Google
            </a>
            <a :href="facebookUrl">
              <img src="@/assets/img/facebook.svg" alt="" /> Facebook
            </a>
          </div>
        </div>
        <span v-if="loginError" class="login-error">{{ loginError }}</span>
        <button @click="handleLogin">Nastavi</button>
        <p class="renew">
          Ispunite sve korake kako bi dovršili kupnju.<br />
          Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
          automatski obnavlja.
        </p>
        <span class="copy"
          ><img src="@/assets/img/safe.svg" />Sigurno plaćanje — 256-bit SSL
          enkripcija</span
        >
      </div>

      <div v-show="step === 'payment'" class="payment">
        <span class="title">Odaberite način plaćanja</span>
        <div class="payment-wrapper">
          <div class="radio-buttons">
            <div
              class="radio-wrapper"
              :class="{ active: payment === 'card' }"
              @click="payment = 'card'"
            >
              <input
                type="radio"
                autocomplete="off"
                value="card"
                name="payment"
                :checked="payment === 'card'"
                class="custom-radio"
              />
              <div class="radio-option">
                <div class="radio-heading">
                  <div class="card-wrapper">
                    <span>Kartica</span>
                  </div>
                </div>
                <p class="radio-description">
                  Visa, Mastercard, Apple Pay i Google Pay
                </p>
                <div class="card-icons">
                  <img src="@/assets/img/mastercard.svg" alt="" />
                  <img src="@/assets/img/visa.svg" alt="" />
                  <img src="@/assets/img/apple-pay.svg" alt="" />
                  <img src="@/assets/img/google-pay.svg" alt="" />
                </div>
              </div>
            </div>
            <!-- bank -->
            <div
              class="radio-wrapper"
              :class="{ active: payment === 'bank' }"
              @click="payment = 'bank'"
            >
              <input
                type="radio"
                value="bank"
                autocomplete="off"
                name="payment"
                :checked="payment === 'bank'"
                class="custom-radio"
              />
              <div class="radio-option">
                <div class="radio-heading">
                  <div class="card-wrapper">
                    <span>Bankovna uplata</span>
                  </div>
                </div>
                <p class="radio-description">
                  Generirat ćemo uplatnicu s podacima za plaćanje
                </p>
              </div>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="terms">
            <label class="terms-item">
              <input v-model="terms" type="checkbox" name="terms" />
              <span>
                Prihvaćam
                <a
                  href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
                  target="_blank"
                  rel="noopener"
                  >uvjete korištenja</a
                >
              </span>
            </label>
            <label class="terms-item">
              <input v-model="privacy" type="checkbox" name="privacy" />
              <span>
                Prihvaćam
                <a
                  href="https://www.telegram.hr/stranica/pravila-privantnosti/"
                  target="_blank"
                  rel="noopener"
                  >pravila privatnosti</a
                >
              </span>
            </label>
          </div>
        </div>
        <form
          id="new-payment-form"
          method="post"
          :action="`/crm/sales-funnel/sales-funnel-frontend/submit?referer=${$store.getters['pretplata/link']}`"
        >
          <input type="hidden" name="allow_redirect" value="1" />
          <input type="hidden" name="funnel_url_key" :value="urlKey" />
          <input type="hidden" name="subscription_type" :value="pack" />
          <input type="hidden" name="payment_gateway" :value="paymentGateway" />
          <input type="hidden" name="price" :value="price" />
          <input type="hidden" name="auth" value="1" />
          <input type="hidden" name="email" :value="email" />
        </form>
        <button :disabled="!buyable" @click="submitPayment">
          Dovršite kupnju za {{ price }} €
        </button>
        <p v-if="paymentError" class="login-error">{{ paymentError }}</p>
        <p class="renew">
          Ispunite sve korake kako bi dovršili kupnju.<br />
          Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
          automatski obnavlja.
        </p>
        <span class="copy"
          ><img src="@/assets/img/safe.svg" />Sigurno plaćanje — 256-bit SSL
          enkripcija</span
        >
      </div>
    </div>
    <iframe id="NewTrustPayFrame"></iframe>
  </div>
</template>

<script>
/* global openPopup */
export default {
  name: 'NewLoginPayment',
  props: {
    pack: {
      type: String,
      default: '',
    },
    urlKey: {
      type: String,
      default: '',
    },
    price: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      step: 'login',
      payment: 'card',
      email: this.$store.state.user.email || '',
      password: '',
      terms: false,
      privacy: false,
      paymentError: '',
      retryCount: 0,
    }
  },
  computed: {
    loggedIn() {
      return !!this.$store.state.user.id
    },
    loginError() {
      return this.$store.state.user.error
    },
    paymentGateway() {
      return this.payment === 'bank' ? 'bank' : 'trustpay_recurrent'
    },
    googleUrl() {
      return `https://pretplata.telegram.hr/users/google/sign?url=https://www.telegram.hr/pretplata/telesport-sp`
    },
    facebookUrl() {
      return `https://pretplata.telegram.hr/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=https://www.telegram.hr/pretplata/telesport-sp`
    },
    buyable() {
      return this.terms && this.privacy
    },
  },
  watch: {
    loggedIn(isLoggedIn) {
      if (isLoggedIn) {
        this.step = 'payment'
      }
    },
  },
  created() {
    this.step = this.loggedIn ? 'payment' : 'login'
  },
  methods: {
    handleLogin() {
      if (this.loggedIn) {
        this.step = 'payment'
        return
      }
      if (!this.email || !this.password) {
        return
      }
      this.$store.dispatch('user/loginSubmit', {
        email: this.email,
        password: this.password,
        reload: false,
      })
    },
    submitPayment() {
      if (!this.buyable) {
        return
      }
      this.paymentError = ''
      this.$emit('updateLoading', true)

      if (this.payment === 'bank') {
        this.bankTransfer()
        return
      }

      const form = document.getElementById('new-payment-form')
      const formData = new FormData(form)
      fetch(form.action, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'ok') {
            const iframe = document.getElementById('NewTrustPayFrame')
            if (iframe) {
              iframe.src = data.url + '&Localization=hr'
              iframe.style.position = 'fixed'
              iframe.style.zIndex = '100'
            }
            openPopup()
            setTimeout(() => {
              this.$emit('updateLoading', false)
            }, 1500)
          } else {
            this.paymentError = 'Došlo je do greške s plaćanjem.'
            this.$emit('updateLoading', false)
          }
        })
        .catch(() => {
          if (this.retryCount < 2) {
            this.retryCount += 1
            setTimeout(() => {
              this.submitPayment()
            }, 500)
          } else {
            this.$emit('updateLoading', false)
            this.paymentError = 'Došlo je do greške prilikom slanja podataka.'
          }
        })
    },
    bankTransfer() {
      const payload = {
        subscription_type: this.pack,
        price: this.price,
        email: this.email,
        referer: this.$store.getters['pretplata/link'],
        voucher_log_id: '',
        promo_code: '',
        book_selected: false,
        book_name: '',
        book_address: '',
        book_phone: '',
      }
      this.$axios
        .$post('/pretplate/api/pretplata/bank', payload)
        .then((response) => {
          this.$emit('updateLoading', false)
          if (response && response.id) {
            this.$router.push('/pretplata/bank/' + response.id)
          } else {
            this.paymentError = 'Došlo je do greške s plaćanjem.'
          }
        })
        .catch(() => {
          this.$emit('updateLoading', false)
          this.paymentError = 'Došlo je do greške s bankovnom uplatom.'
        })
    },
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content {
  background-color: white;
  border-radius: 16px;
  padding: 24px 28px;
  gap: 20px;
  width: 100%;
}
.status {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.status .step {
  width: 100%;
  border: 2px solid #fff;
  border-radius: 16px;
  transition: border-color 0.2s ease;
}
.status .step.active {
  border-color: #b3aba4;
}
.login,
.payment {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.login .renew,
.payment .renew {
  font-family: 'Barlow', sans-serif;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #5f5f5f;
}
.login .copy,
.payment .copy {
  font-family: 'Barlow', sans-serif;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #aaaaaa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.login .title,
.payment .title {
  font-family: 'Barlow', sans-serif;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: #888888;
  text-transform: uppercase;
}
.login .login-error,
.payment .login-error {
  font-family: 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #d30000;
}
.login > button,
.payment > button {
  background-color: #217613;
  padding: 16px 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  color: white;
  cursor: pointer;
}
.login > button:disabled,
.payment > button:disabled {
  background-color: #b5b5b5;
  cursor: not-allowed;
}
#NewTrustPayFrame {
  display: none;
}
#new-payment-form {
  display: contents;
}
.login-wrapper,
.payment-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.login-wrapper span,
.payment-wrapper span {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
  color: #5f5f5f;
}
.social {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
}
.social button,
.social a {
  background-color: transparent;
  color: #5f5f5f;
  border: 1px solid #ebecf0;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  padding: 12px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-decoration: none;
}
.social button > img,
.social a > img {
  width: 18px;
}
.login-wrapper input {
  width: 100%;
  padding: 12px 14px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ebecf0;
}

.payment-wrapper {
  gap: 20px;
  align-items: stretch;
}
.payment-wrapper .spacer {
  width: 100%;
  border-top: 1px solid #e8e8e8;
}
.payment-wrapper .radio-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  border: 1px solid #d5d5d5;
  padding: 14px;
  border-radius: 8px;
}
.payment-wrapper .radio-option {
  display: flex;
  flex-direction: column;
}
.radio-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-wrapper .radio-wrapper.active {
  border: 1px solid #000;
  background-color: #fafafa;
}
.payment-wrapper .radio-wrapper:hover {
  background-color: #fafafa;
}
.payment-wrapper .radio-heading {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}
.payment-wrapper .card-wrapper {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}
.payment-wrapper .card-icons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
.payment-wrapper .card-icons img {
  width: 34px;
  height: auto;
}
.payment-wrapper .radio-heading span {
  font-family: 'Lora', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: black;
}
.payment-wrapper .radio-description {
  font-family: 'Barlow', sans-serif;
  font-size: 13px;
  line-height: 18px;
  text-align: left;
  font-weight: 400;
  color: #5f5f5f;
}
/* Custom radio button */
.payment-wrapper .custom-radio {
  appearance: none;
  -webkit-appearance: none;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1.2px solid #b5b5b5;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}
.payment-wrapper .custom-radio:checked {
  background-color: #000;
  border-color: #000;
}
.payment-wrapper .custom-radio:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.terms {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.terms-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
}
.terms-item input {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin: 2px 0 0;
  accent-color: black;
  cursor: pointer;
}
.terms-item span {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  color: black;
}
.terms-item a {
  font-weight: 600;
}

@media screen and (min-width: 1024px) {
  .main {
    max-width: 480px;
  }
  .content {
    max-width: 480px;
  }
}
</style>
