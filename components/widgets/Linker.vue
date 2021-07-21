<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="lwdgt" v-html="html"></div>
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
  data() {
    return {
      html: '',
    }
  },
  mounted() {
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
      biznis: {
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
    const id = ids[this.$route.params.category][this.type]
    this.$axios
      .get(`https://linker.hr/widget/lw.php?&wid=${id}`)
      .then((res) => {
        this.html = res.data
      })
  },
}
</script>
