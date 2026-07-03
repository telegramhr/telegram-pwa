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
            src="@/assets/img/telesport_logo_white.svg"
            class="logo"
            alt="Telesport"
          />
          <img
            src="@/assets/img/pretplata/telesport/svjetsko.png"
            class="mock-image"
            alt=""
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
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextTelesportSvjetsko2',
  data() {
    return {
      show: false,
      termId: false,
      title:
        'Pratite Svjetsko prvenstvo uz ekskluzivnu ponudu Telesport pretplate!',
      softwall: true,
      cta: 'Aktivirajte pretplatu',
      cta_link: '/pretplata/ponuda-svjetsko',
    }
  },
  mounted() {
    window.addEventListener('intext_telesport_svjetsko_2', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_telesport_svjetsko_2', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.title = e.detail.title ?? this.title
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
  max-width: min(420px, 95vw);
  max-height: 85vh;
  position: relative;
  background: #000;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 640 / 774;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
  box-sizing: border-box;
  padding: 24px;
  background: #000 url('@/assets/img/pretplata/telesport/bg-svjetsko.png')
    no-repeat center center;
  background-size: cover;
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
  order: 1;
  width: 140px;
  max-width: 50%;
  height: auto;
}
.mock-image {
  order: 4;
  width: 100%;
  max-width: 200px;
  height: auto;
}
.title {
  order: 2;
  font-family: 'Lora', serif;
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  color: #ffffff;
  margin: 0px;
  max-width: 340px;
}
.cta-button {
  order: 3;
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
    max-width: min(900px, 95vw);
  }
  .wrapper {
    aspect-ratio: 900 / 600;
    padding: 24px;
    gap: 20px;
  }
  .logo {
    order: 1;
    width: 200px;
    max-width: none;
  }
  .title {
    order: 2;
    font-size: 30px;
    line-height: 35px;
    max-width: 485px;
  }
  .cta-button {
    order: 3;
  }
  .mock-image {
    order: 4;
    max-width: 260px;
  }
}
</style>
