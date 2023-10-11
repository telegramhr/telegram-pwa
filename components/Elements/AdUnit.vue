<template>
  <client-only>
    <div
      :id="id"
      class="banner-slot"
      :style="{
        minHeight: minHeight,
      }"
      data-nosnippet
    ></div>
  </client-only>
</template>

<script>
export default {
  name: 'AdUnit',
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    minHeight() {
      if (this.disable || this.id !== 'telegram_desktop_billboard_v1') {
        return 0
      }
      if (this.$store.getters['user/hasPremium']) {
        return 0
      }
      return this.$mobile ? '250px' : '250px'
    },
  },
}
</script>
