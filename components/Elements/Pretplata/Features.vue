<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Features',
  components: { VueSlickCarousel },

  props: {
    cards: {
      type: Array,
      default: null,
    },
    sectionTitle: {
      type: String,
      default: 'Što dobivate pretplatom:',
    },
  },

  data() {
    return {
      activeIndex: 0,
      isTransitioning: false,
      wheelDelta: 0,
      scrollThreshold: 70,
      scrollCooldown: 600,
      decayTimer: null,
      isInSection: false,
      isTrackpad: false,
      wheelCount: 0,
      wheelTimer: null,

      defaultCards: [
        {
          title: 'Cjelogodišnji pristup vrhunskom novinarstvu',
          text: 'Čitajte sve članke bez ograničenja - od istraživačkih priča do analiza koje oblikuju javni razgovor u Hrvatskoj.',
          image: require('@/assets/img/pretplata/features/pristup.png'),
        },
        {
          title: 'Neovisno i nagrađivano novinarstvo',
          text: 'Pretplatom podržavate redakciju koja je višestruko nagrađivana za istraživačko i analitičko novinarstvo.',
          image: require('@/assets/img/pretplata/features/neovisno.png'),
        },
        {
          title: 'Relevantne analize i komentari',
          text: 'Analize onoga što se zapravo događa - kroz tekstove koji idu dublje od naslova.',
          image: require('@/assets/img/pretplata/features/relevantne.png'),
        },
        {
          title: 'Bez reklama u sklopu Premium pretplate',
          text: 'Uživajte u čistom, preglednom čitanju - bez ometajućih reklama. Samo informacije koje vrijede vašeg vremena.',
          image: require('@/assets/img/pretplata/features/reklame.png'),
        },
        {
          title: 'Pristup Telegram klubu i pogodnostima',
          text: 'U Telegram Klubu vas očekuju dodatne pogodnosti, posebni popusti i pozivnice na ekskluzivne događaje.',
          image: require('@/assets/img/pretplata/features/klub.png'),
        },
      ],
    }
  },

  computed: {
    activeCards() {
      return this.cards || this.defaultCards
    },
  },

  mounted() {
    this.initScrollJacking()
    this.initMouseTracking()
  },

  beforeDestroy() {
    this.destroyScrollJacking()
    this.destroyMouseTracking()
  },

  methods: {
    initScrollJacking() {
      this.handleWheel = this.handleWheel.bind(this)
      window.addEventListener('wheel', this.handleWheel, { passive: false })
    },

    destroyScrollJacking() {
      if (this.handleWheel) {
        window.removeEventListener('wheel', this.handleWheel)
      }
      clearTimeout(this.decayTimer)
      clearTimeout(this.wheelTimer)
    },

    initMouseTracking() {
      if (window.innerWidth < 1024) return

      this.handleMouseMove = this.handleMouseMove.bind(this)
      this.handleMouseLeave = this.handleMouseLeave.bind(this)

      if (this.$refs.sectionRef) {
        this.$refs.sectionRef.addEventListener('mouseenter', () => {
          this.isInSection = true
        })
        this.$refs.sectionRef.addEventListener(
          'mouseleave',
          this.handleMouseLeave
        )
        window.addEventListener('mousemove', this.handleMouseMove)
      }
    },

    destroyMouseTracking() {
      if (this.$refs.sectionRef) {
        this.$refs.sectionRef.removeEventListener('mouseenter', () => {
          this.isInSection = true
        })
        this.$refs.sectionRef.removeEventListener(
          'mouseleave',
          this.handleMouseLeave
        )
      }
      window.removeEventListener('mousemove', this.handleMouseMove)
    },

    handleMouseMove(e) {
      if (!this.$refs.sectionRef) return

      const rect = this.$refs.sectionRef.getBoundingClientRect()
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      if (!isInside && this.isInSection) {
        this.isInSection = false
      }
    },

    handleMouseLeave() {
      this.isInSection = false
    },

    handleWheel(e) {
      if (window.innerWidth < 1024) return

      if (!this.isInSection) return

      this.detectTrackpad(e)

      const delta = this.normalizeWheelDelta(e)

      const isScrollingDown = delta > 0
      const isScrollingUp = delta < 0
      const isAtLastCard = this.activeIndex === this.activeCards.length - 1
      const isAtFirstCard = this.activeIndex === 0

      if (
        (isScrollingDown && isAtLastCard) ||
        (isScrollingUp && isAtFirstCard)
      ) {
        return
      }

      e.preventDefault()

      if (this.isTransitioning) return

      this.wheelDelta += delta

      if (Math.abs(this.wheelDelta) >= this.scrollThreshold) {
        if (
          this.wheelDelta > 0 &&
          this.activeIndex < this.activeCards.length - 1
        ) {
          this.goToCard(this.activeIndex + 1)
        } else if (this.wheelDelta < 0 && this.activeIndex > 0) {
          this.goToCard(this.activeIndex - 1)
        }

        this.wheelDelta = 0
      }

      if (
        (this.wheelDelta > 0 && delta < 0) ||
        (this.wheelDelta < 0 && delta > 0)
      ) {
        this.wheelDelta = delta
      }

      this.startMomentumDecay()
    },

    detectTrackpad(e) {
      clearTimeout(this.wheelTimer)
      this.wheelCount++

      this.wheelTimer = setTimeout(() => {
        this.isTrackpad = this.wheelCount > 10
        this.wheelCount = 0
      }, 100)
    },

    normalizeWheelDelta(e) {
      let delta = 0

      if (e.deltaY) {
        delta = e.deltaY
      } else if (e.wheelDelta) {
        delta = -e.wheelDelta
      } else if (e.detail) {
        delta = e.detail * 40
      }

      if (this.isTrackpad) {
        delta = delta * 0.5
      }

      return Math.max(-100, Math.min(100, delta))
    },

    startMomentumDecay() {
      clearTimeout(this.decayTimer)
      this.decayTimer = setTimeout(() => {
        this.wheelDelta *= 0.8
        if (Math.abs(this.wheelDelta) < 1) {
          this.wheelDelta = 0
        }
      }, 50)
    },
    goToCard(index) {
      if (this.isTransitioning) return

      if (
        index < 0 ||
        index >= this.activeCards.length ||
        index === this.activeIndex
      ) {
        return
      }

      this.isTransitioning = true
      this.lastScrollTime = Date.now()

      this.activeIndex = index

      setTimeout(() => {
        this.isTransitioning = false
      }, this.scrollCooldown)
    },
  },
}
</script>

