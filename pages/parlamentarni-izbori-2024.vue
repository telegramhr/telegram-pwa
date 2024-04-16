<script>
export default {
  name: 'ParlamentarniIzbori2024',
  data() {
    return {
      counted: 0,
      age: 0,
      opisi_izbornih: {
        1: 'I. izborna jedinica obuhvaća centar i sjeverno-zapadni dio Grada Zagreba kao i dijelove Zagrebačke županije uključujući Veliku Goricu. ',
        2: 'II. izborna jedinica obuhvaća istočni dio Grada Zagreba, istočni dio Zagrebačke županije, dio Koprivničko-križevačke županije, te cijelu Bjelovarsko-bilogorsku županiju.',
        3: 'III. izborna jedinica obuhvaća Krapinsko-zagorsku županiju, Varaždinsku županiju, i Međimursku županiju, kao i dijelove Zagrebačke županije.',
        4: 'IV. izborna jedinica obuhvaća Virovitičko-podravsku županiju i Osječko-baranjsku županiju te dijelove Koprivničko-križevačke županije',
        5: 'V. izborna jedinica obuhvaća Požeško-slavonsku županiju, Brodsko-posavsku županiju, Vukovarsko-srijemsku županiju, te dijelove Sisačko-moslavačke županije.',
        6: 'VI. izborna jedinica obuhvaća južni i jugo-zapadni dio Grada Zagreba te jugo-istočni dio Zagrebačke županije uključujući Samobor.',
        7: 'VII izborna jedinica obuhvaća Karlovačku županiju, Ličko-senjsku županiju, te dijelove Sisačko-moslavačke, Primorsko-goranske i Zadarske županije.',
        8: 'VIII izborna jedinica obuhvaća Istarsku županiju te dijelove Primorsko-goranske županije uključujući Rijeku.',
        9: 'IX izborna jedinica obuhvaća Šibensko-kninsku županiju, te dijelove Splitsko-dalmatinske i Zadarske županije uključujući Zadar.',
        10: 'X izborna jedinica obuhvaća Dubrovačko-neretvansku županiju te dijelove Splitsko-dalmatinske županije uključujući Split.',
        11: 'XI izborna jedinica je za izbor zastupnika u Hrvatski sabor koje biraju hrvatski državljani koji nemaju prebivalište u Republici Hrvatskoj.',
        12: 'XII izborna jedinica obuhvaća cjelokupno područje Republike Hrvatske u kojoj pripadnici nacionalnih manjina u Republici Hrvatskoj biraju svoje zastupnike u Hrvatski sabor.',
      },
    }
  },
  computed: {
    map() {
      return this.$store.state.izbori.map
    },
    dip() {
      return this.$store.state.izbori.dip
    },
    resultState() {
      if (this.dip.ankete) {
        return 'izlazne'
      }
      return 'dip'
    },
    results() {
      return this.$store.state.izbori.dip
    },
  },
  mounted() {
    this.$store.dispatch('izbori/getData')
  },
  methods: {
    lider(key) {
      for (const k in Object.keys(this.map)) {
        if (this.map[k] && this.map[k].class === key) {
          return this.map[k].lider
        }
      }
      return false
    },
    partyName(key) {
      for (const k in Object.keys(this.map)) {
        if (this.map[k] && this.map[k].class === key) {
          return this.map[k].title
        }
      }
      return false
    },
  },
}
</script>

