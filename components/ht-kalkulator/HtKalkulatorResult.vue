<template>
  <div class="ht-kalkulator-result" aria-live="polite">
    <div class="ht-kalkulator-result-header">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="24" fill="#FDE8F3" />
        <path
          d="M24 12a12 12 0 100 24 12 12 0 000-24zm-1.5 17.5l-4.5-4.5 1.4-1.4 3.1 3.1 6.1-6.1 1.4 1.4-7.5 7.5z"
          fill="#e20074"
        />
      </svg>
      <h3 class="ht-kalkulator-result-title">Vaši rezultati</h3>
    </div>

    <div class="ht-kalkulator-result-cards">
      <div class="ht-kalkulator-result-card">
        <span class="ht-kalkulator-result-label">Trenutno trošite</span>
        <span class="ht-kalkulator-result-value">
          <span ref="weeklyValue" class="ht-kalkulator-result-number">0</span>
          <span class="ht-kalkulator-result-unit">sati tjedno</span>
        </span>
      </div>

      <div class="ht-kalkulator-result-card">
        <span class="ht-kalkulator-result-label">Mjesečno to je</span>
        <span class="ht-kalkulator-result-value">
          <span ref="monthlyValue" class="ht-kalkulator-result-number">0</span>
          <span class="ht-kalkulator-result-unit">sati</span>
        </span>
      </div>

      <div
        class="ht-kalkulator-result-card ht-kalkulator-result-card-highlight"
      >
        <span class="ht-kalkulator-result-label">Uz AI možete uštedjeti</span>
        <span class="ht-kalkulator-result-value">
          <span
            ref="savingsValue"
            class="ht-kalkulator-result-number ht-kalkulator-result-number-highlight"
            >0</span
          >
          <span class="ht-kalkulator-result-unit">sati mjesečno</span>
        </span>
        <span class="ht-kalkulator-result-phrase"
          >To je {{ results.dynamicPhrase }} radnog vremena!</span
        >
      </div>
    </div>

    <div class="ht-kalkulator-result-cta-placeholder">
      <!-- Placeholder za HT CTA kad dizajn stigne -->
    </div>

    <p class="ht-kalkulator-result-disclaimer">
      Procjene uštede temelje se na industrijskim prosjecima (McKinsey, GitHub,
      Microsoft Work Trend).
    </p>

    <button class="ht-kalkulator-result-restart" @click="$emit('restart')">
      Ponovi kalkulator
    </button>
  </div>
</template>

<script>
export default {
  name: 'HtKalkulatorResult',
  props: {
    results: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rafIds: [],
    }
  },
  mounted() {
    this.animateNumbers()
  },
  beforeDestroy() {
    this.rafIds.forEach((id) => cancelAnimationFrame(id))
  },
  methods: {
    animateNumbers() {
      this.animateValue(this.$refs.weeklyValue, this.results.totalHoursWeekly)
      this.animateValue(this.$refs.monthlyValue, this.results.totalHoursMonthly)
      this.animateValue(this.$refs.savingsValue, this.results.savedHoursMonthly)
    },
    animateValue(el, target) {
      if (!el) return
      const duration = 1200
      const startTime = performance.now()
      const isDecimal = target % 1 !== 0

      const step = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = eased * target

        el.textContent = isDecimal
          ? current.toFixed(1)
          : Math.round(current).toString()

        if (progress < 1) {
          this.rafIds.push(requestAnimationFrame(step))
        }
      }

      this.rafIds.push(requestAnimationFrame(step))
    },
  },
}
</script>

<style scoped>
.ht-kalkulator-result {
  padding: 32px 24px;
  text-align: center;
}

.ht-kalkulator-result-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}

.ht-kalkulator-result-title {
  font-family: 'Lora', serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--tg-primary-text-color, #111);
}

.ht-kalkulator-result-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.ht-kalkulator-result-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  border: 1px solid #eee;
}

.ht-kalkulator-result-card-highlight {
  background: #fef5fa;
  border-color: #e20074;
  border-width: 2px;
}

.ht-kalkulator-result-label {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #777;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ht-kalkulator-result-value {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.ht-kalkulator-result-number {
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: var(--tg-primary-text-color, #111);
  line-height: 1;
}

.ht-kalkulator-result-number-highlight {
  color: #e20074;
}

.ht-kalkulator-result-unit {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  color: #666;
}

.ht-kalkulator-result-phrase {
  font-family: 'Barlow', sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #e20074;
  margin-top: 8px;
}

.ht-kalkulator-result-cta-placeholder {
  min-height: 0;
}

.ht-kalkulator-result-disclaimer {
  font-family: 'Barlow', sans-serif;
  font-size: 12px;
  color: #999;
  line-height: 1.4;
  margin-bottom: 24px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.ht-kalkulator-result-restart {
  background: none;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 24px;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}

.ht-kalkulator-result-restart:hover {
  border-color: #e20074;
  color: #e20074;
}

.ht-kalkulator-result-restart:focus-visible {
  outline: 3px solid #e20074;
  outline-offset: 2px;
}

@media (max-width: 767px) {
  .ht-kalkulator-result {
    padding: 24px 16px;
  }

  .ht-kalkulator-result-number {
    font-size: 32px;
  }

  .ht-kalkulator-result-title {
    font-size: 20px;
  }
}
</style>
