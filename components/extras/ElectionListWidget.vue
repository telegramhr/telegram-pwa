<template>
  <div class="fourth flex column-full-pad grad-segment">
    <div class="noththree full overtitle column-top-border">
      {{ city.gropNaziv ? city.gropNaziv : city.zupNaziv }}
      <span class="data-age-time animate"
        >{{ Math.round((city.bmZatvoreno / city.bmUkupno) * 100) }}%</span
      >
    </div>
    <div
      v-for="lista in kandidati"
      :key="lista.naziv"
      :style="{ order: 100 - parseFloat(lista.posto) }"
      class="full flex kandidat"
    >
      <div class="half">
        <img :src="getImage(lista.naziv)" />
      </div>
      <div class="half flex center">
        <div class="full">
          <p class="full faded smaller-text">{{ lista.naziv }}</p>
          <p class="full">
            <span class="big-number"
              >{{
                Math.round((lista.glasova / city.listiciVazeci) * 10000) / 100
              }}%</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElectionListWidget',
  props: {
    city: {
      required: true,
      type: Object,
      default() {
        return {
          lista: [],
        }
      },
    },
  },
  computed: {
    kandidati() {
      if (this.city.lista) {
        return this.city.lista.slice().splice(0, 4)
      }
      return []
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
