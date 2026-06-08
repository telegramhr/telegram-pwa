<template>
  <section class="ht-hero">
    <div class="ht-hero__bar">
      <div class="ht-hero__brand">
        <img
          src="/ht-landing/telegram-wordmark.svg"
          alt="Telegram"
          class="ht-hero__wordmark"
        />
        <span class="ht-hero__x">x</span>
        <img
          src="/ht-landing/t-logo.svg"
          alt="Hrvatski Telekom"
          class="ht-hero__tlogo"
        />
      </div>
      <span class="ht-hero__badge">AIMO ZNATI UZ AI</span>
    </div>

    <div class="ht-hero__content">
      <p class="ht-hero__headline">
        <ht-count-up
          :key="`${value}-${decimals}`"
          :to="value"
          :decimals="decimals"
          :duration="2000"
          :unit="hoursUnit"
          num-class="ht-hero__num"
          unit-class="ht-hero__unit"
          aria-hidden="true"
        />
        <span class="sr-only">{{ value }} {{ hoursUnit(value) }}</span>
      </p>
      <p class="ht-hero__lead">
        možemo uštedjeti pravilnom i pametnom upotrebom AI-ja. Saznaj kako
        iskoristiti njegov puni potencijal za veću produktivnost, bolju
        organizaciju i kvalitetniju ravnotežu između posla i privatnog života.
      </p>
      <button
        class="ht-hero__cta"
        type="button"
        @click="$emit('open-kalkulator')"
      >
        Izračunaj svoju uštedu
      </button>
    </div>

    <div class="ht-hero__media" aria-hidden="true">
      <img
        src="/ht-landing/hero-macbook.jpg"
        alt=""
        class="ht-hero__img"
        loading="eager"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HtHero',
  props: {
    value: { type: Number, default: 5 },
    decimals: { type: Number, default: 0 },
  },
  methods: {
    // Croatian declension of "sat" (hour): 1 sat, 2/3/4 sata, 5+ sati,
    // 21 sat, 22 sata... 11-14 sati. Decimals take the genitive "sata".
    hoursUnit(n) {
      if (!Number.isInteger(n)) return 'sata'
      const mod10 = n % 10
      const mod100 = n % 100
      if (mod10 === 1 && mod100 !== 11) return 'sat'
      if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
        return 'sata'
      }
      return 'sati'
    },
  },
}
</script>

<style scoped>
/* Mobile / tablet: stacked. Black content block on top, image below. */
.ht-hero {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #000000;
  color: #ffffff;
}

.ht-hero__bar {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 28px 24px;
}
.ht-hero__brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ht-hero__wordmark {
  height: 16px;
  width: 134px;
  display: block;
}
.ht-hero__x {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #ffffff;
}
.ht-hero__tlogo {
  height: 21px;
  width: 17.64px;
  display: block;
  flex-shrink: 0;
}
.ht-hero__badge {
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 24px;
  border-radius: 28px;
  white-space: nowrap;
}

.ht-hero__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;
  padding: 24px 24px 48px;
}
.ht-hero__headline {
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-family: 'Satoshi', 'Inter', sans-serif;
  line-height: 0.9;
  letter-spacing: -0.02em;
}
.ht-hero__headline :deep(.ht-hero__num) {
  font-weight: 500;
  font-style: italic;
  font-size: clamp(4.5rem, 16vw, 180px);
}
.ht-hero__headline :deep(.ht-hero__unit) {
  font-weight: 300;
  font-size: clamp(4.5rem, 16vw, 180px);
  letter-spacing: -0.06em;
  margin-left: 0.06em;
}
.ht-hero__lead {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  max-width: 512px;
}
.ht-hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ht-magenta, #e2007a);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 16px 24px;
  border: none;
  border-radius: 28px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.ht-hero__cta:hover {
  background: var(--ht-magenta-hover, #c1006a);
}
.ht-hero__cta:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 2px;
}

/* Image as a block below the content on mobile/tablet. */
.ht-hero__media {
  position: relative;
  width: 100%;
  /* Matches the Figma mobile image proportions (~390x299). */
  height: clamp(290px, 77vw, 460px);
}
.ht-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Small phones: scale the header down so the lockup + badge fit one row. */
@media (max-width: 600px) {
  .ht-hero__bar {
    padding: 24px 16px;
  }
  .ht-hero__wordmark {
    height: 12px;
    width: 100px;
  }
  .ht-hero__tlogo {
    height: 15px;
    width: 12.6px;
  }
  .ht-hero__x {
    font-size: 13px;
  }
  .ht-hero__badge {
    font-size: 12px;
    padding: 10px 16px;
  }
}

/* Desktop only: split layout. Below this the split is too cramped, so the
   hero stacks (image as a block below the content). */
@media (min-width: 1280px) {
  .ht-hero {
    display: block;
    height: 666px;
    min-height: 666px;
  }
  .ht-hero__bar {
    padding: 40px 100px;
  }
  .ht-hero__media {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    z-index: 0;
  }
  .ht-hero__content {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 100px;
    transform: translateY(-50%);
    gap: 40px;
    max-width: 512px;
    padding: 0;
  }
  .ht-hero__lead {
    font-size: 20px;
  }
}
</style>
