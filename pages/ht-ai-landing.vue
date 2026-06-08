<template>
  <div class="ht-ai-landing">
    <ht-hero
      :value="heroValue"
      :decimals="heroDecimals"
      @open-kalkulator="openKalkulator"
    />
    <ht-articles />
    <ht-kalkulator-cta @open-kalkulator="openKalkulator" />
    <ht-video-carousel />
    <ht-landing-footer />

    <client-only>
      <ht-kalkulator
        v-if="showKalkulator"
        :key="kalkulatorKey"
        @completed="onKalkulatorCompleted"
      />
    </client-only>
  </div>
</template>

<script>
import { STORAGE_KEY } from '~/store/ht-kalkulator/data'

// Mirrors the key the HtKalkulator widget writes its computed result to.
const RESULT_STORAGE_KEY = 'ht-ai-kalkulator-result'

export default {
  name: 'HtAiLanding',
  data() {
    return {
      showKalkulator: false,
      kalkulatorKey: 0,
      // Hero shows 5 by default; if the quiz was solved, the saved value wins.
      heroValue: 5,
      heroDecimals: 0,
    }
  },
  mounted() {
    this.loadStoredResult()
  },
  methods: {
    loadStoredResult() {
      try {
        const raw = localStorage.getItem(RESULT_STORAGE_KEY)
        if (raw) this.applyResult(JSON.parse(raw))
      } catch {
        // localStorage unavailable or malformed
      }
    },
    applyResult(results) {
      if (!results || typeof results.savedHoursMonthly !== 'number') return
      this.heroValue = results.savedHoursMonthly
      this.heroDecimals = Number.isInteger(results.savedHoursMonthly) ? 0 : 1
    },
    onKalkulatorCompleted(results) {
      this.applyResult(results)
    },
    openKalkulator() {
      // The widget gates itself via localStorage (dismissed/completed). On this
      // landing the CTA must reliably reopen it, so clear the flag and remount.
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // localStorage unavailable
      }
      this.kalkulatorKey += 1
      this.showKalkulator = true
    },
  },
  head() {
    return {
      title: 'AIMO znati uz AI - Hrvatski Telekom x Telegram',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Koliko vremena možeš uštedjeti uz AI? Izračunaj svoju uštedu i saznaj kako pametnom upotrebom umjetne inteligencije podići produktivnost.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'AIMO znati uz AI - Hrvatski Telekom x Telegram',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content:
            'Koliko vremena možeš uštedjeti uz AI? Izračunaj svoju uštedu uz Telegram i Hrvatski Telekom.',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/ht-ai-landing/',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/ht-ai-landing/',
        },
        {
          hid: 'font-inter',
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800&display=swap',
        },
        {
          hid: 'font-satoshi',
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap',
        },
      ],
    }
  },
}
</script>

<style scoped>
.ht-ai-landing {
  /* Co-branded Telegram x HT campaign: HT magenta brand accent. */
  --ht-magenta: #e2007a;
  --ht-magenta-hover: #c1006a;
  --ht-dark: #2e2b26;
  --ht-dark-hover: #1c1a17;

  width: 100%;
  background: #ffffff;
  font-family: 'Inter', 'Barlow', sans-serif;
}
</style>
