<template>
  <!-- Print-subscription countdown, ported from telegram-countdown-widget.
       Days count in Croatian time to CUTOFF (that day included); hidden after it.
       The percentage comes from /wcapi/tisak/progress (server-middleware/tisak-progress.js).
       The widget shows at once; the progress row keeps its space but stays invisible until
       the percentage loads, then fades in while the bar fills and the number counts up.
       Test a date with ?tgc_today=2026-12-12 -->
  <section v-if="daysLeft >= 0" class="tgc" aria-labelledby="tgc-title">
    <div class="tgc__inner">
      <div class="tgc__art">
        <img
          src="/img/tisak-countdown/papers-1200.webp"
          srcset="
            /img/tisak-countdown/papers-640.webp   640w,
            /img/tisak-countdown/papers-1200.webp 1200w
          "
          sizes="(max-width: 759px) 270px, 280px"
          width="1200"
          height="949"
          alt="Naslovnice dnevnog tiskanog Telegrama"
        />
      </div>
      <div class="tgc__text">
        <h2 id="tgc-title" class="tgc__title">
          Hoće li Hrvatska dobiti neovisne i&nbsp;kvalitetne dnevne novine?
        </h2>
        <p class="tgc__lead">
          Tiskani Telegram, na Vašoj adresi.
          <span class="tgc__nowrap">Ako Vi to želite.</span>
        </p>
      </div>
      <div class="tgc__action">
        <p
          class="tgc__count"
          :class="{ 'tgc__count--word': daysLeft < 2 }"
          role="timer"
          :aria-label="countLabel"
        >
          <template v-if="daysLeft >= 2">
            <span>Još</span>
            <span class="tgc__count-num">{{ daysLeft }}</span>
            <span>{{ dayWord }}</span>
          </template>
          <template v-else>
            <span>{{ daysLeft === 1 ? 'Još samo' : 'Još' }}</span>
            <span class="tgc__count-num">{{
              daysLeft === 1 ? 'sutra' : 'danas'
            }}</span>
          </template>
        </p>
        <div
          class="tgc__progress"
          :class="{ 'tgc__progress--shown': open }"
          :aria-hidden="open ? null : 'true'"
        >
          <div
            class="tgc__bar"
            role="progressbar"
            aria-label="Prikupljeno pretplatnika"
            aria-valuemin="0"
            :aria-valuenow="percent || 0"
            aria-valuemax="100"
          >
            <span class="tgc__fill" :style="{ width: fillWidth }"></span>
          </div>
          <p class="tgc__progress-text">
            <span
              ><strong>{{ shownNumber }} %</strong> potrebnih pretplatnika</span
            >
          </p>
        </div>
        <TgButton
          class="tgc__cta"
          href="/pretplata/telegram-tisak/?utm_source=countdown_widget&utm_medium=direct&utm_campaign=telegram_tisak"
          rel=""
          >Pretplatite se</TgButton
        >
      </div>
    </div>
  </section>
</template>

<script>
const CUTOFF = '2026-12-13'

