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
  computed: {
    id() {
      if (this.$store.getters['user/hasPremium']) {
        return 0
      }
      switch (this.type) {
        case 'intext':
          return 722
        case 'text-only':
          return 723
        case 'standard-16':
          return 724
        case 'ecomm':
          return 726
        case 'standard-4':
          return 725
        default:
          return false
      }
    },
  },
}
</script>
