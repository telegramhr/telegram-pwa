<script>
export default {
  name: 'FeatureTiles',
  props: {
    title: {
      type: String,
      default: 'Što dobivate u Telegram Pretplati',
    },
    // { variant, title, text } — the variant picks one of the five designed
    // artworks: pristup | novinarstvo | reklame | analize | klub
    tiles: {
      type: Array,
      default: () => [
        {
          variant: 'pristup',
          title: 'Full pristup',
          text: 'Čitajte sve članke bez ograničenja – od istraživačkih priča do analiza koje oblikuju javni razgovor u Hrvatskoj',
        },
        {
          variant: 'novinarstvo',
          title: 'Neovisno i nagrađivano novinarstvo',
          text: 'Pretplatom podržavate višestruko nagrađivano istraživačko novinarstvo.',
        },
        {
          variant: 'reklame',
          title: 'Bez reklama',
          text: 'Uživajte u čistom, preglednom čitanju - bez ometajućih reklama',
        },
        {
          variant: 'analize',
          title: 'Relevantne analize i komentari',
          text: 'Dublji uvid u događaje koji oblikuju našu svakodnevicu',
        },
        {
          variant: 'klub',
          title: 'Telegram Klub',
          text: 'U Telegram Klubu vas očekuju dodatne pogodnosti, posebni popusti i pozivnice na ekskluzivne događaje.',
        },
      ],
    },
    // ms between automatic advances; 0 disables autoplay
    autoplay: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      images: {
        iphone: require('@/assets/img/pretplata/bf-2026/tile-iphone.webp'),
        clanci: require('@/assets/img/pretplata/bf-2026/tile-clanci.webp'),
        paper: require('@/assets/img/pretplata/bf-2026/tile-paper.webp'),
        macbook: require('@/assets/img/pretplata/bf-2026/tile-macbook.webp'),
        putin: require('@/assets/img/pretplata/bf-2026/tile-putin.webp'),
        ticket1: require('@/assets/img/pretplata/bf-2026/tile-ticket-1.webp'),
        ticket2: require('@/assets/img/pretplata/bf-2026/tile-ticket-2.webp'),
        ticket3: require('@/assets/img/pretplata/bf-2026/tile-ticket-3.webp'),
      },
    }
  },
  computed: {
    // vue-slick-carousel is registered globally in plugins/vue-slick-carousel.js
    slickOptions() {
      return {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        touchThreshold: 10,
        speed: 450,
        autoplay: this.autoplay > 0,
        autoplaySpeed: this.autoplay,
        pauseOnHover: true,
        pauseOnFocus: true,
      }
    },
  },
  methods: {
    prev() {
      this.$refs.slick.prev()
    },
    next() {
      this.$refs.slick.next()
    },
  },
}
</script>

<template>
  <section class="feature-tiles">
    <div class="ft-wrap">
      <div class="ft-head">
        <h2 class="ft-title">{{ title }}</h2>
        <button
          type="button"
          class="ft-arrow"
          aria-label="Prethodno"
          @click="prev"
        >
          <font-awesome-icon :icon="['far', 'chevron-left']" />
        </button>
        <button
          type="button"
          class="ft-arrow"
          aria-label="Sljedeće"
          @click="next"
        >
          <font-awesome-icon :icon="['far', 'chevron-right']" />
        </button>
      </div>

      <div class="ft-track">
        <vue-slick-carousel ref="slick" v-bind="slickOptions">
          <div v-for="(tile, index) in tiles" :key="index" class="ft-slide">
            <article class="ft-tile" :class="`ft-tile--${tile.variant}`">
              <div class="ft-art" aria-hidden="true">
                <template v-if="tile.variant === 'pristup'">
                  <img class="ft-art__iphone" :src="images.iphone" alt="" />
                </template>

                <template v-else-if="tile.variant === 'novinarstvo'">
                  <img class="ft-art__clanci" :src="images.clanci" alt="" />
                  <span class="ft-art__wash"></span>
                  <span class="ft-art__paper ft-art__paper--tint"></span>
                  <img
                    class="ft-art__paper ft-art__paper--grain"
                    :src="images.paper"
                    alt=""
                  />
                  <span class="ft-art__fade"></span>
                </template>

                <template v-else-if="tile.variant === 'reklame'">
                  <img class="ft-art__macbook" :src="images.macbook" alt="" />
                </template>

                <template v-else-if="tile.variant === 'analize'">
                  <img class="ft-art__photo" :src="images.putin" alt="" />
                  <span class="ft-art__fade"></span>
                </template>

                <template v-else-if="tile.variant === 'klub'">
                  <img
                    class="ft-art__klub-logo"
                    src="@/assets/img/tg_klub_logo_negative.svg"
                    alt=""
                  />
                  <img
                    class="ft-art__ticket ft-art__ticket--1"
                    :src="images.ticket1"
                    alt=""
                  />
                  <img
                    class="ft-art__ticket ft-art__ticket--2"
                    :src="images.ticket2"
                    alt=""
                  />
                  <img
                    class="ft-art__ticket ft-art__ticket--3"
                    :src="images.ticket3"
                    alt=""
                  />
                </template>
              </div>

              <div class="ft-copy">
                <h3 class="ft-copy__title">{{ tile.title }}</h3>
                <p class="ft-copy__text">{{ tile.text }}</p>
              </div>
            </article>
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop node 2328:3745 — 960px row, 400x500 tiles, 20px gap
 *   mobile  node 2382:1327 — 300x375 tiles, 12px gap, bleeding past the
 *                            right edge of the screen
 *
 * `--t` is the tile unit: every length inside a tile is a desktop Figma unit
 * multiplied by it (1px on desktop, 0.75px on mobile).
 */
