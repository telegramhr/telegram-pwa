<template>
  <transition name="fade">
    <div
      v-show="show"
      class="full center"
      :class="[softwall ? 'softwall' : '']"
      data-nosnippet
    >
      <div class="bfm-popup">
        <div
          v-if="softwall"
          class="getmeouttahere-btn center clickable"
          @click="show = false"
        >
          <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
        </div>
        <div class="bfm-box">
          <span class="bfm-bg" aria-hidden="true"></span>

          <div class="bfm-copy">
            <div class="bfm-brand">
              <img
                class="bfm-brand__logo"
                src="@/assets/img/telegram_logo_white.svg"
                alt="Telegram"
              />
              <span class="bfm-brand__label">{{ label }}</span>
            </div>
            <p class="bfm-title">{{ title }}</p>
            <p class="bfm-price">
              <s class="bfm-price__old">{{ oldPrice }}</s>
              <span class="bfm-price__new">{{ newPrice }} {{ term }}</span>
            </p>
            <TgButton class="bfm-cta" :href="ctaLink" @click.prevent="start">
              {{ cta }}
            </TgButton>
          </div>

          <div class="bfm-slices" aria-hidden="true">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="bfm-slice"
              :class="`bfm-slice--${index + 1}`"
              :style="{ backgroundColor: slide.background }"
            >
              <span class="bfm-slice__canvas">
                <img :src="slide.image" alt="" />
              </span>
              <span class="bfm-slice__overlay">
                <span class="bfm-slice__gradient"></span>
                <span class="bfm-slice__caption">{{ slide.caption }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/*
 * Animated Black Friday 2026 pop-up (Figma "Pretplata Landing — Active",
 * desktop node 2453:9200, mobile node 2472:394).
 *
 * Opened by dispatching `intext_black_friday_motion` on window. Every text
 * is editable through the event detail:
 *   { title, old_price, new_price, term, cta, cta_link, label, captions[], softwall }
 * A "\n" in the title is honoured on desktop only (mobile runs it in one line).
 */
export default {
  name: 'IntextBlackFridayMotion',
  data() {
    return {
      show: false,
      softwall: true,
      label: 'black friday',
      title: '2 godine.\nJedna cijena.',
      oldPrice: '198 €',
      newPrice: '99€',
      term: 'za dvije godine',
      cta: 'Iskoristite ponudu',
      ctaLink: '/pretplata/black-friday',
      slides: [
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
    }
  },
  mounted() {
    window.addEventListener('intext_black_friday_motion', this.load)
  },
  destroyed() {
    window.removeEventListener('intext_black_friday_motion', this.load)
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
      if (e.detail) {
        this.label = e.detail.label ?? this.label
        this.title = e.detail.title ?? this.title
        this.oldPrice = e.detail.old_price ?? this.oldPrice
        this.newPrice = e.detail.new_price ?? this.newPrice
        this.term = e.detail.term ?? this.term
        this.cta = e.detail.cta ?? this.cta
        this.ctaLink = e.detail.cta_link ?? this.ctaLink
        this.softwall = e.detail.softwall ?? false
        if (Array.isArray(e.detail.captions)) {
          this.slides = this.slides.map((slide, i) => ({
            ...slide,
            caption: e.detail.captions[i] ?? slide.caption,
          }))
        }
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
 * Figma motion frames
 *   mobile  node 2472:394  — 320x480, copy centred at y=112.8, slices 280 wide at y=217
 *   desktop node 2453:9200 — 900x600, copy at x=68, slices 410.667 wide at x=421
 *
 * Two length units keep one set of Figma numbers for both frames:
 *   --s  slice unit — the mobile slice row is exactly 15/22 of the desktop one
 *   --c  copy unit  — logo, price, button and the rise are 0.7 of desktop
 * The title is the exception (28px mobile vs 52.437px desktop) and is set per frame.
 * From 768px up the desktop frame is used; below 932px (900 + the softwall's
 * 16px gutters) it shrinks with the viewport through --u, so it always fits.
 *
 * Motion: one 10 s loop shared by everything (Figma timeline cohort).
 *   0.2–1.1 s  copy fades up: logo, title, price, button, 100 ms apart
 *              (opacity 500 ms ease-out, rise 600 ms ease)
 *   each slide holds open 1 s, then a 1.5 s `ease` handoff to the next:
 *   slide 1 → 2 at 1.0 s, → 3 at 3.5 s, → 4 at 6.0 s, → 1 at 8.5 s
 *   (Figma's desktop frame has the carousel 100 ms later with a 1.4 s last
 *   handoff; that is a timeline rounding artefact, the mobile grid is used.)
 * Because the slices sit in a flex row with a fixed gap, animating their
 * widths reproduces Figma's per-slide x tracks for free.
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
.bfm-popup {
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
.bfm-box {
  --s: 0.6818182px;
  --c: 0.7px;
  --rise: calc(12 * var(--c));
  --loop: 10s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 480px;
  max-height: 85vh;
  padding: 41.6px 20px 20px;
  box-sizing: border-box;
  overflow: hidden auto;
  background-color: #000;
  color: #fff;
}
/* the artwork is far larger than the frame; the wrapper clips it so it
   cannot add scroll height to the box */
.bfm-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.bfm-bg::before {
  content: '';
  position: absolute;
  top: -60px;
  left: -65%;
  width: 637.2%;
  aspect-ratio: 2048 / 947;
  background: url('@/assets/img/pretplata/bf-2026/popup-bg.webp') center / 100%
    auto no-repeat;
  mix-blend-mode: hard-light;
}

/* ------------------------------------------------------------------ copy */
.bfm-copy {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(20 * var(--c));
  flex-shrink: 0;
  width: 280px;
  text-align: center;
}
.bfm-brand {
  display: flex;
  align-items: center;
  gap: calc(16.468 * var(--c));
}
.bfm-brand__logo {
  display: block;
  width: calc(114.416 * var(--c));
  height: auto;
}
.bfm-brand__label {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: calc(13.868 * var(--c));
  line-height: calc(24.344 * var(--c));
  letter-spacing: calc(2.7736 * var(--c));
  text-transform: uppercase;
  white-space: nowrap;
}
.bfm-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.06;
  letter-spacing: -0.7px;
  color: transparent;
  background-image: linear-gradient(90deg, #f5f5f7 41.429%, #312828 228.93%);
  -webkit-background-clip: text;
  background-clip: text;
  /* background-clip:text paints only inside the box; give descenders room */
  padding-bottom: 0.14em;
  margin-bottom: -0.14em;
}
.bfm-price {
  display: flex;
  align-items: baseline;
  gap: calc(8.193 * var(--c));
  margin: calc(-8 * var(--c)) 0 0; /* 12 instead of 20 under the title */
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: calc(24 * var(--c));
  white-space: nowrap;
}
.bfm-price__old {
  color: #86868b;
  text-decoration: line-through;
}
.bfm-price__new {
  color: transparent;
  background-image: linear-gradient(90deg, #fff 0%, #6f6060 131.71%);
  -webkit-background-clip: text;
  background-clip: text;
  padding-bottom: 0.1em;
  margin-bottom: -0.1em;
}
/* TgButton carries the fill, shadows and hover; only the campaign size here */
.bfm-cta {
  height: calc(56 * var(--c));
  padding: calc(16 * var(--c));
  border-radius: calc(12 * var(--c));
  font-size: calc(18 * var(--c));
  line-height: calc(24 * var(--c));
}
.bfm-cta ::v-deep .tg-button__label {
  padding: 0 calc(6 * var(--c));
}

/* ---------------------------------------------------------------- slices */
.bfm-slices {
  position: relative;
  display: flex;
  gap: calc(8.485 * var(--s));
  flex-shrink: 0;
  width: calc(410.667 * var(--s));
  height: calc(356.364 * var(--s));
  margin-top: auto;
}
.bfm-slice {
  position: relative;
  flex: none;
  width: calc(47.515 * var(--s));
  height: 100%;
  overflow: hidden;
  border-radius: calc(3.394 * var(--s));
}
.bfm-slice--1 {
  width: calc(242.667 * var(--s));
}
/* the picture lives on a canvas as wide as an open slice, centred, so a
   collapsed slice shows the middle strip of what it reveals when open */
.bfm-slice__canvas {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: calc(242.667 * var(--s));
  height: 100%;
  margin-left: calc(-121.333 * var(--s));
  overflow: hidden;
}
.bfm-slice__canvas img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: none; /* the global img rule would squash the wide slide-2 photo */
  height: 100%;
  object-fit: cover;
}
.bfm-slice--1 .bfm-slice__canvas img {
  opacity: 0.46;
}
/* slide 2 is a wider photo offset inside its canvas in Figma */
.bfm-slice--2 .bfm-slice__canvas img {
  width: calc(589.309 * var(--s));
  height: calc(371.637 * var(--s));
  top: calc(-15.27 * var(--s));
  left: calc(-234.184 * var(--s));
  object-fit: fill;
}
.bfm-slice__overlay {
  position: absolute;
  inset: 0;
  opacity: 0;
}
.bfm-slice--1 .bfm-slice__overlay {
  opacity: 1;
}
.bfm-slice__gradient {
  position: absolute;
  top: calc(169.7 * var(--s));
  left: 50%;
  width: calc(242.667 * var(--s));
  height: calc(186.667 * var(--s));
  margin-left: calc(-121.333 * var(--s));
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
}
.bfm-slice__caption {
  position: absolute;
  left: calc(20.36 * var(--s));
  bottom: calc(20.36 * var(--s));
  width: calc(195.152 * var(--s));
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: calc(23.758 * var(--s));
  line-height: calc(27.152 * var(--s));
  text-align: left;
  color: #f5f5f7;
}

/* ---------------------------------------------------------------- motion */
.bfm-brand {
  animation: bfm-fade-1 var(--loop) linear infinite,
    bfm-rise-1 var(--loop) linear infinite;
}
.bfm-title {
  animation: bfm-fade-2 var(--loop) linear infinite,
    bfm-rise-2 var(--loop) linear infinite;
}
.bfm-price {
  animation: bfm-fade-3 var(--loop) linear infinite,
    bfm-rise-3 var(--loop) linear infinite;
}
.bfm-cta {
  animation: bfm-fade-4 var(--loop) linear infinite,
    bfm-rise-4 var(--loop) linear infinite;
}
.bfm-slice--1 {
  animation: bfm-w1 var(--loop) linear infinite;
}
.bfm-slice--2 {
  animation: bfm-w2 var(--loop) linear infinite;
}
.bfm-slice--3 {
  animation: bfm-w3 var(--loop) linear infinite;
}
.bfm-slice--4 {
  animation: bfm-w4 var(--loop) linear infinite;
}
.bfm-slice--1 .bfm-slice__overlay {
  animation: bfm-o1 var(--loop) linear infinite;
}
.bfm-slice--2 .bfm-slice__overlay {
  animation: bfm-o2 var(--loop) linear infinite;
}
.bfm-slice--3 .bfm-slice__overlay {
  animation: bfm-o3 var(--loop) linear infinite;
}
.bfm-slice--4 .bfm-slice__overlay {
  animation: bfm-o4 var(--loop) linear infinite;
}

/* prettier-ignore */
@keyframes bfm-fade-1 { 0%, 2% { opacity: 0; animation-timing-function: ease-out; } 7%, 100% { opacity: 1; } }
/* prettier-ignore */
@keyframes bfm-fade-2 { 0%, 3% { opacity: 0; animation-timing-function: ease-out; } 8%, 100% { opacity: 1; } }
/* prettier-ignore */
@keyframes bfm-fade-3 { 0%, 4% { opacity: 0; animation-timing-function: ease-out; } 9%, 100% { opacity: 1; } }
/* prettier-ignore */
@keyframes bfm-fade-4 { 0%, 5% { opacity: 0; animation-timing-function: ease-out; } 10%, 100% { opacity: 1; } }
/* prettier-ignore */
@keyframes bfm-rise-1 { 0%, 2% { translate: 0 var(--rise); animation-timing-function: ease; } 8%, 100% { translate: 0 0; } }
/* prettier-ignore */
@keyframes bfm-rise-2 { 0%, 3% { translate: 0 var(--rise); animation-timing-function: ease; } 9%, 100% { translate: 0 0; } }
/* prettier-ignore */
@keyframes bfm-rise-3 { 0%, 4% { translate: 0 var(--rise); animation-timing-function: ease; } 10%, 100% { translate: 0 0; } }
/* prettier-ignore */
@keyframes bfm-rise-4 { 0%, 5% { translate: 0 var(--rise); animation-timing-function: ease; } 11%, 100% { translate: 0 0; } }

/* prettier-ignore */
@keyframes bfm-w1 { 0%, 10% { width: calc(242.667 * var(--s)); animation-timing-function: ease; } 25%, 85% { width: calc(47.515 * var(--s)); animation-timing-function: ease; } 100% { width: calc(242.667 * var(--s)); } }
/* prettier-ignore */
@keyframes bfm-w2 { 0%, 10% { width: calc(47.515 * var(--s)); animation-timing-function: ease; } 25%, 35% { width: calc(242.667 * var(--s)); animation-timing-function: ease; } 50%, 100% { width: calc(47.515 * var(--s)); } }
/* prettier-ignore */
@keyframes bfm-w3 { 0%, 35% { width: calc(47.515 * var(--s)); animation-timing-function: ease; } 50%, 60% { width: calc(242.667 * var(--s)); animation-timing-function: ease; } 75%, 100% { width: calc(47.515 * var(--s)); } }
/* prettier-ignore */
@keyframes bfm-w4 { 0%, 60% { width: calc(47.515 * var(--s)); animation-timing-function: ease; } 75%, 85% { width: calc(242.667 * var(--s)); animation-timing-function: ease; } 100% { width: calc(47.515 * var(--s)); } }
/* prettier-ignore */
@keyframes bfm-o1 { 0%, 10% { opacity: 1; animation-timing-function: ease; } 25%, 85% { opacity: 0; animation-timing-function: ease; } 100% { opacity: 1; } }
/* prettier-ignore */
@keyframes bfm-o2 { 0%, 10% { opacity: 0; animation-timing-function: ease; } 25%, 35% { opacity: 1; animation-timing-function: ease; } 50%, 100% { opacity: 0; } }
/* prettier-ignore */
@keyframes bfm-o3 { 0%, 35% { opacity: 0; animation-timing-function: ease; } 50%, 60% { opacity: 1; animation-timing-function: ease; } 75%, 100% { opacity: 0; } }
/* prettier-ignore */
@keyframes bfm-o4 { 0%, 60% { opacity: 0; animation-timing-function: ease; } 75%, 85% { opacity: 1; animation-timing-function: ease; } 100% { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .bfm-box * {
    animation: none !important;
  }
}

/* ========================================================== desktop frame */
@media screen and (min-width: 768px) {
  .bfm-popup {
    max-width: 900px;
  }
  .bfm-box {
    --u: min(1px, calc((100vw - 32px) / 900));
    --s: var(--u);
    --c: var(--u);
    flex-direction: row;
    align-items: center;
    height: calc(600 * var(--u));
    padding: 0 calc(68 * var(--u));
  }
  .bfm-bg::before {
    top: calc(-60 * var(--u));
    left: -57.11%;
    width: 420.97%;
  }
  .bfm-copy {
    align-items: flex-start;
    width: calc(299.881 * var(--u));
    text-align: left;
  }
  .bfm-title {
    font-size: calc(52.437 * var(--u));
    letter-spacing: calc(-1 * var(--u));
    white-space: pre-line; /* the "\n" in the title breaks the line here */
    background-image: linear-gradient(90deg, #f5f5f7 19.326%, #312828 155.98%);
  }
  .bfm-slices {
    margin: 0 0 0 auto;
  }
}
</style>
