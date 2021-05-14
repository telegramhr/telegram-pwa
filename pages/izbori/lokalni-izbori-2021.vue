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
      <div class="half flex-responsive column-full-pad flex">
        <h2 class="full flex section-title section-title-less-margin">
          Zagreb
        </h2>
        <div class="full flex relative result-table total-results">
          <div class="full row flex">
            <div>Lista</div>
            <div>Postotak</div>
            <div></div>
          </div>
          <div
            v-for="lista in zagreb.lista"
            :key="lista.rbr"
            class="full row flex animate center"
            :style="{ order: 100 - parseFloat(lista.posto) }"
          >
            <div>
              <div></div>
              <img :src="getImage(lista.jedinstvenaSifra)" />
              <div class="full flex relative kandidat-box">
                <div class="full">{{ lista.naziv }}</div>
                <div class="full">{{ lista.stranke }}</div>
              </div>
            </div>
            <div class="postotak">{{ lista.posto }}%</div>
            <div class="relative flex result-graph">
              <div
                class="flex"
                :style="{
                  width: Number(lista.posto.replace(',', '.')) * 2 + '%',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="half flex-responsive column-full-pad flex">
        <h2 class="full flex section-title section-title-less-margin">Split</h2>
        <div class="full flex relative result-table total-results">
          <div class="full row flex">
            <div>Lista</div>
            <div>Postotak</div>
            <div></div>
          </div>
          <div
            v-for="lista in split.lista"
            :key="lista.rbr"
            class="full row flex animate center"
            :style="{ order: 100 - parseFloat(lista.posto) }"
          >
            <div>
              <div></div>
              <img :src="getImage(lista.jedinstvenaSifra)" />
              <div class="full flex relative kandidat-box">
                <div class="full">{{ lista.naziv }}</div>
                <div class="full">{{ lista.stranke }}</div>
              </div>
            </div>
            <div class="postotak">{{ lista.posto }}%</div>
            <div class="relative flex result-graph">
              <div
                class="flex"
                :style="{
                  width: Number(lista.posto.replace(',', '.')) * 2 + '%',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="half flex-responsive column-full-pad flex">
        <h2 class="full flex section-title section-title-less-margin">
          Rijeka
        </h2>
        <div class="full flex relative result-table total-results">
          <div class="full row flex">
            <div>Lista</div>
            <div>Postotak</div>
            <div></div>
          </div>
          <div
            v-for="lista in rijeka.lista"
            :key="lista.rbr"
            class="full row flex animate center"
            :style="{ order: 100 - parseFloat(lista.posto) }"
          >
            <div>
              <div></div>
              <img :src="getImage(lista.jedinstvenaSifra)" />
              <div class="full flex relative kandidat-box">
                <div class="full">{{ lista.naziv }}</div>
                <div class="full">{{ lista.stranke }}</div>
              </div>
            </div>
            <div class="postotak">{{ lista.posto }}%</div>
            <div class="relative flex result-graph">
              <div
                class="flex"
                :style="{
                  width: Number(lista.posto.replace(',', '.')) * 2 + '%',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="half flex-responsive column-full-pad flex">
        <h2 class="full flex section-title section-title-less-margin">
          Osijek
        </h2>
        <div class="full flex relative result-table total-results">
          <div class="full row flex">
            <div>Lista</div>
            <div>Postotak</div>
            <div></div>
          </div>
          <div
            v-for="lista in osijek.lista"
            :key="lista.rbr"
            class="full row flex animate center"
            :style="{ order: 100 - parseFloat(lista.posto) }"
          >
            <div>
              <div></div>
              <img :src="getImage(lista.jedinstvenaSifra)" />
              <div class="full flex relative kandidat-box">
                <div class="full">{{ lista.naziv }}</div>
                <div class="full">{{ lista.stranke }}</div>
              </div>
            </div>
            <div class="postotak">{{ lista.posto }}%</div>
            <div class="relative flex result-graph">
              <div
                class="flex"
                :style="{
                  width: Number(lista.posto.replace(',', '.')) * 2 + '%',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex search-element column-full-pad">
        <h2 class="full section-title">Ostali rezultati</h2>
        <input
          id="searchbox"
          type="text"
          placeholder="Pretražite rezultate ostalih općina, gradova i županija..."
        />
      </div>
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
    }
  },
  mounted() {
    this.pullBig()
  },
  methods: {
    getImage(id) {
      try {
        const m = require(`@/assets/img/extras/izbori_lokalni/${id}.gif`)
        return m
      } catch (e) {
        return require('@/assets/img/extras/izbori_lokalni/anon.gif')
      }
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
