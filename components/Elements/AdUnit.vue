<template>
  <client-only>
    <div
      :id="id"
      class="banner-slot"
      :style="{
        minHeight: minHeight,
      }"
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
      let h = 500
      if (this.$mobile) {
        h = 250
      }
      return !this.disable &&
        this.id === 'telegram_desktop_billboard_v1' &&
        !this.$store.getters['user/hasPremium']
        ? h
        : 0
    },
  },
}
</script>
