<template>
  <client-only>
    <div
      :id="id"
      class="banner-slot"
      :style="{
        minHeight:
          !disable &&
          id === 'telegram_desktop_billboard_v1' &&
          !$store.getters['user/hasPremium']
            ? '250px'
            : 0,
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
  mounted() {
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.marfeel = window.marfeel || { cmd: [] }
    window.googletag.cmd.push(() => {
      window.googletag
        .pubads()
        .addEventListener('slotRenderEnded', function (event) {
          const name = event.slot.getAdUnitPath().split('/').pop()
          if (!event.isEmpty && name.includes('intext')) {
            document
              .getElementById(event.slot.getSlotElementId() + '-info')
              .classList.remove('hide')
          }
          if (event.isEmpty && name.includes('billboard_v1')) {
            document.getElementById(
              event.slot.getSlotElementId()
            ).style.minHeight = 0
          }
          if (!event.isEmpty) {
            window.marfeel.cmd.push([
              'compass',
              function (compass) {
                compass.trackAdEvent('slotRenderEnded', event.slot)
              },
            ])
            this.$emit('hasAd', true)
          }
        })
      window.googletag
        .pubads()
        .addEventListener('slotVisibilityChanged', function (event) {
          window.marfeel.cmd.push([
            'compass',
            function (compass) {
              compass.trackAdEvent('slotVisibilityChanged', event.slot)
            },
          ])
        })
    })
  },
}
</script>
