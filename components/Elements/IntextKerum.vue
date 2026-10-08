<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="main-wrapper">
        <div class="ik-stage">
          <picture class="ik-bg">
            <source
              media="(min-width: 1024px)"
              :srcset="
                require('@/assets/img/pretplata/kerum/popup-bg-desktop.webp')
              "
            />
            <img
              :src="
                require('@/assets/img/pretplata/kerum/popup-bg-mobile.webp')
              "
              alt=""
            />
          </picture>

          <picture class="ik-art">
            <source
              media="(min-width: 1024px)"
              :srcset="
                require('@/assets/img/pretplata/kerum/kerum-popup-desktop.webp')
              "
            />
            <img
              :src="
                require('@/assets/img/pretplata/kerum/kerum-popup-mobile.webp')
              "
              alt="Željko Kerum"
            />
          </picture>

          <div class="ik-shadow"></div>

          <div class="ik-content">
            <img
              class="ik-logo"
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram"
            />
            <p class="ik-title">{{ title }}</p>
            <p class="ik-lead">{{ subtitle }}</p>
            <TgButton
              class="ik-cta"
              :href="ctaLink"
              @click.native.prevent="start"
              >{{ cta }}</TgButton
            >
          </div>
        </div>

        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IntextKerum',
  data() {
    return {
      softwall: true,
      show: false,
      termId: false,
      title: 'Podržite rad Telegrama da nastavimo rušiti barbare poput Keruma',
      subtitle: 'Pretplatite se da ih dokrajčimo zajedno',
      ctaLink: '/pretplata/podrska-telegramu/',
      cta: 'Pretplatite se za 99€ godišnje',
    }
  },
  mounted() {
    window.addEventListener('intext-kerum', this.load)
  },
  destroyed() {
    window.removeEventListener('intext-kerum', this.load)
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

/*
 * Figma "Pretplata Landing — Active"
 *   desktop  node 1976:173 — 900 x 600
 *   mobile   node 1976:464 — 320 x 480
 *
 * Every length is the Figma value multiplied by `--u`, so the whole composition
 * scales as one piece. `--u` is exactly 1px at the two design widths (320 on
 * mobile, 900 from the desktop breakpoint up), which is where the layout is
 * pixel-accurate against the Figma frames. `.main-wrapper` is 100vw - 20px wide
 * below its 900px cap, which is what `--u` is derived from; the 400px clamp
 * stops the mobile composition from ballooning on tablet-sized windows.
 */
.ik-stage {
  --u: calc(min(100vw - 20px, 400px) / 320);
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #af0e0e;
}

/* ------------------------------------------------------------- background */
/* The grunge plate ships with the Figma `mix-blend-mode: luminosity` over
   #af0e0e already baked in, so no blend mode is needed at runtime. */
.ik-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
}
.ik-bg img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ---------------------------------------------------------------- artwork */
.ik-art {
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: calc(320 * var(--u));
  /* only ever bites on very short (landscape phone) wrappers, where the
     portrait would otherwise swallow the copy */
  max-height: 58%;
  display: block;
}
.ik-art img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: contain;
  object-position: bottom center;
}

/* ---------------------------------------------------------------- "Sjena" */
.ik-shadow {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(91 * var(--u));
  /* the Figma "Sjena" bitmap ramps to full opacity at 80% of its own height
     and stays solid from there down */
  background-image: linear-gradient(
    180deg,
    rgba(11, 10, 55, 0) 0%,
    rgba(11, 10, 55, 1) 80%
  );
}

/* ------------------------------------------------------------------- copy */
.ik-content {
  position: absolute;
  z-index: 3;
  top: calc(34 * var(--u));
  left: 50%;
  transform: translateX(-50%);
  width: calc(290 * var(--u));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.ik-content .ik-logo {
  display: block;
  width: calc(77.012 * var(--u));
  height: calc(9.108 * var(--u));
}
/*
 * The copy is fed in by the `intext-kerum` event, so the designer's hard line
 * breaks can't be baked into the markup. The title box is instead narrowed to
 * the window that reproduces them for the design copy and still wraps sanely
 * for anything else.
 */
.ik-content .ik-title {
  width: calc(256 * var(--u));
  margin: calc(19.339 * var(--u)) 0 0;
  color: #ffffff;
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: calc(21.66 * var(--u));
  line-height: calc(24.066 * var(--u));
  overflow-wrap: break-word;
}
.ik-content .ik-lead {
  width: calc(290 * var(--u));
  margin: calc(8.202 * var(--u)) 0 0;
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: calc(12.033 * var(--u));
  line-height: calc(15.643 * var(--u));
}
/* TgButton already carries the design-system fill, inset highlights and hover
   state — only the campaign sizing is overridden here. */
.ik-content .ik-cta {
  margin-top: calc(14.267 * var(--u));
  height: calc(33.082 * var(--u));
  padding: 0 calc(9.452 * var(--u));
  border-radius: calc(4.726 * var(--u));
  font-size: calc(11.606 * var(--u));
  line-height: calc(15.474 * var(--u));
}
.ik-content .ik-cta ::v-deep .tg-button__label {
  padding: 0 calc(3.545 * var(--u));
}

/* ============================================================ desktop frame */
@media screen and (min-width: 1024px) {
  .ik-stage {
    --u: 1px;
  }

  .ik-art {
    left: auto;
    right: 0;
    transform: none;
    width: auto;
    height: 100%;
    max-height: none;
  }
  .ik-art img {
    width: auto;
    object-position: bottom right;
  }

  .ik-shadow {
    bottom: calc(-10 * var(--u));
    height: calc(208 * var(--u));
  }

  .ik-content {
    top: auto;
    bottom: calc(140.709 * var(--u));
    left: calc(64 * var(--u));
    transform: none;
    width: calc(535.748 * var(--u));
    align-items: flex-start;
    text-align: left;
  }
  .ik-content .ik-logo {
    width: calc(142.274 * var(--u));
    height: calc(16.825 * var(--u));
  }
  .ik-content .ik-title {
    width: calc(470 * var(--u));
    margin-top: calc(35.726 * var(--u));
    font-size: calc(40.014 * var(--u));
    line-height: calc(44.46 * var(--u));
  }
  .ik-content .ik-lead {
    width: calc(535.748 * var(--u));
    margin-top: calc(15.768 * var(--u));
    font-size: calc(22.23 * var(--u));
    line-height: calc(28.899 * var(--u));
  }
  .ik-content .ik-cta {
    margin-top: calc(27.577 * var(--u));
    height: calc(61.116 * var(--u));
    padding: 0 calc(17.462 * var(--u));
    border-radius: calc(8.731 * var(--u));
    font-size: calc(21.44 * var(--u));
    line-height: calc(28.586 * var(--u));
  }
  .ik-content .ik-cta ::v-deep .tg-button__label {
    padding: 0 calc(6.548 * var(--u));
  }

  .getmeouttahere-btn {
    right: -1rem;
  }
}
</style>
