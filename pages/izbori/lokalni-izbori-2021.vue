<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader></theader>
    </div>
    <div class="full flex relative">
      <div
        class="container relative flex mobile-side-pad stretch column-full-pad"
      >
        <h1 class="full center-text">Lokalni izbori 2021.</h1>
        <p class="full center-text pretplata-tagline">
          Pratite rezultate na Telegramu kroz cijelu izbornu noć.
        </p>
      </div>
    </div>
    <div class="container flex relative mobile-side-pad">
      <election-list :city="zagreb"></election-list>
      <election-list :city="split"></election-list>
      <election-list :city="rijeka"></election-list>
      <election-list :city="osijek"></election-list>
      <div class="full flex search-element column-full-pad">
        <h2 class="full section-title">Ostali rezultati</h2>
        <select v-model="type">
          <option value="leader">Gradonačelnik/Načelnik/Župan</option>
          <option value="council">Skupština</option>
        </select>
        <select v-model="zupanija">
          <option
            v-for="county in counties"
            :key="county.code"
            :value="county.code"
          >
            {{ county.title }}
          </option>
        </select>
        <select v-if="zupanija" v-model="grad">
          <option v-for="city in cities" :key="city.code" :value="city.code">
            {{ city.title }}
          </option>
        </select>
      </div>
      <election-list v-if="choice.lista" :city="choice"></election-list>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<style scoped>
.section-title-less-margin {
  margin-bottom: 4px;
}
.result-table .result-graph > div {
  background-color: #ae3737;
  height: 18px;
}
.hero {
  position: relative;
  align-content: flex-end;
  color: white;
  background-color: #aa2222;
  background-size: cover;
  background-position: top;
  height: 40vw;
  margin-bottom: 48px;
}
h1 {
  margin-top: 2vw;
}
h2.section-title {
  font-size: 48px;
  font-size: 2.4rem;
  letter-spacing: normal;
  padding-bottom: 6px;
}
.result-table .row > div:first-child > div:first-child {
  position: absolute;
  top: 0;
  left: 0;
}
.kandidat-box {
  font-size: inherit;
}
.kandidat-box > div:first-child {
  font-size: 20px;
  font-size: 1rem;
  font-weight: bold;
}
.kandidat-box > div:nth-child(2) {
  font-size: 14px;
  font-size: 0.7rem;
  opacity: 0.7;
  height: 16px;
  overflow: hidden;
}
.result-table .row > div:nth-child(1) img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 5;
  filter: none;
}
.result-table .row > div:nth-child(1) img:first-child {
  z-index: 3;
}
.result-table .row > div:nth-child(1) {
  width: 69.99%;
  padding-left: 72px;
}
.result-table .row > div:nth-child(3) {
  width: 16.99%;
}
h1 {
  margin-top: 64px;
  font-size: 6.1rem;
}
#searchbox {
  margin: 16px 0px;
  width: 100%;
  max-width: 640px;
  padding: 8px 0px;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #c8c8c8;
}
.dark-mode #searchbox {
  border-color: #333;
}
.search-element h2 {
  margin-top: 64px;
  margin-bottom: 8px;
}
@media screen and (min-width: 1025px) {
  #searchbox {
    font-size: 20px;
    font-size: 1rem;
  }
}
@media screen and (max-width: 1024px) {
  h1 {
    font-size: 54px;
    font-size: 2.7rem;
    margin-top: 32px;
  }
  h2.section-title {
    font-size: 36px;
    font-size: 1.8rem;
  }
  .result-table .row > div:nth-child(1) img {
    margin-top: 0px;
  }
}
</style>

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
      counties: [],
      cities: [],
      zupanija: null,
      grad: null,
      type: 'leader',
    }
  },
  watch: {
    zupanija() {
      this.pullCounty()
      this.pullCities()
    },
    grad() {
      this.pullCity()
    },
    type() {
      if (this.grad) {
        this.pullCity()
      } else {
        this.pullCounty()
      }
    },
  },
  mounted() {
    this.pullBig()
    this.pullCounties()
  },
  methods: {
    pullCounties() {
      this.$axios.get('/pretplate/api/zupanija').then((res) => {
        this.counties = res.data
      })
    },
    pullCounty() {
      let type = '15'
      if (this.type === 'council') {
        type = '06'
      }
      if (!this.zupanija) {
        return
      }
      this.$axios
        .get(
          `/pretplate/izbori/r_${type}_${this.zupanija
            .toString()
            .padStart(2, '0')}_0000_000.json`
        )
        .then((res) => {
          this.choice = res.data
        })
    },
    pullCities() {
      this.$axios
        .get(`/pretplate/api/zupanija/${this.zupanija}/grad`)
        .then((res) => {
          this.cities = res.data
        })
    },
    pullCity() {
      let type = '17'
      if (this.type === 'council') {
        type = '08'
      }
      if (!this.grad) {
        return
      }
      this.$axios
        .get(
          `/pretplate/izbori/r_${type}_${this.zupanija
            .toString()
            .padStart(2, '0')}_${this.grad}_000.json`
        )
        .then((res) => {
          this.choice = res.data
        })
    },
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
