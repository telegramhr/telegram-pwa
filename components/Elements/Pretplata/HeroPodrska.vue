<script>
export default {
  name: 'HeroPodrska',
  props: {
    buttonText: {
      type: String,
      default: 'Podržite Telegram',
    },
    buttonLink: {
      type: String,
      default: '#paymentBoxes',
    },
  },
}
</script>

<template>
  <!--
    DOM order is the mobile *flow* order (copy, then collage); the Figma paint
    order is restored with z-index, because the paper texture has to blend over
    the article collage but stay under the journalists.
  -->
  <section class="hero-podrska">
    <picture class="hp-bg">
      <source
        media="(min-width: 1024px)"
        width="1920"
        height="533"
        :srcset="require('@/assets/img/pretplata/podrska/background.webp')"
      />
      <img
        :src="require('@/assets/img/pretplata/podrska/background-mobile.webp')"
        width="780"
        height="960"
        alt=""
        fetchpriority="high"
      />
    </picture>

    <div class="hp-layer">
      <div class="hp-txt">
        <img
          class="hp-logo"
          src="@/assets/img/telegram_logo_white.svg"
          alt="Telegram"
        />
        <h1 class="hp-title">
          Iza svake razotkrivene afere stoje ljudi koji se ne predaju. Pomozite
          nam da skupa iskorijenimo korupciju.
        </h1>
        <p class="hp-lead">
          Podržite rad Telegrama uz 50% popusta na pretplatu
        </p>
        <TgButton class="hp-cta" :href="buttonLink">{{ buttonText }}</TgButton>
      </div>
    </div>

    <picture class="hp-clanci">
      <source
        media="(min-width: 1024px)"
        width="1463"
        height="577"
        :srcset="require('@/assets/img/pretplata/podrska/clanci.webp')"
      />
      <img
        :src="require('@/assets/img/pretplata/podrska/clanci-mobile.webp')"
        width="780"
        height="422"
        alt=""
      />
    </picture>

    <picture class="hp-ekipa">
      <source
        media="(min-width: 1024px)"
        width="1644"
        height="622"
        :srcset="require('@/assets/img/pretplata/podrska/ekipa.webp')"
      />
      <img
        :src="require('@/assets/img/pretplata/podrska/ekipa-mobile.webp')"
        width="780"
        height="334"
        alt="Novinari Telegrama"
      />
    </picture>

    <div class="hp-shadow"></div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop  node 1988:13747 — 1440 x 400
 *   mobile   node 2002:19497 —  390 x 480
 *
 * Same unit trick as HeroKerum: every length is a Figma unit times `--u`, so the
 * composition scales as one piece. `--u` is exactly 1px at the two design widths.
 *
 * Layer order below mirrors the Figma stack, which matters here: the paper
 * texture blends over the article collage (lighten) but under the journalists.
 */
.hero-podrska {
  --u: min(1px, 0.2564103vw); /* 100 / 390 */
  position: relative;
  isolation: isolate; /* keep the texture's blend inside the hero */
  width: 100%;
  overflow: hidden;
  background-color: #760404;
}

.hp-clanci,
.hp-bg,
.hp-ekipa {
  display: block;
}
.hp-clanci img,
.hp-ekipa img {
  display: block;
  width: 100%;
  height: auto;
  max-width: none;
}

/* --------------------------------------------------------- paper + gradient */
.hp-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  mix-blend-mode: lighten;
}
.hp-bg img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ------------------------------------------------------------------ artwork */
.hp-clanci {
  /* in flow on mobile: it follows the copy and gives the collage its height */
  position: relative;
  z-index: 0;
  margin-top: calc(15 * var(--u));
}
.hp-ekipa {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
}

/* ------------------------------------------------- "Sjena", desktop only */
.hp-shadow {
  display: none;
}

/* --------------------------------------------------------------------- copy */
.hp-layer {
  position: relative;
  z-index: 4;
  padding-top: calc(40 * var(--u));
}
.hp-txt {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.hp-logo {
  display: block;
  width: calc(126 * var(--u));
  height: calc(14.9007 * var(--u));
}
.hp-title {
  width: calc(357 * var(--u));
  margin-top: calc(19 * var(--u));
  color: #ffffff;
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: calc(20 * var(--u));
  line-height: calc(24 * var(--u));
  overflow-wrap: break-word;
}
.hp-lead {
  width: calc(357 * var(--u));
  margin-top: calc(5 * var(--u));
  color: #ffffff;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: calc(16 * var(--u));
  line-height: calc(22 * var(--u));
}
/* TgButton carries the design-system fill, shadows and hover state — only the
   campaign sizing is overridden here. */
.hp-cta {
  margin-top: calc(19 * var(--u));
  padding: calc(8 * var(--u)) calc(12 * var(--u));
  border-radius: calc(8 * var(--u));
  font-size: calc(13 * var(--u));
  line-height: calc(24 * var(--u));
}

/* ============================================================ desktop frame */
@media (min-width: 1024px) {
  .hero-podrska {
    --u: 0.06944444vw; /* 100 / 1440 */
    height: calc(400 * var(--u));
  }

  /* All content — collage and copy alike — is pinned to a centred 1440 column;
     only the background and the bottom shadow expand past it. `margin-left`
     rather than `translateX`, because a transform would open a stacking context
     and break the z-index order the texture blend depends on.

     Below 1440 the column is exactly 100vw, so this resolves to `left: 0`. */
  .hp-clanci,
  .hp-ekipa {
    left: 50%;
    margin-left: calc(-720 * var(--u));
  }
  .hp-clanci {
    position: absolute;
    top: 0;
    width: calc(731 * var(--u));
    margin-top: 0;
  }
  .hp-ekipa {
    top: calc(89 * var(--u));
    bottom: auto;
    width: calc(822 * var(--u));
  }

  .hp-shadow {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    height: calc(148 * var(--u));
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.745) 100%
    );
  }

  .hp-layer {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(1440 * var(--u));
    height: 100%;
    padding-top: 0;
  }
  .hp-txt {
    position: absolute;
    top: 50%;
    left: calc(819 * var(--u));
    transform: translateY(-50%);
    align-items: flex-start;
    text-align: left;
  }
  .hp-logo {
    width: calc(128 * var(--u));
    height: calc(15.1372 * var(--u));
  }
  .hp-title {
    width: calc(506 * var(--u));
    margin-top: calc(32 * var(--u));
    font-size: calc(28 * var(--u));
    line-height: calc(34 * var(--u));
  }
  .hp-lead {
    width: calc(506 * var(--u));
    margin-top: calc(15 * var(--u));
    font-size: calc(20 * var(--u));
    line-height: calc(26 * var(--u));
  }
  .hp-cta {
    margin-top: calc(26 * var(--u));
    padding: calc(12 * var(--u)) calc(16 * var(--u));
    font-size: calc(15 * var(--u));
  }
}

@media (min-width: 1600px) {
  .hero-podrska {
    --u: 1px;
  }
}
</style>
