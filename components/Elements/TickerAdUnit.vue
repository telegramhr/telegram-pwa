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
      <div
        id="telegram_sticky"
        :class="bannerClass"
        :style="{
          minHeight:
            !disable &&
            id === 'telegram_desktop_billboard_v1' &&
            $route.name === 'category-slug' &&
            !$store.getters['user/hasPremium']
              ? '250px'
              : 0,
        }"
      ></div>
      <a
        href="#"
        :style="{
          position: 'relative',
          marginLeft: '-22px',
          left: bannerClass === 'ticker-right' ? '22px' : 0,
          zIndex: 201,
          top: -size[1] / 2 + 'px',
        }"
        @click.prevent="shouldHide = true"
        ><font-awesome-icon
          :icon="['fas', 'times-circle']"
          size="3x"
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
      size: [900, 250],
      showClose: false,
      shouldHide: false,
    }
  },
  computed: {
    bannerClass() {
      if (this.size[0] === 900 && this.size[1] === 600) {
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
  flex-direction: row-reverse;
  justify-content: end;
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
