<template>
  <div class="fourth flex column-full-pad grad-segment">
    <h3 class="full overtitle column-top-border">
      {{ city.gropNaziv ? city.gropNaziv : city.zupNaziv }}
    </h3>
    <div
      v-for="lista in city.lista"
      :key="lista.jedinstvenaSifra"
      :style="{ order: 100 - parseFloat(lista.posto) }"
      class="full flex kandidat"
    >
      <div class="half">
        <img :src="getImage(lista.jedinstvenaSifra)" />
      </div>
      <div class="half flex center">
        <div class="full">
          <p class="full faded smaller-text">{{ lista.naziv }}</p>
          <p class="full">
            <span class="big-number">{{ lista.posto }}%</span>
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
        return {}
      },
    },
  },
  methods: {
    getImage(id) {
      try {
        return require(`@/assets/img/extras/izbori_lokalni/${id}.gif`)
      } catch (e) {
        return require('@/assets/img/extras/izbori_lokalni/anon.gif')
      }
    },
  },
}
</script>
