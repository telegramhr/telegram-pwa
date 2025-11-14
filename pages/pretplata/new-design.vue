<template>
  <div>
    <PretplataHeroTelesport
      title="Čitajte najbolje članke renomiranih autora. Podržite slobodno novinarstvo pretplatom."
    />

    <div class="content">
      <Switcher
        :selected-type="subscriptionType"
        @subscription-type-changed="setSubscriptionType"
      />

      <div class="box-wrapper">
        <div class="boxes">
          <PretplataNewBox
            type="standard"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'standard'"
            :price="standardPrice"
            @select="selectPlan"
          />
          <PretplataNewBox
            type="premium"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'premium'"
            :price="premiumPrice"
            @select="selectPlan"
          />
        </div>
      </div>

      <div>
        <PretplataPayment
          :payment-method="paymentMethod"
          :price="totalPrice"
          @change="paymentMethod = $event"
        />
        <PretplataLogin
          v-if="!loggedIn"
          :email="email"
          :show-password="showPassword"
          @login="login"
        />
        <PretplataConfirm
          :price="totalPrice"
          :can-buy="buyable"
          @submit="submit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      paymentMethod: 'trustpay_recurrent',
      email: this.$store.state.user.email,
      showPassword: false,
    }
  },
  computed: {
    ...mapState('pretplata-new', ['subscriptionType', 'selectedPlan']),
    ...mapGetters('pretplata-new', [
      'standardPrice',
      'premiumPrice',
      'totalPrice',
    ]),
    loggedIn() {
      return !!this.$store.state.user.id
    },
    buyable() {
      return !!this.email
    },
  },
  methods: {
    ...mapActions('pretplata-new', ['setPack', 'setTerm']),

    selectPlan(planType) {
      const pack =
        planType === 'standard' ? 'pretplata-standard' : 'pretplata-premium'
      this.setPack(pack)
      this.$store.commit('pretplata-new/SET_SELECTED_PLAN', planType)
    },

    setSubscriptionType(type) {
      const term =
        type === 'individual' ? 'pretplata-mjesecno' : 'pretplata-godisnje'
      this.setTerm(term)
    },

    login() {
      this.$store.dispatch('user/loginSubmit', {
        email: this.email,
        password: this.password,
        reload: false,
      })
    },

    submit() {
      console.log('Submitting purchase', {
        plan: this.$store.state['pretplata-new'].pack,
        subscriptionType: this.$store.getters['pretplata-new/subscriptionType'],
        paymentMethod: this.paymentMethod,
        totalPrice: this.$store.getters['pretplata-new/totalPrice'],
      })
    },
  },
  mutations: {
    SET_SELECTED_PLAN(state, plan) {
      state.selectedPlan = plan
    },
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 16px 60px 16px;
  margin: 0 auto;
  max-width: 865px;
}

.box-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
}

.boxes {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  max-width: 865px;
}

@media screen and (min-width: 1024px) {
  .content {
    padding: 24px 0px 60px 0px;
  }

  .boxes {
    flex-direction: row;
    gap: 60px;
  }

  .box-wrapper {
    gap: 24px;
  }
}
</style>
