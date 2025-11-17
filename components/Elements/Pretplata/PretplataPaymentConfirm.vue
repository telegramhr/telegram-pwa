<template>
  <div class="main">
    <div class="promo-wrapper">
      <span>Imate li promo kod?</span>
      <div class="toggle-container">
        <span>Ne</span>

        <button
          type="button"
          class="toggle"
          :class="{ 'is-on': promo }"
          @click="promo = !promo"
        >
          <span class="thumb" />
        </button>

        <span>Da</span>
      </div>
      <div v-if="promo" class="promo-input-wrapper">
        <input
          v-model="promoCode"
          type="text"
          placeholder="Promo kod"
          class="promo-input"
        />
        <button class="apply-btn" @click.prevent="checkPromo">Primijeni</button>
        <p v-if="promoError" style="color: red; margin-top: 8px">
          {{ promoError }}
        </p>
        <p v-if="promoSuccess" style="color: #37ae37; margin-top: 8px">
          {{ promoSuccess }}
        </p>
      </div>
    </div>
    <div class="confirm-wrapper">
      <div>
        <label class="checkbox">
          <input v-model="terms" class="checkbox-input" type="checkbox" />
          <span class="checkmark"></span>
          <p class="checkbox-label">Prihvaćam <span>uvjete korištenja</span></p>
        </label>
      </div>
      <div>
        <label class="checkbox">
          <input v-model="privacy" class="checkbox-input" type="checkbox" />
          <span class="checkmark"></span>
          <p class="checkbox-label">
            Prihvaćam <span>pravila privatnosti</span>
          </p>
        </label>
      </div>
    </div>
    <form
      id="payment-form"
      class="full flex column-horizontal-pad column-top-pad mobile-top-pad"
      method="post"
      :action="`/crm/sales-funnel/sales-funnel-frontend/submit?referer=${$store.getters['pretplata/link']}`"
    >
      <input type="hidden" name="allow_redirect" value="1" />
      <input type="hidden" name="funnel_url_key" :value="urlKey" />
      <input type="hidden" name="subscription_type" :value="pack" />
      <input type="hidden" name="payment_gateway" :value="paymentType" />
      <input type="hidden" name="price" :value="discountedAmount || price" />
      <input type="hidden" name="auth" value="1" />
      <input type="hidden" name="email" :value="email" />
      <input
        id="voucher_log_id"
        type="hidden"
        name="payment_metadata[voucher_log_id]"
        :value="voucher_log_id"
      />
      <input
        id="voucher_code"
        type="hidden"
        name="payment_metadata[voucher_code]"
        :value="promoCode"
      />

      <div class="submit-wrapper">
        <button v-if="buyable" @click.prevent="submit">
          Dovršite kupnju za
          <span v-if="discountedAmount" style="text-decoration: line-through"
            >{{ price }} €</span
          >
          <span>{{ finalPrice }} €</span>
        </button>
        <button v-if="!buyable" disabled>
          Dovršite kupnju za
          <span v-if="discountedAmount" style="text-decoration: line-through"
            >{{ price }} €</span
          >
          <span>{{ finalPrice }} €</span>
        </button>
        <p v-if="show_msg">{{ show_msg }}</p>
        <p>
          Ispunite sve korake iznad kako bi dovršili kupnju.<br />
          Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se
          automatski obnavlja.
        </p>
      </div>
    </form>
    <iframe id="TrustPayFrame"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PretplataPaymentConfirm',
  props: {
    paymentType: {
      type: String,
      required: true,
    },
    pack: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    canLogIn: {
      type: Boolean,
      required: true,
    },
    loggedIn: {
      type: Boolean,
      required: true,
    },
    urlKey: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      promo: false,
      promoCode: '',
      promoError: '',
      privacy: false,
      terms: false,
      voucher_log_id: '',
      show_msg: '',
      discountedAmount: 0,
      retryCount: 0,
    }
  },
  computed: {
    finalPrice() {
      return this.discountedAmount || this.price
    },
    buyable() {
      if (
        this.email &&
        this.terms &&
        this.privacy &&
        isValidEmail(this.email) &&
        (!this.canLogIn || this.loggedIn)
      ) {
        return true
      }
      return false
    },
  },
  methods: {
    applyPromo() {
      this.updateLoading(true)
      this.$axios
        .$post('/crm/api/v1/voucher/activate', {
          code: this.promo_code,
          subscription_type_code: this.pack,
          include_discounted_amount: true,
        })
        .then((res) => {
          this.voucher_log_id = res.voucher_log_id
          // this.discount = res.data.discounted_amount
        })
        .then(() => {
          this.submit()
        })
    },
    checkPromo() {
      this.updateLoading(true)
      this.promoError = ''
      // check if promo code is valid
      this.$axios
        .$get('/crm/api/v2/voucher/check', {
          params: {
            code: this.promoCode,
            subscription_type_code: this.pack,
            include_discounted_amount: true,
          },
        })
        .then((res) => {
          this.discountedAmount = res.discounted_amount
            ? res.discounted_amount
            : 0
          this.promoError = ''
          this.promoSuccess = 'Promo kod primjenjen!'
          this.updateLoading(false)
        })
        .catch(() => {
          this.promoSuccess = ''
          this.promoError = 'Promo kod nije važeći'
          this.updateLoading(false)
        })
    },
    updateLoading(value) {
      this.$emit('updateLoading', value)
    },
    submit() {
      this.updateLoading(true)
      if (this.paymentType === 'bank') {
        this.bankTransfer()
        return
      }
      const form = document.getElementById('payment-form')
      const formData = new FormData(form)
      const actionUrl = form.action
      fetch(actionUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.status === 'ok') {
            const trustpayIframe = document.getElementById('TrustPayFrame')
            if (trustpayIframe) {
              trustpayIframe.src = data.url + '&Localization=hr'
              trustpayIframe.style.position = 'fixed'
              trustpayIframe.style.zIndex = '100'
            }

            // Open TrustPay Popup
            /* global openPopup */
            openPopup()
            setTimeout(() => {
              this.updateLoading(false)
            }, 1500)
          } else {
            this.show_msg = 'Došlo je do greške s plaćanjem.'
            this.updateLoading(false)
          }
        })
        .catch(() => {
          // Retry logic: retry once if it's the first attempt
          if (this.retryCount < 2) {
            this.retryCount += 1
            // Wait a bit before retrying
            setTimeout(() => {
              this.submit()
            }, 500)
          } else {
            // Failed after retry
            this.updateLoading(false)
            this.show_msg = 'Došlo je do greške prilikom slanja podataka.'
          }
        })
    },
    bankTransfer() {
      this.$axios
        .$post('/pretplate/api/pretplata/bank', {
          subscription_type: this.pack,
          price: this.discountedAmount ? this.discountedAmount : this.price,
          email: this.email,
          referer: this.$store.getters['pretplata/link'],
          voucher_log_id: this.voucher_log_id,
          promo_code: this.promo_code,
        })
        .then((response) => {
          if (response.id) {
            this.$router.push('/pretplata/bank/' + response.id)
          } else {
            this.show_msg = 'Došlo je do greške s plaćanjem.'
          }
        })
    },
  },
}

