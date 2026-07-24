<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="main-wrapper">
        <img
          src="@/assets/img/razotkrili-plenkija.jpg"
          alt="Razotkrili Plenkija"
          class="bg-image"
        />
        <div class="linear-gradient"></div>
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>

        <div class="content">
          <img
            class="logo"
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram Logo"
          />
          <div class="text-wrapper">
            <p class="title">
              {{ title }}
            </p>
            <p class="subtitle">{{ subtitle }}</p>
            <a :href="ctaLink" @click.prevent="start">
              <button>{{ cta }}</button>
            </a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <img
            src="@/assets/img/plenki-vizual.png"
            alt="Vizual Plenkija"
            class="hero-image"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextPodrskaTelegramu',
  data() {
    return {
      softwall: true,
      show: false,
      termId: false,
      title: 'Zbog naših otkrića, ponovno nas pokušavaju ušutkati.',
      subtitle: 'Podržite najvažniji i najneovisniji medij u Hrvatskoj',
      ctaLink: '/pretplata/podrska-telegramu/',
      cta: 'Podržite Telegram',
    }
  },
  mounted() {
    window.addEventListener('intext-podrska-telegramu', this.load)
  },
  destroyed() {
    window.removeEventListener('intext-podrska-telegramu', this.load)
  },
  methods: {
    load(e) {
      if (e.detail) {
        this.show = e.detail.show
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
        this.ctaText = e.detail.ctaText
        this.ctaLink = e.detail.ctaLink
      }
    },
    start() {
      this.$store.commit('pretplata/setLastArticle', this.$route.path)
      if (this.termId) {
        if (this.termId.includes('pretplata')) {
          this.$router.push(this.termId)
        }
      } else if (this.ctaLink) {
        window.open(this.ctaLink, '_blank')
      } else if (this.$route.path.includes('telesport')) {
        this.$router.push('/pretplata/telesport')
      } else {
        this.$router.push('/pretplata')
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  height: min(85vh, 600px);
  position: relative;
  background-color: #703838;
}
.bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.getmeouttahere-btn {
  width: 2rem;
  height: 2rem;
  background-color: #999;
  color: white;
  z-index: 6;
  border-radius: 1rem;
  position: absolute;
  top: -1rem;
  right: -10px;
}
.hero-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
}

.hero-image {
  position: absolute;
  z-index: 999;
  max-width: 600px;
  bottom: 0px;
  object-fit: contain;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 429px) {
  .hero-image {
    max-width: 500px;
  }
}

.content {
  z-index: 99;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 448px;
  padding: 36px 28px 0px 28px;
  text-align: left;
  margin: 0 auto;
}
.content .logo {
  width: 100%;
  max-width: 84px;
  height: auto;
  margin: 0 auto;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content a {
  display: flex;
}

.title {
  display: block;
  font-family: 'Lora', sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  text-align: center;
  color: white;
  margin: 0px !important;
}
.subtitle {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: white;
}
.text-wrapper button {
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
  padding: 10px 16px;
  border-radius: 8px;
  background: #297529;
  color: white;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  border-top: 1.21px solid;
  border-image-source: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.04) 8%,
    rgba(0, 0, 0, 0.07) 100%
  );
  box-shadow: 0px -1.21px 3.63px -1.21px #0000001f inset;
  box-shadow: 0px 2.42px 3.63px 0px #ffffff1f inset;
  box-shadow: 0px 3.63px 3.63px -1.82px #0000000a;
  box-shadow: 0px 1.21px 1.21px -0.61px #0000000a;
}
.text-wrapper button:hover {
  background-color: #369336;
}
.linear-gradient {
  display: none;
}
@media screen and (min-width: 1024px) {
  .main-wrapper {
    flex-direction: column;
  }
  .linear-gradient {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 125px;
    z-index: 999;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }
  .hero-image {
    max-width: 620px;
    bottom: -50px;
    z-index: 800;
  }
  .header {
    margin: 0px;
  }
  .content {
    margin: 0px auto;
    text-align: center;
    padding-top: 60px;
    gap: 28px;
    max-width: 540px;
  }
  .content .logo {
    max-width: 112px;
  }
  .title {
    font-size: 34px;
    text-align: center;
    line-height: 44px;
  }
  .subtitle {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
  .text-wrapper button {
    font-size: 14px;
    line-height: 16px;
    padding: 12px 18px;
  }
  .getmeouttahere-btn {
    right: -1rem;
  }
}
</style>
