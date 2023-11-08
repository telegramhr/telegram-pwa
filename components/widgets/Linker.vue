<template>
  <div
    v-if="id"
    class="container flex relative block-related cantha-related standard-block stretch"
    data-nosnippet
  >
    <div class="full flex mobile-side-pad">
      <div v-if="id" :data-wid="id" class="lwdgt column-full-pad"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Linker',
  props: {
    type: {
      type: String,
      required: true,
      default: 'intext',
    },
  },
  data() {
    return {
      ids: {
        telegram: {
          intext: 722,
          'text-only': 723,
          'standard-16': 724,
          ecomm: 726,
          'standard-4': 725,
        },
        super1: {
          intext: 727,
          'text-only': 728,
          'standard-16': 729,
          ecomm: 731,
          'standard-4': 730,
        },
      },
    }
  },
  computed: {
    id() {
      if (this.$store.getters['user/hasPremium']) {
        return 0
      }
      if (this.type === 'standard-16') {
        return false
      }
      if (this.$route.path.includes('super1')) {
        return this.ids.super1[this.type] ?? false
      }
      return this.ids.telegram[this.type] ?? false
    },
  },
}
</script>
