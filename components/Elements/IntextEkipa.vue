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
                require('@/assets/img/pretplata/ekipa/popup-bg-desktop.webp')
              "
            />
            <img
              :src="
                require('@/assets/img/pretplata/ekipa/popup-bg-mobile.webp')
              "
              alt=""
            />
          </picture>

          <picture class="ik-art">
            <source
              media="(min-width: 1024px)"
              :srcset="
                require('@/assets/img/pretplata/ekipa/ekipa-popup-desktop.webp')
              "
            />
            <img
              :src="
                require('@/assets/img/pretplata/ekipa/ekipa-popup-mobile.webp')
              "
              alt="Novinarke i novinari Telegrama"
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
  name: 'IntextEkipa',
  data() {
    return {
      softwall: true,
      show: false,
      termId: false,
      title:
        'Iza svake razotkrivene afere stoje ljudi koji se ne predaju. Pomozite nam da skupa iskorijenimo korupciju.',
      subtitle: 'Podržite rad Telegrama uz 50% popusta na pretplatu',
      ctaLink: '/pretplata/podrska-telegramu/',
      cta: 'Podržite Telegram',
    }
  },
  mounted() {
    window.addEventListener('intext-ekipa', this.load)
  },
  destroyed() {
    window.removeEventListener('intext-ekipa', this.load)
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
  height: min(85vh, 480px);
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
 *   desktop  node 2003:19545 — 900 x 600
 *   mobile   node 2003:19566 — 320 x 480
 *
 * Every length is the Figma value multiplied by `--u`, so the whole composition
 * scales as one piece. `--u` is exactly 1px at the two design widths (320 on
 * mobile, 900 from the desktop breakpoint up), which is where the layout is
 * pixel-accurate against the Figma frames.
 *
 * The three mobile terms are the widths the 320-wide frame may not exceed:
 * `.main-wrapper` is 100vw - 20px below its 900px cap; the 400px clamp stops
 * the composition ballooning on tablet-sized windows; and 56.667vh is the
 * wrapper's own min(85vh, 600px) height ceiling expressed as a width, which
 * keeps the copy inside a landscape-phone wrapper.
 *
 * Figma trims its text boxes to the cap height (`text-box-trim: trim-both`),
 * which CSS line boxes do not, so the auto-layout gaps below are each reduced
 * by the half-leading + (ascender - cap height) that the line box adds back.
 */
.ik-stage {
  --u: calc(min(100vw - 20px, 400px, 56.667vh) / 320);
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #760404;
}

/* ------------------------------------------------------------- background */
/* One flat plate: #760404 with the grunge sheet (lighten), the photocopy
   noise (lighten) and the clippings collage (screen) already composited in,
   so no runtime blend modes are needed. Anchored to the bottom edge because
   that is where the collage sits — a short wrapper only crops empty sky. */
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
  object-position: center bottom;
}

/* ------------------------------------------------------- artwork ("Ekipa") */
/* The cut-outs ship on a full-frame transparent canvas and are fitted exactly
   like `.ik-bg`, so the two layers stay registered at any wrapper aspect
   ratio instead of drifting apart as one is cropped and the other scaled. */
.ik-art {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: block;
}
.ik-art img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
}

/* ---------------------------------------------------------------- "Sjena" */
.ik-shadow {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(71 * var(--u));
  /* the Figma "Sjena" bitmap is a plain linear black ramp, 0 -> .74 */
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.74) 100%
  );
}

/* ------------------------------------------------------------------- copy */
.ik-content {
  position: absolute;
  z-index: 3;
  top: calc(33.98 * var(--u));
  left: 50%;
  transform: translateX(-50%);
  width: calc(277 * var(--u));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.ik-content .ik-logo {
  display: block;
  width: calc(102.56 * var(--u));
  height: calc(12.15 * var(--u));
}
/*
 * The copy is fed in by the `intext-ekipa` event, so the designer's hard line
 * breaks can't be baked into the markup — both blocks wrap on their own.
 */
.ik-content .ik-title {
  width: 100%;
  margin: calc(33.75 * var(--u)) 0 0;
  color: #ffffff;
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: calc(20 * var(--u));
  line-height: calc(26 * var(--u));
  overflow-wrap: break-word;
}
.ik-content .ik-lead {
  width: 100%;
  margin: calc(5.3 * var(--u)) 0 0;
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: calc(15 * var(--u));
  line-height: calc(20 * var(--u));
}
/* TgButton already carries the design-system fill, inset highlights and hover
   state — only the campaign sizing is overridden here. */
.ik-content .ik-cta {
  margin-top: calc(11.63 * var(--u));
  height: calc(32.562 * var(--u));
  padding: 0 calc(9.769 * var(--u));
  border-radius: calc(6.512 * var(--u));
  font-size: calc(12 * var(--u));
  line-height: calc(15.905 * var(--u));
}
.ik-content .ik-cta ::v-deep .tg-button__label {
  padding: 0 calc(3.256 * var(--u));
}

/* ============================================================ desktop frame */
@media screen and (min-width: 1024px) {
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

  .ik-stage {
    --u: 1px;
  }

  .ik-shadow {
    height: calc(144 * var(--u));
  }

  .ik-content {
    top: calc(33.01 * var(--u));
    width: calc(498 * var(--u));
  }
  .ik-content .ik-logo {
    width: calc(98.15 * var(--u));
    height: calc(11.607 * var(--u));
  }
  .ik-content .ik-title {
    margin-top: calc(24.93 * var(--u));
    font-size: calc(24 * var(--u));
    line-height: calc(28 * var(--u));
  }
  .ik-content .ik-lead {
    margin-top: calc(12.25 * var(--u));
    font-size: calc(18 * var(--u));
    line-height: calc(19.937 * var(--u));
  }
  .ik-content .ik-cta {
    margin-top: calc(21.32 * var(--u));
    height: calc(42.941 * var(--u));
    padding: 0 calc(12.269 * var(--u));
    border-radius: calc(6.134 * var(--u));
    font-size: calc(15.6 * var(--u));
    line-height: calc(18 * var(--u));
  }
  .ik-content .ik-cta ::v-deep .tg-button__label {
    padding: 0 calc(4.601 * var(--u));
  }

  .getmeouttahere-btn {
    right: -1rem;
  }
}
</style>
