<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article izbori-page"
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
      <election-list
        :city="this.$store.state.elections.zagreb"
        type="Gradonačelnik"
      ></election-list>
      <election-list
        :city="this.$store.state.elections.split"
        type="Gradonačelnik"
      ></election-list>
      <election-list
        :city="this.$store.state.elections.rijeka"
        type="Gradonačelnik"
      ></election-list>
      <election-list
        :city="this.$store.state.elections.osijek"
        type="Gradonačelnik"
      ></election-list>
      <election-list :city="zadar" type="Gradonačelnik"></election-list>
      <election-list :city="varazdin" type="Gradonačelnik"></election-list>
      <election-list :city="dubrovnik" type="Gradonačelnik"></election-list>
      <div class="full flex search-element column-full-pad">
        <h2 class="full section-title">Ostali rezultati</h2>
        <p class="full column-top-pad">Odaberite županiju:</p>
        <select v-model="zupanija" class="dropdown-izbornik">
          <option
            v-for="county in counties"
            :key="county.code"
            :value="county.code"
          >
            {{ county.title }}
          </option>
        </select>
        <p v-if="zupanija" class="full column-top-pad">
          Odaberite grad ili općinu:
        </p>
        <select v-if="zupanija" v-model="grad" class="dropdown-izbornik">
          <option v-for="city in cities" :key="city.code" :value="city">
            {{ city.title }}
          </option>
        </select>
      </div>
      <div class="full flex dynamic-election-results">
        <template v-if="leader.lista">
          <p>{{ leaderElectionTitle }}</p>
          <election-list :city="leader"></election-list>
        </template>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<style>
.izbori-page .section-title-less-margin {
  margin-bottom: 4px;
}
.izbori-page .result-table .result-graph > div {
  background-color: #ae3737;
  height: 18px;
}
.izbori-page .hero {
  position: relative;
  align-content: flex-end;
  color: white;
  background-color: #aa2222;
  background-size: cover;
  background-position: top;
  height: 40vw;
  margin-bottom: 48px;
}
.izbori-page h1 {
  margin-top: 2vw;
  font-size: 122px;
  font-size: 6.1rem;
}
.izbori-page h2.section-title {
  font-size: 40px;
  font-size: 2rem;
  letter-spacing: normal;
  padding-bottom: 6px;
  margin-bottom: 8px;
}
.izbori-page h3.timestamp-disclose {
  opacity: 0.3;
  text-transform: uppercase;
  font-size: 14px;
  font-size: 0.7rem;
  margin-bottom: 16px;
}
.izbori-page .result-table .row > div:first-child > div:first-child {
  position: absolute;
  top: 0;
  left: 0;
}
.izbori-page .kandidat-box {
  font-size: inherit;
}
.kandidat-box > div:first-child {
  font-size: 20px;
  font-size: 1rem;
  font-weight: bold;
}
.izbori-page .kandidat-box > div:nth-child(2) {
  font-size: 14px;
  font-size: 0.7rem;
  opacity: 0.7;
  height: 16px;
  overflow: hidden;
}
.izbori-page .result-table .row > div:nth-child(1) img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 5;
  filter: none;
}
.izbori-page .result-table .row > div:nth-child(1) img:first-child {
  z-index: 3;
}
.izbori-page .result-table .row > div:nth-child(1) {
  width: 69.99%;
  padding-left: 72px;
}
.izbori-page .result-table .row > div:nth-child(3) {
  width: 16.99%;
}
.izbori-page h1 {
  margin-top: 64px;
  font-size: 6.1rem;
}
.izbori-page #searchbox {
  margin: 16px 0px;
  width: 100%;
  max-width: 640px;
  padding: 8px 0px;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #c8c8c8;
}
.dark-mode .izbori-page #searchbox {
  border-color: #333;
}
.izbori-page .search-element h2 {
  margin-top: 64px;
  margin-bottom: 8px;
}
.izbori-page .dropdown-izbornik {
  display: block;
  font-size: 16px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  color: #111;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #c8c8c8;
  border-radius: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: white;
  background-image: url('https://www.telegram.hr/wp-content/themes/telegram2-desktop/assets/img/angle-down-solid-tgred.svg');
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  margin-top: 8px;
}
.izbori-page .dropdown-izbornik::-ms-expand {
  display: none;
}
.izbori-page .dropdown-izbornik:hover {
  border-color: #666;
}
.izbori-page .dropdown-izbornik:focus {
  border-color: #ae3737;
  color: #222;
  outline: none;
}
.izbori-page .dynamic-election-results div.half h2.section-title {
  margin-top: 8px;
}
.izbori-page .dynamic-election-results p {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  color: #ae3737;
  font-size: 16px;
  font-size: 0.8rem;
  text-transform: uppercase;
  display: flex;
}
.dark-mode .izbori-page .result-table .row:first-child {
  border-top: 1px solid #555;
}
@media screen and (min-width: 1025px) {
  .izbori-page #searchbox {
    font-size: 20px;
    font-size: 1rem;
  }
  .izbori-page .dynamic-election-results p {
    order: 1;
    padding: 0px 24px;
    width: 49.99%;
  }
  .izbori-page .dynamic-election-results div.half {
    order: 2;
    padding-top: 0px;
  }
}
@media screen and (max-width: 1024px) {
  .izbori-page h1 {
    font-size: 54px;
    font-size: 2.7rem;
    margin-top: 32px;
  }
  .izbori-page h2.section-title {
    font-size: 36px;
    font-size: 1.8rem;
  }
  .izbori-page .result-table .row > div:nth-child(1) img {
    margin-top: 0px;
  }
  .izbori-page .dynamic-election-results p {
    margin-top: 24px;
  }
  .izbori-page .search-element p {
    margin-top: 24px;
    margin-bottom: 4px;
  }
}
</style>