<template>
  <div class="main-container flex izbori-page">
    <!-- TG Multiverse header -->
    <div class="full flex relative single-article">
      <client-only>
        <theader headline="Izbori 2024"></theader>
      </client-only>
    </div>
    <section v-if="dip" class="full flex mobile-top-pad">
      <div class="container flex relative column-full-pad mobile-full-pad">
        <div class="overtitle noththree overtitle-live">
          <span>Uživo</span>
        </div>
        <h1 v-if="resultState === 'dip'" class="full">
          Službeni rezultati izbora
        </h1>
        <h1 v-if="resultState === 'izlazne'" class="full">
          Rezultati izlaznih anketa
        </h1>
        <div class="mini-data">
          <span id="data-counted-total"
            >Prebrojano {{ dip.counted }}% glasova. </span
          ><span id="data-age">Podaci ažurirani u {{ dip.age }}h. </span
          ><!--<span id="data-refresh">Pokušati ćemo ažurirati podatke za 15 sekundi.</span>-->
        </div>
        <div class="full flex relative result-line-legend">
          <div class="sdp-line">
            <span>{{ results.total.sdp.mandati }}</span> Rijeke pravde
          </div>
          <div class="hdz-line">
            HDZ <span>{{ results.total.hdz.mandati }}</span>
          </div>
        </div>
        <div class="result-line full flex">
          <div class="slaganje-vlade"></div>
          <!-- TODO manjine and existing  -->
          <div
            v-for="party in map"
            :key="party.class"
            :class="['animate', party.class]"
            :style="{
              width:
                Math.round(
                  ((party.class === 'manjine'
                    ? 8
                    : dip.total[party.class].mandati) /
                    151) *
                    100
                ) + '%',
            }"
          ></div>
        </div>
        <div class="full result-line-text center-text">
          76 mandata za većinu
        </div>
        <div class="full flex">
          <div
            class="half flex-responsive flex result-table total-results column-right-pad"
          >
            <div class="full row flex">
              <div>Lista</div>
              <div>Mandata</div>
              <div>Glasova</div>
              <div></div>
            </div>
            <template v-for="party in map">
              <div
                v-if="party.class !== 'manjine'"
                :key="party.class"
                :class="['full', 'row', 'flex', 'animate', party.class]"
                :style="{ order: 100 - results.total[party.class].mandati }"
              >
                <div>
                  <img v-if="party.lider" :src="party.lider" />{{ party.title }}
                </div>
                <div class="mandati">
                  <span v-if="resultState === 'izlazne'">~</span>
                  {{ results.total[party.class].mandati }}
                </div>
                <div class="postotak">
                  {{ results.total[party.class].postotak }}%
                </div>
                <div></div>
              </div>
            </template>
            <div class="full row flex manjine animate" style="order: 100">
              <div>Zastupnici manjina</div>
              <div class="mandati">8</div>
              <div class="postotak"></div>
              <div></div>
            </div>
          </div>
          <div class="half flex-responsive center main-karta column-left-pad">
            <karta show="all"></karta>
          </div>
        </div>
        <template v-if="dip.dip">
          <h3 class="full white-space">Po izbornim jedinicama</h3>
          <div class="full flex relative izborne-jedinice">
            <div v-for="i in 11" :key="i" class="half flex-responsive flex">
              <div class="full flex">
                <div class="two-thirds">
                  <h4 class="full">{{ i }}. izborna jedinica</h4>
                  <div class="full mini-data">
                    <span :id="`data-counted-${i}`"
                      >Prebrojano {{ results[i]['counted'] }}% glasova.
                    </span>
                  </div>
                  <p class="smaller-text">{{ opisi_izbornih[i] }}</p>
                </div>
                <div :class="['third', 'center']">
                  <karta :show="i"></karta>
                </div>
              </div>
              <div
                :class="['full', 'result-table', 'flex', 'result-table-' + i]"
              >
                <div class="full row flex">
                  <div>Lista</div>
                  <div>Mandata</div>
                  <div>Glasova</div>
                  <div></div>
                </div>
                <div
                  v-for="(values, key) in results[i].party"
                  :key="key"
                  :class="['full', 'row', 'flex', key, 'animate']"
                  :style="{ order: 100 - parseFloat(values.postotak) }"
                >
                  <div>
                    <img v-if="!!lider(key)" :src="lider(key)" />{{
                      !!partyName(key) ? partyName(key) : values.name
                    }}
                  </div>
                  <div class="mandati">{{ values.mandati }}</div>
                  <div class="postotak">{{ values.postotak }}%</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div v-if="dip.dip" class="mini-data">
          <span
            >Podaci su preuzeti od Državnog izbornog povjerenstva. Sirove
            podatke možete pregledati
            <a href="https://www.telegram.hr/izbori-podaci/">ovdje.</a></span
          >
        </div>
        <div v-if="dip.ankete" class="mini-data">
          <span>Podaci su preuzeti s IPSOS izlaznih anketa </span>
        </div>
      </div>
    </section>
    <tfooter></tfooter>
  </div>
</template>
