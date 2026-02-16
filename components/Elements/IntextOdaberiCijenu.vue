<template>
  <transition name="fade">
    <div
      v-show="show && imageReady"
      :class="softwall ? 'softwall' : ''"
      data-nosnippet
    >
      <div class="main-wrapper">
        <div
          class="close-btn getmeouttahere-btn center clickable"
          v-if="softwall"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <div class="wrapper">
          <div class="background-gradient-image"></div>
          <div class="background-image"></div>

          <div class="content">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              class="logo"
              alt="Telegram Bijeli Logo"
            />
            <div class="text-content">
              <h2 class="title">
                {{ title }}
              </h2>
              <a
                :href="cta_link"
                class="cta-button"
                target="_blank"
                rel="noopener noreferrer"
                >{{ cta }}</a
              >
            </div>
          </div>
          <img
            src="@/assets/img/pretplata/odaberi-cijenu/novinari-mob.webp"
            class="novinari-mobile"
            alt="Telegram novinari"
          />
          <img
            src="@/assets/img/pretplata/odaberi-cijenu/novinari-lijevo.webp"
            class="novinari-desktop novinari-left"
            alt="Telegram novinari"
          />
          <img
            src="@/assets/img/pretplata/odaberi-cijenu/novinari-desno.webp"
            class="novinari-desktop novinari-right"
            alt="Telegram novinari"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import bgImage from '@/assets/img/pretplata/odaberi-cijenu/popup-bg.webp'

export default {
  name: 'IntextOdaberiCijenu',
  data() {
    return {
      show: false,
      imageReady: false,
      termId: false,
      title: 'Istina ima vrijednost. Vi određujete koliko.',
      softwall: true,
      cta: 'Iskoristite ponudu',
      cta_link: '/pretplata/odaberi-cijenu',
    }
  },
  mounted() {
    window.addEventListener('intext_odaberi_cijenu', this.load)
    this.preloadBgImage()
  },
  destroyed() {
    window.removeEventListener('intext_odaberi_cijenu', this.load)
  },
  methods: {
    preloadBgImage() {
      const img = new Image()
      img.fetchPriority = 'high'
      img.onload = () => {
        this.imageReady = true
      }
      img.src = bgImage
    },
    load(e) {
      if (e.detail) {
        this.title = e.detail.title
        this.cta = e.detail.cta ?? ''
        this.cta_link = e.detail.cta_link ?? ''
        this.softwall = e.detail.softwall ?? false
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
  max-width: 900px;
  position: relative;
  height: 600px;
  max-height: 90vh;
  background: #0b1272;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #5b0101
    url('~@/assets/img/pretplata/odaberi-cijenu/popup-bg.webp') center / cover
    no-repeat;
  z-index: 1;
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
.content {
  padding: 72px 24px 0px 24px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 20;
  position: relative;
}
.logo {
  max-width: 160px;
}
.text-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.title {
  font-family: 'Lora', serif;
  font-size: clamp(20px, 4svh, 28px);
  line-height: 36px;
  font-weight: 500;
  color: #ffffff;
  width: 100%;
  margin: 0px;
  max-width: 450px;
}
.title span {
  text-decoration: underline;
}
.cta-button {
  display: flex;
  width: fit-content;
  background-color: #297529;
  color: #ffffff;
  font-family: 'Barlow';
  padding: 12px 18px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  border-top: 1.4px solid;
  box-shadow: 0px -1.4px 4.21px -1.4px var(--neutralinversewhitealpha12) inset;
  box-shadow: 0px 2.81px 4.21px 0px var(--colorwhite12) inset;
  box-shadow: 0px 4.21px 4.21px -2.1px var(--elevationshadow);
  border-radius: 12px;
  box-shadow: 0px 1.4px 1.4px -0.7px var(--elevationshadow);
  border-image-source: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.04) 8%,
    rgba(0, 0, 0, 0.07) 100%
  );
}
.cta-button:hover {
  background-color: #256925;
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideUpCenter {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.novinari-mobile {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-height: 300px;
  z-index: 20;
  animation: slideUpCenter 0.6s ease-in both;
  animation-delay: 0.2s;
}
.novinari-desktop {
  display: none;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .content {
    padding: 90px 42px 0px 42px;
  }
}

@media screen and (min-width: 700px) {
  .novinari-desktop {
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 20;
    height: 250px;
    animation: slideUp 0.6s ease-in both;
  }
  .novinari-left {
    left: 0;
    animation-delay: 0.2s;
  }
  .novinari-right {
    right: 0;
    animation-delay: 0.4s;
  }
  .novinari-mobile {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .text-content {
    gap: 48px;
  }
  .close-btn {
    top: -1rem;
    right: -1rem;
  }
  .title {
    font-size: 32px;
    line-height: 42px;
  }

  .cta-button {
    padding: 16px 24px;
    font-size: 24px;
    margin-left: -6px;
  }
  .content {
    padding: 80px 0px 0px 0px;
  }
}
</style>
