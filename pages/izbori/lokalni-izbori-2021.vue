<template>
  <div>
    <div v-for="lista in zagreb.lista" :key="lista.rbr">
      <h2>{{ lista.naziv }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LokalniIzbori2021',
  data() {
    return {
      zagreb: {},
      split: {},
      rijeka: {},
      osijek: {},
      choice: {},
    }
  },
  mounted() {
    this.pullBig()
  },
  methods: {
    pullBig() {
      this.$axios.get('/pretplate/izbori/r_15_21_0000_000.json').then((res) => {
        this.zagreb = res.data
      })
      this.$axios.get('/pretplate/izbori/r_17_17_4090_000.json').then((res) => {
        this.split = res.data
      })
      this.$axios.get('/pretplate/izbori/r_17_08_3735_000.json').then((res) => {
        this.rijeka = res.data
      })
      this.$axios.get('/pretplate/izbori/r_17_14_3123_000.json').then((res) => {
        this.osijek = res.data
      })
    },
  },
}
</script>
