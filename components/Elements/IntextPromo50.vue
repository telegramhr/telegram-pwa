<template>
  <transition name="fade">
    <div v-show="show" :class="softwall ? 'softwall' : ''" data-nosnippet>
      <div class="main-wrapper">
        <div
          v-if="softwall"
          class="close-btn getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <div class="wrapper">
          <img
            src="@/assets/img/pretplata/paper.png"
            class="paper-bg"
            alt=""
          />
          <img
            src="@/assets/img/telegram_logo_white.svg"
            class="logo"
            alt="Telegram"
          />
          <div class="text-content">
            <h2 class="title">
              {{ text }} <span class="yellow">{{ yellowText }}</span>
            </h2>
            <TgButton :href="cta_link" target="_blank">{{ cta }}</TgButton>
          </div>
          <img
            src="@/assets/img/pretplata/50-popust/devices-mob.png"
            class="devices-image devices-mobile"
            alt=""
          />
          <img
            src="@/assets/img/pretplata/50-popust/devices.png"
            class="devices-image devices-desktop"
            alt=""
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import TgButton from '@/components/Elements/TgButton.vue'

export default {
  name: 'IntextPromo50',
  components: { TgButton },
  data() {
    return {
      show: false,
      termId: false,
      text:
        'Neovisno novinarstvo, dubinske analize i istraživački članci - sada s',
      yellowText: '50% popusta',
      softwall: true,
      cta: 'Iskoristite popust',
      cta_link: '/pretplata/50-popust',
    }
  },
  mounted() {
    window.addEventListener('intext_promo_50', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_promo_50', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.text = e.detail.text ?? this.text
        this.yellowText = e.detail.yellowText ?? this.yellowText
        this.cta = e.detail.cta ?? this.cta
        this.cta_link = e.detail.cta_link ?? this.cta_link
        this.softwall = e.detail.softwall ?? this.softwall
        this.termId = e.detail.termId
      }
      this.triggerShow()
    },
    triggerShow() {
      if (this.show) {
        return
      }
      const el = document.getElementById('piano-content')
      if (this.softwall) {
        this.show = true
        this.$emit('show')
      }
      if (el) {
        this.show = true
        if (!this.softwall) {
          el.parentNode.removeChild(el)
          document
            .querySelector('#article-content p:last-child')
            .classList.add('premium-fade-out')
        }
      }
    },
  },
}
</script>

<style scoped>
.softwall {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 100% !important;
}
.main-wrapper {
  width: 100%;
  max-width: min(320px, 95vw);
  max-height: 85vh;
  position: relative;
  background: #810a06;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 320 / 480;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 40px 16px 0;
  background-color: #810a06;
}
.paper-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  opacity: 0.6;
  pointer-events: none;
  transform: rotate(180deg);
}
.close-btn {
  position: absolute;
  top: -1rem;
  right: -10px;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  z-index: 100;
}
.logo {
  position: relative;
  z-index: 1;
  width: 108px;
  height: auto;
  margin-bottom: 40px;
  flex-shrink: 0;
}
.text-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.title {
  font-family: 'Lora', serif;
  font-size: 19px;
  line-height: 24px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  max-width: 268px;
}
.title .yellow {
  color: #f9a000;
}
.devices-image {
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  margin-top: auto;
}
.devices-desktop {
  display: none;
}
@media screen and (min-width: 1024px) {
  .close-btn {
    top: -1rem;
    right: -1rem;
  }
  .main-wrapper {
    max-width: min(1200px, 95vw);
  }
  .wrapper {
    aspect-ratio: 1200 / 450;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    padding: 0 45% 0 100px;
  }
  .paper-bg {
    transform: none;
  }
  .logo {
    width: 145px;
    margin-bottom: 0;
  }
  .text-content {
    align-items: flex-start;
    gap: 32px;
    padding-top: 72px;
  }
  .title {
    font-size: 32px;
    line-height: 40px;
    max-width: 447px;
  }
  .devices-mobile {
    display: none;
  }
  .devices-desktop {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 55%;
    max-width: 668px;
    height: auto;
    margin-top: 0;
  }
}
</style>
</content>