<template>
  <div ref="sectionRef" class="main">
    <div class="wrapper">
      <span class="title">{{ sectionTitle }}</span>
      <div class="desktop-content">
        <div v-if="activeCards[activeIndex].image" class="activeImage">
          <transition name="fade-img" mode="out-in">
            <img
              :key="activeCards[activeIndex].image"
              :src="activeCards[activeIndex].image"
              :alt="activeCards[activeIndex].title || ''"
            />
          </transition>
        </div>
        <div class="desktop-cards">
          <div
            v-for="(card, index) in activeCards"
            :key="index"
            class="desktop-card"
            @click="goToCard(index)"
            :class="{ active: activeIndex === index }"
          >
            <span v-if="card.title">{{ card.title }}</span>
            <p v-if="card.text">{{ card.text }}</p>
          </div>
        </div>
      </div>
      <div class="mobile-content">
        <vue-slick-carousel
          :slides-to-show="1"
          :slides-to-scroll="1"
          :variable-width="true"
          :center-mode="false"
          :swipe="true"
          :arrows="false"
          :dots="false"
        >
          <div v-for="(card, index) in activeCards" :key="index" class="card">
            <img
              v-if="card.image"
              class="card-image"
              :src="card.image"
              alt=""
            />
            <div class="card-content">
              <span v-if="card.title">{{ card.title }}</span>
              <p v-if="card.text">{{ card.text }}</p>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 16px;
}
.wrapper {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 4px 0px 40px 0px;
}
.wrapper .title {
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  font-weight: 500;
  color: #000000;
}
.mobile-content {
  display: block;
  margin-bottom: 40px;
}
.desktop-content {
  display: none;
}
.card {
  max-width: 285px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-right: 21px;
  gap: 16px;
}

.card-image {
  width: 100%;
  object-fit: cover;
  height: 100%;
  aspect-ratio: 1;
}
.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
}
.card-content span {
  font-family: 'Barlow', serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #000000;
}
.card-content p {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #000000;
}

.card {
  box-sizing: border-box;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  margin-top: 1rem;
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 20px 0px 64px 0px;
  }
  .fade-img-enter-active,
  .fade-img-leave-active {
    transition: opacity 0.45s ease-out, transform 0.45s ease-out;
    position: absolute;
    inset: 0;
  }

  .fade-img-enter-from,
  .fade-img-leave-to {
    opacity: 0;
    transform: scale(0.97);
  }

  .fade-img-enter-to,
  .fade-img-leave-from {
    opacity: 1;
    transform: scale(1);
  }
  .wrapper {
    gap: 60px;
  }
  .wrapper .title {
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
  }
  .mobile-content {
    display: none;
  }
  .desktop-content {
    display: flex;
    flex-direction: row;
    gap: 48px;
  }
  .activeImage {
    width: 100%;
    max-width: 470px;
    aspect-ratio: 1;
    overflow: hidden;
    position: relative;
  }
  .activeImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .desktop-cards {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .desktop-card {
    padding: 2px 0px 2px 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #747474;
    cursor: pointer;
    transition: color 0.25s ease, border-left 0.25s ease, transform 0.25s ease;
  }
  .desktop-card p {
    max-width: 370px;
  }
  .desktop-card:hover {
    transform: translateX(6px);
  }
  .desktop-card.active {
    color: #000000;
    transform: translateX(0);
    border-left: 4px solid black;
  }
  .desktop-card span {
    font-family: 'Barlow', serif;
    font-size: 18px;
    line-height: 28px;
  }
  .desktop-card p {
    font-family: 'Barlow', sans-serif;
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
