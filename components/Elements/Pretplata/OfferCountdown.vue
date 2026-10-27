<script>
const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export default {
  name: 'OfferCountdown',
  props: {
    // ISO date the offer ends; the counter stops at 00:00:00:00 once reached
    endDate: {
      type: String,
      default: '2026-11-30T23:59:59+01:00',
    },
    title: {
      type: String,
      default: 'Ponuda istječe za:',
    },
    // shown under the title; defaults to the end date formatted for Croatia
    subtitle: {
      type: String,
      default: '',
    },
    timeZone: {
      type: String,
      default: 'Europe/Zagreb',
    },
  },
  data() {
    return {
      // rendered as "00" on the server; mounted() fills in the real values
      remaining: 0,
      timer: null,
    }
  },
  computed: {
    endTime() {
      return new Date(this.endDate).getTime()
    },
    units() {
      const ms = Math.max(0, this.remaining)
      return [
        { value: Math.floor(ms / DAY), label: 'dana' },
        { value: Math.floor((ms % DAY) / HOUR), label: 'sati' },
        { value: Math.floor((ms % HOUR) / MINUTE), label: 'min' },
        { value: Math.floor((ms % MINUTE) / SECOND), label: 'sek' },
      ].map((unit) => ({ ...unit, text: String(unit.value).padStart(2, '0') }))
    },
    expired() {
      return this.remaining <= 0
    },
    dateLabel() {
      if (this.subtitle) return this.subtitle
      const parts = {}
      new Intl.DateTimeFormat('hr-HR', {
        timeZone: this.timeZone,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hourCycle: 'h23', // hour12:false can yield 24:59:59 in V8
      })
        .formatToParts(new Date(this.endTime))
        .forEach((part) => {
          parts[part.type] = part.value
        })
      return `${parts.day}.${parts.month}.${parts.year}. u ${parts.hour}:${parts.minute}:${parts.second}`
    },
  },
  mounted() {
    this.tick()
    this.timer = setInterval(this.tick, SECOND)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    tick() {
      this.remaining = this.endTime - Date.now()
      if (this.remaining <= 0) {
        this.remaining = 0
        clearInterval(this.timer)
        this.$emit('expired')
      }
    },
  },
}
</script>

<template>
  <section class="countdown" :class="{ 'countdown--expired': expired }">
    <div class="cd-wrap">
      <div class="cd-label">
        <p class="cd-title">{{ title }}</p>
        <p class="cd-date">{{ dateLabel }}</p>
      </div>
      <div class="cd-metrics" role="timer" aria-live="off">
        <template v-for="(unit, index) in units">
          <span v-if="index" :key="`sep-${index}`" class="cd-sep"></span>
          <span :key="unit.label" class="cd-metric">
            <span class="cd-metric__value">{{ unit.text }}</span>
            <span class="cd-metric__label">{{ unit.label }}</span>
          </span>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
 * Figma "Pretplata Landing — Active"
 *   desktop node 2328:3433 — label left, metrics right, 32px vertical padding
 *   mobile  node 2377:829  — stacked, hairlines above and below
 */
.countdown {
  width: 100%;
  background-color: #000;
  color: #f5f5f7;
  border-top: 1px solid #2b2b2b;
  border-bottom: 1px solid #2b2b2b;
}
.cd-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 16px;
}
.cd-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cd-title {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.2px;
  color: #f5f5f7;
}
.cd-date {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #86868b;
}
.cd-metrics {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  width: 100%;
}
.cd-metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  white-space: nowrap;
}
.cd-metric__value {
  font-size: 36px;
  line-height: 1;
  letter-spacing: -0.576px;
  color: #fff;
  font-variant-numeric: tabular-nums;
}
.cd-metric__label {
  font-size: 14px;
  line-height: 18px;
  color: #86868b;
}
.cd-sep {
  flex: 0 0 1px;
  width: 1px;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.16);
}

@media (min-width: 1024px) {
  .countdown {
    border-top: none;
    border-bottom: none;
  }
  .cd-wrap {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 32px 0;
  }
  .cd-label {
    gap: 6px;
  }
  .cd-date {
    font-size: 17px;
    line-height: 22px;
  }
  .cd-metrics {
    justify-content: flex-end;
    gap: 20px;
    width: auto;
  }
  .cd-metric__value {
    font-size: 48px;
  }
}
</style>
