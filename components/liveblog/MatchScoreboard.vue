<template>
  <div
    class="match-scoreboard"
    :class="{ 'match-scoreboard--finished': isFinished }"
    role="region"
    aria-label="Rezultat utakmice"
  >
    <div class="match-scoreboard__status">
      <span
        class="match-scoreboard__state"
        :class="{ 'match-scoreboard__state--live': isLive }"
        >{{ statusLabel }}</span
      >
    </div>

    <div class="match-scoreboard__teams">
      <span class="match-scoreboard__team match-scoreboard__team--home">{{
        scoreboard.home
      }}</span>
      <span class="match-scoreboard__score"
        >{{ scoreboard.home_score }}<span class="match-scoreboard__dash">–</span
        >{{ scoreboard.away_score }}</span
      >
      <span class="match-scoreboard__team match-scoreboard__team--away">{{
        scoreboard.away
      }}</span>
    </div>

    <div
      v-if="hasScorers"
      class="match-scoreboard__scorers"
      aria-label="Strijelci"
    >
      <ul
        class="match-scoreboard__scorer-list match-scoreboard__scorer-list--home"
      >
        <li v-for="(s, i) in scoreboard.home_scorers" :key="'h' + i">
          {{ s.name
          }}<span v-if="s.minute" class="match-scoreboard__scorer-minute">
            {{ s.minute }}'</span
          >
        </li>
      </ul>
      <ul
        class="match-scoreboard__scorer-list match-scoreboard__scorer-list--away"
      >
        <li v-for="(s, i) in scoreboard.away_scorers" :key="'a' + i">
          <span v-if="s.minute" class="match-scoreboard__scorer-minute"
            >{{ s.minute }}' </span
          >{{ s.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const STATUS_LABELS = {
  live: 'Uživo',
  finished: 'Kraj',
}

export default {
  name: 'MatchScoreboard',
  props: {
    scoreboard: { type: Object, required: true },
  },
  computed: {
    status() {
      return this.scoreboard.status || 'live'
    },
    isLive() {
      return this.status === 'live'
    },
    isFinished() {
      return this.status === 'finished'
    },
    statusLabel() {
      return STATUS_LABELS[this.status] || STATUS_LABELS.live
    },
    hasScorers() {
      const h = this.scoreboard.home_scorers || []
      const a = this.scoreboard.away_scorers || []
      return h.length > 0 || a.length > 0
    },
  },
}
</script>

<style scoped>
.match-scoreboard {
  position: sticky;
  /* Pins to the top of the viewport while reading the commentary below.
     If the site header is fixed on this view, raise this offset to its height. */
  top: 0;
  z-index: 20;
  max-width: 710px;
  margin: 20px auto;
  padding: 12px 16px 14px;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}
.match-scoreboard--finished {
  filter: grayscale(0.15);
}
.match-scoreboard__status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 6px;
}
.match-scoreboard__state {
  font: 700 12px/1 'Barlow', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #888;
}
.match-scoreboard__state--live {
  position: relative;
  padding-left: 16px;
  color: #ae3737;
}
.match-scoreboard__state--live::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 9px;
  height: 9px;
  margin-top: -4.5px;
  border-radius: 50%;
  background: #ae3737;
  animation: scoreboard_pulse 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
@keyframes scoreboard_pulse {
  0%,
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}
.match-scoreboard__minute {
  font: 700 13px/1 'Barlow', sans-serif;
  color: #ae3737;
  font-variant-numeric: tabular-nums;
}
.match-scoreboard__teams {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
}
.match-scoreboard__team {
  font: 700 21px/1.2 'Merriweather', serif;
  color: #1a1a1a;
}
.match-scoreboard__team--home {
  text-align: right;
}
.match-scoreboard__team--away {
  text-align: left;
}
.match-scoreboard__score {
  font: 800 24px/1 'Barlow', sans-serif;
  color: #111;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.match-scoreboard__dash {
  margin: 0 6px;
  color: #999;
}
.match-scoreboard__scorers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid #f0f0f0;
}
.match-scoreboard__scorer-list {
  list-style: none;
  margin: 0;
  padding: 0;
  font: 500 15px/1.5 'Barlow', sans-serif;
  color: #444;
}
.match-scoreboard__scorer-list li {
  list-style: none;
  list-style-type: none;
}
.match-scoreboard__scorer-list--home {
  text-align: right;
}
.match-scoreboard__scorer-list--away {
  text-align: left;
}
.match-scoreboard__scorer-minute {
  color: #999;
  font-variant-numeric: tabular-nums;
}
@media (max-width: 480px) {
  .match-scoreboard__team {
    font-size: 18px;
  }
  .match-scoreboard__score {
    font-size: 22px;
  }
  .match-scoreboard__scorer-list {
    font-size: 14px;
  }
}
</style>