<script>
export default {
  name: 'LokalniIzbori2021',
  data() {
    return {
      zagreb: {},
      zagreb_council: {},
      split: {},
      rijeka: {},
      osijek: {},
      zadar: {},
      varazdin: {},
      pula: {},
      dubrovnik: {},
      leader: {},
      council: {},
      counties: [],
      cities: [],
      zupanija: null,
      grad: null,
    }
  },
  computed: {
    leaderElectionTitle() {
      if (this.grad) {
        if (this.grad.type === 'GRAD') {
          return 'Izbor gradonačelnika'
        }
        return 'Izbor načelnika'
      }
      if (this.zupanija === 21) {
        return 'Izbor gradonačelnika'
      }
      return 'Izbor župana'
    },
    councilElectionTitle() {
      if (this.grad) {
        if (this.grad.type === 'GRAD') {
          return 'Gradsko vijeće'
        }
        return 'Općinsko vijeće'
      }
      if (this.zupanija === 21) {
        return 'Skupština Grada Zagreba'
      }
      return 'Županijska skupština'
    },
  },
  watch: {
    zupanija() {
      this.grad = null
      this.pullCities()
    },
    grad() {
      this.pullCity()
    },
    type() {
      if (this.grad) {
        this.pullCity()
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
      const now = new Date()
      const time = now.getHours() + now.getMinutes()
      this.$axios
        .get(
          `/pretplate/izbori/r_15_${this.zupanija
            .toString()
            .padStart(2, '0')}_0000_000.json?t=${time}`
        )
        .then((res) => {
          this.leader = res.data
        })
      this.$axios
        .get(
          `/pretplate/izbori/r_06_${this.zupanija
            .toString()
            .padStart(2, '0')}_0000_000.json?t=${time}`
        )
        .then((res) => {
          this.council = res.data
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
      if (!this.grad) {
        return
      }
      const now = new Date()
      const time = now.getHours() + now.getMinutes()
      this.$axios
        .get(
          `/pretplate/izbori/r_17_${this.zupanija
            .toString()
            .padStart(2, '0')}_${this.grad.code}_000.json?t=${time}`
        )
        .then((res) => {
          this.leader = res.data
        })
      this.$axios
        .get(
          `/pretplate/izbori/r_08_${this.zupanija
            .toString()
            .padStart(2, '0')}_${this.grad.code}_000.json?t=${time}`
        )
        .then((res) => {
          this.council = res.data
        })
    },
    pullBig() {
      this.$store.dispatch('elections/pullBig')
      this.$axios.get('/pretplate/izbori/r_06_21_0000_000.json').then((res) => {
        this.zagreb_council = res.data
      })
      this.$axios.get('/pretplate/izbori/r_17_13_5207_000.json').then((res) => {
        this.zadar = res.data
      })
      this.$axios.get('/pretplate/izbori/r_17_05_4723_000.json').then((res) => {
        this.varazdin = res.data
      })
      this.$axios.get('/pretplate/izbori/r_17_19_0981_000.json').then((res) => {
        this.dubrovnik = res.data
      })
    },
  },
  head() {
    return {
      title: 'Lokalni izbori 2021. uživo',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pratite rezultate na Telegramu kroz cijelu izbornu noć.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: 'Pratite rezultate na Telegramu kroz cijelu izbornu noć.',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Lokalni izbori 2021. uživo',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2021/05/tg-izlazne-lokalni.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content:
            'https://www.telegram.hr/pretplate/izbori/lokalni-izbori-2021',
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/pretplate/izbori/lokalni-izbori-2021',
        },
      ],
    }
  },
}
</script>
