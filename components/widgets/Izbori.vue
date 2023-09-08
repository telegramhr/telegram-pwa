<template>
  <app-link to="izbori/lokalni-izbori-2021" class="full">
    <div class="full article flex weather-widget izbori-mini-widget stretch">
      <div
        class="full izbori-widget-header mobile-side-pad column-horizontal-pad"
      >
        <h2 class="full center-text column-top-border">Lokalni izbori uživo</h2>
      </div>
      <election-list-widget
        :city="this.$store.state.elections.zagreb"
      ></election-list-widget>
      <election-list-widget
        :city="this.$store.state.elections.split"
      ></election-list-widget>
      <election-list-widget
        :city="this.$store.state.elections.rijeka"
      ></election-list-widget>
      <election-list-widget
        :city="this.$store.state.elections.osijek"
      ></election-list-widget>
      <div class="noththree overtitle full center-text izbori-cta animate">
        Pratite rezultate za sve županije, gradove i općine uživo u našem
        specijalu.
      </div>
    </div>
  </app-link>
</template>

<style>
.izbori-mini-widget {
  padding-top: 0px;
}
.izbori-widget-header h2 {
  text-transform: none;
  font-size: 48px;
  font-size: 2.4rem;
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
.izbori-mini-widget .noththree.overtitle {
  padding-top: 8px;
  margin-bottom: 20px;
}
.grad-segment {
  padding-top: 0px;
}
.kandidat {
  position: relative;
  padding-left: 48px;
}
.kandidat > .half {
  width: auto;
}
.kandidat > .half:first-child {
  width: 48px;
  position: absolute;
  top: 0;
  left: 0;
}
.kandidat:nth-child(5) {
  margin-bottom: 0px;
}
.izbori-mini-widget .noththree.overtitle .data-age-time {
  color: #111;
  opacity: 0.25;
  float: right;
}
.dark-mode .izbori-mini-widget .noththree.overtitle .data-age-time {
  color: #efefef;
}
.izbori-mini-widget .noththree.overtitle:hover .data-age-time {
  opacity: 0.7;
}
.izbori-mini-widget .noththree.izbori-cta {
  font-weight: 400;
  font-style: italic;
  font-family: 'Merriweather', serif;
  font-weight: 400;
  color: #111;
  opacity: 0.5;
  letter-spacing: normal;
  text-transform: none;
  text-decoration: underline;
}
.dark-mode .izbori-mini-widget .noththree.izbori-cta {
  color: #efefef;
}
.izbori-mini-widget:hover .noththree.izbori-cta {
  color: #ae3737;
  opacity: 1;
}
@media screen and (max-width: 1024px) {
  .grad-segment {
    margin-bottom: 6vw;
  }
  .grad-segment .noththree.overtitle {
    border-top: 1px solid #c8c8c8;
  }
  .dark-mode .grad-segment .noththree.overtitle {
    border-color: #555;
  }
  .izbori-mini-widget {
    position: relative;
    z-index: 9;
    background-color: #fcf1e7;
  }
  .contrast-mode .izbori-mini-widget {
    background-color: white;
  }
  .dark-mode .izbori-mini-widget {
    background-color: #212121;
  }
  .izbori-mini-widget .fourth {
    padding-left: 4vw;
    padding-right: 4vw;
    width: 49.99%;
  }
  .izbori-mini-widget .smaller-text {
    font-size: 10px;
    font-size: 0.5rem;
  }
  .izbori-widget-header h2 {
    margin-top: 4vw;
    border-top: 1px solid #c8c8c8;
    font-size: 2rem;
  }
  .dark-mode .izbori-widget-header h2 {
    border-color: #555;
  }
}
</style>

<script>
export default {
  name: 'Izbori',
  data() {
    return {
      zagreb: {},
      split: {},
      rijeka: {},
      osijek: {},
    }
  },
  mounted() {
    this.$store.dispatch('elections/pullBig')
  },
  methods: {
    pullBig() {
      const now = new Date()
      const time = now.getHours() + now.getMinutes()
      this.$axios
        .get('/pretplate/izbori/r_15_21_0000_000.json?t=' + time)
        .then((res) => {
          this.zagreb = res.data
        })
      this.$axios
        .get('/pretplate/izbori/r_17_17_4090_000.json?t=' + time)
        .then((res) => {
          this.split = res.data
        })
      this.$axios
        .get('/pretplate/izbori/r_17_08_3735_000.json?t=' + time)
        .then((res) => {
          this.rijeka = res.data
        })
      this.$axios
        .get('/pretplate/izbori/r_17_14_3123_000.json?t=' + time)
        .then((res) => {
          this.osijek = res.data
        })
    },
  },
}
</script>
