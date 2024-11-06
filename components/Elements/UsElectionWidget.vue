<template>
  <div
    class="full flex relative pretplata-subs-special column-full-pad mobile-full-pad darkened-bg election-special-widget"
  >
    <div class="full center relative m-order-1">
      <div class="overtitle noththree overtitle-live">
        <span class="desktop-only">Rezultati uskoro</span>
        <span class="mobile-only">Rezultati američkih izbora uskoro</span>
      </div>
    </div>
    <div class="full nothtwo desktop-only center-text m-order-1">
      Američki izbori 2024
    </div>
    <div class="full center election-legend m-order-2">
      <div
        class="two-thirds center flex-responsive flex-wrap barlow mobile-top-pad"
      >
        <div class="flex relative column-mini-horizontal-pad">
          <span class="dot us-dems-bg"></span>Rezultati Harris
        </div>
        <div class="flex relative column-mini-horizontal-pad">
          <span class="dot us-dems-bg faded"></span>Ankete Harris
        </div>
        <div class="flex relative column-mini-horizontal-pad">
          <span class="dot gray-bg"></span>Neodlučeno
        </div>
        <div class="flex relative column-mini-horizontal-pad">
          <span class="dot us-reps-bg faded"></span>Ankete Trump
        </div>
        <div class="flex relative column-mini-horizontal-pad">
          <span class="dot us-reps-bg"></span>Rezultati Trump
        </div>
        <div
          v-if="somewhereFlipped"
          class="flex mobile-full relative column-mini-horizontal-pad column-mini-top-pad"
        >
          <span class="dot us-dem-flip-bg"></span>Preokret za Harris
        </div>
        <div
          v-if="somewhereFlipped"
          class="flex mobile-full relative column-mini-horizontal-pad column-mini-top-pad"
        >
          <span class="dot us-rep-flip-bg"></span>Preokret za Trumpa
        </div>
      </div>
    </div>
    <div class="full flex relative m-order-1">
      <div class="full flex relative result-line-legend">
        <div class="dem-line">
          <img src="@/assets/img/extras/izbori_usa/harris.png" />
          <span>{{ results.dem }}</span> Harris
        </div>
        <div class="rep-line">
          Trump <span>{{ results.rep }}</span>
          <img src="@/assets/img/extras/izbori_usa/trump.png" />
        </div>
      </div>
      <div class="result-line full flex">
        <div class="slaganje-vlade"></div>
        <div
          v-for="state in results.states"
          :key="state.name"
          :data-state="state.name"
          :class="['animate', state.class]"
          :style="{
            width: (state.votes / 538) * 100 + '%',
            order: state.order,
            opacity: state.real ? (state.called ? 1 : 0.75) : 0.25,
          }"
          :aria-label="state.name"
        ></div>
      </div>
      <div class="full center-text faded barlow column-mini-top-pad">
        270 <span class="desktop-only">elektora</span> za većinu
      </div>
      <div class="full flex relative barlow desktop-only column-top-pad hide">
        <div
          v-for="state in Object.keys(highlighted)"
          :key="state"
          class="eighth tablet-fourth mobile-half flex relative center-text"
          :style="{ order: Math.round(results.states[state].rep * 10) }"
        >
          <p
            class="full bold"
            :class="
              results.states[state].dem > results.states[state].rep
                ? 'us-dems-text'
                : 'us-reps-text'
            "
          >
            {{ results.states[state].name }}
          </p>
          <p class="full faded">
            {{
              results.states[state].dem > results.states[state].rep
                ? 'Harris'
                : 'Trump'
            }}
            +{{
              Math.round(
                Math.abs(
                  results.states[state].dem - results.states[state].rep
                ) * 10
              ) / 10
            }}%
          </p>
        </div>
      </div>
      <!--<p class="full column-top-pad desktop-only faded barlow center-text">
        <span id="data-counted-total"
          >Prebrojano {{ results.counted }}% biračkih mjesta.</span
        >
        <span id="data-age">Podaci ažurirani u {{ results.age }}h. </span>
      </p>-->
      <p class="full column-top-pad faded barlow center-text">
        Prvi rezultati očekuju se tijekom noći
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsElectionWidget',
  async fetch() {
    await this.getData()
  },
  data() {
    return {
      somewhereFlipped: false,
      polls: {
        DC: {
          votes: 3,
          name: 'District of Columbia',
          dem: 89.1,
          rep: 10.2,
        },
        VT: {
          votes: 3,
          name: 'Vermont',
          dem: 63,
          rep: 31,
        },
        MA: {
          votes: 11,
          name: 'Massachusetts',
          dem: 59.5,
          rep: 31.8,
        },
        HI: {
          votes: 4,
          name: 'Hawaii',
          dem: 66.4,
          rep: 32.1,
        },
        NY: {
          votes: 29,
          name: 'New York',
          dem: 57.3,
          rep: 39.7,
        },
        MD: {
          votes: 10,
          name: 'Maryland',
          dem: 60.2,
          rep: 33,
        },
        CA: {
          votes: 55,
          name: 'California',
          dem: 59,
          rep: 34.2,
        },
        RI: {
          votes: 4,
          name: 'Rhode Island',
          dem: 54,
          rep: 40,
        },
        DE: {
          votes: 3,
          name: 'Delaware',
          dem: 55,
          rep: 36.5,
        },
        WA: {
          votes: 12,
          name: 'Washington',
          dem: 55.8,
          rep: 36.5,
        },
        CT: {
          votes: 7,
          name: 'Connecticut',
          dem: 57,
          rep: 41,
        },
        NJ: {
          votes: 14,
          name: 'New Jersey',
          dem: 54.7,
          rep: 38.3,
        },
        OR: {
          votes: 7,
          name: 'Oregon',
          dem: 53,
          rep: 41,
        },
        IL: {
          votes: 20,
          name: 'Illinois',
          dem: 57.7,
          rep: 40.9,
        },
        NM: {
          votes: 5,
          name: 'Novi Mexico',
          dem: 49.8,
          rep: 43.8,
        },
        CO: {
          votes: 9,
          name: 'Colorado',
          dem: 52.5,
          rep: 42.5,
        },
        VA: {
          votes: 13,
          name: 'Virginia',
          dem: 49.2,
          rep: 43.4,
        },
        ME: {
          votes: 2,
          name: 'Maine',
          dem: 50.3,
          rep: 41.7,
        },
        ME1: {
          votes: 1,
          name: 'Maine Distrikt 1',
          dem: 58,
          rep: 35.3,
        },
        ME2: {
          votes: 1,
          name: 'Maine Distrikt 2',
          dem: 42.7,
          rep: 48.7,
        },
        NH: {
          votes: 4,
          name: 'New Hampshire',
          dem: 50.5,
          rep: 45.5,
        },
        MI: {
          votes: 16,
          name: 'Michigan',
          dem: 48.6,
          rep: 46.8,
        },
        WI: {
          votes: 10,
          name: 'Wisconsin',
          dem: 48.8,
          rep: 47.7,
        },
        MN: {
          votes: 10,
          name: 'Minnesota',
          dem: 49.8,
          rep: 43.6,
        },
        NV: {
          votes: 6,
          name: 'Nevada',
          dem: 47.6,
          rep: 48.2,
        },
        PA: {
          votes: 20,
          name: 'Pennsylvania',
          dem: 48.2,
          rep: 48.2,
        },
        AZ: {
          votes: 11,
          name: 'Arizona',
          dem: 46.8,
          rep: 48.4,
        },
        FL: {
          votes: 29,
          name: 'Florida',
          dem: 44.9,
          rep: 51.1,
        },
        NC: {
          votes: 15,
          name: 'Sjeverna Carolina',
          dem: 47.3,
          rep: 48.6,
        },
        GA: {
          votes: 16,
          name: 'Georgia',
          dem: 47.5,
          rep: 48.7,
        },
        IA: {
          votes: 6,
          name: 'Iowa',
          dem: 45.3,
          rep: 50,
        },
        OH: {
          votes: 18,
          name: 'Ohio',
          dem: 44.3,
          rep: 52,
        },
        TX: {
          votes: 38,
          name: 'Texas',
          dem: 44.4,
          rep: 51.8,
        },
        MT: {
          votes: 3,
          name: 'Montana',
          dem: 39.5,
          rep: 57.5,
        },
        SC: {
          votes: 9,
          name: 'Južna Carolina',
          dem: 42,
          rep: 53.7,
        },
        AK: {
          votes: 3,
          name: 'Alaska',
          dem: 43,
          rep: 51,
        },
        MO: {
          votes: 10,
          name: 'Missouri',
          dem: 39,
          rep: 54,
        },
        IN: {
          votes: 11,
          name: 'Indiana',
          dem: 39.5,
          rep: 56,
        },
        KS: {
          votes: 6,
          name: 'Kansas',
          dem: 43,
          rep: 48,
        },
        NE: {
          votes: 2,
          name: 'Nebraska',
          dem: 40,
          rep: 55,
        },
        NE1: {
          votes: 1,
          name: 'Nebraska Distrikt 1',
          dem: 44,
          rep: 50,
        },
        NE2: {
          votes: 1,
          name: 'Nebraska Distrikt 2',
          dem: 53,
          rep: 43,
        },
        NE3: {
          votes: 1,
          name: 'Nebraska Distrikt 3',
          dem: 23,
          rep: 71,
        },
        MS: {
          votes: 6,
          name: 'Mississippi',
          dem: 42.5,
          rep: 56.7,
        },
        UT: {
          votes: 6,
          name: 'Utah',
          dem: 32,
          rep: 57.5,
        },
        SD: {
          votes: 3,
          name: 'Južna Dakota',
          dem: 34,
          rep: 60.5,
        },
        TN: {
          votes: 11,
          name: 'Tennessee',
          dem: 35,
          rep: 56,
        },
        KY: {
          votes: 8,
          name: 'Kentucky',
          dem: 40.5,
          rep: 58.4,
        },
        LA: {
          votes: 8,
          name: 'Lousiana',
          dem: 40.6,
          rep: 58.5,
        },
        AL: {
          votes: 9,
          name: 'Alabama',
          dem: 39.7,
          rep: 59.5,
        },
        ND: {
          votes: 3,
          name: 'Sjeverna Dakota',
          dem: 32,
          rep: 59,
        },
        ID: {
          votes: 4,
          name: 'Idaho',
          dem: 37.3,
          rep: 59.9,
        },
        AR: {
          votes: 6,
          name: 'Arkansas',
          dem: 40,
          rep: 55,
        },
        OK: {
          votes: 7,
          name: 'Oklahoma',
          dem: 40,
          rep: 56,
        },
        WV: {
          votes: 5,
          name: 'Zapadna Virginia',
          dem: 34,
          rep: 61,
        },
        WY: {
          votes: 3,
          name: 'Wyoming',
          dem: 27.5,
          rep: 66,
        },
      },
      real: {
        /* MA: {
          dem: 66.9,
          rep: 31.6,
          percentReporting: 98,
          called: true,
        },
        IA: {
          dem: 51.9,
          rep: 48.6,
          percentReporting: 75,
          called: true,
        }, */
      },
      highlighted: {
        PA: true,
        NV: true,
        GA: true,
        NC: true,
        MI: true,
        WI: true,
        AZ: true,
        IA: true,
      },
    }
  },
  computed: {
    results() {
      const combinedData = {
        states: {},
        dem: 0,
        rep: 0,
        counted: 1,
        age: '2024-11-05 12:00:00',
      }
      Object.keys(this.polls).forEach((state) => {
        combinedData.states[state] = {
          name: this.polls[state].name,
          votes: this.polls[state].votes,
          dem: this.polls[state].dem,
          rep: this.polls[state].rep,
          called: false,
          flip: false,
        }
      })
      // go through all real data and for each state (index of array) add any results to the correct combinedData array
      Object.keys(this.real).forEach((state) => {
        combinedData.states[state].real = true
        combinedData.states[state].dem =
          this.real[state].dem ?? this.real[state].votesDem
        combinedData.states[state].rep =
          this.real[state].rep ?? this.real[state].votesRep
        combinedData.states[state].percentReporting =
          this.real[state].percentReporting
        if (this.real[state].votesDem > this.real[state].votesRep) {
          if (this.polls[state].dem < this.polls[state].rep) {
            combinedData.states[state].flip = true
            this.somewhereFlipped = true
          }
          if (this.real[state].called) {
            combinedData.dem += this.real[state].votesDem
          }
        } else {
          if (this.polls[state].dem > this.polls[state].rep) {
            combinedData.states[state].flip = true
            this.somewhereFlipped = true
          }
          if (this.real[state].called) {
            combinedData.rep += this.real[state].votesRep
          }
        }
      })
      Object.keys(combinedData.states).forEach((state) => {
        if (combinedData.states[state].dem > combinedData.states[state].rep) {
          if (combinedData.states[state].flip) {
            combinedData.states[state].class = 'us-dem-flip'
            if (combinedData.states[state].real) {
              combinedData.states[state].order =
                '2' + Math.round(combinedData.states[state].votesRep)
            } else {
              combinedData.states[state].order =
                '4' + Math.round(combinedData.states[state].votesRep)
            }
          } else {
            combinedData.states[state].class = 'us-dems'
            if (combinedData.states[state].real) {
              combinedData.states[state].order =
                '1' + Math.round(combinedData.states[state].votesRep)
            } else {
              combinedData.states[state].order =
                '3' + Math.round(combinedData.states[state].votesRep)
            }
          }
        } else if (combinedData.states[state].flip) {
          combinedData.states[state].class = 'us-rep-flip'
          if (combinedData.states[state].real) {
            combinedData.states[state].order =
              '7' + Math.round(combinedData.states[state].votesRep)
          } else {
            combinedData.states[state].order =
              '9' + Math.round(combinedData.states[state].votesRep)
          }
        } else {
          combinedData.states[state].class = 'us-reps'
          if (combinedData.states[state].real) {
            combinedData.states[state].order =
              '8' + Math.round(combinedData.states[state].votesRep)
          } else {
            combinedData.states[state].order =
              '6' + Math.round(combinedData.states[state].votesRep)
          }
        }
        const tempDifference = Math.abs(
          combinedData.states[state].votesDem -
            combinedData.states[state].votesRep
        )
        if (!combinedData.states[state].real && tempDifference < 3) {
          combinedData.states[state].class = 'us-tossup'
          combinedData.states[state].order =
            '5' + Math.round(combinedData.states[state].votesRep)
        }
      })
      return combinedData
    },
  },
  methods: {
    async getData() {
      this.real = await this.$axios.$get('/api/izbori/us')
    },
  },
}
</script>
