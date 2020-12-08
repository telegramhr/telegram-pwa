<template>
  <div class="full flex article stonk-widget stretch column-top-border">
    <div class="full flex">
      <h3 class="overtitle">Tržište</h3>
    </div>

    <div v-for="stock in stocks" :key="stock.name" class="full stock-market">
      <img
        :src="'/stocks/tg_stonks_' + (stock.up ? 'up' : 'down') + '.png'"
      />{{ stock.name
      }}<span :class="['superbold', stock.up ? 'green' : 'red']">
        {{ stock.percent }}%</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stocks',
  computed: {
    stocks() {
      return this.$store.state.stocks.stocks
    },
  },
  mounted() {
    this.$store.dispatch('stocks/pullStocks')
  },
}
</script>
