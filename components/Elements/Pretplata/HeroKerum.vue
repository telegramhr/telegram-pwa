<script>
export default {
  name: 'HeroKerum',
  props: {
    buttonText: {
      type: String,
      default: 'Pretplatite se za 99€ godišnje',
    },
    buttonLink: {
      type: String,
      default: '#placanje',
    },
  },
}
</script>

<template>
  <section class="hero-kerum">
    <picture class="hk-bg">
      <source
        media="(min-width: 1024px)"
        :srcset="require('@/assets/img/pretplata/kerum/background.webp')"
      />
      <img
        :src="require('@/assets/img/pretplata/kerum/background-mobile.webp')"
        alt=""
        fetchpriority="high"
      />
    </picture>

    <div class="hk-layer hk-layer--art">
      <img
        class="hk-kerum"
        :src="require('@/assets/img/pretplata/kerum/kerum-group.webp')"
        width="1606"
        height="950"
        alt="Željko Kerum"
      />
    </div>

    <div class="hk-shadow"></div>

    <div class="hk-layer hk-layer--txt">
      <div class="hk-txt">
        <img
          class="hk-logo"
          src="@/assets/img/telegram_logo_white.svg"
          alt="Telegram"
        />
        <h1 class="hk-title">
          Podržite rad Telegrama <br />da nastavimo rušiti <br />barbare poput
          Keruma
        </h1>
        <p class="hk-lead">Pretplatite se da ih dokrajčimo zajedno</p>
        <TgButton class="hk-cta" :href="buttonLink">{{ buttonText }}</TgButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop  node 1930:14874 — 1440 x 400
 *   mobile   node 1914:528   —  390 x 480
 *
 * Every length is expressed in Figma units multiplied by `--u`, so the whole
 * composition scales as one piece and never re-wraps. `--u` equals exactly 1px
 * at the two design widths (390 / >=1440), which is where the layout is
 * pixel-accurate against the Figma frames.
 */
.hero-kerum {
  --u: min(1px, 0.2564103vw); /* 100 / 390 */
  position: relative;
  width: 100%;
  height: calc(480 * var(--u));
  overflow: hidden;
  background-color: #0a0936;
}

/* ------------------------------------------------------------- background */
.hk-bg {
  position: absolute;
  inset: 0;
  display: block;
}
.hk-bg img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Two independent design-width layers so the drop shadow can sit between the
   artwork and the copy, exactly like the Figma layer stack. */
.hk-layer {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(390 * var(--u));
  height: 100%;
}

/* ---------------------------------------------------------------- artwork */
.hk-kerum {
  position: absolute;
  display: block;
  left: calc(-17.4129 * var(--u));
  top: calc(256.3914 * var(--u));
  width: calc(408.376 * var(--u));
  /* the crop is wider than its layer — beat the global `img { max-width:100% }` */
  max-width: none;
  height: auto;
}

/* ---------------------------------------------------- "Sjena", desktop only */
.hk-shadow {
  display: none;
}

/* ------------------------------------------------------------------- copy */
.hk-txt {
  position: absolute;
  top: calc(40 * var(--u));
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.hk-logo {
  display: block;
  width: calc(126 * var(--u));
  height: calc(14.9007 * var(--u));
}
.hk-title {
  width: calc(335 * var(--u));
  margin-top: calc(19.5 * var(--u));
  color: #ffffff;
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: calc(24 * var(--u));
  line-height: calc(28 * var(--u));
  overflow-wrap: break-word;
}
/* the designer's hard line breaks only exist in the desktop frame */
.hk-title br {
  display: none;
}
.hk-lead {
  width: calc(335 * var(--u));
  margin-top: calc(5.0847 * var(--u));
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: calc(16 * var(--u));
  line-height: calc(22 * var(--u));
}
/* TgButton already carries the design-system fill, shadows and hover state —
   only the campaign sizing is overridden here. */
.hk-cta {
  margin-top: calc(18.5 * var(--u));
  min-width: calc(224 * var(--u));
  padding: calc(8 * var(--u)) calc(12 * var(--u));
  border-radius: calc(8 * var(--u));
  font-size: calc(13 * var(--u));
  line-height: calc(24 * var(--u));
}

/* ============================================================ desktop frame */
@media (min-width: 1024px) {
  .hero-kerum {
    --u: 0.06944444vw; /* 100 / 1440 */
    height: calc(400 * var(--u));
  }
  /* background + shadow stay full-bleed; artwork and copy are capped and centred */
  .hk-layer {
    width: calc(1440 * var(--u));
  }

  .hk-kerum {
    left: calc(-40.1419 * var(--u));
    top: calc(-38.0148 * var(--u));
    width: calc(803.1419 * var(--u));
  }

  .hk-shadow {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(230 * var(--u));
    background-image: linear-gradient(
      180deg,
      rgba(10, 9, 54, 0) 0%,
      rgba(10, 9, 54, 1) 100%
    );
  }

  .hk-txt {
    top: 50%;
    left: calc(819 * var(--u));
    right: auto;
    transform: translateY(-50%);
    align-items: flex-start;
    text-align: left;
  }
  .hk-logo {
    width: calc(128 * var(--u));
    height: calc(15.1372 * var(--u));
  }
  .hk-title {
    width: calc(482 * var(--u));
    margin-top: calc(32 * var(--u));
    font-size: calc(36 * var(--u));
    line-height: calc(40 * var(--u));
  }
  .hk-title br {
    display: inline;
  }
  .hk-lead {
    width: calc(482 * var(--u));
    margin-top: calc(14 * var(--u));
    font-size: calc(20 * var(--u));
    line-height: calc(26 * var(--u));
  }
  .hk-cta {
    margin-top: calc(27 * var(--u));
    min-width: calc(257 * var(--u));
    padding: calc(12 * var(--u)) calc(16 * var(--u));
    font-size: calc(15 * var(--u));
  }
}

@media (min-width: 1440px) {
  .hero-kerum {
    --u: 1px;
  }
}
</style>
