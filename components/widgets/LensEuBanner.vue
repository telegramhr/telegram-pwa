<template>
  <!--
    "Telegram x lensEU" newsletter/podcast promo shown under articles tagged
    `lenseu`, `lens-eu` or `eulens` (WP tag slugs). Figma "Article Redesign": 1807-4447 (desktop
    711x300) / 1786-4177 (mobile 358x410).
    The background is the Figma "lensEU_layout_1080x1920px" export, rotated to
    landscape and flattened onto white at 20% opacity (the raw PNG was 3.9 MB).
  -->
  <section class="lenseu-banner" aria-label="Telegram x lensEU">
    <div class="lenseu-banner__head">
      <div class="lenseu-banner__brands">
        <img
          class="lenseu-banner__telegram"
          :src="telegramLogo"
          alt="Telegram"
          width="137"
          height="15"
        />
        <span class="lenseu-banner__x" aria-hidden="true">x</span>
        <img
          class="lenseu-banner__lenseu"
          :src="lenseuLogo"
          alt="lensEU"
          width="59"
          height="15"
        />
      </div>
      <img
        class="lenseu-banner__eu"
        :src="euBadge"
        alt="Sufinancira Europska unija"
        width="161"
        height="42"
      />
    </div>
    <div class="lenseu-banner__content">
      <h2 class="lenseu-banner__title">Kako Europa oblikuje naš život?</h2>
      <p class="lenseu-banner__text">
        Od cijena i plaća do stanovanja i klimatskih promjena - svaki tjedan
        lensEU donosi newsletter i podcast o temama koje izravno utječu na našu
        svakodnevicu.
      </p>
      <TgButton
        class="lenseu-banner__btn"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prijavite se besplatno
      </TgButton>
    </div>
  </section>
</template>

<script>
import telegramLogo from '~/assets/img/lenseu/telegram-logo.svg'
import lenseuLogo from '~/assets/img/lenseu/lenseu-logo.svg'
import euBadge from '~/assets/img/lenseu/eu-sufinancira.svg'

export default {
  name: 'LensEuBanner',
  props: {
    // Signup destination for the CTA. External URLs open in a new tab (AppLink).
    href: {
      type: String,
      default:
        'https://lens-eu.beehiiv.com/home-hr?utm_source=telegram.hr&utm_medium=cross-promo&utm_campaign=lenseu&utm_content=article-banner',
    },
  },
  data() {
    return { telegramLogo, lenseuLogo, euBadge }
  },
}
</script>

<style scoped>
.lenseu-banner {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 711px;
  margin: 24px auto;
  padding: 36px 32px 36px;
  overflow: hidden;
  border-radius: 4px;
  /* Figma: 1080x1920 art rotated to landscape, 711x400 in a 711x300 frame, y offset -46px */
  background: #fff url('~assets/img/lenseu/bg.webp') 50% 46% / 100% auto
    no-repeat;
  color: #342f2f;
}
.lenseu-banner__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 42px;
}
.lenseu-banner__brands {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.lenseu-banner__telegram {
  display: block;
  width: 137px;
  height: 15px;
}
.lenseu-banner__lenseu {
  display: block;
  width: 59px;
  height: 15px;
}
.lenseu-banner__x {
  font-family: 'Geist', 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 18.7px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: #000;
}
.lenseu-banner__eu {
  display: block;
  flex-shrink: 0;
  width: 161px;
  height: 42px;
}
.lenseu-banner__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 618px;
  /* Figma trims text boxes to cap height / baseline; these margins reproduce
     the trimmed gaps (40 / 24 / 24 px) with untrimmed Lora 28/26 and 16/26 line boxes. */
  margin-top: 36px;
}
.lenseu-banner__title {
  margin: 0 0 15px;
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #342f2f;
}
.lenseu-banner__text {
  margin: 0 0 17px;
  font-family: 'Inter', 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.01em;
  color: #342f2f;
}
/* CTA is the shared green design button (components/Elements/TgButton.vue) */
.lenseu-banner__btn:focus-visible {
  outline: 2px solid #217613;
  outline-offset: 2px;
}

/* Mobile: Figma 1786-4177 (358x410) — smaller logos, full-width CTA */
@media screen and (max-width: 767px) {
  .lenseu-banner {
    margin: 16px auto;
    padding: 20px 20px 33px;
    /* Figma mobile: art 891x501 in a 358x410 frame, shifted right by 153.5px */
    background-position: 21% 0;
    background-size: 249% auto;
  }
  .lenseu-banner__brands {
    gap: 6px;
  }
  .lenseu-banner__telegram {
    width: 100px;
    height: 11px;
  }
  .lenseu-banner__lenseu {
    width: 43px;
    height: 11px;
  }
  .lenseu-banner__x {
    font-size: 13.7px;
    line-height: 11px;
  }
  .lenseu-banner__eu {
    width: 114px;
    height: 30px;
  }
  .lenseu-banner__content {
    max-width: none;
    margin-top: 35px;
  }
  .lenseu-banner__title {
    margin-bottom: 14px;
    line-height: 36px;
  }
  .lenseu-banner__text {
    margin-bottom: 24px;
    font-size: 17px;
  }
  .lenseu-banner__btn {
    width: 100%;
  }
}
</style>
