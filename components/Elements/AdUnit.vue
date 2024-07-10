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
      return '250px'
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$store.getters['user/hasPremium']) {
        // this.$el.style.display = 'none'
        return
      }
      if (this.id === 'telegram_back_widget') {
        window.googletag.cmd.push(() => {
          window.googletag
            .defineSlot(
              this.$store.state.ads.prefix + this.id,
              this.$store.state.ads.units[this.id].mobile,
              this.id
            )
            .addService(window.googletag.pubads())
          window.googletag.display(this.id)
        })
      }
    })
  },
}
</script>
