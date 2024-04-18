<template>
  <div
    class="full center relative pretplata-subs-special darkened-bg election-special-widget"
  >
    <div
      v-if="dip"
      class="container flex relative relative column-top-pad mobile-top-pad"
    >
      <div
        class="third flex-responsive column-horizontal-pad flex mobile-side-pad"
      >
        <div class="full flex overtitle-parent relative">
          <div class="overtitle noththree overtitle-live">
            <span class="desktop-only">Rezultati uživo</span>
            <span class="mobile-only">Rezultati izbora uživo</span>
          </div>
          <NuxtLink
            to="/parlamentarni-izbori-2024"
            class="flex newbtn toprightbtn animate mobile-only"
          >
            Svi rezultati
          </NuxtLink>
        </div>
        <div class="full nothtwo desktop-only">Izbori 2024</div>
        <p class="full highlight-pitch column-mini-bottom-pad desktop-only">
          Pratite rezultate uživo kroz cijelu izbornu noć.
        </p>
        <p
          v-if="dip.dip"
          class="full highlight-pitch column-mini-bottom-pad desktop-only"
        >
          <span id="data-counted-total"
            >Prebrojano {{ dip.counted }}% biračkih mjesta.</span
          >
        </p>
        <p
          v-if="dip.dip"
          class="full highlight-pitch column-bottom-pad desktop-only"
        >
          <span id="data-age">Podaci ažurirani u {{ dip.age }}h. </span>
        </p>
        <p v-else class="full highlight-pitch column-bottom-pad desktop-only">
          Podaci izlaznih anketa.
        </p>
        <div class="full flex relative desktop-only">
          <NuxtLink
            to="/parlamentarni-izbori-2024"
            class="flex newbtn huge-newbtn animate"
          >
            Svi rezultati
          </NuxtLink>
        </div>
      </div>
      <div
        class="third flex-responsive column-horizontal-pad mobile-side-pad flex result-table total-results"
      >
        <div class="full row flex">
          <div>Lista</div>
          <div>Mandata</div>
          <div>Glasova</div>
          <div></div>
        </div>
        <template v-for="party in map">
          <div
            v-if="dip.total[party.class]"
            :key="party.class"
            class="full row flex animate"
            :class="party.class"
            :style="{ order: 100 - dip.total[party.class].mandati }"
          >
            <div><img :src="party.lider" />{{ party.title }}</div>
            <div class="mandati">
              <span v-if="!dip.dip">~</span>{{ dip.total[party.class].mandati }}
            </div>
            <div class="postotak">{{ dip.total[party.class].postotak }}%</div>
            <div></div>
          </div>
        </template>
        <div
          class="full row flex manjine animate desktop-only"
          style="order: 100"
        >
          <div>Zastupnici manjina</div>
          <div class="mandati">8</div>
          <div class="postotak"></div>
          <div></div>
        </div>
      </div>
      <div
        class="third flex-responsive column-horizontal-pad center main-karta desktop-only"
      >
        <karta show="all"></karta>
      </div>
      <div class="full flex relative column-horizontal-pad mobile-side-pad">
        <div class="full flex relative result-line-legend">
          <div class="sdp-line">
            <span>{{ dip.total.sdp.mandati }}</span> Rijeke pravde
          </div>
          <div class="hdz-line">
            HDZ <span>{{ dip.total.hdz.mandati }}</span>
          </div>
        </div>
        <div class="result-line full flex">
          <div class="slaganje-vlade"></div>
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
                    10000
                ) / 100 + '%',
            }"
          ></div>
        </div>
        <div class="full result-line-text center-text">
          76 <span class="desktop-only">mandata</span> za većinu
        </div>
      </div>
      <p
        v-if="dip.dip"
        class="full highlight-pitch center mobile-bottom-pad mobile-only"
      >
        <span id="data-counted-total"
          >Prebrojano {{ dip.counted }}% biračkih mjesta.
        </span>
        <span id="data-age">Podaci ažurirani u {{ dip.age }}h. </span>
      </p>
      <p
        v-else
        class="full highlight-pitch center mobile-bottom-pad mobile-only"
      >
        <span>Podaci izlazni anketa</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElectionWidget',
  computed: {
    map() {
      return this.$store.state.izbori.map
    },
    dip() {
      return this.$store.state.izbori.dip
    },
    fills() {
      return this.$store.getters['izbori/fills']
    },
  },
  mounted() {
    this.$store.dispatch('izbori/getData')
  },
}
</script>
