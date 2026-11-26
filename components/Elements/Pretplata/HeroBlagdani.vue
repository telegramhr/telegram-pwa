<script>
export default {
  name: 'HeroBlagdani',
  props: {
    title: {
      type: String,
      default: 'Blagdani su idealna prilika da počnete novu godinu informirani',
    },
    text: {
      type: String,
      default:
        'Neovisno novinarstvo, dubinske analize i istraživački članci - sada uz',
    },
    highlight: {
      type: String,
      default: '50% popusta',
    },
    textEnd: {
      type: String,
      default: 'na godišnju pretplatu',
    },
  },
}
</script>

<template>
  <section class="hero-xmas" aria-labelledby="hero-xmas-title">
    <img
      class="hx-bg"
      src="@/assets/img/pretplata/blagdani-2026/hero-bg.webp"
      alt=""
      aria-hidden="true"
    />
    <img
      class="hx-ornament hx-ornament--left"
      src="@/assets/img/pretplata/blagdani-2026/hero-ornaments.webp"
      width="683"
      height="821"
      alt=""
      aria-hidden="true"
    />
    <img
      class="hx-ornament hx-ornament--right"
      src="@/assets/img/pretplata/blagdani-2026/hero-ornaments.webp"
      width="683"
      height="821"
      alt=""
      aria-hidden="true"
    />

    <div class="hx-content">
      <img
        class="hx-logo"
        src="@/assets/img/telegram_logo_white.svg"
        width="180"
        height="21"
        alt="Telegram"
      />
      <div class="hx-copy">
        <h1 id="hero-xmas-title" class="hx-title">{{ title }}</h1>
        <p class="hx-text">
          {{ text }}
          <span class="hx-highlight">{{ highlight }}</span>
          {{ textEnd }}
        </p>
      </div>
    </div>

    <div class="hx-devices" aria-hidden="true">
      <img
        class="hx-phone"
        src="@/assets/img/pretplata/blagdani-2026/hero-phone.webp"
        width="237"
        height="346"
        alt=""
      />
      <img
        class="hx-tablet"
        src="@/assets/img/pretplata/blagdani-2026/hero-tablet.webp"
        width="409"
        height="313"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active" / 🌉 Blagdanska akcija
 *   desktop node 2591:1421 — 488px tall, copy centred, phone left, tablet right
 *   mobile  frame 2620:23218 — copy on top, devices underneath; the frame's
 *   54px iPhone status bar is not part of the page, so every mobile offset
 *   below is the Figma y minus 54.
 */
.hero-xmas {
  position: relative;
  overflow: hidden;
  padding: 83px 16px 0;
  background-color: #051829;
  color: #fff;
}
.hx-bg {
  position: absolute;
  top: 0;
  left: 50%;
  width: 1492px;
  max-width: none;
  height: 586px;
  object-fit: cover;
  transform: translateX(-50%);
  pointer-events: none;
}

/* On phones the garland lies along the top edge: the same artwork,
   transposed (Figma: 389 x 323 box at y = -58) */
.hx-ornament {
  position: absolute;
  max-width: none;
  opacity: 0.7;
  mix-blend-mode: lighten;
  pointer-events: none;
}
.hx-ornament--left {
  top: 50px;
  left: 50%;
  width: 323px;
  height: 389px;
  transform: translate(-50%, -50%) matrix(0, 1, 1, 0, 0, 0);
}
.hx-ornament--right {
  display: none;
}

.hx-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 358px;
  margin: 0 auto;
  text-align: center;
}
.hx-logo {
  display: block;
  width: 120px;
  height: auto;
}
.hx-copy {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.hx-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.33px;
  color: #fff;
}
.hx-text {
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -0.33px;
}
.hx-highlight {
  font-weight: 600;
  color: #a7ffab;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* the devices keep the design's 390px composition and bleed off the right */
.hx-devices {
  position: relative;
  left: 50%;
  width: 390px;
  height: 195px;
  margin: 33px 0 0 -195px;
  pointer-events: none;
}
.hx-phone,
.hx-tablet {
  position: absolute;
  max-width: none;
  height: auto;
}
.hx-phone {
  top: 12px;
  left: 28px;
  width: 121px;
}
.hx-tablet {
  top: -8px;
  left: 178px;
  width: 266px;
}

@media screen and (min-width: 1024px) {
  .hero-xmas {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 488px;
    padding: 0 16px;
  }
  .hx-bg {
    top: -144px;
    width: max(1590px, 110%);
    height: 682px;
    /* Figma: 1590px wide at x = -148, i.e. 73px left of centre */
    transform: translateX(calc(-50% - 73px));
  }
  .hx-ornament--left {
    top: -3px;
    left: -128px;
    width: 400px;
    height: 481px;
    transform: none;
  }
  .hx-ornament--right {
    display: block;
    top: -3px;
    right: -151px;
    width: 400px;
    height: 481px;
    transform: scaleX(-1);
  }
  .hx-content {
    gap: 47px;
    max-width: 734px;
  }
  .hx-logo {
    width: 180px;
  }
  .hx-copy {
    gap: 28px;
  }
  .hx-title {
    font-size: 44px;
    line-height: 52px;
  }
  .hx-text {
    font-size: 22px;
    line-height: 32px;
  }
  .hx-devices {
    position: absolute;
    inset: 0;
    left: 0;
    width: auto;
    height: auto;
    margin: 0;
  }
  /* both placed from the centre so they stay beside the copy on any width;
     the renders carry ~12-23px of transparent shadow margin, hence the
     offsets from the Figma layer boxes */
  .hx-phone {
    top: 112px;
    left: calc(50% - 577px);
    width: 237px;
  }
  .hx-tablet {
    top: 174px;
    left: calc(50% + 312px);
    width: 409px;
  }
}
</style>
