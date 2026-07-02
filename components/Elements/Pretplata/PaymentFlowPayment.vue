<template>
  <div class="pf-card">
    <div class="pf-methods">
      <p class="pf-label">Odaberite način plaćanja</p>

      <label
        class="pf-method"
        :class="{ active: method === 'trustpay_recurrent' }"
      >
        <span
          class="pf-radio"
          :class="{ checked: method === 'trustpay_recurrent' }"
        >
          <input v-model="method" type="radio" value="trustpay_recurrent" />
          <span class="pf-radio-dot"></span>
        </span>
        <span class="pf-method-body">
          <span class="pf-method-title">Kartica</span>
          <span class="pf-method-desc"
            >Visa, Mastercard, Apple Pay i Google Pay</span
          >
          <span class="pf-method-icons">
            <img src="@/assets/img/mastercard.svg" alt="" />
            <img src="@/assets/img/visa.svg" alt="" />
            <img src="@/assets/img/apple-pay.svg" alt="" />
            <img src="@/assets/img/google-pay.svg" alt="" />
          </span>
        </span>
      </label>

      <label class="pf-method" :class="{ active: method === 'bank' }">
        <span class="pf-radio" :class="{ checked: method === 'bank' }">
          <input v-model="method" type="radio" value="bank" />
          <span class="pf-radio-dot"></span>
        </span>
        <span class="pf-method-body">
          <span class="pf-method-title">Bankovna uplata</span>
          <span class="pf-method-desc"
            >Generirat ćemo uplatnicu s podacima za plaćanje</span
          >
        </span>
      </label>
    </div>

    <div class="pf-checkboxes">
      <label class="checkbox">
        <input
          v-model="acceptsTerms"
          autocomplete="off"
          class="checkbox-input"
          type="checkbox"
        />
        <span class="checkmark"></span>
        <p class="checkbox-label">
          Prihvaćam
          <span
            ><a
              href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
              target="_blank"
              >uvjete korištenja</a
            ></span
          >
        </p>
      </label>
      <label class="checkbox">
        <input
          v-model="acceptsPrivacy"
          autocomplete="off"
          class="checkbox-input"
          type="checkbox"
        />
        <span class="checkmark"></span>
        <p class="checkbox-label">
          Prihvaćam
          <span
            ><a
              href="https://www.telegram.hr/stranica/pravila-privatnosti/"
              target="_blank"
              >pravila privatnosti</a
            ></span
          >
        </p>
      </label>
    </div>

    <form
      id="payment-flow-form"
      method="post"
      :action="`/crm/sales-funnel/sales-funnel-frontend/submit?referer=${$store.getters['pretplata/link']}`"
    >
      <input type="hidden" name="allow_redirect" value="1" />
      <input type="hidden" name="funnel_url_key" :value="funnelUrlKey" />
      <input type="hidden" name="subscription_type" :value="subscriptionCode" />
      <input type="hidden" name="payment_gateway" :value="method" />
      <input type="hidden" name="price" :value="amount" />
      <input type="hidden" name="auth" value="1" />
      <input type="hidden" name="email" :value="email" />
    </form>

    <TgButton block :disabled="!canSubmit || loading" @click="submit">
      <span v-if="loading">Molimo pričekajte...</span>
      <span v-else>Dovršite kupnju za {{ amount }} €</span>
    </TgButton>

    <p v-if="error" class="pf-error">{{ error }}</p>

    <div class="pf-footer">
      <p>Ispunite sve korake kako bi dovršili kupnju.</p>
      <p>
        Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se automatski
        obnavlja.
      </p>
      <div class="pf-ssl">
        <svg
          class="pf-lock-icon"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7V5a4 4 0 0 1 8 0v2m-9 0h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Sigurno plaćanje — 256-bit SSL enkripcija</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentFlowPayment',
  props: {
    subscriptionCode: { type: String, required: true },
    amount: { type: [String, Number], required: true },
    funnelUrlKey: { type: String, default: '' },
    email: { type: String, required: true },
  },
  data() {
    return {
      method: 'trustpay_recurrent',
      acceptsTerms: false,
      acceptsPrivacy: false,
      loading: false,
      error: '',
      retryCount: 0,
    }
  },
  computed: {
    canSubmit() {
      return this.acceptsTerms && this.acceptsPrivacy
    },
  },
  methods: {
    submit() {
      this.error = ''
      this.loading = true
      if (this.method === 'bank') {
        this.bankTransfer()
        return
      }
      const form = document.getElementById('payment-flow-form')
      const formData = new FormData(form)
      const actionUrl = form.action
      fetch(actionUrl, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'ok') {
            const trustpayIframe = document.getElementById('TrustPayFrame')
            if (trustpayIframe) {
              trustpayIframe.src = data.url + '&Localization=hr'
              trustpayIframe.style.position = 'fixed'
              trustpayIframe.style.zIndex = '100'
            }
            /* global openPopup */
            openPopup()
            setTimeout(() => {
              this.loading = false
            }, 1500)
          } else {
            this.error = 'Došlo je do greške s plaćanjem.'
            this.loading = false
          }
        })
        .catch(() => {
          if (this.retryCount < 2) {
            this.retryCount += 1
            setTimeout(() => {
              this.submit()
            }, 500)
          } else {
            this.loading = false
            this.error = 'Došlo je do greške prilikom slanja podataka.'
          }
        })
    },
    bankTransfer() {
      this.$axios
        .$post('/pretplate/api/pretplata/bank', {
          subscription_type: this.subscriptionCode,
          price: this.amount,
          email: this.email,
          referer: this.$store.getters['pretplata/link'],
        })
        .then((response) => {
          if (response.id) {
            this.$router.push('/pretplata/bank/' + response.id)
          } else {
            this.error = 'Došlo je do greške s plaćanjem.'
            this.loading = false
          }
        })
        .catch(() => {
          this.error = 'Došlo je do greške s plaćanjem.'
          this.loading = false
        })
    },
  },
}
</script>

<style scoped>
.pf-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 480px;
  padding: 32px 28px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.09);
  font-family: 'Inter', sans-serif;
}

.pf-methods {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.pf-label {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #666;
}

.pf-method {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  border: 1px solid #afb3bb;
  border-radius: 8px;
  cursor: pointer;
}
.pf-method.active {
  background: #f9f9fa;
  border-color: #000;
}

.pf-radio {
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #b5b5b5;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pf-radio.checked {
  border-color: #000;
  background: #000;
}
.pf-radio-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: transparent;
}
.pf-radio.checked .pf-radio-dot {
  background: #fff;
}
.pf-radio input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.pf-method-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.pf-method-title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
.pf-method-desc {
  font-size: 13px;
  color: #666;
}
.pf-method-icons {
  display: flex;
  gap: 8px;
}
.pf-method-icons img {
  height: 26px;
}

.pf-checkboxes {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
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
.checkbox-label {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: #000;
}
.checkbox-label span a {
  font-weight: 600;
  text-decoration: underline;
}

.pf-error {
  margin: 0;
  padding: 10px 14px;
  background: #fdecea;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  color: #b3261e;
  font-size: 14px;
  text-align: center;
  width: 100%;
}

.pf-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}
.pf-footer p {
  margin: 0;
  font-size: 12px;
  color: #666;
}
.pf-lock-icon {
  width: 16px;
  height: 16px;
  color: #666;
  flex-shrink: 0;
}
.pf-ssl {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
}

@media (max-width: 640px) {
  .pf-card {
    max-width: 358px;
    padding: 32px 24px;
  }
}
</style>
