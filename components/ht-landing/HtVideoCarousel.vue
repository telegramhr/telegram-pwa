<template>
  <section class="ht-videos">
    <div class="ht-videos__inner">
      <div class="ht-videos__header">
        <div class="ht-videos__heading">
          <h2 class="ht-videos__title">Koliko vremena zapravo štedi AI?</h2>
          <p class="ht-videos__subtitle">
            Usporedili smo svakodnevne zadatke s umjetnom inteligencijom i bez
            nje.
          </p>
        </div>
        <div class="ht-videos__nav">
          <button
            class="ht-videos__arrow"
            :class="canScrollPrev ? 'is-enabled' : 'is-disabled'"
            type="button"
            :disabled="!canScrollPrev"
            aria-label="Prethodni"
            @click="scrollByCard(-1)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5" />
              <path d="m11 18-6-6 6-6" />
            </svg>
          </button>
          <button
            class="ht-videos__arrow"
            :class="canScrollNext ? 'is-enabled' : 'is-disabled'"
            type="button"
            :disabled="!canScrollNext"
            aria-label="Sljedeći"
            @click="scrollByCard(1)"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref="track"
        class="ht-videos__track"
        role="group"
        aria-label="Video serijale"
        tabindex="0"
      >
        <article
          v-for="(video, index) in videos"
          :key="index"
          class="ht-video-card"
        >
          <a
            class="ht-video-card__thumb"
            :href="video.link || '#'"
            :aria-label="`Pogledaj video: ${video.title}`"
          >
            <img :src="video.image" alt="" loading="lazy" />
            <span class="ht-video-card__play" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </a>
          <div class="ht-video-card__content">
            <span class="ht-video-card__cat">VIDEO</span>
            <h3 class="ht-video-card__title">{{ video.title }}</h3>
            <p class="ht-video-card__desc">{{ video.description }}</p>
            <a
              class="ht-video-card__btn"
              :href="video.link || '#'"
              :aria-label="`Pogledaj video: ${video.title}`"
            >
              <span>Pogledaj</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HtVideoCarousel',
  data() {
    return {
      videos: [
        {
          title: 'Neki naslov o videu ide ovdje',
          description:
            'Lorem ipsum dolor sit amet lorem psum dolor sit amet lorem psum dolor sit amet lorem',
          image: '/ht-landing/video-1.jpg',
          link: '#',
        },
        {
          title: 'Neki naslov o videu ide ovdje',
          description:
            'Lorem ipsum dolor sit amet lorem psum dolor sit amet lorem psum dolor sit amet lorem',
          image: '/ht-landing/video-2.jpg',
          link: '#',
        },
        {
          title: 'Neki naslov o videu ide ovdje',
          description:
            'Lorem ipsum dolor sit amet lorem psum dolor sit amet lorem psum dolor sit amet lorem',
          image: '/ht-landing/video-3.jpg',
          link: '#',
        },
        {
          title: 'Neki naslov o videu ide ovdje',
          description:
            'Lorem ipsum dolor sit amet lorem psum dolor sit amet lorem psum dolor sit amet lorem',
          image: '/ht-landing/video-4.jpg',
          link: '#',
        },
      ],
      canScrollPrev: false,
      canScrollNext: true,
    }
  },
  mounted() {
    this.$nextTick(this.initScrollState)
  },
  beforeDestroy() {
    const track = this.$refs.track
    if (track) track.removeEventListener('scroll', this.onScrollOrResize)
    window.removeEventListener('resize', this.onScrollOrResize)
    if (this._raf) cancelAnimationFrame(this._raf)
  },
  methods: {
    initScrollState() {
      const track = this.$refs.track
      if (!track) return
      track.addEventListener('scroll', this.onScrollOrResize, {
        passive: true,
      })
      window.addEventListener('resize', this.onScrollOrResize)
      this.updateScrollState()
    },
    onScrollOrResize() {
      // Coalesce bursty scroll/resize into one layout read per frame.
      if (this._raf) return
      this._raf = requestAnimationFrame(() => {
        this._raf = null
        this.updateScrollState()
      })
    },
    updateScrollState() {
      const track = this.$refs.track
      if (!track) return
      this.canScrollPrev = track.scrollLeft > 1
      this.canScrollNext =
        track.scrollLeft + track.clientWidth < track.scrollWidth - 2
    },
    scrollByCard(direction) {
      const track = this.$refs.track
      if (!track) return
      const card = track.querySelector('.ht-video-card')
      const gap = 20
      const amount = card ? card.offsetWidth + gap : track.clientWidth * 0.8
      track.scrollBy({ left: direction * amount, behavior: 'smooth' })
    },
  },
}
</script>

