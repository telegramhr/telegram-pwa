<template>
  <div class="ht-ai-landing">
    <ht-hero
      :value="heroValue"
      :decimals="heroDecimals"
      @open-kalkulator="openKalkulator('hero')"
    />
    <ht-articles :articles="articles" />
    <ht-kalkulator-cta @open-kalkulator="openKalkulator('mid')" />
    <!-- Video section hidden until HT delivers the video content. -->
    <!-- <ht-video-carousel /> -->
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
import { STORAGE_KEY, RESULT_STORAGE_KEY } from '~/store/ht-kalkulator/data'
import { HT_CAMPAIGN_ARTICLES } from '~/store/ht-kalkulator/articles'

export default {
  name: 'HtAiLanding',
  data() {
    return {
      // Static campaign cards; content is hardcoded in the shared array.
      articles: HT_CAMPAIGN_ARTICLES,
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
    openKalkulator(location) {
      this.$gtm.push({
        event: 'ht-kalkulator-cta-click',
        kalkulator_cta_location: location,
      })
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
          hid: 'preconnect-gfonts',
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          hid: 'preconnect-gstatic',
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          hid: 'preconnect-fontshare',
          rel: 'preconnect',
          href: 'https://api.fontshare.com',
          crossorigin: true,
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
  /* Fills at least the full viewport so the Telegram theme's body background
     never shows below the footer (e.g. when zoomed out). The color matches the
     footer so the area beneath it blends in. Scoped to this page's wrapper. */
  min-height: 100vh;
  background: #f5f5f5;
  font-family: 'Inter', 'Barlow', sans-serif;
}
</style>
