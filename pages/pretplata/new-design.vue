<template>
  <div>
    <PretplataHero
      title="Čitajte najbolje članke renomiranih autora. Podržite slobodno novinarstvo pretplatom."
    ></PretplataHero>
    <div class="content">
      <div class="box-wrapper">
        <Switcher
          @subscription-type-changed="handleSubscriptionChange"
        ></Switcher>
        <div class="boxes">
          <PretplataNewBox
            type="standard"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'standard'"
            @select="selectPlan"
          ></PretplataNewBox>
          <PretplataNewBox
            type="premium"
            :subscription-type="subscriptionType"
            :selected="selectedPlan === 'premium'"
            @select="selectPlan"
          ></PretplataNewBox>
        </div>
      </div>
      <div>
        <PretplataPayment></PretplataPayment>
        <PretplataLogin></PretplataLogin>
        <PretplataConfirm></PretplataConfirm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscriptionType: 'individual',
      selectedPlan: 'premium',
    }
  },
  methods: {
    handleSubscriptionChange(type) {
      this.subscriptionType = type
    },
    selectPlan(planType) {
      this.selectedPlan = planType
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
