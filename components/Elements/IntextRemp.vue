<template>
  <transition name="fade">
    <div v-show="show" class="full main">
      <h5>{{ topBar }}</h5>
      <div class="spacer"></div>
      <div class="overlay">
        <div class="container-full">
          <div class="main-wrapper">
            <div class="left-container">
              <div class="title-wrapper">
                <h3>{{ title }}</h3>
                <p>{{ subtitle }}</p>
              </div>
              <div class="features-wrapper">
                <div class="feature">
                  <div>
                    <Checkmark :color="checkmarkColor"></Checkmark>
                  </div>
                  <p>{{ feature1 }}</p>
                </div>
                <div class="feature">
                  <div>
                    <Checkmark :color="checkmarkColor"></Checkmark>
                  </div>
                  <p>{{ feature2 }}</p>
                </div>
                <div class="feature">
                  <div>
                    <Checkmark :color="checkmarkColor"></Checkmark>
                  </div>
                  <p>{{ feature3 }}</p>
                </div>
                <div class="feature">
                  <div>
                    <Checkmark :color="checkmarkColor"></Checkmark>
                  </div>
                  <p>{{ feature4 }}</p>
                </div>
              </div>
              <div class="bottom-section">
                <div class="button-wrapper">
                  <a :href="cta1_link" @click.prevent="start">
                    <button class="primary">
                      {{ cta1_text }}
                    </button>
                  </a>
                  <a :href="cta2_link" @click.prevent="login">
                    <button class="secondary">
                      {{ cta2_text }}
                    </button>
                  </a>
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
              <img class="mobile" src="@/assets/img/paywall-mob.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextRemp',
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
      cta1_text: 'Postanite pretplatnik',
      cta1_link: 'https://telegram.hr/pretplata',
      cta2_text: 'Već imam pretplatu',
      cta2_link: 'https://telegram.hr/pretplata',
      desktop_image: require('@/assets/img/tg_mockup_mobile_standard.png'),
      mobile_image: require('@/assets/img/tg_mockup_combo.png'),
    }
  },
  mounted() {
    window.addEventListener('remp_intext', this.load)
  },
  destroyed() {
    window.removeEventListener('remp_intext', this.load)
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
      } else if (this.cta1_link) {
        window.open(this.cta1_link, '_blank')
      } else if (this.$route.path.includes('telesport')) {
        this.$router.push('/pretplata/telesport')
      } else {
        this.$router.push('/pretplata')
      }
    },
    load(e) {
      // Check if user has access to this specific content type
      if (this.$store.getters['user/hasContentAccess'](this.$route.path)) {
        return
      }
      if (e.detail) {
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
        this.topBar = e.detail.topBar
        this.feature1 = e.detail.feature1
        this.feature2 = e.detail.feature2
        this.feature3 = e.detail.feature3
        this.feature4 = e.detail.feature4
        this.cta1_text = e.detail.cta1_text
        this.cta1_link = e.detail.cta1_link
        this.cta1_link = e.detail.cta1_link
        this.cta2_text = e.detail.cta2_text
        this.cta2_link = e.detail.cta2_link

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
  computed: {
    checkmarkColor: {
      get() {
        return this.$store.state.theme.theme === 'dark' ? '#ffffff' : '#343434'
      },
    },
  },
}
</script>

<style scoped>
.large {
  display: none;
}
a {
  cursor: pointer;
}
.main {
  z-index: 20;
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
  padding: 26px 16px 58px 16px;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.title-wrapper h3 {
  font-family: 'Lora', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: black;
}

.dark-mode .title-wrapper h3 {
  color: white;
}
.title-wrapper p {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 24px;
  color: #747474;
}
.dark-mode .title-wrapper h3,
.dark-mode .title-wrapper p {
  color: white;
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
.feature div {
  width: 20px;
  height: 20px;
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
  padding: 8px 16px;
  border-radius: 6px;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
}
.primary {
  background-color: #009348;
  color: white;
  border: none;
}
.primary:hover {
  background-color: #237023;
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
  background: linear-gradient(
    180deg,
    #fcf1e7 0%,
    rgba(228, 212, 197, 1) 50%,
    rgba(228, 212, 197, 1) 100%
  );
}
.dark-mode .right-container {
  background: #373737;
}
.spacer {
  height: 1px;
  width: 100%;
  border-top: 1px solid #b5b5b5;
}
h5 {
  font-family: 'Inter', sans-serif;
  color: #747474;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  position: relative;
  text-align: center;
  top: 8px;
  z-index: 1;
  background: #fcf1e7;
  width: 275px;
  margin: 0 auto;
}
.dark-mode h5 {
  color: white;
  background: #212121;
}
.right-container img {
  z-index: 30;
  position: relative;
  margin: 0 auto;
}
@media screen and (min-width: 1024px) {
  .main-wrapper {
    flex-direction: row;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 32px;
  }
  .container-full {
    background-image: url('@/assets/img/paywall-hero.png');
    background-size: 55%;
    background-repeat: no-repeat;
    background-position: right;
  }
  .overlay {
    background: linear-gradient(90deg, #fcf1e7 0%, rgba(228, 212, 197, 1) 100%);
  }
  .dark-mode .overlay {
    background: #373737;
  }
  .spacer {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .left-container {
    gap: 40px;
    max-width: 472px;
    min-width: 470px;
    padding: 77px 0px 56px 0px;
  }
  .features-wrapper .feature {
    line-height: 22px;
  }
  .title-wrapper h3 {
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  }
  .title-wrapper p {
    font-size: 20px;
    line-height: 28px;
  }

  .button-wrapper {
    flex-direction: row;
  }
  .bottom-section {
    gap: 12px;
  }
  .right-container {
    display: none;
  }
  .large {
    display: block;
  }
  .mobile {
    display: none;
  }
}
@media screen and (min-width: 1350px) {
  .container-full {
    background-size: contain;
  }
}
</style>
