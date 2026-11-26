<script>
export default {
  name: 'HeroPoklon',
  props: {
    title: {
      type: String,
      default: 'Darujte ono što vrijedi čitati',
    },
    text: {
      type: String,
      default:
        'Godinu dana neovisnog novinarstva, ekskluzivnih priča i analiza - uz',
    },
    highlight: {
      type: String,
      default: '50% popusta',
    },
    textEnd: {
      type: String,
      default: 'na Telegram poklon pretplatu',
    },
  },
}
</script>

<template>
  <section class="hero-gift" aria-labelledby="hero-gift-title">
    <!-- desktop: one artwork, gift on the right -->
    <img
      class="hg-art-desktop"
      src="@/assets/img/pretplata/poklon-2026/hero.webp"
      width="1440"
      height="488"
      alt=""
      aria-hidden="true"
    />

    <!-- phones: the artwork recomposed around the gift, above the copy -->
    <div class="hg-art-mobile" aria-hidden="true">
      <span class="hg-slice hg-slice--left">
        <img src="@/assets/img/pretplata/poklon-2026/hero.webp" alt="" />
      </span>
      <span class="hg-slice hg-slice--gift">
        <img src="@/assets/img/pretplata/poklon-2026/gift.webp" alt="" />
      </span>
      <span class="hg-slice hg-slice--right">
        <img src="@/assets/img/pretplata/poklon-2026/hero.webp" alt="" />
      </span>
    </div>

    <div class="hg-content">
      <img
        class="hg-logo"
        src="@/assets/img/telegram_logo_white.svg"
        width="180"
        height="21"
        alt="Telegram"
      />
      <div class="hg-copy">
        <h1 id="hero-gift-title" class="hg-title">{{ title }}</h1>
        <p class="hg-text">
          {{ text }}
          <span class="hg-highlight">{{ highlight }}</span>
          {{ textEnd }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active" / 🌉 Blagdanska akcija
 *   desktop node 2552:21683 — 488px, copy left, gift artwork on the right
 *   mobile  frame 2622:638  — 329px artwork block, copy centred under it
 *   (mobile offsets are the Figma y minus the frame's 54px status bar)
 */
.hero-gift {
  position: relative;
  overflow: hidden;
  background-color: #052513;
  color: #fff;
}
.hg-art-desktop {
  display: none;
}

.hg-art-mobile {
  position: relative;
  left: 50%;
  width: 390px;
  height: 329px;
  margin-left: -195px;
}
.hg-slice {
  position: absolute;
  overflow: hidden;
}
.hg-slice img {
  position: absolute;
  top: 0;
  max-width: none;
}
.hg-slice--left {
  top: 0;
  left: 0;
  width: 390px;
  height: 329px;
}
.hg-slice--left img {
  left: -7.69%;
  width: 249.67%;
  height: 100%;
}
.hg-slice--gift {
  top: 15px;
  left: 68px;
  width: 229px;
  height: 288px;
}
.hg-slice--gift img {
  left: -258.59%;
  width: 370.77%;
  height: 100.06%;
}
/* the artwork's left edge, mirrored, closes the right side */
.hg-slice--right {
  top: 0;
  left: 293px;
  width: 102px;
  height: 329px;
  transform: scaleX(-1);
}
.hg-slice--right img {
  left: 0;
  width: 954.63%;
  height: 100%;
}

.hg-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
  max-width: 390px;
  margin: 0 auto;
  padding: 24px 16px 0;
  text-align: center;
}
.hg-logo {
  display: block;
  width: 112px;
  height: auto;
}
.hg-copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.hg-title {
  max-width: 260px;
  margin: 0 auto;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.33px;
  color: #fff;
}
.hg-text {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -0.33px;
}
.hg-highlight {
  font-weight: 600;
  color: #ff9a91;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media screen and (min-width: 1024px) {
  .hero-gift {
    display: flex;
    align-items: center;
    height: 488px;
  }
  /* the artwork is drawn for exactly 1440 x 488: never scale it (that
     would crop the gift), anchor it right so narrower screens only lose
     the empty left edge */
  .hg-art-desktop {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 1440px;
    max-width: none;
    height: 488px;
    pointer-events: none;
  }
  .hg-art-mobile {
    display: none;
  }
  /* Figma: 587px column at x = 237, i.e. 483px left of centre */
  .hg-content {
    align-items: flex-start;
    gap: 47px;
    width: 587px;
    max-width: none;
    margin: 0 0 0 max(16px, calc(50% - 483px));
    padding: 0;
    text-align: left;
  }
  .hg-logo {
    width: 180px;
  }
  .hg-copy {
    gap: 32px;
  }
  .hg-title {
    max-width: none;
    margin: 0;
    font-size: 44px;
    line-height: 48px;
  }
  .hg-text {
    font-size: 24px;
    line-height: 36px;
  }
}

/* wider than the artwork: scale the whole hero with the screen, keeping
   the Figma 1440 x 488 proportions, so the gift is never cropped */
@media screen and (min-width: 1441px) {
  .hero-gift {
    height: auto;
    aspect-ratio: 1440 / 488;
  }
  .hg-art-desktop {
    width: 100%;
    height: 100%;
  }
}
</style>
