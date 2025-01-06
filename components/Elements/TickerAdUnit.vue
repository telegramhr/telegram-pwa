<template>
  <client-only>
    <transition name="fade">
      <div
        v-show="!shouldHide"
        id="telegram_sticky_back"
        :class="[
          'flex',
          'full',
          'center',
          'sticky-banner',
          bannerClass === 'takeover' ? 'sticky-fade' : '',
          bannerClass === 'ticker-right' ? 'sticky-right' : '',
          bannerClass === 'ticker-left' ? 'sticky-left' : '',
        ]"
        data-nosnippet
      >
        <div class="relative">
          <div id="telegram_sticky" :class="bannerClass"></div>
          <a
            v-show="showClose"
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
    </transition>
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
      if (this.size[0] === 2000 && this.size[1] === 300) {
        return 'ticker-left'
      }
      return 'ticker'
    },
  },
  mounted() {
    window.addEventListener('tmg_no_close', (e) => {
      this.showClose = false
    })
    document.addEventListener('click', (e) => {
      if (e.target.id === 'telegram_sticky_back') {
        this.close()
      }
    })
    this.$watch(
      () => this.$route.path,
      (to) => {
        if (to.includes('pretplata') || to.includes('moj-racun')) {
          this.shouldHide = true
        }
      }
    )
    const _that = this
    window.googletag = window.googletag || {}
    window.googletag.cmd = window.googletag.cmd || []
    window.googletag.cmd.push(() => {
      window.googletag
        .pubads()
        .addEventListener('slotRenderEnded', function (event) {
          const name = event.slot.getAdUnitPath().split('/').pop()
          if (!name.includes('sticky') || event.isEmpty) {
            return
          }
          if (
            _that.shouldHide &&
            !event.isEmpty &&
            !_that.$route.path.includes('pretplata')
          ) {
            _that.shouldHide = false
            _that.showClose = true
          }
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

.sticky-left {
  justify-content: flex-start;
}

.sticky-fade {
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
}

#telegram_sticky iframe,
#telegram_sticky img {
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
