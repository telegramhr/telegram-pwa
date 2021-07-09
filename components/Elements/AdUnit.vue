<template>
  <client-only>
    <a
      v-show="id === 'telegram_sticky' && showClose"
      href="#"
      :style="{
        position: 'fixed',
        left: '50%',
        zIndex: 999,
        marginLeft: size[0] / 2 - 25 + 'px',
        bottom: size[1] - 10 + 'px',
      }"
      @click="showClose = false"
      ><font-awesome-icon
        :icon="['fas', 'times-circle']"
        size="2x"
        style="color: #ae3736"
      ></font-awesome-icon
    ></a>
    <div :id="id" class="banner-slot"></div>
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
  },
  data() {
    return {
      size: [0, 0],
      showClose: false,
    }
  },
  computed: {
    style() {
      if (this.id.includes('sticky')) {
        return ''
      }
      return 'min-height: 250px;'
    },
  },
  mounted() {
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.googletag.cmd.push(() => {
      window.googletag
        .pubads()
        .addEventListener('slotRenderEnded', function (event) {
          const name = event.slot.getAdUnitPath().split('/').pop()
          const el = document.getElementById(event.slot.getSlotElementId())
          if (name.includes('sticky') && !event.isEmpty) {
            this.showClose = true
          }
          if (!event.isEmpty && name.includes('intext')) {
            document
              .getElementById(event.slot.getSlotElementId() + '-info')
              .classList.remove('hide')
          }
          if (event.isEmpty) {
            el.style.minHeight = '0px'
          }
          if (event.size && event.size[0] === 200 && event.size[1] === 250) {
            el.style.right = '0px'
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
