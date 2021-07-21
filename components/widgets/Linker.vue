<template>
  <div>
    <div v-if="id" class="lwdgt" :data-wid="id"></div>
    <script async src="https://linker.hr/lw.js"></script>
  </div>
</template>

<script>
export default {
  name: 'Linker',
  computed: {
    id() {
      switch (this.$route.params.category) {
        case 'politika-kriminal':
          return 486
        case 'kultura':
          return 488
        case 'biznis':
          return 487
        case 'komentari':
          return 490
        case 'zivot':
          return 489
        case 'velike-price':
          return 491
      }
      return 0
    },
  },
}
</script>
