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
          <div class="top">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              class="logo"
              alt="Telegram Bijeli Logo"
            />
            <h2 class="title">{{ title }}</h2>
            <a
              :href="cta_link"
              class="cta-button"
              target="_blank"
              rel="noopener noreferrer"
              >{{ cta }}</a
            >
          </div>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextTelesportSvjetsko',
  data() {
    return {
      show: false,
      termId: false,
      title:
        'Analize, komentari, newsletteri i priče koji upotpunjuju statistiku.',
      subtitle:
        'Od prvog zvižduka do finala - pratite prvenstvo uz Telegram i Telesport!',
      softwall: true,
      cta: 'Aktivirajte pretplatu',
      cta_link: '/pretplata/ponuda-svjetsko',
    }
  },
  mounted() {
    window.addEventListener('intext_telesport_svjetsko', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_telesport_svjetsko', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.title = e.detail.title ?? this.title
        this.subtitle = e.detail.subtitle ?? this.subtitle
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
  max-width: 420px;
  position: relative;
  background: #000000;
}
.wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 640 / 774;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 40px 24px 40px 24px;
  background-image: url('@/assets/img/pretplata/telesport/svjetsko_popup_mob.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 100%;
  z-index: 2;
}
.logo {
  width: 140px;
  max-width: 50%;
  height: auto;
}
.title {
  font-family: 'Lora', serif;
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  color: #ffffff;
  margin: 0px;
  max-width: 340px;
}
.subtitle {
  font-family: 'Barlow', sans-serif;
  font-weight: 200;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  margin: 0px;
  max-width: 300px;
  z-index: 2;
}
.cta-button {
  display: flex;
  width: fit-content;
  background-color: #217613;
  color: #ffffff;
  font-family: 'Barlow';
  padding: 12px 20px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  border-top: 1.4px solid rgba(0, 0, 0, 0.09);
  box-shadow: inset 0px 3px 4px -2px rgba(255, 255, 255, 0.56),
    inset 0px 0px 8px -1px rgba(255, 255, 255, 0.48),
    0px 1.4px 1.4px -0.7px rgba(0, 0, 0, 0.03),
    0px 4px 4px -2px rgba(0, 0, 0, 0.03);
}
.cta-button:hover {
  background-color: #1c6510;
}
@media screen and (min-width: 1024px) {
  .close-btn {
    top: -1rem;
    right: -1rem;
  }
  .main-wrapper {
    max-width: 900px;
  }
  .wrapper {
    aspect-ratio: 900 / 600;
    background-image: url('@/assets/img/pretplata/telesport/svjetsko_popup.png');
    padding: 100px 24px 100px 24px;
    justify-content: flex-start;
    gap: 0;
  }
  .logo {
    width: 200px;
    max-width: none;
  }
  .title {
    font-size: 30px;
    line-height: 35px;
    max-width: 485px;
  }
  .subtitle {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    line-height: 24px;
    max-width: 390px;
  }
}
</style>
