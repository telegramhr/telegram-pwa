<script>
export default {
  name: 'HeroBf2026',
  props: {
    campaignLabel: {
      type: String,
      default: 'black friday',
    },
    helpLink: {
      type: String,
      default: 'mailto:pretplata@telegram.hr',
    },
    helpText: {
      type: String,
      default: 'Pomoć',
    },
    badge: {
      type: String,
      default: 'Black Friday Popust',
    },
    // rendered with v-html so the designer's line break can be placed by hand
    title: {
      type: String,
      default: '2 godine <br />za cijenu 1',
    },
    lead: {
      type: String,
      default: 'Neovisno novinarstvo, bez reklama.',
    },
    oldPrice: {
      type: String,
      default: '198 €',
    },
    price: {
      type: String,
      default: '99€ za dvije godine',
    },
    buttonText: {
      type: String,
      default: 'Iskoristite ponudu',
    },
    buttonLink: {
      type: String,
      default: '#pretplataPayment',
    },
    // id on the CTA so other components (e.g. StickyOfferBar) can observe it
    buttonId: {
      type: String,
      default: 'hero-cta',
    },
    // the four slices: { image, caption, background }
    slides: {
      type: Array,
      default: () => [
        {
          image: require('@/assets/img/pretplata/bf-2026/hero-slide-1.webp'),
          caption: 'Neovisno i nagrađivano novinarstvo',
          background: '#2a2a2c',
        },
        {
          image: require('@/assets/img/pretplata/bf-2026/hero-slide-2.webp'),
          caption: 'Čitanje bez reklama',
          background: '#232325',
        },
        {
          image: require('@/assets/img/pretplata/bf-2026/hero-slide-3.webp'),
          caption: 'Telesport bez ograničenja',
          background: '#1e1e20',
        },
        {
          image: require('@/assets/img/pretplata/bf-2026/hero-slide-4.webp'),
          caption: 'Newsletteri nagrađivanih autora',
          background: '#26262a',
        },
      ],
    },
    // ms between automatic slice changes; 0 disables the auto animation
    autoplay: {
      type: Number,
      default: 4000,
    },
  },
  data() {
    return {
      active: 0,
      timer: null,
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeDestroy() {
    this.stopAutoplay()
  },
  methods: {
    select(index) {
      this.active = index
      // a manual pick ends the auto animation, like the Figma prototype
      this.stopAutoplay()
    },
    startAutoplay() {
      if (!this.autoplay || this.slides.length < 2) return
      this.timer = setInterval(() => {
        if (typeof document !== 'undefined' && document.hidden) return
        this.active = (this.active + 1) % this.slides.length
      }, this.autoplay)
    },
    stopAutoplay() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
  },
}
</script>

<template>
  <section class="hero-bf">
    <div class="hb-nav">
      <nuxt-link to="/" class="hb-logo" aria-label="Telegram naslovnica">
        <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram" />
        <span class="hb-logo__label">{{ campaignLabel }}</span>
      </nuxt-link>
      <a v-if="helpLink" :href="helpLink" class="hb-help">{{ helpText }}</a>
    </div>

    <div class="hb-stage">
      <div class="hb-content">
        <span class="hb-badge">{{ badge }}</span>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 class="hb-title" v-html="title"></h1>
        <p class="hb-lead">{{ lead }}</p>
        <p class="hb-price">
          <s class="hb-price__old">{{ oldPrice }}</s>
          <strong class="hb-price__new">{{ price }}</strong>
        </p>
        <TgButton :id="buttonId" class="hb-cta" :href="buttonLink">{{
          buttonText
        }}</TgButton>
      </div>

      <div class="hb-slices" @mouseenter="stopAutoplay">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          class="hb-slice"
          :class="{ 'hb-slice--active': active === index }"
          :style="{ backgroundColor: slide.background }"
          :aria-pressed="active === index ? 'true' : 'false'"
          :aria-label="slide.caption"
          @click="select(index)"
        >
          <span class="hb-slice__canvas" :class="`hb-slice__canvas--${index}`">
            <img
              :src="slide.image"
              alt=""
              :fetchpriority="index === 0 ? 'high' : null"
              :loading="index === 0 ? null : 'lazy'"
            />
          </span>
          <span class="hb-slice__gradient"></span>
          <span class="hb-slice__caption">{{ slide.caption }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop  node 2328:3374 — 1440 wide, copy 420px + 56px gap + 484px slices
 *   mobile   node 2377:799  — 390 wide, copy stacked above a 358px slice row
 *
 * `--u` is the desktop Figma unit (1px at >=1440, shrinking linearly down to
 * 1024). `--sw` is the slice unit: on mobile the slice row is as wide as the
 * content column (358px at 390), so one unit is that width / 484.
 */
.hero-bf {
  --u: 1px;
  --sw: min(1px, calc((100vw - 32px) / 484));
  --hb-max: 960px;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  color: #f5f5f7;
}

/* -------------------------------------------------------------------- nav */
.hb-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--hb-max);
  margin: 0 auto;
  padding: 12px 16px;
}
.hb-logo {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
}
.hb-logo img {
  display: block;
  width: 106px;
  height: auto;
}
.hb-logo__label {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  white-space: nowrap;
}
.hb-help {
  display: none;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  letter-spacing: -0.12px;
  color: rgba(245, 245, 247, 0.8);
  text-decoration: none;
}
.hb-help:hover {
  color: #fff;
}

/* ------------------------------------------------------------------ stage */
.hb-stage {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: var(--hb-max);
  margin: 0 auto;
  padding: 24px 16px 32px; /* Figma: 4 below the nav + 20 frame padding */
}

.hb-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}
.hb-badge {
  padding: 4px 8px;
  border-radius: 5px;
  background-color: #2a2a2a;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  white-space: nowrap;
}
.hb-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.05;
  letter-spacing: -0.576px;
  color: #f5f5f7;
}
.hb-lead {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.2px;
}
.hb-price {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  white-space: nowrap;
}
.hb-price__old {
  font-size: 18px;
  line-height: 23px;
  color: #86868b;
  text-decoration: line-through;
}
.hb-price__new {
  font-size: 24px;
  line-height: 31px;
  color: #35c220;
}
/* TgButton already carries the fill, shadows and hover; only the campaign
   sizing is overridden here (48px tall, 12px radius in Figma). */
