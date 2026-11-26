<script>
// Figma order (back to front) and placement inside the 982 x 272 group
const JOURNALISTS = [
  {
    key: 'klaric',
    src: require('@/assets/img/pretplata/blagdani-2026/journalist-klaric.webp'),
    w: 520,
    h: 484,
  },
  {
    key: 'dora',
    src: require('@/assets/img/pretplata/blagdani-2026/journalist-dora.webp'),
    w: 520,
    h: 520,
  },
  {
    key: 'hedl',
    src: require('@/assets/img/pretplata/blagdani-2026/journalist-hedl.webp'),
    w: 520,
    h: 520,
  },
  {
    key: 'durovic',
    src: require('@/assets/img/pretplata/blagdani-2026/journalist-durovic.webp'),
    w: 520,
    h: 527,
  },
  {
    key: 'mendusic',
    src: require('@/assets/img/pretplata/blagdani-2026/journalist-mendusic.webp'),
    w: 520,
    h: 520,
  },
  {
    key: 'modric',
    src: require('@/assets/img/pretplata/blagdani-2026/journalist-modric.webp'),
    w: 520,
    h: 520,
  },
]

export default {
  name: 'FinalCtaBlagdani',
  props: {
    title: {
      type: String,
      default: 'Počnite godinu informirani',
    },
    text: {
      type: String,
      default: 'Poklonite sebi godinu dana kvalitetnog novinarstva',
    },
    buttonText: {
      type: String,
      default: 'Iskoristite blagdanski popust',
    },
    buttonLink: {
      type: String,
      default: '#paymentBoxes',
    },
  },
  data() {
    return {
      journalists: JOURNALISTS,
      topFadeDesktop: require('@/assets/img/pretplata/blagdani-2026/cta-top.webp'),
    }
  },
}
</script>

<template>
  <section class="xcta" aria-labelledby="xcta-title">
    <img
      class="xcta-glow"
      src="@/assets/img/pretplata/blagdani-2026/cta-glow.svg"
      alt=""
      aria-hidden="true"
    />
    <span class="xcta-keyboard" aria-hidden="true">
      <img
        src="@/assets/img/pretplata/blagdani-2026/cta-keyboard.webp"
        alt=""
        loading="lazy"
      />
    </span>
    <picture class="xcta-top" aria-hidden="true">
      <source media="(min-width: 1024px)" :srcset="topFadeDesktop" />
      <img
        src="@/assets/img/pretplata/blagdani-2026/cta-top-mobile.webp"
        alt=""
        loading="lazy"
      />
    </picture>

    <div class="xcta-content">
      <h2 id="xcta-title" class="xcta-title">{{ title }}</h2>
      <p class="xcta-text">{{ text }}</p>
      <TgButton class="xcta-button" variant="white" :href="buttonLink">
        {{ buttonText }}
      </TgButton>
    </div>

    <div class="xcta-team" aria-hidden="true">
      <img
        v-for="person in journalists"
        :key="person.key"
        :class="`xcta-person xcta-person--${person.key}`"
        :src="person.src"
        :width="person.w"
        :height="person.h"
        alt=""
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active" / 🌉 Blagdanska akcija
 *   desktop node 2591:1806 — 625px tall
 *   mobile  node 2620:23655 — 480px tall
 * Navy ground, a blurred glow circle, a faint keyboard photo, a fade at the
 * top, and the six journalists cut off by the bottom edge.
 */
.xcta {
  position: relative;
  height: 480px;
  overflow: hidden;
  padding: 89px 16px 0;
  background-color: #051829;
  color: #fff;
}
.xcta-glow {
  position: absolute;
  top: -196px;
  left: 50%;
  width: 1393px;
  max-width: none;
  height: 1393px;
  transform: translateX(-50%);
  pointer-events: none;
}
.xcta-keyboard {
  position: absolute;
  top: 227px;
  left: 50%;
  width: 390px;
  height: 220px;
  overflow: hidden;
  opacity: 0.52;
  mix-blend-mode: multiply;
  transform: translateX(-50%);
  pointer-events: none;
}
.xcta-keyboard img {
  position: absolute;
  top: -19.42%;
  left: -16.53%;
  width: 134.55%;
  max-width: none;
  height: 119.26%;
  opacity: 0.6;
}
.xcta-top img {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 195px;
  object-fit: cover;
  pointer-events: none;
}

.xcta-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 358px;
  margin: 0 auto;
  text-align: center;
}
.xcta-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
}
.xcta-text {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.35;
}
.xcta-button {
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 18px;
  line-height: 24px;
}

/* the group keeps its 982 x 272 proportions; everyone is placed in % of it */
.xcta-team {
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 390px;
  aspect-ratio: 982 / 272;
  transform: translateX(-50%);
  pointer-events: none;
}
.xcta-person {
  position: absolute;
  max-width: none;
  height: auto;
  object-fit: cover;
}
.xcta-person--klaric {
  top: 10.31%;
  left: 42.29%;
  width: 25.18%;
  aspect-ratio: 247 / 230;
  opacity: 0.81;
}
.xcta-person--dora {
  top: 3.68%;
  left: 15.89%;
  width: 25.76%;
  opacity: 0.81;
}
.xcta-person--hedl {
  top: 3.68%;
  left: 28.54%;
  width: 25.82%;
  opacity: 0.92;
}
.xcta-person--durovic {
  top: 10.66%; /* Figma 6.99%, lowered ~10px so he sits level with the others */
  left: 57.74%;
  width: 24.03%;
  aspect-ratio: 236 / 239;
  opacity: 0.92;
}
.xcta-person--mendusic {
  top: 0;
  left: 0;
  width: 27.68%;
  opacity: 0.92;
}
.xcta-person--modric {
  top: 1.47%;
  left: 73.93%;
  width: 26.07%;
  opacity: 0.92;
}

@media screen and (min-width: 1024px) {
  .xcta {
    height: 625px;
    padding-top: 77px;
  }
  .xcta-keyboard {
    top: 33px;
    width: 1531px;
    height: 610px;
  }
  .xcta-keyboard img {
    top: -19.67%;
    left: 2.82%;
    width: 95.24%;
    height: 119.59%;
  }
  .xcta-top img {
    height: 169px;
  }
  .xcta-content {
    gap: 24px;
    max-width: 603px;
  }
  .xcta-title {
    font-size: 40px;
    line-height: 44px;
  }
  .xcta-text {
    font-size: 20px;
  }
  .xcta-button {
    height: 56px;
    padding: 16px;
  }
  .xcta-team {
    bottom: -13px;
    width: 982px;
  }
}
</style>
