<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="bf-popup">
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="bf-box">
          <span class="bf-bg" aria-hidden="true"></span>
          <div class="bf-brand">
            <img
              class="bf-brand__logo"
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram"
            />
            <span class="bf-brand__label">black friday</span>
          </div>
          <div class="bf-content">
            <div class="bf-text">
              <p class="bf-title">{{ title }}</p>
              <p class="bf-subtitle" v-html="subtitle"></p>
            </div>
            <TgButton
              class="bf-cta"
              variant="black"
              :href="ctaLink"
              @click.prevent="start"
            >
              {{ cta }}
            </TgButton>
          </div>
          <p v-if="footer" class="bf-footer">{{ footer }}</p>
        </div>
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
      softwall: true,
      // a newline in the title forces the line break on mobile only
      title: '2 godine.\nJedna cijena.',
      subtitle: '<s>198 €</s> 99€ za dvije godine',
      cta: 'Iskoristite ponudu',
      ctaLink: '/pretplata/black-friday',
      footer: 'ponuda vrijedi do 30.11.2026.',
    }
  },
  mounted() {
    window.addEventListener('intext_black_friday', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_black_friday', this.load)
  },
  methods: {
    start() {
      this.$store.commit('pretplata/setLastArticle', this.$route.path)
      if (this.ctaLink) {
        window.open(this.ctaLink, '_blank')
      } else {
        this.$router.push('/pretplata')
      }
    },
    load(e) {
      // subscribers never see the offer, whatever the campaign targeting says
      if (this.$store.state.user.access?.length) {
        return
      }
      if (e.detail) {
        this.title = e.detail.title ?? this.title
        this.subtitle = e.detail.subtitle ?? this.subtitle
        this.cta = e.detail.cta ?? this.cta
        this.ctaLink = e.detail.cta_link ?? this.ctaLink
        this.footer = e.detail.footer ?? this.footer
        this.softwall = e.detail.softwall ?? false
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
/*
 * Figma "Pretplata Landing — Active"
 *   mobile  node 2446:908 — 320x480, artwork 800px wide at x=-101 / y=55, 62% opacity
 *   desktop node 2446:670 — 900x600, artwork 1168px wide centred at y=22, 46% opacity
 * The artwork is the same file as the landing's final CTA, blended hard-light
 * over black so only its magenta curves survive as the red glow.
 * Figma trims the title box to its cap height, so the gaps around it are
 * measured from that smaller box; the negative margins on .bf-title
 * reproduce that without breaking a title that wraps.
 */
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
  padding: 0 16px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 100% !important;
}
.bf-popup {
  position: relative;
  width: 100%;
  max-width: 320px;
}
.getmeouttahere-btn {
  width: 2rem;
  height: 2rem;
  background-color: #999;
  color: #fff;
  z-index: 6;
  border-radius: 1rem;
  position: absolute;
  top: -1rem;
  right: -1rem;
}
.bf-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 480px;
  max-height: 85vh;
  padding: 93px 5px 54.75px;
  box-sizing: border-box;
  overflow: hidden auto;
  background-color: #000;
  color: #fff;
}
.bf-bg {
  position: absolute;
  top: 54.97px;
  left: -31.56%;
  width: 250%;
  aspect-ratio: 800 / 369.73;
  background: url('@/assets/img/pretplata/bf-2026/cta-bg.webp') center / 100%
    auto no-repeat;
  opacity: 0.62;
  mix-blend-mode: hard-light;
  pointer-events: none;
}
.bf-brand {
  position: relative;
  display: flex;
  align-items: center;
  gap: 13.32px;
  flex-shrink: 0;
}
.bf-brand__logo {
  display: block;
  width: 92.54px;
  height: auto;
}
.bf-brand__label {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 11.22px;
  line-height: 19.69px;
  letter-spacing: 2.24px;
  text-transform: uppercase;
  white-space: nowrap;
}
.bf-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin: auto 0;
}
.bf-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13.43px;
  width: 100%;
  text-align: center;
}
.bf-title {
  margin: -7px 0 -6px;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 35.89px;
  white-space: pre-line;
  color: #fff;
}
.bf-subtitle {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #fff;
}
.bf-subtitle ::v-deep s {
  color: #86868b;
  text-decoration: line-through;
}
.bf-cta {
  height: 36.5px;
  padding: 0 10.43px;
  border-radius: 7.82px;
  font-size: 14px;
  line-height: 15.65px;
}
.bf-cta ::v-deep .tg-button__label {
  padding: 0 3.91px;
}
.bf-footer {
  display: none;
}

@media screen and (min-width: 768px) {
  .bf-popup {
    /* 1px at >= 932 (900 + the softwall gutters); below that the whole
       frame shrinks with the viewport so it still fits at 768 */
    --u: min(1px, calc((100vw - 32px) / 900));
    max-width: 900px;
  }
  .bf-box {
    height: calc(600 * var(--u));
    padding: calc(88.92 * var(--u)) calc(24 * var(--u)) calc(50 * var(--u));
  }
  .bf-bg {
    top: calc(22 * var(--u));
    left: 50%;
    width: 129.78%;
    aspect-ratio: 1168 / 540;
    transform: translateX(-50%);
    opacity: 0.46;
  }
  .bf-brand {
    gap: calc(18.77 * var(--u));
  }
  .bf-brand__logo {
    width: calc(130.39 * var(--u));
  }
  .bf-brand__label {
    font-size: calc(15.8 * var(--u));
    line-height: calc(27.74 * var(--u));
    letter-spacing: calc(3.16 * var(--u));
  }
  .bf-content {
    gap: calc(25.19 * var(--u));
    margin: calc(125.26 * var(--u)) 0 0;
  }
  .bf-text {
    gap: calc(23.6 * var(--u));
  }
  .bf-title {
    margin: calc(-13 * var(--u)) 0 calc(-11 * var(--u));
    font-size: calc(56 * var(--u));
    line-height: calc(63.05 * var(--u));
    white-space: normal;
  }
  .bf-subtitle {
    font-size: calc(36.65 * var(--u));
  }
  .bf-cta {
    height: calc(64.13 * var(--u));
    padding: 0 calc(18.32 * var(--u));
    border-radius: calc(13.74 * var(--u));
    font-size: calc(20.61 * var(--u));
    line-height: calc(27.48 * var(--u));
  }
  .bf-cta ::v-deep .tg-button__label {
    padding: 0 calc(6.87 * var(--u));
  }
  .bf-footer {
    position: relative;
    display: block;
    flex-shrink: 0;
    margin: auto 0 0;
    padding-top: calc(24 * var(--u));
    font-family: 'Geist', 'Barlow', sans-serif;
    font-weight: 500;
    font-size: calc(18 * var(--u));
    line-height: calc(22 * var(--u));
    letter-spacing: calc(2 * var(--u));
    text-transform: uppercase;
    text-align: center;
    color: #f5f5f7;
  }
}
</style>
