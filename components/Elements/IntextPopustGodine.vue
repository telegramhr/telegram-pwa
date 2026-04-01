<template>
  <transition name="fade">
    <div v-show="show" :class="softwall ? 'softwall' : ''" data-nosnippet>
      <div class="main-wrapper">
        <div
          class="close-btn getmeouttahere-btn center clickable"
          v-if="softwall"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <div class="wrapper">
          <div class="content">
            <img
              src="@/assets/img/telegram_logo_grey.svg"
              class="logo"
              alt="Telesport Grey Logo"
            />
            <div class="left-side">
              <div class="text-content">
                <div class="headings">
                  <h2 class="title">
                    {{ title }}
                    <span class="oldPrice"
                      >{{ oldPrice }}<span class="line">/</span></span
                    >
                    <span class="newPrice">{{ newPrice }}</span>
                  </h2>
                  <p class="subtitle">
                    {{ subtitle }}
                    <span style="font-weight: 700">{{ weeklyPrice }}</span>
                    {{ period }}
                  </p>
                </div>
                <a
                  :href="cta_link"
                  class="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ cta }}</a
                >
              </div>
              <p class="disclaimer">{{ disclaimer }}</p>
            </div>
          </div>
          <div class="image-section">
            <img
              src="@/assets/img/pretplata/popust-godine/popup_desktop.png"
              class="logo desktop-only"
              alt="Laptop, mobitel i audio članak"
            />
            <img
              src="@/assets/img/pretplata/popust-godine/popup_mob.png"
              class="logo mobile-only"
              alt="Laptop, mobitel i audio članak"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextPopustGodine',
  data() {
    return {
      show: false,
      termId: false,
      title: 'Čitajte Telegram cijelu godinu za',
      oldPrice: '79€',
      newPrice: '29€',
      subtitle: 'Do neovisnog novinarstva sada možete već od ',
      weeklyPrice: '0,56€',
      period: 'tjedno.',
      softwall: true,
      cta: 'Aktivirajte pretplatu',
      cta_link: '/pretplata/popust-godine',
      disclaimer:
        'Možete otkazati u bilo kojem trenutku. Nakon isteka prve godine po cijeni od 29€, pretplata se automatski obnavlja po redovnoj cijeni.',
    }
  },

  mounted() {
    window.addEventListener('intext_popust_godine', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_popust_godine', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.title = e.detail.title ?? this.title
        this.oldPrice = e.detail.oldPrice ?? this.oldPrice
        this.newPrice = e.detail.newPrice ?? this.newPrice
        this.subtitle = e.detail.subtitle ?? this.subtitle
        this.weeklyPrice = e.detail.weeklyPrice ?? this.weeklyPrice
        this.cta = e.detail.cta ?? this.cta
        this.cta_link = e.detail.cta_link ?? this.cta_link
        this.disclaimer = e.detail.disclaimer ?? this.disclaimer
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
  max-width: 900px;
  position: relative;
  max-height: 80vh !important;
  background: #e8dacd;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  padding: 30px 30px 12px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 42px;
  z-index: 20;
  position: relative;
}
.logo {
  max-width: 89px;
  margin: 0 auto;
}
.text-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.title {
  font-family: 'Lora', serif;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  font-weight: 500;
  color: #343434;
  margin: 0px;
  width: 100%;
}
.headings {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.oldPrice {
  color: #8a8a8a;
  position: relative;
}
.oldPrice .line {
  position: absolute;
  left: 4px;
  top: 0px;
  color: #343434;
  font-size: 30px;
  rotate: 20deg;
}
.newPrice {
  font-weight: 700;
}
.subtitle {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #343434;
  text-align: center;
  margin: 0px !important;
}
.cta-button {
  display: flex;
  width: fit-content;
  background-color: #297529;
  color: #ffffff;
  font-family: 'Barlow';
  padding: 8px 14px;
  margin: 0 auto;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  border-top: 1.4px solid;
  box-shadow: 0px -1.4px 4.21px -1.4px var(--neutralinversewhitealpha12) inset;
  box-shadow: 0px 2.81px 4.21px 0px var(--colorwhite12) inset;
  box-shadow: 0px 4.21px 4.21px -2.1px var(--elevationshadow);
  border-radius: 6px;
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
.left-side {
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.disclaimer {
  font-family: 'Barlow', sans-serif;
  font-size: 7px;
  line-height: 9px;
  text-align: center;
  max-width: 204px;
  width: 100%;
  margin: 0 auto;
  color: #342f2f;
}
.article-bar {
  display: flex;
  flex-direction: row;
  width: fit-content;
  justify-content: space-between;
  padding: 9px 7px;
  margin: 0 auto;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(153, 153, 153, 0.15) 100%
  );
}
.article-bar button {
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
}
.listen-btn {
  display: flex;
  flex-direction: row;
  gap: 4px !important;
  font-size: 8px;
  line-height: 16px;
}
.listen-btn img {
  width: 16px;
  height: 16px;
}
.action-buttons {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.action-buttons button {
  border: 0.53px solid white;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-size: 8px;
  line-height: 14px;
}
.action-buttons button img {
  width: 10px;
  height: 10px;
}
.action-buttons .share-btn {
  border-radius: 99999px;
  padding: 0 4px;
}
.image-section {
  position: relative;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: radial-gradient(
    60.06% 51.64% at 50.07% 48.36%,
    #3c82b3 0%,
    #041c2c 100%
  );
}
.image-section img {
  max-width: 100%;
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
.desktop-only {
  display: none;
}
.mobile-only {
  display: block;
  animation: slideUp 0.6s ease-in both;
  animation-delay: 0.2s;
}
.images {
  position: relative;
  min-height: 249px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
.iphone {
  max-width: 110px;
  width: 100%;
  position: absolute;
  left: 38px;
  bottom: -24px;
}
.macbook {
  position: absolute;
  width: 100%;
  max-width: 448px;
  position: absolute;
  height: auto;
  bottom: -50px;
  right: -72px;
}
@media screen and (min-width: 1024px) {
  .close-btn {
    top: -1rem;
    right: -1rem;
  }
  .wrapper {
    flex-direction: row;
  }
  .content {
    padding: 68px 44px 40px 62px;
    width: 100%;
    max-width: 385px;
    gap: 98px;
  }
  .text-content {
    gap: 16px;
  }
  .left-side {
    height: 100%;
    justify-content: space-between;
  }
  .headings {
    gap: 16px;
  }
  .text-content {
    gap: 24px;
  }
  .logo {
    max-width: 160px;
    margin: 0px;
  }
  .title {
    font-size: 34px;
    line-height: 40px;
    text-align: left;
  }
  .oldPrice {
    color: #8a8a8a;
  }
  .oldPrice .line {
    left: 7px;
    rotate: 25deg;
    font-size: 40px;
    color: #343434;
  }
  .subtitle {
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    margin: 0px !important;
  }

  .cta-button {
    padding: 10px 14px;
    font-size: 14px;
    margin: 0px;
  }
  .disclaimer {
    text-align: left;
    margin: 0px !important;
    font-size: 9px;
    line-height: 12px;
    max-width: none;
  }
  .article-bar {
    max-width: 454px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
  }
  .listen-btn {
    font-size: 12px;
    line-height: 24px;
  }
  .listen-btn img {
    width: 24px;
    height: 24px;
  }
  .action-buttons {
    gap: 8px;
  }
  .action-buttons button {
    font-size: 12px;
    line-height: 22px;
    border: 0.76px solid white;
    border-radius: 8px;
  }
  .action-buttons button img {
    width: 16px;
    height: 16px;
  }
  .desktop-only {
    display: block;
    animation: slideUp 0.6s ease-in both;
    animation-delay: 0.2s;
  }
  .mobile-only {
    display: none;
  }
  .image-section {
    width: 100%;
    justify-content: flex-end;
  }
  .images {
    max-width: none;
    min-height: 444px;
  }
  .iphone {
    max-width: 160px;
    z-index: 10;
  }
  .macbook {
    max-width: none;
    width: 695px;
    left: -20px;
    top: -50px;
    right: auto;
    bottom: auto;
  }
}
</style>
