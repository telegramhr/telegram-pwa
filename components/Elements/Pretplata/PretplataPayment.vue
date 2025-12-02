<template>
  <div class="main">
    <div class="column-wrapper">
      <span>Odaberite trajanje pretplate</span>
      <div class="column">
        <div
          class="radio-wrapper"
          :class="{ active: term === 'annual' }"
          @click="handleSelectTerm('annual')"
        >
          <input
            type="radio"
            autocomplete="off"
            name="term"
            value="annual"
            :checked="term === 'annual'"
            class="custom-radio"
          />
          <div class="radio-option">
            <div class="radio-heading">
              <p>
                Godišnja pretplata + <span class="gift">poklon knjiga</span>
              </p>
              <button class="discount">
                {{
                  subscriptionType === 'individual'
                    ? '24% popusta'
                    : '24% dodatni popust'
                }}
              </button>
            </div>
            <p class="radio-description">
              {{ annualPrice }}€ za godinu dana unaprijed
            </p>
          </div>
        </div>
        <!-- monthly term -->
        <div
          class="radio-wrapper"
          :class="{ active: term === 'monthly' }"
          @click="handleSelectTerm('monthly')"
        >
          <input
            type="radio"
            autocomplete="off"
            name="term"
            :checked="term === 'monthly'"
            value="monthly"
            class="custom-radio"
          />
          <div class="radio-option">
            <div class="radio-heading">
              <span>Mjesečna pretplata</span>
            </div>
            <p class="radio-description">
              {{ monthlyPrice }}€, možete otkazati u bilo kojem trenutku
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="column-wrapper payment-type">
      <span>Odaberite način plaćanja</span>
      <div class="column">
        <!-- card -->
        <div
          class="radio-wrapper"
          :class="{ active: payment === 'card' }"
          @click="handleSelectPaymentType('trustpay_recurrent')"
        >
          <input
            type="radio"
            autocomplete="off"
            value="card"
            name="payment"
            :checked="paymentType === 'trustpay_recurrent'"
            class="custom-radio"
          />
          <div class="radio-option">
            <div class="radio-heading">
              <div class="card-wrapper">
                <span>Kartica</span>
                <div class="card-icons">
                  <img src="@/assets/img/mastercard.svg" alt="" />
                  <img src="@/assets/img/visa.svg" alt="" />
                  <img src="@/assets/img/apple-pay.svg" alt="" />
                  <img src="@/assets/img/google-pay.svg" alt="" />
                </div>
              </div>
            </div>
            <p class="radio-description">
              Visa, Mastercard, Apple Pay i Google Pay
            </p>
          </div>
        </div>
        <!-- bank -->
        <div
          class="radio-wrapper"
          :class="{ active: payment === 'bank' }"
          @click="handleSelectPaymentType('bank')"
        >
          <input
            type="radio"
            value="bank"
            autocomplete="off"
            name="payment"
            :checked="paymentType === 'bank'"
            class="custom-radio"
          />
          <div class="radio-option">
            <div class="radio-heading">
              <div class="card-wrapper">
                <span>Bankovna uplata</span>
                <div class="card-icons">
                  <img src="@/assets/img/bank-transfer.svg" alt="" />
                </div>
              </div>
            </div>
            <p class="radio-description">
              Generirat ćemo uplatnicu s podacima za plaćanje
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PretplataPayment',
  props: {
    term: {
      type: String,
      required: true,
      default: 'annual',
    },
    subscriptionType: {
      type: String,
      required: true,
      default: 'individual',
    },
    paymentType: {
      type: String,
      required: true,
      default: 'card',
    },
    annualPrice: {
      type: String,
      required: true,
      default: '',
    },
    monthlyPrice: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      payment: '',
    }
  },
  methods: {
    handleSelectTerm(term) {
      this.$emit('selectTerm', term)
    },
    handleSelectPaymentType(paymentType) {
      this.$emit('selectPaymentType', paymentType)
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  border-top: 1px solid #b5b5b5;
  padding: 28px 0px;
}

.column-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  gap: 24px;
}

.column-wrapper > span {
  font-family: 'Barlow';
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5f5f5f;
}
.column-wrapper.payment-type {
  gap: 18px;
}
.column {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 28px;
}

.radio-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  max-height: 64px;
}

.radio-option {
  display: flex;
  flex-direction: column;
}

.radio-heading {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}
.gift {
  color: #d30000 !important;
}
.card-wrapper {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}
.card-icons {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
.card-icons img {
  max-width: 26px;
}
.radio-heading span,
.radio-heading p {
  font-family: 'Lora', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: black;
  max-width: 190px;
}

.discount {
  background: #f0faf0;
  color: #2e902e;
  border: solid 1px #2e902e;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  cursor: default;
  text-transform: uppercase;
}

.radio-description {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #5f5f5f;
}

/* Custom radio button */
.custom-radio {
  appearance: none;
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: 1.2px solid #b5b5b5;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.custom-radio:checked {
  background-color: #000;
  border-color: #000;
}

.custom-radio:checked::after {
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
@media screen and (min-width: 1024px) {
  .main {
    flex-direction: row;
    gap: 62px;
    padding: 24px 0px;
  }
  .column-wrapper > span {
    font-size: 16px;
    line-height: 24px;
  }
  .column-wrapper.payment-type {
    gap: 24px;
  }
  .column {
    gap: 32px;
  }
}
</style>
