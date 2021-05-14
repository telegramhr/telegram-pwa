<template>
  <app-link to="izbori/lokalni-izbori-2021" class="full">
    <div class="full article flex weather-widget izbori-mini-widget stretch">
      <div class="full izbori-widget-header column-horizontal-pad">
        <h2 class="full center-text column-top-border">Lokalni izbori uživo</h2>
      </div>
      <election-list-widget :city="zagreb"></election-list-widget>
      <election-list-widget :city="split"></election-list-widget>
      <election-list-widget :city="rijeka"></election-list-widget>
      <election-list-widget :city="osijek"></election-list-widget>
    </div>
  </app-link>
</template>

<style>
.izbori-mini-widget {
  padding-top: 0px;
}
.izbori-mini-widget .izbori-widget-header h2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.izbori-mini-widget .half img {
  background-color: #bbbbbb;
  border-radius: 25px;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  position: relative;
  top: -1px;
}
.izbori-mini-widget .big-number {
  font-size: 24px;
  font-size: 1.2rem;
}
.izbori-mini-widget .kandidat {
  margin-bottom: 8px;
}
.izbori-mini-widget h3.overtitle {
  padding-top: 8px;
  margin-bottom: 20px;
}
.grad-segment {
  padding-top: 0px;
}
.kandidat > .half {
  width: auto;
}
.kandidat:nth-child(6) {
  margin-bottom: 0px;
}
.kandidat:nth-child(n + 7) {
  display: none;
}
</style>

<script>
export default {
  name: 'Knjiga',
  data() {
    return {
      zagreb: {},
      split: {},
      rijeka: {},
      osijek: {},
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
