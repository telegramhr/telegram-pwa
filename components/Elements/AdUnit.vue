<template>
  <client-only>
    <div v-show="!shouldHide">
      <div
        :id="id"
        class="banner-slot"
        :style="{
          right: 0,
          left: size[0] > 200 ? 0 : 'initial',
          minHeight:
            !disable &&
            id === 'telegram_desktop_billboard_v1' &&
            $route.name === 'category-slug' &&
            !$store.state.user.hasPremium
              ? '250px'
              : 0,
        }"
      ></div>
      <a
        v-show="id === 'telegram_sticky' && showClose"
        href="#"
        :style="{
          position: 'fixed',
          left: '50%',
          zIndex: 10000,
          marginLeft: closeMargin + 'px',
          bottom: size[1] - 15 + 'px',
        }"
        @click.prevent="shouldHide = true"
        ><font-awesome-icon
          :icon="['fas', 'times-circle']"
          size="2x"
          style="color: #ae3736"
        ></font-awesome-icon
      ></a>
    </div>
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
  data() {
    return {
      size: [0, 0],
      showClose: false,
      shouldHide: false,
    }
  },
  computed: {
    closeMargin() {
      if (this.size[0] === 200) {
        return -10
      }
      return this.size[0] / 2 - 25
    },
  },
  mounted() {
    const _that = this
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.googletag.cmd.push(() => {
      window.googletag
        .pubads()
        .addEventListener('slotRenderEnded', function (event) {
          const name = event.slot.getAdUnitPath().split('/').pop()
          if (name.includes('sticky') && !event.isEmpty) {
            _that.showClose = true
            _that.size = event.size
          }
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
        })
    })
  },
  methods: {
    receiver(event) {
      if (event && event.data && typeof event.data === 'string') {
        if (event.data.includes('tmg_ticker')) {
        }
      }
    },
  },
}
</script>
