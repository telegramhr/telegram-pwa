<template>
  <div class="payment-flow">
    <div class="payment-flow-steps">
      <span class="payment-flow-step active"></span>
      <span
        class="payment-flow-step"
        :class="{ active: step !== 'auth' }"
      ></span>
    </div>
    <PaymentFlowAuth v-if="step === 'auth'" @authenticated="onAuthenticated" />
    <PaymentFlowPayment
      v-else-if="step === 'payment'"
      :subscription-code="subscriptionCode"
      :amount="amount"
      :funnel-url-key="funnelUrlKey"
      :email="userEmail"
      @update-loading="$emit('update-loading', $event)"
    />
    <PaymentFlowSuccess
      v-else
      :plan-name="planName"
      :amount="amount"
      :payment-method="paymentMethod"
    />

    <iframe id="TrustPayFrame" allow="clipboard-write *; payment *"></iframe>
  </div>
</template>

<script>
import PaymentFlowAuth from './PaymentFlowAuth.vue'
import PaymentFlowPayment from './PaymentFlowPayment.vue'
import PaymentFlowSuccess from './PaymentFlowSuccess.vue'

export default {
  name: 'PaymentFlow',
  components: { PaymentFlowAuth, PaymentFlowPayment, PaymentFlowSuccess },
  props: {
    subscriptionCode: { type: String, required: true },
    planName: { type: String, required: true },
    amount: { type: [String, Number], required: true },
    funnelUrlKey: { type: String, default: '' },
  },
  data() {
    return {
      step: 'auth',
      paymentMethod: 'card',
    }
  },
  computed: {
    userEmail() {
      return this.$store.state.user.email
    },
    isLoggedIn() {
      return !!this.$store.state.user.id
    },
  },
  watch: {
    isLoggedIn(value) {
      if (value) {
        this.step = 'payment'
      }
    },
  },
  created() {
    if (this.$route.query.payment === 'success') {
      this.step = 'success'
      return
    }
    if (this.isLoggedIn) {
      this.step = 'payment'
    } else {
      this.$store.dispatch('user/checkAccess')
    }
  },
  methods: {
    onAuthenticated() {
      this.step = 'payment'
    },
  },
}
</script>

<style scoped>
.payment-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 358px;
}

.payment-flow-steps {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  max-width: 358px;
}

@media (min-width: 641px) {
  .payment-flow,
  .payment-flow-steps {
    max-width: 480px;
  }
}
.payment-flow-step {
  flex: 1;
  height: 5px;
  border-radius: 2px;
  background: #fef9f4;
}
.payment-flow-step.active {
  background: #b3aba4;
}

#TrustPayFrame {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  opacity: 0;
  border: none;
  transition: opacity 0.5s ease-in-out;
  z-index: 99999;
}
</style>
