<template>
  <transition name="fade">
    <div v-show="show" class="sticky-footer-cta" data-nosnippet>
      <button class="close-btn" aria-label="Zatvori" @click="show = false">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <div class="content">
        <div class="main-col">
          <img
            src="@/assets/img/telegram_logo_white.svg"
            class="logo"
            alt="Telegram"
          />
          <h2 class="title">{{ text }}</h2>
          <a :href="cta_link" class="cta-button">{{ cta }}</a>
        </div>
        <ul class="features">
          <li v-for="(feature, i) in features" :key="i" class="feature">
            <font-awesome-icon :icon="['fas', 'check']" class="feature-icon" />
            <span class="feature-text">{{ feature }}</span>
          </li>
        </ul>
        <img
          src="@/assets/img/pretplata/homepage/devices-footer.png"
          class="devices-image"
          alt=""
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'StickyFooterCta',
  data() {
    return {
      show: false,
      termId: false,
      softwall: true,
      text: 'Čitajte Telegram cijelu godinu uz čak 50% popusta!',
      cta: 'Pretplatite se',
      cta_link: '/pretplata',
      feature1: 'Čitanje bez reklama',
      feature2: 'Pogodnosti Telegram Kluba',
      feature3: 'Otkažite u bilo kojem trenutku',
    }
  },
  computed: {
    features() {
      return [this.feature1, this.feature2, this.feature3].filter(Boolean)
    },
  },
  mounted() {
    window.addEventListener('sticky_footer', this.load)
  },
  destroyed() {
    window.removeEventListener('sticky_footer', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.text = e.detail.text ?? this.text
        this.cta = e.detail.cta ?? this.cta
        this.cta_link = e.detail.cta_link ?? this.cta_link
        this.feature1 = e.detail.feature1 ?? this.feature1
        this.feature2 = e.detail.feature2 ?? this.feature2
        this.feature3 = e.detail.feature3 ?? this.feature3
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
.sticky-footer-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  background: linear-gradient(180deg, #730804 0%, #480300 100%);
}
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  color: #ffffff;
  font-size: 22px;
  cursor: pointer;
  opacity: 0.8;
}
.close-btn:hover {
  opacity: 1;
}
.content {
  max-width: 1248px;
  margin: 0 auto;
  height: 186px;
  padding: 20px 17px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 357px;
}
.logo {
  width: 120px;
  height: auto;
}
.title {
  font-family: 'Lora', serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: #f9f9fa;
  margin: 24px 0 0;
}
.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  margin-top: 24px;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: inset 0 3px 4px -3px rgba(255, 255, 255, 0.56),
    inset 0 0 8px -2px rgba(255, 255, 255, 0.48),
    0 3px 3px -1.5px rgba(0, 0, 0, 0.03), 0 1px 1px -0.5px rgba(0, 0, 0, 0.03);
  transition: background-color 0.3s ease;
}
.cta-button:hover {
  background-color: #f2f2f2;
}
.features {
  display: none;
}
.devices-image {
  display: none;
}
@media screen and (min-width: 1024px) {
  .content {
    height: 240px;
    padding: 0 17px;
    justify-content: flex-start;
  }
  .main-col {
    align-items: flex-start;
    text-align: left;
    width: 520px;
    max-width: 520px;
    flex-shrink: 0;
  }
  .logo {
    width: 110px;
  }
  .title {
    font-size: 26px;
    line-height: 36px;
    margin-top: 20px;
    padding-right: 100px;
  }
  .cta-button {
    width: auto;
    margin-top: 26px;
    padding: 8px 16px;
  }
  .features {
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    margin: 0 0 0 160px;
    padding: 0;
    flex-shrink: 0;
  }
  .feature {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .feature-icon {
    width: 17px;
    height: 17px;
    color: #ffffff;
    flex-shrink: 0;
  }
  .feature-text {
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    line-height: 19.2px;
    font-weight: 400;
    color: #ffffff;
    white-space: nowrap;
  }
  .devices-image {
    display: block;
    align-self: flex-end;
    width: 300px;
    height: auto;
    flex-shrink: 0;
  }
}
</style>