function zagrebDay(override) {
  const s =
    override && /^\d{4}-\d{2}-\d{2}$/.test(override)
      ? override
      : new Intl.DateTimeFormat('en-CA', {
          timeZone: 'Europe/Zagreb',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(new Date())
  const [y, m, d] = s.split('-').map(Number)
  return Date.UTC(y, m - 1, d)
}

function daysUntilCutoff(override) {
  const [y, m, d] = CUTOFF.split('-').map(Number)
  return Math.round((Date.UTC(y, m - 1, d) - zagrebDay(override)) / 864e5)
}

export default {
  name: 'TisakCountdown',
  data() {
    return {
      daysLeft: daysUntilCutoff(this.$route.query.tgc_today),
      percent: null,
      open: false,
      fillWidth: '0%',
      shownNumber: 0,
      timer: null,
      raf: null,
    }
  },
  computed: {
    dayWord() {
      const n = this.daysLeft
      return n % 10 === 1 && n % 100 !== 11 ? 'dan' : 'dana'
    },
    countLabel() {
      if (this.daysLeft >= 2) return `Još ${this.daysLeft} ${this.dayWord}`
      return this.daysLeft === 1 ? 'Još samo sutra' : 'Još danas'
    },
  },
  mounted() {
    if (this.daysLeft < 0) return
    this.loadProgress()
    // rolls the day over at midnight without a reload
    this.timer = setInterval(() => {
      this.daysLeft = daysUntilCutoff(this.$route.query.tgc_today)
    }, 60 * 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    cancelAnimationFrame(this.raf)
  },
  methods: {
    async loadProgress() {
      try {
        const { data } = await this.$axios.get('/wcapi/tisak/progress')
        const pct = Number(data && data.percent)
        if (Number.isNaN(pct)) return
        this.percent = Math.max(0, Math.min(100, Math.floor(pct)))
        requestAnimationFrame(() => this.reveal())
      } catch (e) {
        // no number: the progress row stays invisible, the rest of the widget still shows
      }
    },
    reveal() {
      this.open = true
      const reduced =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) {
        this.fillWidth = `${this.percent}%`
        this.shownNumber = this.percent
        return
      }
      // the bar starts filling as the row fades in (see .tgc__fill transition-delay)
      this.fillWidth = `${this.percent}%`
      const delay = 150
      const duration = 1100
      const start = performance.now() + delay
      const easeOut = (t) => 1 - Math.pow(1 - t, 3)
      const tick = (now) => {
        const t = Math.min(1, Math.max(0, (now - start) / duration))
        this.shownNumber = Math.round(easeOut(t) * this.percent)
        if (t < 1) this.raf = requestAnimationFrame(tick)
      }
      this.raf = requestAnimationFrame(tick)
    },
  },
}
</script>

<style scoped>
/* Ported from telegram-countdown-widget/tg-countdown.css.
   Desktop (≥ 1200 px): question | countdown + button | papers.
   Tablet (760–1023 px): question and papers side by side, countdown row below.
   Phone (< 760 px): stacked and centred. */
.tgc {
  --tgc-red: #ae3737;
  --tgc-red-dark: #962e2e;
  --tgc-beige: #e6dbce;
  --tgc-ink: #121212;
  --tgc-grey: #5f5f5f;
  --tgc-track: #d5c5b5;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto 28px;
  background: var(--tgc-beige);
  color: var(--tgc-ink);
  font-family: Barlow, Arial, sans-serif;
  overflow: hidden;
}
.tgc *,
.tgc *::before,
.tgc *::after {
  box-sizing: inherit;
}
.tgc__nowrap {
  white-space: nowrap;
}

.tgc__inner {
  display: grid;
  grid-template-columns: 520px minmax(0, 1fr) 280px;
  grid-template-areas: 'text action art';
  column-gap: 28px;
  align-items: center;
  padding: 50px 8px 50px 44px;
}
.tgc__text {
  grid-area: text;
}
.tgc__action {
  grid-area: action;
}
.tgc__art {
  grid-area: art;
  margin: -22px 0 -26px; /* the artwork has transparent room for shadows */
}
.tgc__art img {
  display: block;
  width: 100%;
  height: auto;
}

.tgc__title {
  margin: 0;
  max-width: 16em;
  font: 700 32px/1.2 Lora, Georgia, serif;
  letter-spacing: -0.005em;
  color: var(--tgc-ink);
}
.tgc__lead {
  margin: 14px 0 0;
  font: 300 20px/1.4 Barlow, Arial, sans-serif;
  color: var(--tgc-grey);
}

.tgc__action {
  padding-left: 28px;
  border-left: 1px solid #c9b9a7;
  text-align: center;
}
.tgc__count {
  display: flex;
  justify-content: center;
  align-items: baseline;
  column-gap: 0.26em;
  margin: 0;
  font: 700 50px/1 Lora, Georgia, serif;
  color: var(--tgc-ink);
  white-space: nowrap;
}
.tgc__count-num {
  color: var(--tgc-red);
  letter-spacing: -0.01em;
  font-variant-numeric: lining-nums;
}
.tgc__count--word {
  font-size: 40px;
}

.tgc__progress {
  margin: 20px 0 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.tgc__progress--shown {
  opacity: 1;
}
.tgc__bar {
  height: 8px;
  border-radius: 999px;
  background: var(--tgc-track);
  overflow: hidden;
}
.tgc__fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--tgc-red);
  /* same easing and timing as the number count-up in reveal() */
  transition: width 1.1s cubic-bezier(0.33, 1, 0.68, 1) 0.15s;
}
.tgc__progress-text {
  margin: 8px 0 0;
  font: 400 15px/1.3 Barlow, Arial, sans-serif;
  color: var(--tgc-grey);
  white-space: nowrap;
}
.tgc__progress-text strong {
  font-weight: 600;
  color: var(--tgc-ink);
}

/* TgButton, recoloured to the campaign red and sized as in the design */
.tgc__cta.tg-button {
  display: flex;
  width: 100%;
  height: 54px;
  margin: 20px 0 0;
  border-radius: 999px;
  background: var(--tgc-red);
  font-size: 18px;
  letter-spacing: 0.03em;
}
.tgc__cta.tg-button:hover,
.tgc__cta.tg-button:focus-visible {
  background: var(--tgc-red-dark);
  color: #fff;
}
.tgc__cta.tg-button:focus-visible {
  outline: 2px solid var(--tgc-ink);
  outline-offset: 3px;
}

@media (max-width: 1199px) {
  .tgc__inner {
    grid-template-columns: minmax(0, 1fr) 270px 230px;
    padding: 40px 8px 40px 36px;
  }
  .tgc__title {
    font-size: 26px;
  }
  .tgc__lead {
    font-size: 17px;
  }
  .tgc__count {
    font-size: 44px;
  }
  .tgc__count--word {
    font-size: 36px;
  }
  .tgc__art {
    margin: -14px 0 -18px;
  }
}

@media (max-width: 1023px) {
  .tgc {
    margin: 16px 0 24px;
  }
  .tgc__inner {
    grid-template-columns: minmax(0, 1fr) 250px;
    grid-template-areas: 'text art' 'action art';
    column-gap: 24px;
    padding: 24px 20px 24px 28px;
  }
  .tgc__text {
    align-self: end;
  }
  .tgc__action {
    align-self: start;
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 16px;
    padding: 0;
    border: 0;
    text-align: left;
  }
  .tgc__title {
    font-size: 25px;
  }
  .tgc__lead {
    font-size: 16px;
  }
  .tgc__count,
  .tgc__count--word {
    font-size: 26px;
  }
  .tgc__progress {
    width: 172px;
    flex: none;
    margin: 0;
  }
  .tgc__progress-text {
    font-size: 13px;
  }
  .tgc__cta.tg-button {
    width: auto;
    height: 42px;
    margin: 0;
    padding: 0 24px;
    font-size: 15px;
  }
}

@media (max-width: 899px) {
  .tgc__inner {
    grid-template-columns: minmax(0, 1fr) 190px;
  }
  .tgc__progress {
    width: 150px;
  }
  .tgc__progress-text {
    font-size: 12px;
  }
  .tgc__cta.tg-button {
    padding: 0 20px;
  }
}

@media (max-width: 759px) {
  .tgc {
    margin: 10px 0 16px;
  }
  .tgc__inner {
    display: block;
    padding: 6px 16px 20px;
    text-align: center;
  }
  .tgc__art {
    margin: 0 auto -10px;
    max-width: 270px;
  }
  .tgc__title {
    max-width: none;
    font-size: 21px;
    line-height: 1.2;
  }
  .tgc__lead {
    margin-top: 6px;
    font-size: 15px;
    line-height: 1.35;
  }
  .tgc__action {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    text-align: center;
  }
  .tgc__count {
    justify-content: center;
    column-gap: 9px;
    margin-top: 16px;
    font-size: 30px;
    white-space: normal;
  }
  .tgc__count--word {
    font-size: 30px;
  }
  .tgc__progress {
    width: auto;
    margin: 10px auto 0;
  }
  .tgc__progress-text {
    margin-top: 6px;
    white-space: normal;
    font-size: 14px;
  }
  .tgc__cta.tg-button {
    width: 100%;
    max-width: 360px;
    height: 46px;
    margin: 14px auto 0;
    padding: 0;
    font-size: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tgc__progress,
  .tgc__fill {
    transition: none;
  }
}
</style>
