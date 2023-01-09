<template>
  <div
    v-if="$store.state.stocks.stocks"
    class="full flex article stonk-widget stretch"
    data-nosnippet
  >
    <template v-for="(stock, key) in stocks">
      <div v-if="stock.name" :key="key" class="full stock-market">
        <img
          :src="'/stocks/tg_stonks_' + (stock.up ? 'up' : 'down') + '.png'"
        />{{ stock.name
        }}<span :class="['superbold', stock.up ? 'green' : 'red']">
          {{ stock.percent }}%</span
        >
      </div>
    </template>
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
}
</script>
