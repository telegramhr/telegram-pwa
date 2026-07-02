<template>
  <div class="pf-card">
    <div class="pf-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 13l4.5 4.5L19 8"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="pf-heading">
      <h2>Plaćanje uspješno!</h2>
      <p>Vaša članarina je aktivirana i spremna za korištenje.</p>
    </div>

    <div class="pf-summary">
      <div class="pf-summary-info">
        <p class="pf-plan-name">{{ planName }}</p>
        <p class="pf-plan-method">{{ paymentMethodLabel }}</p>
      </div>
      <p class="pf-plan-price">{{ amount }} €</p>
    </div>

    <TgButton block :href="accountUrl">Moj račun</TgButton>

    <div class="pf-footer">
      <p>Potvrda je poslana na vašu e-mail adresu.</p>
      <p>Pretplatu možete otkazati u bilo kojem trenutku.</p>
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
  name: 'PaymentFlowSuccess',
  props: {
    planName: { type: String, required: true },
    amount: { type: [String, Number], required: true },
    paymentMethod: { type: String, default: 'card' },
    accountUrl: { type: String, default: '/moj-racun' },
  },
  computed: {
    paymentMethodLabel() {
      return this.paymentMethod === 'bank'
        ? 'Plaćeno bankovnom uplatom'
        : 'Plaćeno karticom'
    },
  },
}
</script>

<style scoped>
.pf-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 480px;
  padding: 32px 28px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.09);
  font-family: 'Inter', sans-serif;
}

.pf-icon {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #e8fbe5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #217613;
}
.pf-icon svg {
  width: 48px;
  height: 48px;
}

.pf-heading {
  text-align: center;
  max-width: 340px;
}
.pf-heading h2 {
  font-size: 22px;
  font-weight: 600;
  color: #111;
  margin: 0 0 4px;
}
.pf-heading p {
  font-size: 14px;
  color: #5f5f5f;
  margin: 0;
}

.pf-summary {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 17px;
  background: #f9f9fa;
  border: 1px solid #ebebeb;
  border-radius: 10px;
}
.pf-plan-name {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #000;
}
.pf-plan-method {
  margin: 0;
  font-size: 12px;
  color: #666;
}
.pf-plan-price {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #000;
}

.pf-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
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
  font-size: 13px;
}

@media (max-width: 640px) {
  .pf-card {
    max-width: 358px;
    padding: 32px 24px;
  }
}
</style>
