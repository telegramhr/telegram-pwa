<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div
        class="full center wrap zgt-salebox dark-zgt-salebox blue-zgt-salebox relative"
      >
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="full center relative column-full-pad">
          <img
            src="@/assets/img/telegram_logo_white.svg"
            class="logo-margin"
            alt="Telegram Bijeli Logo"
          />
        </div>
        <div class="full center relative">
          <img src="@/assets/img/family-hero-icons.png" alt="Family icoons" />
        </div>
        <div class="full center podnaslov">
          <p class="center-text">
            {{ podnaslov }}
          </p>
        </div>
        <div class="full flex-responsive column-full-pad center wrap relative">
          <div class="full zgts-title">
            {{ maintitle }}
          </div>
          <div class="full center opis">
            <p class="full">
              Uštedite
              <span v-if="popust" class="popust">{{ popust }}%</span>
              {{ opis }}
            </p>
          </div>
          <div class="full center">
            <a class="newbtn huge-newbtn center-text" @click.prevent="start">{{
              cta
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextPromoFamily',
  data() {
    return {
      show: false,
      termId: false,
      maintitle: 'Predstavljamo Telegram Family pretplatu',
      podnaslov: 'NOVO',
      opis: 'uz Family pretplatu Telegrama. Dijelite pretplatu s još 2 člana obitelji ili prijatelja',
      popust: '30',
      softwall: true,
      cta: 'Aktivirajte pretplatu',
      cta_link: '',
    }
  },
  mounted() {
    window.addEventListener('intext_family', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_family', this.load)
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
      if (e.detail) {
        this.maintitle = e.detail.maintitle
        this.subtitle = e.detail.subtitle
        this.termDurationText = e.detail.termDurationText
        this.packName = e.detail.packName
        this.newPrice = e.detail.newPrice
        this.oldPrice = e.detail.oldPrice
        this.softwall = e.detail.softwall ?? false
        this.termId = e.detail.termId
        this.cta = e.detail.cta ?? ''
        this.cta_link = e.detail.cta_link ?? ''
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
.zgt-salebox {
  max-width: 900px;
  height: 600px;
  padding: 0px;
  background-image: url('@/assets/img/family-hero-background.png');
  background-size: cover;
  background-position: center;
}

.zgts-title {
  font-family: Lora;
  font-weight: 500;
  font-style: Medium;
  font-size: 40px;
  line-height: 46px;
  letter-spacing: 0px;
  text-align: center;
  text-transform: none;
  max-width: 533px;
  margin-bottom: 1rem;
}

.podnaslov p.center-text {
  font-family: Barlow;
  font-weight: 700;
  font-size: 18px;
  line-height: 15.35px;
  letter-spacing: 8%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  border-radius: 24px;
  padding: 12px 23px;
  margin-top: 1.5rem;
  margin-bottom: -0.3rem;
  background-color: #000000;
  width: auto;
}

.opis p.full {
  font-family: Barlow;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  max-width: 533px;
}

.zgt-salebox .newbtn {
  font-family: Barlow;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0px;
  max-width: 216px;
  background-color: #37ae37;
  border-radius: 8px;
  padding: 16px 28px;
  text-transform: none;
  margin-top: 1rem;
}

.zgt-salebox .newbtn:hover {
  opacity: 0.85;
}

.logo-margin {
  max-width: 280px;
  margin-bottom: 1rem;
}

.popust {
  text-decoration: underline;
  font-weight: 700;
}

@media screen and (max-width: 1024px) {
  .zgt-salebox {
    height: auto;
  }

  .column-full-pad {
    padding: 1rem;
  }

  .zgts-title {
    text-align: center;
    line-height: 1.7rem;
    font-size: 1.8rem;
  }

  .zgt-salebox p {
    font-size: 20px;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .zgts-title {
    text-align: center;
    line-height: 36px;
    font-size: 28px;
    max-width: 322px;
  }

  .opis p.full {
    line-height: 28px;
    font-size: 20px;
    max-width: 322px;
  }

  .podnaslov p.center-text {
    margin-top: 1rem;
    margin-bottom: -0.5rem;
  }

  .zgt-salebox .newbtn {
    font-size: 18px;
    width: auto;
  }

  .zgt-salebox .newbtn {
    margin-top: 0.5rem;
  }
}
</style>
