<template>
  <div class="half flex-responsive column-full-pad flex">
    <h2 class="full flex section-title section-title-less-margin">
      {{ city.gropNaziv ? city.gropNaziv : city.zupNaziv
      }}{{ type ? ' - ' + type : '' }}
    </h2>
    <div class="noththree timestamp-disclose">
      {{ Math.round((city.bmZatvoreno / city.bmUkupno) * 100) }}% prebrojano
    </div>
    <div class="full flex relative result-table total-results">
      <div class="full row flex">
        <div>Lista</div>
        <div>Postotak</div>
        <div></div>
      </div>
      <div
        v-for="lista in city.lista"
        :key="lista.naziv"
        class="full row flex animate center"
        :style="{
          order:
            100 -
            Math.round((lista.glasova / city.listiciVazeci) * 10000) / 100,
        }"
      >
        <div>
          <div></div>
          <img :src="getImage(lista.naziv)" />
          <div class="full flex relative kandidat-box">
            <div class="full">{{ lista.naziv }}</div>
            <div class="full">{{ lista.stranke }}</div>
          </div>
        </div>
        <div class="postotak">
          {{ Math.round((lista.glasova / city.listiciVazeci) * 10000) / 100 }}%
        </div>
        <div class="relative flex result-graph">
          <div
            class="flex"
            :style="{
              width:
                (Math.round((lista.glasova / city.listiciVazeci) * 10000) /
                  100) *
                  2 +
                '%',
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElectionList',
  props: {
    city: {
      required: true,
      type: Object,
      default() {
        return {
          izboriOznaka: '06',
          lista: [],
        }
      },
    },
    type: {
      required: false,
      type: String,
      default: '',
    },
  },
  methods: {
    getImage(name) {
      name = name
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('č', 'c')
        .replaceAll('ć', 'c')
        .replaceAll('đ', 'd')
        .replaceAll('ž', 'z')
        .replaceAll('š', 's')
      try {
        return require(`@/assets/img/extras/izbori_lokalni/${name}.gif`)
      } catch (e) {
        return require('@/assets/img/extras/izbori_lokalni/anon.gif')
      }
    },
  },
}
</script>