.hb-cta {
  width: 100%;
  margin-top: 12px; /* 12 (gap) + 12 = 24 between price and button */
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
}

/* ----------------------------------------------------------------- slices */
.hb-slices {
  display: flex;
  align-items: flex-start;
  gap: calc(10 * var(--sw));
  width: calc(484 * var(--sw));
  max-width: 100%;
  margin: 0 auto;
}
.hb-slice {
  position: relative;
  flex: 0 0 auto;
  width: calc(56 * var(--sw));
  height: calc(420 * var(--sw));
  padding: 0;
  overflow: hidden;
  border: none;
  border-radius: calc(4 * var(--sw));
  cursor: pointer;
  transition: width 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-tap-highlight-color: transparent;
}
.hb-slice--active {
  width: calc(286 * var(--sw));
  cursor: default;
}
/* the artwork lives on a 286x420 canvas centred in the slice, so a collapsed
   slice shows the middle strip of the same picture it reveals when expanded */
.hb-slice__canvas {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: calc(286 * var(--sw));
  height: calc(420 * var(--sw));
  margin-left: calc(-143 * var(--sw));
  overflow: hidden;
}
.hb-slice__canvas img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: none; /* the global img rule would squash the wide slide-2 photo */
  height: 100%;
  object-fit: cover;
  transition: opacity 0.45s ease;
}
/* slide 2 is a wider photo offset inside its canvas in Figma (694x438) */
.hb-slice__canvas--1 img {
  width: calc(694 * var(--sw));
  height: calc(438 * var(--sw));
  top: calc(-18 * var(--sw));
  left: calc(-276 * var(--sw));
  object-fit: fill;
}
.hb-slice--active .hb-slice__canvas img {
  opacity: 0.46;
}
.hb-slice__gradient {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: calc(220 * var(--sw));
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
.hb-slice__caption {
  position: absolute;
  left: calc(24 * var(--sw));
  bottom: calc(56 * var(--sw));
  width: calc(230 * var(--sw));
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: calc(28 * var(--sw));
  line-height: calc(32 * var(--sw));
  text-align: left;
  color: #f5f5f7;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.hb-slice--active .hb-slice__gradient,
.hb-slice--active .hb-slice__caption {
  opacity: 1;
  transition-delay: 0.2s;
}

/* ============================================================ desktop frame */
@media (min-width: 1024px) {
  .hero-bf {
    --u: 0.06944444vw; /* 100 / 1440 */
    --sw: var(--u);
  }
  .hb-nav {
    padding: calc(24 * var(--u)) 0 0;
    height: calc(68 * var(--u));
  }
  .hb-logo {
    gap: calc(19 * var(--u));
  }
  .hb-logo img {
    width: calc(132 * var(--u));
  }
  .hb-logo__label {
    font-size: calc(16 * var(--u));
    line-height: calc(28 * var(--u));
    letter-spacing: calc(3.2 * var(--u));
  }
  .hb-help {
    display: block;
    font-size: calc(14 * var(--u));
  }

  .hb-stage {
    flex-direction: row;
    align-items: center;
    gap: calc(56 * var(--u));
    /* slices top at 133 (= 68 nav + 65) and the countdown starts at 590,
       37 below the 553 slice bottom */
    padding: calc(65 * var(--u)) 0 calc(37 * var(--u));
  }
  .hb-content {
    flex: 0 0 auto;
    width: calc(420 * var(--u));
    gap: calc(12 * var(--u));
  }
  .hb-badge {
    padding: calc(4 * var(--u)) calc(8 * var(--u));
    border-radius: calc(5 * var(--u));
    font-size: calc(16 * var(--u));
    line-height: calc(21 * var(--u));
  }
  .hb-title {
    font-size: calc(64 * var(--u));
    line-height: 1.06;
  }
  .hb-lead {
    font-size: calc(21 * var(--u));
    line-height: calc(27 * var(--u));
  }
  .hb-price__old {
    font-size: calc(21 * var(--u));
    line-height: calc(27 * var(--u));
  }
  .hb-price__new {
    font-size: calc(28 * var(--u));
    line-height: calc(36 * var(--u));
  }
  .hb-cta {
    width: auto;
    margin-top: calc(12 * var(--u));
    padding: calc(12 * var(--u)) calc(16 * var(--u));
    border-radius: calc(12 * var(--u));
    font-size: calc(16 * var(--u));
    line-height: calc(24 * var(--u));
  }
  .hb-slices {
    flex: 0 0 auto;
    margin: 0;
  }
}

@media (min-width: 1440px) {
  .hero-bf {
    --u: 1px;
  }
}
</style>
