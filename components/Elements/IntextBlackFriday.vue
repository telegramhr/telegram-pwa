<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="main-wrapper">
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="header">
          <img
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram Loogo"
          />
          <span>{{ headerText }}</span>
        </div>
        <div class="content">
          <p class="title">
            <span>{{ titleMain }}</span> {{ titleSecondary }}
            <span>{{ titleHighlight }}</span>
          </p>
          <div class="desktop-title">
            <span>{{ desktopTitleFirst }}</span>
            <p>{{ desktopTitleMiddle }}</p>
            <span>{{ desktopTitleLast }}</span>
          </div>
          <p class="description" v-html="descriptionText"></p>

          <a :href="cta_link" @click.prevent="start">
            <button>{{ cta }}</button>
          </a>
        </div>
        <div class="bg-image-wrapper">
          <img
            class="modal-bg"
            src="@/assets/img/black-friday-bg.png"
            alt="Background"
          />
        </div>

        <div class="bottom-gradient"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextBlackFriday',
  data() {
    return {
      show: false,
      termId: false,
      headerText: 'BLACK FRIDAY',
      titleMain: '2 godine',
      titleSecondary: 'pretplate za',
      titleHighlight: 'cijenu 1.',
      desktopTitleFirst: '2',
      desktopTitleMiddle: 'za',
      desktopTitleLast: '1',
      descriptionText:
        'Platite <span>1</span> godinu Premium pretplate bez reklama i dobivate <span>2</span> godine po cijeni od <span class="overline">198€</span> <span>99€</span>',
      softwall: true,
      cta: 'Iskoristite ponudu',
      cta_link: '#',
    }
  },
  mounted() {
    window.addEventListener('intext_f32', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_f32', this.load)
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

<style>
@keyframes pulse {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.2);
  }
}

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
  max-width: 320px;
  height: 100%;
  max-height: 480px;
  gap: 36px;
  background: linear-gradient(180deg, #840002 0%, #000000 100%);
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
  right: -1rem;
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 48px;
  margin: 0 auto;
}
.header img {
  width: 100%;
  max-width: 126px;
}
.header span {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
}
.desktop-title {
  display: none;
}
.title {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-align: center;
}
.title span {
  font-weight: 700;
}
.content a {
  margin: 0 auto;
}
.content button {
  padding: 14px 16px;
  border-radius: 5px;
  background: linear-gradient(85.01deg, #fffbe1 -4.25%, #946d29 67.72%);
  color: #342f2f;
  font-size: 15px;
  font-weight: 600;
  line-height: 12px;
  border: none;
  animation: pulse 1s infinite alternate;
}
.bg-image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.description {
  display: none;
}
.modal-bg {
  position: absolute;
  bottom: -60px;
  right: -10px;
  width: auto;
  width: 100%;
  z-index: 0;
  pointer-events: none;
  scale: 1.5;
}
.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 168px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );

  z-index: 40;
}
@media screen and (min-width: 1024px) {
  .main-wrapper {
    max-width: 900px;
    max-height: 600px;
  }
  .header {
    padding-top: 56px;
  }
  .header img {
    max-width: 208px;
  }
  .header span {
    font-size: 16px;
    line-height: 20px;
  }
  .content {
    max-width: 420px;
    justify-content: center;
    padding-left: 64px;
    gap: 36px;
    z-index: 99;
  }
  .title {
    display: none;
  }
  .desktop-title {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: center;
    max-height: 111px;
  }
  .desktop-title p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 35px;
    letter-spacing: -0.02em;
    color: #ffffff;
  }
  .desktop-title span {
    font-weight: 700;
    font-size: 140px;
    line-height: 182px;
    background: linear-gradient(192.74deg, #fff3ac 15.79%, #946d29 98.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .description {
    display: block;
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 0px !important;
  }
  .description span {
    font-weight: 700;
  }
  .description .overline {
    text-decoration: line-through;
    font-weight: 400;
    color: #b5b5b5;
  }
  .content button {
    padding: 18px 24px;
    font-size: 22px;
    line-height: 18px;
    border-radius: 8px;
    border: none;
  }
  .bg-image-wrapper {
    max-width: 940px;
  }
  .bg-image-wrapper .modal-bg {
    right: -280px;
    bottom: -195px;
    scale: 1;
  }
}
</style>
