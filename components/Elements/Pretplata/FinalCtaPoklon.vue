<script>
export default {
  name: 'FinalCtaPoklon',
  props: {
    title: {
      type: String,
      default: 'Poklon koji se otvara svaki dan',
    },
    text: {
      type: String,
      default: 'Darujte premium pretplatu uz posebni blagdanski popust od 50%',
    },
    buttonText: {
      type: String,
      default: 'Poklonite pretplatu',
    },
    buttonLink: {
      type: String,
      default: '#paymentBoxes',
    },
  },
}
</script>

<template>
  <section class="gcta" aria-labelledby="gcta-title">
    <!-- desktop: two halves of the gift artwork frame the copy -->
    <div class="gcta-art gcta-art--desktop" aria-hidden="true">
      <span class="gcta-slice gcta-slice--d-left">
        <img
          src="@/assets/img/pretplata/poklon-2026/cta.webp"
          alt=""
          loading="lazy"
        />
      </span>
      <span class="gcta-slice gcta-slice--d-right">
        <img
          src="@/assets/img/pretplata/poklon-2026/cta.webp"
          alt=""
          loading="lazy"
        />
      </span>
    </div>

    <!-- phones: the gift block sits above the copy -->
    <div class="gcta-art gcta-art--mobile" aria-hidden="true">
      <div class="gcta-art__stage">
        <span class="gcta-slice gcta-slice--m-left">
          <img
            src="@/assets/img/pretplata/poklon-2026/hero.webp"
            alt=""
            loading="lazy"
          />
        </span>
        <span class="gcta-slice gcta-slice--m-gift">
          <img
            src="@/assets/img/pretplata/poklon-2026/gift.webp"
            alt=""
            loading="lazy"
          />
        </span>
        <span class="gcta-slice gcta-slice--m-right">
          <img
            src="@/assets/img/pretplata/poklon-2026/hero.webp"
            alt=""
            loading="lazy"
          />
        </span>
      </div>
    </div>

    <div class="gcta-content">
      <h2 id="gcta-title" class="gcta-title">{{ title }}</h2>
      <p class="gcta-text">{{ text }}</p>
      <TgButton class="gcta-button" variant="red" :href="buttonLink">
        {{ buttonText }}
      </TgButton>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active" / 🌉 Blagdanska akcija
 *   desktop node 2552:22017 — 508px, artwork multiplied over mint #97ecc8
 *   mobile  nodes 2623:794 + 2623:797 — 298px artwork block, copy below;
 *   on phones the artwork is shown as is (the full-page Figma render shows
 *   the bright gift; multiplying it there turned it near black)
 */
.gcta {
  position: relative;
  color: #fff;
}
.gcta-art {
  position: relative;
  overflow: hidden;
}
.gcta-art--desktop {
  display: none;
}
.gcta-slice {
  position: absolute;
  overflow: hidden;
}
.gcta-slice img {
  position: absolute;
  max-width: none;
}

.gcta-art__stage {
  position: relative;
  left: 50%;
  width: 390px;
  height: 298px;
  margin-left: -195px;
}
.gcta-slice--m-left {
  top: 0;
  left: 0;
  width: 359px;
  height: 298px;
}
.gcta-slice--m-left img {
  top: -5.37%;
  left: -11.71%;
  width: 258.87%;
  height: 105.37%;
}
.gcta-slice--m-gift {
  top: -9px;
  left: 65px;
  width: 231px;
  height: 290px;
}
.gcta-slice--m-gift img {
  top: 0;
  left: -258.59%;
  width: 370.77%;
  height: 100.06%;
}
.gcta-slice--m-right {
  top: 0;
  left: 309px;
  width: 81px;
  height: 298px;
  transform: scaleX(-1);
}
.gcta-slice--m-right img {
  top: -5.37%;
  left: -20.26%;
  width: 1147.32%;
  height: 105.37%;
}

.gcta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 342px;
  margin: 0 auto;
  padding: 36px 16px;
  text-align: center;
}
.gcta-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
}
.gcta-text {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.35;
}
.gcta-button {
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 18px;
  line-height: 24px;
}

@media screen and (min-width: 1024px) {
  .gcta {
    height: 508px;
    overflow: hidden;
  }
  /* desktop multiplies the artwork over a mint ground, as in Figma */
  .gcta-art--desktop {
    display: block;
    position: absolute;
    inset: 0;
    background-color: #97ecc8;
    isolation: isolate;
  }
  .gcta-art--desktop .gcta-slice {
    mix-blend-mode: multiply;
  }
  .gcta-art--mobile {
    display: none;
  }
  /* Figma: left half at x = -386 (mirrored), right half at x = 722 */
  .gcta-slice--d-left {
    top: -260px;
    left: calc(50% - 1106px);
    width: 1108px;
    height: 1029px;
    transform: scaleX(-1);
  }
  .gcta-slice--d-left img {
    top: -0.02%;
    left: -65.16%;
    width: 165.16%;
    height: 100.04%;
  }
  .gcta-slice--d-right {
    top: -320px;
    left: calc(50% + 2px);
    width: 1154px;
    height: 1147px;
  }
  .gcta-slice--d-right img {
    top: -0.02%;
    left: -76.77%;
    width: 176.77%;
    height: 100.04%;
  }
  .gcta-content {
    position: absolute;
    top: 140px;
    left: 50%;
    gap: 24px;
    width: 439px;
    max-width: none;
    padding: 0;
    transform: translateX(-50%);
  }
  .gcta-title {
    font-size: 40px;
    line-height: 44px;
  }
  .gcta-text {
    font-size: 20px;
  }
  .gcta-button {
    height: 56px;
    padding: 16px;
  }
}
</style>
