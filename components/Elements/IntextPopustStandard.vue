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
          <img
            src="@/assets/img/telegram_logo_white.svg"
            class="logo"
            alt="Telegram Logo"
          />
          <h2 class="title">
            {{ title }}
            <span class="oldPrice"
              >{{ oldPrice }}<span class="line">/</span></span
            >
            <span class="newPrice">{{ newPrice }}</span>
            <span v-if="period" class="period">{{ period }}</span>
          </h2>
          <p class="subtitle">
            {{ subtitle }}
            <span style="font-weight: 600">{{ weeklyPrice }}</span>
            {{ subtitlePeriod }}
          </p>
          <a
            :href="cta_link"
            class="cta-button"
            target="_blank"
            rel="noopener noreferrer"
            >{{ cta }}</a
          >
          <div class="image-section">
            <img
              src="@/assets/img/pretplata/popust-standard/Popup_900x600.png"
              class="popup-image desktop-only"
              alt="Telegram pretplata"
            />
            <img
              src="@/assets/img/pretplata/popust-standard/Popup_400x600.png"
              class="popup-image mobile-only"
              alt="Telegram pretplata"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextPopustStandard',
  data() {
    return {
      show: false,
      termId: false,
      title: 'Podržite neovisno novinarstvo za',
      oldPrice: '79€',
      newPrice: '29€',
      period: 'godišnje',
      subtitle: 'Čitajte sve sadržaje već od',
      weeklyPrice: '0,56€',
      subtitlePeriod: 'tjedno',
      softwall: true,
      cta: 'Aktivirajte pretplatu',
      cta_link: '/pretplata/popust-standard',
    }
  },

  mounted() {
    window.addEventListener('intext_popust_standard', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_popust_standard', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.title = e.detail.title ?? this.title
        this.oldPrice = e.detail.oldPrice ?? this.oldPrice
        this.newPrice = e.detail.newPrice ?? this.newPrice
        this.period = e.detail.period ?? this.period
        this.subtitle = e.detail.subtitle ?? this.subtitle
        this.weeklyPrice = e.detail.weeklyPrice ?? this.weeklyPrice
        this.subtitlePeriod = e.detail.subtitlePeriod ?? this.subtitlePeriod
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
  padding: 40px 20px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 100% !important;
}
.main-wrapper {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 400 / 600;
  max-height: 85vh;
  position: relative;
  background: radial-gradient(
    ellipse 51.64% 60.06% at 50.07% 48.36%,
    #008ef4 0%,
    #003152 100%
  );
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px 0;
  justify-content: space-between;
  gap: 24px;
  box-sizing: border-box;
  overflow: hidden;
}
.close-btn {
  position: absolute;
  top: -1rem;
  right: -1rem;
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
  max-width: 160px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 8px;
  display: block;
}
.title {
  font-family: 'Lora', serif;
  font-size: 25px;
  line-height: 33px;
  text-align: center;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  width: 100%;
  max-width: 440px;
}
.oldPrice {
  color: #b8c4d1;
  position: relative;
  font-weight: 500;
}
.oldPrice .line {
  position: absolute;
  left: 4px;
  top: 0px;
  color: #ffffff;
  font-size: 28px;
  rotate: 20deg;
}
.newPrice {
  font-weight: 600;
  color: #ffffff;
}
.period {
  font-weight: 500;
  color: #ffffff;
}
.subtitle {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin: 0 !important;
  width: 100%;
  max-width: 440px;
}
.cta-button {
  background-color: #217613;
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 14px;
  border: none;
  width: fit-content;
  border-radius: 10px;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
}
.cta-button:hover {
  background-color: #1a5e0f;
}
.image-section {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.image-section .popup-image {
  max-width: 100%;
}
.image-section .desktop-only {
  display: none;
}
.image-section .mobile-only {
  display: block;
}
@media screen and (min-width: 1024px) {
  .main-wrapper {
    max-width: 900px;
    aspect-ratio: 900 / 600;
  }
  .wrapper {
    padding: 32px 40px 0;
    gap: 24px;
  }
  .logo {
    max-width: 200px;
  }
  .title {
    font-size: 30px;
    line-height: 35px;
  }
  .subtitle {
    font-size: 18px;
    line-height: 20px;
  }
  .oldPrice .line {
    left: 7px;
    rotate: 25deg;
    font-size: 38px;
  }
  .cta-button {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 20px;
    box-shadow: 0px 0px 8px -2px rgba(255, 255, 255, 0.48) inset,
      0px 3px 4px -3px rgba(255, 255, 255, 0.56) inset,
      0px 3px 3px -1.5px rgba(0, 0, 0, 0.03),
      0px 1px 1px -0.5px rgba(0, 0, 0, 0.03);
  }
  .image-section .desktop-only {
    display: block;
  }
  .image-section .mobile-only {
    display: none;
  }
}
</style>
