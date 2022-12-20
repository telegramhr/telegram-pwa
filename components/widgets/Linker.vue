<template>
  <div
    v-if="id"
    :id="'linker-' + id"
    class="lwdgt column-full-pad"
    :data-wid="id"
    data-nosnippet
  ></div>
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
      if (this.$store.getters['user/hasPremium']) {
        return 0
      }
      if (!this.$mobile && this.type === 'mobile') {
        return 660
      }
      if (this.type === 'intext') {
        return 476
      }
      if (this.type === 'footer') {
        return 503
      }
      if (this.type === 'naslovnica' && this.$mobile) {
        return 519
      }
      const ids = {
        'politika-kriminal': {
          category: 486,
          mobile: 495,
        },
        kultura: {
          category: 488,
          mobile: 497,
        },
        'biznis-tech': {
          category: 487,
          mobile: 496,
        },
        komentari: {
          category: 490,
          mobile: 499,
        },
        zivot: {
          category: 489,
          mobile: 498,
        },
        'velike-price': {
          category: 491,
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
