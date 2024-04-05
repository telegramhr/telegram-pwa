<script>
export default {
  name: 'ParlamentarniIzbori2024',
  data() {
    return {
      counted: 0,
      age: 0,
      results: {
        total: {
          hdz: {
            mandati: 0,
            postotak: 0,
          },
          rijeke_pravde: {
            mandati: 0,
            postotak: 0,
          },
        },
        1: {
          counted: 0,
          party: {
            hdz: {
              mandati: 0,
              postotak: 0,
            },
            rijeke_pravde: {
              mandati: 0,
              postotak: 0,
            },
          },
        },
      },
      map: {
        1: {
          alt: 'RESTART - Davor Bernardić',
          title: 'Restart koalicija',
          class: 'rijeka_pravde',
        },
        20: {
          alt: 'HDZ - Andrej Plenković',
          title: 'HDZ',
          class: 'hdz',
        },
        /* 19: {
          alt: 'Domovinski pokret',
          title: 'Domovinski pokret',
          class: 'domovinski',
        },
        2: {
          alt: 'Možemo - Tomislav Tomašević',
          title: 'Možemo!',
          class: 'mozemo',
        },
        15: {
          alt: 'Nezavisna lista Stipe Petrina',
          title: 'Nezavisna lista Stipe Petrina',
          class: 'petrina',
        },
        7: {
          alt: 'SSIP - Dalija Orešković',
          title: 'Pametno / Fokus / SSIP',
          class: 'simp',
        },
        16: {
          alt: 'HGS - Željko Kerum',
          title: 'HGS',
          class: 'kerum',
        },
        12: {
          alt: 'HNS - Predrag Štromar',
          title: 'HNS',
          class: 'hns',
        },
        11: {
          alt: 'Dosta Pljačke - Vilibor Sinčić',
          title: 'Dosta pljačke koalicija',
          class: 'dosta',
        },
        9: {
          alt: 'Narodna stranka reformisti - Radimir Čačić',
          title: 'Narodna stranka - Reformisti',
          class: 'reformisti',
        },
        17: {
          alt: '365 - Milan Bandić',
          class: 365,
          title: '365 - Stranka Rada i Solidarnosti',
        },
        18: {
          alt: 'MOST - Božo Petrov',
          title: 'MOST',
          class: 'most',
        },
        10: {
          class: 'manjine',
        }, */
      },
    }
  },
}
</script>

<template>
  <div class="main-container flex">
    <div class="hero full flex relative" style="background-image: url('')">
      <a href="https://telegram.hr/" class="header-logos center full">
        <img src="assets/img/telegram_logo_white.svg" alt="Telegram Logo" />
      </a>
      <div class="hero-title full">
        <div class="container flex relative">
          <div class="full flex flex-responsive">
            <h1 class="full">Izbori 2020.</h1>
            <h2 class="full">
              Uz Telegram pratite rezultate uživo cijelu izbornu noć.
            </h2>
          </div>
        </div>
      </div>
    </div>
    <section class="full flex">
      <div class="container flex relative">
        <h2 class="full">Uživo: rezultati izbora</h2>
        <div class="mini-data">
          <span id="data-counted-total"
            >Prebrojano {{ counted }}% glasova. </span
          ><span id="data-age">Podaci ažurirani u {{ age }}h. </span
          ><!--<span id="data-refresh">Pokušati ćemo ažurirati podatke za 15 sekundi.</span>-->
        </div>
        <div class="full flex relative">
          <div class="restart-line">
            <span>{{ results.total.rijeke_pravde.mandati }}</span> Rijeke pravde
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
            <div v-for="party in map" :key="party.class">
              <div
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
            <!--{{ 'img/karta.svg' }} -->
            <!-- TODO: this map -->
          </div>
        </div>
        <h3 class="full white-space">Po izbornim jedinicama</h3>
        <div class="full flex relative izborne-jedinice">
          <!-- TODO: v-for per izborna jedinica -->
          <div v-for="i in 1" :key="i" class="half flex-responsive flex">
            <div class="full flex">
              <div class="two-thirds">
                <h4 class="full">{{ i }}. izborna jedinica</h4>
                <div class="full mini-data">
                  <span :id="`data-counted-${i}`"
                    >Prebrojano {{ results[i]['counted'] }}% glasova.
                  </span>
                </div>
                {{ opisi_izbornih[$i] }}
              </div>
              <div class="third flex-responsive center karta-<?php echo $i ?>">
                <!-- TODO: <?php echo file_get_contents($native_path.'img/karta.svg') ?> -->
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
                v-for="(values, party) in results[i].party"
                :key="party"
                :class="['full', 'row', 'flex', party, 'animate']"
                :style="{ order: 100 - values.mandati }"
              >
                <div>
                  <img
                    src="<?php echo $native_path .'img/lider_'.$party.'.gif' ?>"
                  />{{ party.title }}
                </div>
                <div class="mandati">{{ values.mandati }}</div>
                <div class="postotak">{{ values.postotak }}%</div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="half flex-responsive flex">
            <div class="full flex">
              <div class="two-thirds">
                <h4 class="full">11. izborna jedinica</h4>
                <div class="full mini-data">
                  <span id="data-counted-11"
                    >Prebrojano {{ results[11].counted }}% glasova.
                  </span>
                </div>
                XI. izborna jedinica je zasebna izborna jedinica za izbor
                zastupnika koje biraju hrvatski državljani koji nemaju
                prebivalište u Republici Hrvatskoj.
              </div>
            </div>
            <!--<div class="result-table full flex result-table-11">
      <div class="full row flex">
        <div>Lista</div>
        <div>Mandata</div>
        <div>Glasova</div>
        <div></div>
      </div>
      <?php foreach ($results[11]['party'] as $party : $values) { ?>
      <div class="full row flex <?php echo $party ?> animate" style="order: <?php echo (100-$values["mandati"]) ?>">
      <div>
        <?php
						            $neededObject = array_filter(
							            $map,
							            function ($e) use (&$party) {
								            return $e['class'] == $party;
							            }
						            );
                                    if (sizeof($neededObject)) {
                                        $neededObject = array_pop($neededObject);
                                        ?>
        <img src="<?php echo $native_path .'img/lider_'.$party.'.gif' ?>" alt="<?php echo $neededObject['alt'] ?>"><?php echo $neededObject['title'] ?>
        <?php } else {
							            echo $party;
						            }?>
      </div>
      <div class="mandati"><?php echo $values["mandati"] ?></div>
      <div class="postotak"><?php echo $values["postotak"] ?>%</div>
      <div></div>
    </div>-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
