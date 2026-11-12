<script>
export default {
  name: 'FinalCta',
  props: {
    campaignLabel: {
      type: String,
      default: 'black friday',
    },
    title: {
      type: String,
      default: '2 godine. Jedna cijena.',
    },
    text: {
      type: String,
      default: 'Najbolji Telegramovi tekstovi, pune 2 godine bez reklama.',
    },
    buttonText: {
      type: String,
      default: 'Iskoristite ponudu',
    },
    buttonLink: {
      type: String,
      default: '#pretplataPayment',
    },
    background: {
      type: String,
      default: require('@/assets/img/pretplata/bf-2026/cta-bg.webp'),
    },
  },
}
</script>

<template>
  <section class="final-cta">
    <span
      v-if="background"
      class="fc-bg"
      :style="{ backgroundImage: `url(${background})` }"
      aria-hidden="true"
    ></span>
    <div class="fc-content">
      <div class="fc-brand">
        <img
          class="fc-brand__logo"
          src="@/assets/img/telegram_logo_white.svg"
          alt="Telegram"
        />
        <span class="fc-brand__label">{{ campaignLabel }}</span>
      </div>
      <div class="fc-details">
        <h2 class="fc-title">{{ title }}</h2>
        <p class="fc-text">{{ text }}</p>
        <TgButton class="fc-cta" variant="black" :href="buttonLink">
          {{ buttonText }}
        </TgButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop node 2352:30495 — 508px tall, artwork 1460px wide at 29% opacity
 *   mobile  node 2377:1151  — 482px tall, artwork 921px wide at 50% opacity
 * The artwork is blended with hard-light over black, which is why only its
 * bright magenta curves survive as the faint red glow seen in the design.
 */
.final-cta {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 482px;
  padding: 48px 16px;
  overflow: hidden;
  background-color: #000;
  color: #fff;
}
.fc-bg {
  position: absolute;
  inset: 0;
  /* the mobile frame shows the left part of the artwork (Figma: 921px wide
     at x = -53), the big magenta glow and the circle's edge, not its centre */
  background-repeat: no-repeat;
  background-position: -53px center;
  /* 921px on phones; on wider small screens grow with the section so the
     artwork still reaches the right edge */
  background-size: max(921px, calc(100% + 53px)) auto;
  opacity: 0.5;
  mix-blend-mode: hard-light;
  pointer-events: none;
}
.fc-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;
  max-width: 603px;
}
.fc-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}
.fc-brand__logo {
  display: block;
  width: 183px;
  height: auto;
}
.fc-brand__label {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  text-align: center;
}
.fc-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.fc-title {
  margin: 0;
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 32px;
  /* Figma trims the title box to its cap height (22px mobile, 28px desktop),
     so the surrounding gaps are measured from a box that small; the negative
     margins reproduce that without breaking a title that wraps */
  line-height: 36px;
  margin: -7px 0;
  text-align: center;
  color: #fff;
}
.fc-text {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.35;
  text-align: center;
}
.fc-cta {
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 24px;
}

@media (min-width: 1024px) {
  .final-cta {
    min-height: 508px;
    padding: 64px 16px;
  }
  .fc-bg {
    /* cover: 1440px wide at the Figma frame (1460 in the design), then it
       keeps filling the full width on any wider screen */
    background-position: center;
    background-size: cover;
    opacity: 0.29;
  }
  .fc-brand {
    gap: 21px;
  }
  .fc-brand__logo {
    width: 217px;
  }
  .fc-brand__label {
    font-size: 19px;
    line-height: 25px;
    letter-spacing: 3.8px;
  }
  .fc-title {
    font-size: 40px;
    margin: -4px 0;
  }
  .fc-text {
    font-size: 20px;
  }
  .fc-cta {
    padding: 16px;
    border-radius: 12px;
    font-size: 18px;
  }
}
</style>
