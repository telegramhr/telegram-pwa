<script>
export default {
  name: 'ParlamentarniIzbori2024',
  async fetch() {
    this.dip = await this.$axios.$get('/api/izbori/2024')
  },
  data() {
    return {
      counted: 0,
      age: 0,
      dip: false,
      izlazne: false,
      ankete: {
        total: {
          hdz: {
            mandati: 60,
            postotak: 30,
          },
          sdp: {
            mandati: 44,
            postotak: 20,
          },
          domovinski: {
            mandati: 14,
            postotak: 10,
          },
          mozemo: {
            mandati: 9,
            postotak: 10,
          },
          most: {
            mandati: 9,
            postotak: 10,
          },
        },
        1: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        2: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        3: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        4: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        5: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        6: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        7: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        8: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        9: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        10: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
            mozemo: {
              mandati: 0,
              postotak: 0,
            },
            most: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        11: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
        12: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            sdp: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
      },
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
      map: {
        1: {
          alt: 'Rijeke pravde - Zoran Milanović',
          title: 'Rijeke pravde',
          class: 'sdp',
          lider: require('assets/img/extras/izbori_2024/lider_sdp.png'),
        },
        20: {
          alt: 'HDZ - Andrej Plenković',
          title: 'HDZ',
          class: 'hdz',
          lider: require('assets/img/extras/izbori_2024/lider_hdz.png'),
        },
        2: {
          alt: 'Možemo - Tomislav Tomašević',
          title: 'Možemo!',
          class: 'mozemo',
          lider: require('assets/img/extras/izbori_2024/lider_mozemo.png'),
        },
        18: {
          alt: 'MOST - Božo Petrov',
          title: 'Most',
          class: 'most',
          lider: require('assets/img/extras/izbori_2024/lider_most.png'),
        },
        19: {
          alt: 'Domovinski pokret',
          title: 'Domovinski pokret',
          class: 'domovinski',
          lider: require('assets/img/extras/izbori_2024/lider_domovinski.png'),
        },
      },
    }
  },
  computed: {
    resultState() {
      if (this.dip) {
        return 'dip'
      } else if (this.izlazne) {
        return 'izlazne'
      } else {
        return 'preview'
      }
    },
    results() {
      if (this.dip) {
        return this.dip
      } else if (this.izlazne) {
        return this.izlazne
      } else {
        return this.ankete
      }
    },
  },
  methods: {
    lider(key) {
      for (const k in Object.keys(this.map)) {
        if (this.map[k] && this.map[k].class === key) {
          return this.map[k].lider
        }
      }
    },
    partyName(key) {
      for (const k in Object.keys(this.map)) {
        if (this.map[k] && this.map[k].class === key) {
          return this.map[k].title
        }
      }
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
    <div class="full flex relative izbori-header">
      <div class="container flex relative stretch">
        <div class="half center flex-wrap flex-responsive">
          <h1 class="full">Izbori 2024.</h1>
          <p class="full highlight-pitch">
            <span class="ib">Uz Telegram pratite rezultate</span>
            <span class="ib">uživo kroz cijelu izbornu noć.</span>
          </p>
        </div>
        <div class="half center flex-responsive">
          <img
            src="@/assets/img/tg_vizual_izbori_2024.jpg"
            alt="Kandidati za premijera vodećih pet stranaka na parlamentarnim izborima 2024: Andrej Plenković, Zoran Milanović, Ivan Penava, Nikola Grmoja, i Sandra Benčić"
          />
        </div>
      </div>
    </div>
    <section class="full flex">
      <div class="container flex relative column-top-pad">
        <h2 v-if="resultState == 'dip'" class="full">
          Uživo: rezultati izbora
        </h2>
        <h2 v-if="resultState == 'izlazne'" class="full">
          Uživo: rezultati izlaznih anketa
        </h2>
        <h2 v-if="resultState == 'preview'" class="full">
          Analiza: prosjek predizbornih anketa
        </h2>
        <div class="mini-data">
          <span id="data-counted-total"
            >Prebrojano {{ counted }}% glasova. </span
          ><span id="data-age">Podaci ažurirani u {{ age }}h. </span
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
                Math.round(results.total[party.class].mandati / 151, 4) * 100 +
                '%',
            }"
          ></div>
        </div>
        <div class="full result-line-text center-text">
          76 mandata za većinu
        </div>
        <div class="full flex">
          <div class="half flex-responsive flex result-table total-results">
            <div class="full row flex">
              <div>Lista</div>
              <div>Mandata</div>
              <div>Glasova</div>
              <div></div>
            </div>
            <div
              v-for="party in map"
              :key="party.class"
              :class="['full', 'row', 'flex', 'animate', party.class]"
              :style="{ order: 100 - results.total[party.class].mandati }"
            >
              <div><img :src="party.lider" />{{ party.title }}</div>
              <div class="mandati">
                {{ results.total[party.class].mandati }}
              </div>
              <div class="postotak">
                {{ results.total[party.class].postotak }}%
              </div>
              <div></div>
            </div>
            <div class="full row flex manjine animate" style="order: 100">
              <div>Zastupnici manjina</div>
              <div class="mandati">8</div>
              <div class="postotak"></div>
              <div></div>
            </div>
          </div>
          <div class="half flex-responsive center main-karta">
            <karta></karta>
          </div>
        </div>
        <h3 class="full white-space">Po izbornim jedinicama</h3>
        <div class="full flex relative izborne-jedinice">
          <!-- TODO: v-for per izborna jedinica -->
          <div v-for="i in 11" :key="i" class="half flex-responsive flex">
            <div class="full flex">
              <div class="two-thirds">
                <h4 class="full">{{ i }}. izborna jedinica</h4>
                <div class="full mini-data">
                  <span :id="`data-counted-${i}`"
                    >Prebrojano {{ results[i]['counted'] }}% glasova.
                  </span>
                </div>
                {{ opisi_izbornih[i] }}
              </div>
              <div class="third flex-responsive center karta-<?php echo $i ?>">
                <Karta></Karta>
              </div>
            </div>
            <div class="result-table full flex result-table-<?php echo $i ?>">
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
                <div><img :src="lider(key)" />{{ partyName(key) }}</div>
                <div class="mandati">{{ values.mandati }}</div>
                <div class="postotak">{{ values.postotak }}%</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