<style scoped>
.ht-videos {
  width: 100%;
  background: var(--ht-dark, #2e2b26);
  padding: 56px 16px;
}
.ht-videos__inner {
  max-width: 1240px;
  margin: 0 auto;
}
.ht-videos__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
}
.ht-videos__heading {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ht-videos__title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 28px;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;
  /* Trim the line-height leading so the 20px gap is measured cap-to-baseline,
     matching the Figma text-box-trim spec (cap / alphabetic). */
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}
.ht-videos__subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  color: #ffffff;
  margin: 0;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}
.ht-videos__nav {
  /* Mobile/tablet: no page switcher — cards are swipe-scrollable. */
  display: none;
  gap: 12px;
  flex-shrink: 0;
}
.ht-videos__arrow {
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;
}
.ht-videos__arrow:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 2px;
}
/* Enabled = magenta (can scroll that way). Disabled = gray w/ magenta
   border (nothing further in that direction). */
.ht-videos__arrow.is-enabled {
  background: var(--ht-magenta, #e2007a);
  border: none;
  cursor: pointer;
}
.ht-videos__arrow.is-enabled:hover {
  background: var(--ht-magenta-hover, #c1006a);
}
.ht-videos__arrow.is-disabled {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--ht-magenta, #e2007a);
  cursor: default;
}

/* Native scroll-snap carousel: flush-left, scrolls right, no infinite loop. */
.ht-videos__track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  /* room so card shadows / focus rings aren't clipped */
  padding-bottom: 4px;
}
.ht-videos__track::-webkit-scrollbar {
  display: none;
}

.ht-video-card {
  flex: 0 0 auto;
  scroll-snap-align: start;
  /* Mobile: one card + a peek of the next. */
  width: 78%;
  display: flex;
  flex-direction: column;
  background: #24211c;
  border-radius: 16px;
  overflow: hidden;
}
.ht-video-card__thumb {
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 296 / 220;
  overflow: hidden;
  background: #1a1714;
}
.ht-video-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.ht-video-card__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #000000;
  color: #ffffff;
}
.ht-video-card__play svg {
  margin-left: 2px;
}
.ht-video-card__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 20px 24px;
  flex: 1;
}
.ht-video-card__cat {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ht-magenta, #e2007a);
}
.ht-video-card__title {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 1.25;
  color: #ffffff;
  margin: 0;
}
.ht-video-card__desc {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  color: #9c968e;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
.ht-video-card__btn {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-radius: 28px;
  color: var(--ht-magenta, #e2007a);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}
.ht-video-card__btn:hover {
  opacity: 0.9;
}

/* Tablet (treated like mobile: no arrows, swipe). Two cards + a peek of the
   next so it's clear the row scrolls. */
@media (min-width: 680px) {
  .ht-video-card {
    width: 42%;
  }
}

/* Desktop: three cards visible, wider gutters. */
@media (min-width: 1024px) {
  .ht-videos {
    padding: 94px 100px;
  }
  .ht-videos__header {
    margin-bottom: 40px;
  }
  .ht-videos__title {
    font-size: 32px;
  }
  .ht-videos__subtitle {
    font-size: 22px;
  }
  .ht-videos__nav {
    display: flex;
  }
  .ht-video-card {
    width: calc((100% - 40px) / 3);
  }
}
</style>