.feature-tiles {
  --t: 0.75px;
  --ft-gap: 12px;
  width: 100%;
  overflow: hidden;
  background-color: #000;
  color: #f5f5f7;
}
.ft-wrap {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 0 24px 16px;
}
.ft-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-right: 16px;
}
.ft-title {
  flex: 1 1 0;
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.07;
  letter-spacing: -0.5px;
  color: #fff;
}
.ft-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #333336;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s ease, background-color 0.2s ease;
}
.ft-arrow:hover {
  background-color: #444449;
}

/* ------------------------------------------------------------------ track */
/* slick clips at the track box: 960px on desktop, screen edge on mobile */
.ft-track {
  width: 100%;
}
.ft-track ::v-deep .slick-list {
  overflow: hidden;
}
.ft-track ::v-deep .slick-slide {
  height: auto;
}
.ft-track ::v-deep .slick-slide > div {
  display: flex;
}
/* the gap lives on the slide wrapper, as slick has no gap option
   (Figma: 12px between the 300px mobile tiles, 20px on desktop) */
.ft-slide {
  box-sizing: border-box;
  width: calc(400 * var(--t) + var(--ft-gap));
  padding-right: var(--ft-gap);
}
.ft-slide:focus {
  outline: none;
}

/* ------------------------------------------------------------------- tile */
.ft-tile {
  position: relative;
  width: calc(400 * var(--t));
  height: calc(500 * var(--t));
  overflow: hidden;
  border-radius: calc(8 * var(--t));
  background-color: #000;
}
.ft-art {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.ft-art img {
  position: absolute;
  display: block;
  max-width: none;
}
.ft-copy {
  position: absolute;
  left: calc(36 * var(--t));
  right: calc(36 * var(--t));
  bottom: calc(30 * var(--t));
  display: flex;
  flex-direction: column;
  gap: calc(10 * var(--t));
}
.ft-copy__title {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: calc(28 * var(--t));
  line-height: 1.2;
  letter-spacing: calc(0.128 * var(--t));
  color: #f5f5f7;
}
.ft-copy__text {
  margin: 0;
  max-width: calc(300 * var(--t));
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: calc(17 * var(--t));
  line-height: 1.47;
  letter-spacing: calc(-0.374 * var(--t));
  color: #f5f5f7;
}

/* shared bottom fade (tiles 2 and 4) */
.ft-art__fade {
  position: absolute;
  left: calc(-6 * var(--t));
  top: calc(178 * var(--t));
  width: calc(420 * var(--t));
  height: calc(322 * var(--t));
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 89.944%);
}

