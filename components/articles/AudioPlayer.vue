<template>
  <div class="audio-wrapper">
    <!-- TOP / IDLE ROW -->
    <div v-if="!hasStarted" class="audio-idle">
      <button class="icon-btn" @click="togglePlay">
        <PlayIcon />
      </button>

      <span class="idle-text">
        Poslušajte ovaj članak · {{ formattedDuration }} min
      </span>
    </div>

    <!-- PLAYING ROW -->
    <div v-else class="audio-active">
      <button class="icon-btn" @click="togglePlay">
        <PauseIcon v-if="isPlaying" />
        <PlayIcon v-else />
      </button>

      <span class="time">{{ formattedCurrent }}</span>

      <div class="progress" @click="seek">
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: progress + '%' }" />
          <span
            class="progress-dot"
            :style="{ left: progress + '%' }"
            @mousedown="startDrag"
            @touchstart="startDrag"
          />
        </div>
      </div>

      <span class="time">
        {{ formattedDuration }}
      </span>

      <div class="info-wrap">
        <span
          class="info"
          tabindex="0"
          aria-describedby="audio-info"
          @mouseenter="handleInfoHover(true)"
          @mouseleave="handleInfoHover(false)"
          @click="handleInfoClick"
        >
          i
        </span>

        <div
          v-if="showInfo"
          class="info-overlay"
          @click="showInfo = false"
        ></div>

        <div v-if="showInfo" id="audio-info" class="tooltip">
          <button class="close-button" @click="showInfo = false">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13M1 1L13 13"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p class="tooltip-title">Više informacija</p>
          <p class="tooltip-text">
            Telegram sudjeluje u inicijativi koju podržava Open Society
            Institute - Sofia i sufinancira Europska unija u okviru projekta
            <a href="https://osis.bg/?p=4914&lang=en" target="_blank"
              >Media Resilience</a
            >. Stavovi i mišljenja izneseni u ovom materijalu pripadaju
            Resilience. Stavovi i mišljenja izneseni u ovom materijalu pripadaju
            isključivo autoru/autorima i ne odražavaju nužno stavove Europske
            unije, Europske izvršne agencije za obrazovanje i kulturu (EACEA)
            ili Open Society Institute - Sofia (OSIS). Europska unija, EACEA
            niti OSIS ne mogu se smatrati odgovornima za njih.
          </p>
        </div>
      </div>
    </div>

    <!-- AUDIO -->
    <audio
      ref="audio"
      preload="metadata"
      @loadedmetadata="onLoadedMetadata"
      @timeupdate="onTimeUpdate"
      @ended="onEnded"
    >
      <source :src="src" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
  },

  data() {
    return {
      hasStarted: false,
      isPlaying: false,
      duration: 0,
      currentTime: 0,
      showInfo: false,
      isDragging: false,
    }
  },

  computed: {
    progress() {
      if (!this.duration) return 0
      return (this.currentTime / this.duration) * 100
    },

    formattedDuration() {
      return this.formatTime(this.duration)
    },

    formattedCurrent() {
      return this.formatTime(this.currentTime)
    },

    formattedRemaining() {
      return this.formatTime(Math.max(this.duration - this.currentTime, 0))
    },
  },

  methods: {
    togglePlay() {
      const audio = this.$refs.audio

      if (!this.hasStarted) {
        this.hasStarted = true
      }

      if (audio.paused) {
        audio.play()
        this.isPlaying = true
      } else {
        audio.pause()
        this.isPlaying = false
      }
    },

    onLoadedMetadata() {
      this.duration = this.$refs.audio.duration
    },

    onTimeUpdate() {
      this.currentTime = this.$refs.audio.currentTime
    },

    seek(e) {
      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      this.$refs.audio.currentTime = percent * this.duration
    },

    onEnded() {
      this.isPlaying = false
      this.currentTime = 0
    },

    startDrag(e) {
      e.preventDefault()
      e.stopPropagation()
      this.isDragging = true

      const handleMove = (moveEvent) => {
        if (!this.isDragging) return

        const progressEl =
          moveEvent.target.closest('.progress') ||
          document.querySelector('.progress')
        if (!progressEl) return

        const rect = progressEl.getBoundingClientRect()
        const clientX = moveEvent.clientX || moveEvent.touches?.[0]?.clientX
        const percent = Math.max(
          0,
          Math.min(1, (clientX - rect.left) / rect.width)
        )
        this.$refs.audio.currentTime = percent * this.duration
      }

      const handleEnd = () => {
        this.isDragging = false
        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('mouseup', handleEnd)
        document.removeEventListener('touchmove', handleMove)
        document.removeEventListener('touchend', handleEnd)
      }

      document.addEventListener('mousemove', handleMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleMove)
      document.addEventListener('touchend', handleEnd)
    },

    formatTime(sec) {
      const m = Math.floor(sec / 60)
      const s = Math.floor(sec % 60)
        .toString()
        .padStart(2, '0')
      return `${m}:${s}`
    },

    handleInfoHover(show) {
      // Only handle hover on desktop (>480px)
      if (window.innerWidth > 480) {
        this.showInfo = show
      }
    },

    handleInfoClick() {
      // Toggle on mobile (≤480px), no action on desktop
      if (window.innerWidth <= 480) {
        this.showInfo = !this.showInfo
      }
    },
  },
}
</script>

