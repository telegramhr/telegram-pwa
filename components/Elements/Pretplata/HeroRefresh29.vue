<script>
export default {
  name: 'HeroRefresh29',
  props: {
    badge: {
      type: String,
      default: 'Popust 63%',
    },
    // rendered with v-html so the desktop line break can be placed by hand
    title: {
      type: String,
      default:
        'Najvažnije priče ne nastaju <br />same. Nastaju zahvaljujući vama.',
    },
    price: {
      type: String,
      default: '29€',
    },
    oldPrice: {
      type: String,
      default: '79€',
    },
    weeklyPrice: {
      type: String,
      default: '0,56€',
    },
    buttonText: {
      type: String,
      default: 'Aktivirajte pretplatu',
    },
    buttonLink: {
      type: String,
      default: '#placanje',
    },
  },
}
</script>

<template>
  <section class="hero-refresh29">
    <!-- decorative article collage, exported straight from the Figma frames -->
    <div class="hr-layer hr-layer--art">
      <picture class="hr-clanci">
        <source
          media="(min-width: 768px)"
          :srcset="
            require('@/assets/img/pretplata/refresh29/clanci-desktop.webp')
          "
        />
        <img
          :src="require('@/assets/img/pretplata/refresh29/clanci-mobile.webp')"
          width="780"
          height="398"
          alt=""
          fetchpriority="high"
        />
      </picture>
    </div>

    <div class="hr-layer hr-layer--txt">
      <nuxt-link to="/" class="hr-logo" aria-label="Telegram naslovnica">
        <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram" />
      </nuxt-link>

      <div class="hr-txt">
        <span class="hr-badge">
          <img
            class="hr-badge__icon"
            src="@/assets/img/pretplata/refresh29/percent.svg"
            alt=""
          />
          <span class="hr-badge__label">{{ badge }}</span>
        </span>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 class="hr-title" v-html="title"></h1>

        <p class="hr-lead">
          Budite dio naše borbe za istinu. <br class="hr-lead__br" />Godišnja
          pretplata sada je
          <strong class="hr-lead__price">{{ price }}</strong> umjesto
          <s class="hr-lead__old">{{ oldPrice }}.</s>
        </p>

        <TgButton class="hr-cta" :href="buttonLink">{{ buttonText }}</TgButton>
      </div>

      <p class="hr-info">
        Do neovisnog novinarstva sada možete već od
        <strong>{{ weeklyPrice }}</strong> tjedno.
      </p>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop  node 2093:172  — 1440 x 396
 *   mobile   node 2095:1161 —  390 x 500
 *
 * Same scaling scheme as HeroKerum: every length is a Figma unit multiplied by
 * `--u`, which equals 1px at the two design widths (390 / >=1440) and scales
 * linearly in between, so the artwork never re-wraps.
 *
 * The copy is NOT pinned to Figma coordinates. It lives in a normal-flow column
 * that mirrors the page's `.content` box (max-width 865px, centred, 16px side
 * padding below 1024px), so its left edge always lines up with the payment box
 * underneath — at 1440px that column starts at 288px, exactly where Figma has
 * the text.
 */
.hero-refresh29 {
  --u: min(1px, 0.2564103vw); /* 100 / 390 */
  --hr-content-max: 865px; /* keep in sync with the page's `.content` */
  --hr-content-gutter: 16px;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #0c3655;
  color: #ffffff;
}

/* ---------------------------------------------------------------- artwork */
/* decorative collage: a centred design-width layer, like the Figma frame */
.hr-layer--art {
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(390 * var(--u));
  height: 100%;
  transform: translateX(-50%);
  pointer-events: none;
}
.hr-clanci {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: calc(390 * var(--u));
}
.hr-clanci img {
  display: block;
  width: 100%;
  height: auto;
}

/* --------------------------------------------------------------- content */
/* Below 1024px the hero has no fixed height: it is this layer's top padding
   (which clears the collage) + the copy + the 24-unit bottom padding, so the
   footnote always sits the same distance from the bottom edge, however the
   copy wraps. At 390px that adds up to the 500px Figma frame. */
.hr-layer--txt {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--hr-content-max);
  margin: 0 auto;
  padding: calc(212 * var(--u)) var(--hr-content-gutter) calc(24 * var(--u));
}

/* the logo only exists in the desktop frame */
.hr-logo {
  display: none;
}
.hr-logo img {
  display: block;
  width: 100%;
  height: auto;
}

.hr-txt {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: calc(8 * var(--u));
}

.hr-badge {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: calc(4 * var(--u));
  /* Figma strokes sit inside the padding: 6/10 outer = 4.5/8.5 + 1.5 border */
  padding: calc(4.5 * var(--u)) calc(8.5 * var(--u));
  border: calc(1.5 * var(--u)) solid #2f5e81;
  border-radius: calc(6 * var(--u));
  background-color: #0c3655;
  box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.03),
    inset 0 -1px 3px -2px rgba(0, 0, 0, 0.03);
}
.hr-badge__icon {
  display: block;
  width: calc(14 * var(--u));
  height: calc(14 * var(--u));
}
/* Figma uses Inter here on desktop; Barlow SemiBold is the project equivalent */
.hr-badge__label {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: calc(12 * var(--u));
  line-height: calc(14 * var(--u));
  text-transform: uppercase;
  white-space: nowrap;
}