/* 1 · Full pristup — red tile with the two phones */
.ft-tile--pristup .ft-art {
  background: radial-gradient(
      calc(517 * var(--t)) calc(250 * var(--t)) at 50% 50%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.36) 100%
    ),
    #a33333;
}
.ft-art__iphone {
  left: calc(-23 * var(--t));
  top: calc(25 * var(--t));
  width: calc(445 * var(--t));
  height: calc(334 * var(--t));
  object-fit: cover;
}

/* 2 · Neovisno novinarstvo — the article collage under aged paper */
.ft-tile--novinarstvo .ft-art {
  background-color: #cbcbcb;
}
.ft-art__clanci {
  left: 0;
  top: 0;
  width: calc(400 * var(--t));
  height: calc(500 * var(--t));
}
.ft-art__wash {
  position: absolute;
  left: 0;
  top: calc(-12 * var(--t));
  width: calc(400 * var(--t));
  height: calc(512 * var(--t));
  background: linear-gradient(
    to top,
    rgba(151, 151, 151, 0) 12.5%,
    rgba(102, 92, 92, 0.9) 95.673%
  );
}
.ft-art__paper {
  position: absolute;
  left: calc(-129 * var(--t));
  top: calc(-17 * var(--t));
  width: calc(728 * var(--t));
  height: calc(517 * var(--t));
}
.ft-art__paper--tint {
  background-color: #7c6161;
  mix-blend-mode: overlay;
}
.ft-art__paper--grain {
  left: calc(-128 * var(--t));
  top: calc(-6 * var(--t));
  width: calc(726 * var(--t));
  height: calc(515 * var(--t));
  object-fit: cover;
  mix-blend-mode: soft-light;
}

/* 3 · Bez reklama — blue tile with the laptop */
.ft-tile--reklame .ft-art {
  background: radial-gradient(
      calc(200 * var(--t)) calc(250 * var(--t)) at 50% 50%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.35) 100%
    ),
    #304769;
}
.ft-art__macbook {
  left: calc(-21 * var(--t));
  top: calc(30 * var(--t));
  width: calc(434.667 * var(--t));
  height: calc(326 * var(--t));
  object-fit: cover;
}

/* 4 · Analize i komentari — the front-page photo */
.ft-tile--analize .ft-art {
  background-color: #262628;
}
.ft-art__photo {
  left: calc(-220 * var(--t));
  top: calc(-30 * var(--t));
  width: calc(840 * var(--t));
  height: calc(530 * var(--t));
  object-fit: cover;
}

/* 5 · Telegram Klub — grey tile with the partner tickets */
.ft-tile--klub .ft-art {
  background: radial-gradient(
    calc(200 * var(--t)) calc(250 * var(--t)) at 50% 50%,
    #5e5e5e 0%,
    #444444 50%,
    #2a2929 100%
  );
}
.ft-art__klub-logo {
  left: calc(36 * var(--t));
  top: calc(64 * var(--t));
  width: calc(155 * var(--t));
  height: calc(49 * var(--t));
  object-fit: contain;
  object-position: left center;
}
.ft-art__ticket--1 {
  left: calc(205.58 * var(--t));
  top: calc(110.3 * var(--t));
  width: calc(170.78 * var(--t));
  height: calc(129.08 * var(--t));
  transform: rotate(-16.23deg) scaleY(-1);
}
.ft-art__ticket--2 {
  left: calc(100.11 * var(--t));
  top: calc(153.52 * var(--t));
  width: calc(211.73 * var(--t));
  height: calc(157.76 * var(--t));
  transform: rotate(15.57deg);
}
.ft-art__ticket--3 {
  left: calc(14.87 * var(--t));
  top: calc(213.52 * var(--t));
  width: calc(157.65 * var(--t));
  height: calc(124.35 * var(--t));
  transform: rotate(15.68deg);
}

/* ============================================================ desktop frame */
@media (min-width: 1024px) {
  .feature-tiles {
    --t: 1px;
    --ft-gap: 20px;
  }
  .ft-wrap {
    gap: 40px;
    padding: 52px 0 0;
  }
  .ft-head {
    padding-right: 0;
  }
  .ft-title {
    font-size: 32px;
  }
  .ft-arrow {
    font-size: 16px;
  }
}
@media (min-width: 1024px) and (max-width: 1100px) {
  /* shrink the tiles a little on narrow desktops so the third one peeks in */
  .feature-tiles {
    --t: 0.9px;
  }
}
</style>