function isValidEmail(value) {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return regex.test(value)
}
</script>

<style scoped>
#TrustPayFrame {
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
}
.main {
  padding-top: 28px;
  border-top: 1px solid #b5b5b5;
  display: flex;
  flex-direction: column;
  font-family: 'Barlow', sans-serif;
  gap: 28px;
}

.promo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.promo-wrapper span {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5f5f5f;
}
.promo-input {
  padding: 11px 16px 11px 20px;
  width: 100%;
  max-width: 222px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 8px;
}
.apply-btn {
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #902e2e;
  padding: 0px;
  position: relative;
  left: -86px;
}
.toggle-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle {
  width: 48px;
  height: 25px;
  border: none;
  border-radius: 999px;
  background-color: #d9d9d9;
  position: relative;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.toggle.is-on {
  background-color: #ae3737;
}

.thumb {
  width: 19px;
  height: 19px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: left 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.toggle.is-on .thumb {
  left: 26px;
}
.confirm-wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-bottom: 20px;
}

.confirm-wrapper div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-label {
  font-size: 16px;
  line-height: 20px;
}
.checkbox-label span {
  font-weight: 600;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 1.25px solid #b5b5b5;
  border-radius: 2px;
  background-color: white;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkmark {
  background-color: black;
  border-color: black;
}

.checkbox-input:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:hover .checkmark {
  border-color: gray;
}

.submit-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.submit-wrapper button {
  background-color: #37ae37;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
}
.submit-wrapper button:hover {
  background-color: #237023;
}
.submit-wrapper button:disabled {
  background-color: #b5b5b5;
}

.submit-wrapper p {
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  color: #5f5f5f;
}
@media (min-width: 1024px) {
  .main {
    padding-top: 24px;
    gap: 24px;
  }
  .promo-wrapper span {
    font-size: 16px;
    line-height: 24px;
  }
  .confirm-wrapper {
    padding-bottom: 0px;
    gap: 20px;
  }
  .toggle-container {
    gap: 16px;
  }
}
</style>