.hr-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: calc(26 * var(--u));
  line-height: calc(32 * var(--u));
  overflow-wrap: break-word;
}
/* the designer's hard line break only exists in the desktop frame */
.hr-title br {
  display: none;
}

.hr-lead {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: calc(16 * var(--u));
  line-height: calc(22 * var(--u));
}
/* the designer's hard line break only exists in the desktop frame */
.hr-lead__br {
  display: none;
}
.hr-lead__price {
  font-weight: 600;
}
.hr-lead__old {
  font-weight: 600;
  text-decoration: line-through;
}

/* TgButton already carries the design-system fill, shadows and hover state —
   only the campaign sizing is overridden here. */
.hr-cta {
  width: 100%;
  margin-top: calc(8 * var(--u)); /* 8 (gap) + 8 = 16 between lead and button */
  padding: calc(8 * var(--u)) calc(12 * var(--u)); /* 8 + 24 + 8 = 40 tall */
  border-radius: calc(8 * var(--u));
  font-size: calc(13 * var(--u));
  line-height: calc(24 * var(--u));
}

.hr-info {
  margin: calc(10 * var(--u)) 0 0;
  opacity: 0.8;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: calc(12 * var(--u));
  line-height: calc(16 * var(--u));
  text-align: center;
}
.hr-info strong {
  font-weight: 700;
}

/* ============================================================ tablet range */
/* No Figma frame for this range. The mobile collage would sit 390px wide with
   empty gutters on both sides, so the desktop collage runs the full hero width
   and the copy stacks underneath it in normal flow. */
@media (min-width: 768px) and (max-width: 1023px) {
  .hr-layer--art {
    position: relative;
    left: auto;
    width: 100%;
    height: auto;
    transform: none;
  }
  /* crop the collage to its first row of stories and fade the cut into the
     background, like the mobile asset does, so the hero stays compact */
  .hr-clanci {
    position: relative;
    width: 100%;
    aspect-ratio: 1365 / 400;
    overflow: hidden;
  }
  .hr-clanci img {
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  .hr-clanci::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 45%;
    background: linear-gradient(to bottom, rgba(12, 54, 85, 0), #0c3655);
  }
  .hr-layer--txt {
    padding-top: calc(13 * var(--u)); /* 212 - 199: same gap as mobile */
  }
}

/* ============================================================ desktop frame */
@media (min-width: 1024px) {
  .hero-refresh29 {
    --u: 0.06944444vw; /* 100 / 1440 */
    --hr-content-gutter: 0px;
    min-height: 0;
    height: calc(396 * var(--u));
  }

  .hr-layer--art {
    width: calc(1440 * var(--u));
  }
  .hr-clanci {
    left: auto;
    right: 0;
    width: calc(682.5 * var(--u));
  }

  /* logo at the top, copy vertically centred, footnote at the bottom: the two
     1fr tracks stay equal (their content is smaller than the track), so the
     copy sits at exactly 50%, as in Figma. Top/bottom offsets live on the logo
     and footnote margins rather than on padding so the tracks stay symmetric. */
  .hr-layer--txt {
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto minmax(0, 1fr);
    height: 100%;
    padding: 0 var(--hr-content-gutter);
  }

  .hr-logo {
    display: block;
    align-self: start;
    width: calc(124 * var(--u));
    height: auto;
    margin-top: calc(35.6 * var(--u));
  }

  .hr-txt {
    width: calc(426 * var(--u));
    margin-top: calc(1 * var(--u)); /* Figma centre sits 0.5 below the middle */
    align-items: flex-start;
    gap: calc(16 * var(--u));
  }

  .hr-badge {
    gap: calc(4 * var(--u));
    padding: calc(2.5 * var(--u)) calc(6.5 * var(--u)); /* 4/8 outer */
  }
  .hr-badge__icon {
    width: calc(16 * var(--u));
    height: calc(16 * var(--u));
  }
  .hr-badge__label {
    font-size: calc(12 * var(--u));
    line-height: calc(16 * var(--u));
    letter-spacing: calc(0.5 * var(--u));
  }

  /* Figma's 426px text box holds line two with zero slack; browser Lora metrics
     run ~5px wider, so give the title room up to the collage edge (757) */
  .hr-title {
    width: calc(460 * var(--u));
    font-size: calc(28 * var(--u));
    line-height: calc(34 * var(--u));
  }
  .hr-title br {
    display: inline;
  }

  .hr-lead {
    margin-top: calc(
      8 * var(--u)
    ); /* 16 (gap) + 8 = 24 between title and lead */
    font-size: calc(18 * var(--u));
    line-height: calc(24 * var(--u));
  }
  .hr-lead__br {
    display: inline;
  }
  .hr-lead__price {
    font-weight: 500;
  }
  .hr-lead__old {
    font-weight: 700;
  }

  .hr-cta {
    width: auto;
    margin-top: calc(
      8 * var(--u)
    ); /* 16 (gap) + 8 = 24 between lead and button */
  }

  .hr-info {
    align-self: end;
    width: calc(347 * var(--u));
    margin: 0 0 calc(26 * var(--u));
    opacity: 1;
    line-height: calc(14 * var(--u));
    text-align: left;
  }
}

@media (min-width: 1440px) {
  .hero-refresh29 {
    --u: 1px;
  }
}
</style>