<style scoped>
.audio-wrapper {
  max-width: 100%;
  font-family: 'Barlow', sans-serif;
}

.audio-idle,
.audio-active {
  display: flex;
  align-items: center;
  gap: 8px;
}

@media (max-width: 480px) {
  .audio-wrapper {
    width: 100%;
  }
}
@media (min-width: 481px) {
  .audio-idle,
  .audio-active {
    max-width: 300px;
  }
}
.audio-idle {
  font-size: 15px;
}

.icon-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #9f9f9f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.idle-text {
  color: #333;
}

.time {
  font-size: 14px;
  color: #444;
  margin-right: 8px;
  width: 24px;
}

.progress {
  flex: 1;
  cursor: pointer;
}

.progress-track {
  position: relative;
  height: 8px;
  background: #f0d9c5;
  border-radius: 2px;
}

.progress-fill {
  position: absolute;
  height: 100%;
  background: #343434;
  left: 0;
  top: 0;
}

.progress-dot {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: #343434;
  border-radius: 50%;
  cursor: grab;
  transition: transform 0.1s ease;
}

.progress-dot:hover {
  transform: translate(-50%, -50%) scale(1.2);
}

.progress-dot:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.1);
}

.remaining {
  opacity: 0.7;
}
.info-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.info {
  width: 18px;
  height: 18px;
  border: 1px solid #777;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
}

.tooltip {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: center;
  position: absolute;
  top: 24px;
  right: 0;
  width: 300px;
  padding: 12px;
  background: #fff;
  color: #000;
  font-size: 13px;
  line-height: 1.4;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

@media (max-width: 480px) {
  .tooltip {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    transform: none;
    width: 100%;
    max-width: 100%;
    border-radius: 16px 16px 0 0;
    padding: 16px;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);
    z-index: 10002;
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }
}
.tooltip a {
  text-decoration: underline;
}

/* Tooltip arrow */
.tooltip::after {
  content: '';
  position: absolute;
  top: -6px;
  right: 12px;
  width: 10px;
  height: 10px;
  background: #fff;
  transform: rotate(45deg);
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.05);
}

@media (max-width: 480px) {
  .tooltip::after {
    display: none;
  }
}

.close-button {
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10;
}

.close-button svg {
  display: block;
}

@media (max-width: 480px) {
  .close-button {
    display: block;
  }
}

.info-overlay {
  display: none;
}

@media (max-width: 480px) {
  .info-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10001;
  }
}

.tooltip-title {
  display: none;
}

.tooltip-text {
  margin: 0;
}

@media (max-width: 480px) {
  .tooltip-title {
    display: block;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 16px 0;
    color: #000;
  }

  .tooltip-text {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    margin: 0;
  }
}

/* Dark mode styles */
body.dark-mode .tooltip {
  background: #000;
  color: #fff;
}

body.dark-mode .tooltip-title,
body.dark-mode .tooltip-text {
  color: #fff;
}

body.dark-mode .tooltip a {
  color: #fff;
}

body.dark-mode .close-button svg path {
  stroke: #fff;
}

/* AudioPlayer dark mode styles */
body.dark-mode .idle-text {
  color: #fff;
}

body.dark-mode .icon-btn {
  border-color: #fff;
}

body.dark-mode .icon-btn svg path {
  stroke: #fff;
  fill: #fff;
}

body.dark-mode .time {
  color: #fff;
}

body.dark-mode .progress-track {
  background: #444;
}

body.dark-mode .progress-fill {
  background: #fff;
}

body.dark-mode .progress-dot {
  background: #fff;
}

body.dark-mode .info {
  border-color: #fff;
  color: #fff;
}
</style>
