<template>
  <transition name="fade">
    <div v-show="show" class="main">
      <div class="main-wrapper">
        <div class="left-container">
          <div class="title-wrapper">
            <h3>{{ title }}</h3>
            <p>{{ subtitle }}</p>
          </div>
          <div class="features-wrapper">
            <div class="feature">
              <img src="@/assets/img/black-checkbox.png" alt="" />
              <p>{{ feature1 }}</p>
            </div>
            <div class="feature">
              <img src="@/assets/img/black-checkbox.png" alt="" />
              <p>{{ feature2 }}</p>
            </div>
            <div class="feature">
              <img src="@/assets/img/black-checkbox.png" alt="" />
              <p>{{ feature3 }}</p>
            </div>
            <div class="feature">
              <img src="@/assets/img/black-checkbox.png" alt="" />
              <p>{{ feature4 }}</p>
            </div>
          </div>
          <div class="bottom-section">
            <div class="button-wrapper">
              <button class="primary">Postanite pretplatnik</button>
              <button class="secondary">Već imam pretplatu</button>
            </div>
            <div class="logos">
              <img src="@/assets/img/mastercard.svg" alt="Mastercard" />
              <img src="@/assets/img/visa.svg" alt="Visa" />
              <img src="@/assets/img/apple-pay.svg" alt="Apple Pay" />
              <img src="@/assets/img/google-pay.svg" alt="Apple Pay" />
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="overlay"></div>
          <img src="@/assets/img/paywall-hero.png" alt="" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextNew',
  data() {
    return {
      show: false,
      termId: false,

      title:
        'Uložite u priče koje vrijede.  Samo 4,99 € za 4 tjedna sadržaja koji vrijedi čitati',
      subtitle:
        'Članak je dio pretplatničkog sadržaja Telegrama, a uz članstvo dobivate brojne pogodnosti:',
      topBar: 'Ovaj članak dostupan je samo pretplatnicima',
      feature1: 'Fokusirani ste na sadržaj i čitate bez reklama',
      feature2: 'Pomažete u izgradnji neovisnog novinarstva',
      feature3: 'Podržavate nagrađivane novinare koje najviše pratite',
      feature4: 'Pristup raznim serijalima i kolumnama',
      softwall: false,
      cta: 'Kupite pretplatu',
      cta_link: '',
      desktop_image: require('@/assets/img/tg_mockup_mobile_standard.png'),
      mobile_image: require('@/assets/img/tg_mockup_combo.png'),
    }
  },
  mounted() {
    window.addEventListener('remp_intext_new', this.load)
  },
  destroyed() {
    window.removeEventListener('remp_intext_new', this.load)
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
    },
    start() {
      this.$store.commit('pretplata/setLastArticle', this.$route.path)
      if (this.termId) {
        if (this.termId.includes('pretplata')) {
          this.$router.push(this.termId)
        } else {
          this.checkout(this.termId)
        }
      } else if (this.cta_link) {
        window.open(this.cta_link, '_blank')
      } else if (this.$route.path.includes('telesport')) {
        this.$router.push('/pretplata/telesport')
      } else {
        this.$router.push('/pretplata')
      }
    },
    load(e) {
      if (this.$store.state.user.access?.length) {
        return
      }
      if (e.detail) {
        this.topBar = e.detail.topBar
        // this.subtitle = e.detail.subtitle
        this.termDurationText = e.detail.termDurationText
        // this.packName = e.detail.packName
        this.newPrice = e.detail.newPrice
        this.oldPrice = e.detail.oldPrice
        this.softwall = e.detail.softwall ?? false
        this.termId = e.detail.termId
        this.cta = e.detail.cta ?? 'Pretplatite se'
        this.cta_link = e.detail.cta_link ?? ''
        if (e.detail.desktop_image) {
          this.desktop_image = e.detail.desktop_image
        }
        if (e.detail.mobile_image) {
          this.mobile_image = e.detail.mobile_image
        }
      }
      this.triggerShow()
    },
    triggerShow() {
      if (this.show) {
        return
      }
      if (this.$route.query.gift_token) {
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
.main {
  display: block;
  max-width: none !important;
  position: relative;
  overflow: hidden;
  padding: 77px 0px 87px 0px;
}
.main-wrapper {
  padding: 0px;
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
}
.left-container {
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 100% !important;
  padding: 26px 0px 58px 0px;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.title-wrapper h3 {
  font-family: 'Lora', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: black;
}
.title-wrapper p {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #747474;
}
.features-wrapper {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.features-wrapper .feature {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
}
.feature p {
  margin: 0px !important;
}
.bottom-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.button-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.button-wrapper button {
  width: 100%;
  flex: 1 1 0;
  padding: 8px;
  border-radius: 6px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}
.primary {
  background-color: #009348;
  color: white;
  border: none;
}
.secondary {
  background-color: white;
  color: black;
  border: 1px solid #dfdfdf;
}
.logos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin: 0 auto;
}
.logos img {
  max-width: 26px;
}
.right-container {
  width: 100%;
  padding-bottom: 56px;
  position: relative;
}
.right-container img {
  z-index: 30;
  position: relative;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #e4d4c5, #fcf1e7);
  z-index: 0;
}
@media screen and (min-width: 1024px) {
  .main-wrapper {
    flex-direction: row;
    gap: 60px;
  }
  .left-container {
    gap: 40px;
    max-width: 472px;
    min-width: 470px;
    padding: 77px 0px 56px 0px;
  }
  .title-wrapper h3 {
    font-size: 28px;
    line-height: 36px;
  }
  .title-wrapper p {
    font-size: 18px;
    line-height: 24px;
  }

  .button-wrapper {
    flex-direction: row;
  }
  .bottom-section {
    gap: 12px;
  }
  .right-container img {
    z-index: 30;
    position: absolute;
    right: -100px;
    width: auto;
    inset: 0;
  }
  .overlay {
    background: linear-gradient(to left, #e4d4c5, #fcf1e7);
  }
}
</style>
