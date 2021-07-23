<template>
  <div v-if="id" :id="'linker-' + id" class="lwdgt" :data-wid="id"></div>
</template>

<script>
export default {
  name: 'Linker',
  props: {
    type: {
      type: String,
      required: true,
      default: 'category',
    },
  },
  computed: {
    id() {
      const ids = {
        'politika-kriminal': {
          category: 486,
          intext: 4,
          mobile: 495,
        },
        kultura: {
          category: 488,
          intext: 4,
          mobile: 497,
        },
        'biznis-tech': {
          category: 487,
          intext: 4,
          mobile: 496,
        },
        komentari: {
          category: 490,
          intext: 4,
          mobile: 499,
        },
        zivot: {
          category: 489,
          intext: 4,
          mobile: 498,
        },
        'velike-price': {
          category: 491,
          intext: 4,
          mobile: 500,
        },
      }
      return ids[this.$route.params.category]
        ? ids[this.$route.params.category][this.type]
        : 0
    },
  },
}
</script>
