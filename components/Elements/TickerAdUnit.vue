<template>
  <client-only>
    <div
      v-show="!shouldHide"
      :class="[
        'flex',
        'full',
        'center',
        'sticky-banner',
        bannerClass === 'takeover' ? 'sticky-fade' : '',
        bannerClass === 'ticker-right' ? 'sticky-right' : '',
      ]"
    >
      <div class="relative">
        <div id="telegram_sticky" :class="bannerClass"></div>
        <a
          v-show="!noClose && showClose"
          href="#"
          :class="[
            bannerClass === 'ticker' ? 'ticker-exit' : '',
            bannerClass === 'takeover' ? 'takeover-exit' : '',
            bannerClass === 'ticker-right' ? 'ticker-right-exit' : '',
          ]"
          @click.prevent="shouldHide = true"
          ><font-awesome-icon
            :icon="['fas', 'times-circle']"
            size="3x"
            style="color: #ae3736"
          ></font-awesome-icon
        ></a>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'TickerAdUnit',
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
      size: [900, 250],
      showClose: false,
      shouldHide: false,
      noClose: false,
    }
  },
  computed: {
    bannerClass() {
      if (
        (this.size[0] === 900 && this.size[1] === 600) ||
        (this.size[0] === 320 && this.size[1] === 480)
      ) {
        return 'takeover'
      }
      if (this.size[0] === 200 && this.size[1] === 250) {
        return 'ticker-right'
      }
      return 'ticker'
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
            if (_that.bannerClass === 'takeover') {
              setTimeout(() => {
                _that.shouldHide = true
              }, 30000)
            }
          }
        })
    })
    window.addEventListener('message', this.handleClose)
  },
  methods: {
    handleClose(e) {
      if (e.data === 'shouldHaveClose') {
        this.noClose = true
      }
    },
  },
}
</script>

<style>
.sticky-banner {
  position: fixed;
  z-index: 200;
  bottom: 0;
}

.sticky-right {
  justify-content: flex-end;
}

.sticky-fade {
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
}

#telegram_sticky iframe,
#telegram_sticky img {
  margin: 0 auto;
}
</style>
