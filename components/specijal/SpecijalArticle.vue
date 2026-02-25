<template>
  <div>
    <article class="main-container specijal-page specijal-article-page">
      <!-- Hero -->
      <header class="specijal-article-hero" role="banner">
        <img
          v-if="post.image && post.image.url"
          :src="post.image.url"
          :alt="post.image.alt || post.title"
          class="specijal-article-hero-img"
        />
        <div class="specijal-article-hero-overlay">
          <svg
            class="specijal-article-hero-logo"
            viewBox="0 0 499.7 58.7"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Telegram.hr"
          >
            <g fill="#FFFFFF">
              <path
                d="M104.3,36.3c0,0.3-1.5,10.4-8.3,10.4H85.3V33.4h13.9V22.2H85.3v-10h13.5c1.5,0.2,2.7,0.8,3.6,1.7c1.4,1.4,1.8,3.3,1.9,4.3l0.2,2.3l9.7-0.1V0.1H98.5H64.6v12.1h5.7v34.4h-5.7v12h49.6V34.1h-9.7L104.3,36.3z"
              />
              <path
                d="M214.2,36.2c0,0.3-1.5,10.4-8.3,10.4h-10.7V33.3H209V22.2h-13.9v-10h13.5c1.5,0.2,2.7,0.8,3.6,1.7c1.4,1.4,1.8,3.3,1.9,4.3l0.2,2.3l9.7-0.1V0.1h-15.7h-33.9v12.1h5.7v34.4h-5.7v12H224V34h-9.7L214.2,36.2z"
              />
              <path
                d="M157.2,32.5c0,0.6-1.2,13.6-6.8,14h-8.7V12.1h5.4V0h-27.7v12.1h6.2v34.4h-4.5v12.1h47V30.2h-10.8L157.2,32.5z"
              />
              <path
                d="M260.7,36.6h8.4v1.3c-0.4,5.8-7.3,6.5-10.2,6.5h-0.1c-2.8,0-7-1.4-10.1-4.5c-2.6-2.6-4.1-6.2-4.1-10.2c0.2-7.8,4.6-15.6,13.9-15.6h0.4c2.9,0.1,6.8,1.2,8.8,3.1c0.4,0.4,0.8,0.9,1,1.4l0.7,1.4H282l0-18.8h-13.7v0.5c-3-1.1-5.9-1.7-8.8-1.7c-0.4,0-0.7,0-1,0c-0.2,0-0.2,0-0.3,0c-7.5,0-14.5,3-19.5,8.4S231,21.2,231,29.2c0,8.3,3.1,16,8.8,21.6c4.7,4.7,10.8,7.5,16.6,7.7c5.3,0.2,9-0.3,12.6-1.5v1.5h14.1v-22h5v-11h-27.4L260.7,36.6z"
              />
              <path
                d="M0,26.1h12.2v-2.5c-0.1-5,0.8-8.4,2.5-10.2c1-1.1,2-1.1,2.2-1.1h2.7v34.3h-8.7v12.1h38.8V46.8H38.6V12.4h1.6h0.4c1.5,0,2.6,0.4,3.6,1.4c1.8,1.8,2.7,5,2.9,10l0.1,2.4h11.7V0.3H0V26.1z"
              />
              <path
                d="M341.1,35.4c7.7-3.3,11.5-8.9,11.6-17.1c0-4.8-1.4-8.7-4.2-11.6c-6.1-6.1-17.1-6.6-29.9-6.6h-29v12.1h7.6v34.3h-7.5v12h31.2l0.1-12.1h-6.4v-7.9h11.7l10,19.9h17.1v-12l-6.2-0.1L341.1,35.4z M314.6,12.2h0.9c1.3,0,2.8,0,4.4,0h1.2c4.7,0,5.5,0,5.7,0h0.6c3,0.1,6.8,0.5,8.8,2.5c1,1,1.5,2.5,1.5,4.2c0,4.4-1.7,7.3-9.8,7.3c-1.2,0-2.3,0-3.3,0h-0.3c-0.5,0-1,0-1.4,0c-4,0-6.7,0-8.4,0L314.6,12.2z"
              />
              <path
                d="M402.6,12.2h6.2v-12h-37.5v12l7-0.1l-15.1,34.4h-4.3v12h28.7v-12h-7.5l1.8-3.9h17.3l1.8,3.9h-7v12.1h28.7v-12h-5.1L402.6,12.2z M395.6,34.1h-10.1l5.1-12.5L395.6,34.1z"
              />
              <polygon
                points="499.7,11 499.7,0.2 473.2,0.2 462,22.9 453.1,0.2 425.7,0.2 425.7,11.1 432,11.1 432,46.6 427,46.6 427,58.6 454,58.6 454,46.6 449.3,46.6 449.2,30.6 461.3,58.2 476.3,28.9 476.3,46.6 471.8,46.6 471.8,58.5 498.8,58.5 498.8,46.6 493.5,46.6 493.5,11"
              />
            </g>
          </svg>
          <h1>{{ post.title }}</h1>
          <p v-if="post.subtitle" class="specijal-article-hero-subtitle">
            {{ post.subtitle }}
          </p>
          <address
            v-if="post.authors && post.authors.length"
            class="specijal-article-hero-meta"
          >
            <span v-for="(author, i) in post.authors" :key="author.name"
              >{{ i > 0 ? ', ' : '' }}{{ author.name }}</span
            >
            <span
              v-if="post.time"
              class="specijal-article-hero-sep"
              aria-hidden="true"
              >&bull;</span
            >
            <time v-if="post.time" class="specijal-article-hero-time">{{
              post.time
            }}</time>
          </address>
        </div>
      </header>

      <!-- Progress bar -->
      <div class="specijal-progress-bar" aria-hidden="true">
        <div class="specijal-progress-bar-track">
          <div ref="progressFill" class="specijal-progress-bar-fill"></div>
        </div>
        <div class="specijal-progress-bar-inner">
          <img
            src="~/assets/icon-only.png"
            alt=""
            class="specijal-progress-bar-icon"
          />
        </div>
      </div>

      <!-- Article body -->
      <section class="specijal-article-content" aria-label="Sadržaj članka">
        <!-- eslint-disable vue/no-v-html -->
        <div
          class="specijal-article-body single-article"
          @click="handleClick"
          v-html="post.content"
        ></div>
        <!-- eslint-enable -->

        <client-only>
          <portal
            v-for="gallery in post.galleries || []"
            :key="gallery.id"
            :selector="`#gallery-${gallery.id}`"
          >
            <gallery :gallery="gallery"></gallery>
          </portal>

          <portal
            v-for="box in post.compare_boxes || []"
            :key="box.id"
            :selector="`#compare-box-${box.id}`"
          >
            <img-comparison-slider>
              <!-- eslint-disable vue/no-deprecated-slot-attribute -->
              <img
                slot="first"
                style="width: 100%"
                :src="box.img1.url"
                :alt="box.img1.alt || 'Usporedba - prije'"
              />
              <img
                slot="second"
                style="width: 100%"
                :src="box.img2.url"
                :alt="box.img2.alt || 'Usporedba - poslije'"
              />
              <!-- eslint-enable -->
            </img-comparison-slider>
          </portal>
        </client-only>
      </section>

      <!-- Footer -->
      <footer class="specijal-article-footer" role="contentinfo">
        <div class="specijal-article-footer-inner">
          <svg
            class="specijal-article-footer-logo"
            viewBox="0 0 499.7 58.7"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Telegram.hr"
          >
            <g fill="#FFFFFF">
              <path
                d="M104.3,36.3c0,0.3-1.5,10.4-8.3,10.4H85.3V33.4h13.9V22.2H85.3v-10h13.5c1.5,0.2,2.7,0.8,3.6,1.7c1.4,1.4,1.8,3.3,1.9,4.3l0.2,2.3l9.7-0.1V0.1H98.5H64.6v12.1h5.7v34.4h-5.7v12h49.6V34.1h-9.7L104.3,36.3z"
              />
              <path
                d="M214.2,36.2c0,0.3-1.5,10.4-8.3,10.4h-10.7V33.3H209V22.2h-13.9v-10h13.5c1.5,0.2,2.7,0.8,3.6,1.7c1.4,1.4,1.8,3.3,1.9,4.3l0.2,2.3l9.7-0.1V0.1h-15.7h-33.9v12.1h5.7v34.4h-5.7v12H224V34h-9.7L214.2,36.2z"
              />
              <path
                d="M157.2,32.5c0,0.6-1.2,13.6-6.8,14h-8.7V12.1h5.4V0h-27.7v12.1h6.2v34.4h-4.5v12.1h47V30.2h-10.8L157.2,32.5z"
              />
              <path
                d="M260.7,36.6h8.4v1.3c-0.4,5.8-7.3,6.5-10.2,6.5h-0.1c-2.8,0-7-1.4-10.1-4.5c-2.6-2.6-4.1-6.2-4.1-10.2c0.2-7.8,4.6-15.6,13.9-15.6h0.4c2.9,0.1,6.8,1.2,8.8,3.1c0.4,0.4,0.8,0.9,1,1.4l0.7,1.4H282l0-18.8h-13.7v0.5c-3-1.1-5.9-1.7-8.8-1.7c-0.4,0-0.7,0-1,0c-0.2,0-0.2,0-0.3,0c-7.5,0-14.5,3-19.5,8.4S231,21.2,231,29.2c0,8.3,3.1,16,8.8,21.6c4.7,4.7,10.8,7.5,16.6,7.7c5.3,0.2,9-0.3,12.6-1.5v1.5h14.1v-22h5v-11h-27.4L260.7,36.6z"
              />
              <path
                d="M0,26.1h12.2v-2.5c-0.1-5,0.8-8.4,2.5-10.2c1-1.1,2-1.1,2.2-1.1h2.7v34.3h-8.7v12.1h38.8V46.8H38.6V12.4h1.6h0.4c1.5,0,2.6,0.4,3.6,1.4c1.8,1.8,2.7,5,2.9,10l0.1,2.4h11.7V0.3H0V26.1z"
              />
              <path
                d="M341.1,35.4c7.7-3.3,11.5-8.9,11.6-17.1c0-4.8-1.4-8.7-4.2-11.6c-6.1-6.1-17.1-6.6-29.9-6.6h-29v12.1h7.6v34.3h-7.5v12h31.2l0.1-12.1h-6.4v-7.9h11.7l10,19.9h17.1v-12l-6.2-0.1L341.1,35.4z M314.6,12.2h0.9c1.3,0,2.8,0,4.4,0h1.2c4.7,0,5.5,0,5.7,0h0.6c3,0.1,6.8,0.5,8.8,2.5c1,1,1.5,2.5,1.5,4.2c0,4.4-1.7,7.3-9.8,7.3c-1.2,0-2.3,0-3.3,0h-0.3c-0.5,0-1,0-1.4,0c-4,0-6.7,0-8.4,0L314.6,12.2z"
              />
              <path
                d="M402.6,12.2h6.2v-12h-37.5v12l7-0.1l-15.1,34.4h-4.3v12h28.7v-12h-7.5l1.8-3.9h17.3l1.8,3.9h-7v12.1h28.7v-12h-5.1L402.6,12.2z M395.6,34.1h-10.1l5.1-12.5L395.6,34.1z"
              />
              <polygon
                points="499.7,11 499.7,0.2 473.2,0.2 462,22.9 453.1,0.2 425.7,0.2 425.7,11.1 432,11.1 432,46.6 427,46.6 427,58.6 454,58.6 454,46.6 449.3,46.6 449.2,30.6 461.3,58.2 476.3,28.9 476.3,46.6 471.8,46.6 471.8,58.5 498.8,58.5 498.8,46.6 493.5,46.6 493.5,11"
              />
            </g>
          </svg>
          <dl
            v-if="post.credits && post.credits.length"
            class="specijal-article-footer-credits"
          >
            <div
              v-for="(col, ci) in creditColumns"
              :key="ci"
              class="specijal-article-footer-col"
            >
              <div
                v-for="(credit, i) in col"
                :key="i"
                class="specijal-article-footer-credit"
              >
                <dt class="specijal-article-footer-role">{{ credit.role }}</dt>
                <dd
                  v-for="(name, j) in credit.names"
                  :key="j"
                  class="specijal-article-footer-name"
                >
                  {{ name }}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </footer>
    </article>

    <intext-remp></intext-remp>
  </div>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'

export default {
  name: 'SpecijalArticle',
  components: { Portal },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    creditColumns() {
      const credits = this.post.credits || []
      const mid = Math.ceil(credits.length / 2)
      return [credits.slice(0, mid), credits.slice(mid)]
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initSliders()
      this.processEmbeds()
      this.initProgress()
    })
  },
  beforeDestroy() {
    if (this._onScroll) {
      window.removeEventListener('scroll', this._onScroll)
    }
  },
  methods: {
    handleClick(e) {
      const link = e.target.closest('a')
      if (link && link.href && link.href.includes('telegram.hr')) {
        const url = new URL(link.href)
        if (url.hostname.includes('telegram.hr')) {
          e.preventDefault()
          this.$router.push(url.pathname)
        }
      }
    },

    processEmbeds() {
      if (typeof window === 'undefined') return
      const content = this.$el.querySelector('.specijal-article-body')
      if (!content) return

      if (content.querySelector('.instagram-media') && window.instgrm) {
        window.instgrm.Embeds.process()
      }
      if (content.querySelector('.fb-post') && window.FB) {
        window.FB.XFBML.parse(content)
      }
      if (content.querySelector('.twitter-tweet')) {
        const script = document.createElement('script')
        script.src = 'https://platform.twitter.com/widgets.js'
        script.async = true
        document.head.appendChild(script)
      }
    },

    initSliders() {
      if (typeof window === 'undefined') return

      const containers = this.$el.querySelectorAll('.specijal-slike')
      containers.forEach((container) => {
        const imageCount = parseInt(container.dataset.count, 10)
        const textCount = parseInt(container.dataset.textCount || '0', 10)
        const totalSteps = imageCount + textCount

        if (totalSteps <= 1) return

        const items = container.querySelectorAll('.specijal-slike-item')
        const texts = container.querySelectorAll('.specijal-slike-text')

        if (items.length <= 1 && texts.length === 0) return

        // Accessibility
        container.setAttribute('role', 'region')
        container.setAttribute('aria-label', 'Galerija slika')
        container.setAttribute('aria-roledescription', 'carousel')
        container.setAttribute('tabindex', '0')

        const liveRegion = document.createElement('div')
        liveRegion.setAttribute('aria-live', 'polite')
        liveRegion.setAttribute('aria-atomic', 'true')
        liveRegion.className = 'sr-only'
        container.appendChild(liveRegion)

        items.forEach((item, idx) => {
          item.setAttribute('role', 'group')
          item.setAttribute('aria-roledescription', 'slide')
          item.setAttribute('aria-label', `Slika ${idx + 1} od ${items.length}`)
          item.setAttribute('aria-hidden', idx !== 0 ? 'true' : 'false')
        })

        texts.forEach((text) => {
          text.setAttribute('aria-hidden', 'true')
        })

        let currentStep = 0
        let locked = false
        let released = false

        function goToStep(step) {
          if (step === currentStep || step < 0 || step >= totalSteps) return
          released = false

          const prevStep = currentStep
          const goingForward = step > prevStep
          currentStep = step

          // Image transitions
          const prevImageIdx = prevStep < imageCount ? prevStep : imageCount - 1
          const newImageIdx = step < imageCount ? step : imageCount - 1

          if (newImageIdx !== prevImageIdx) {
            items[prevImageIdx].classList.remove('active')
            items[prevImageIdx].classList.add('previous')
            items[prevImageIdx].setAttribute('aria-hidden', 'true')
            items[newImageIdx].classList.add('active')
            items[newImageIdx].setAttribute('aria-hidden', 'false')
            setTimeout(() => {
              items[prevImageIdx].classList.remove('previous')
            }, 600)
          }

          // Text transitions
          const prevTextIdx =
            prevStep >= imageCount ? prevStep - imageCount : -1
          const newTextIdx = step >= imageCount ? step - imageCount : -1

          if (prevTextIdx >= 0 && prevTextIdx !== newTextIdx) {
            texts[prevTextIdx].classList.remove('active')
            texts[prevTextIdx].classList.add(
              goingForward ? 'exit-up' : 'exit-down'
            )
            texts[prevTextIdx].setAttribute('aria-hidden', 'true')
            setTimeout(() => {
              texts[prevTextIdx].classList.remove('exit-up', 'exit-down')
            }, 600)
          }

          if (newTextIdx >= 0) {
            texts[newTextIdx].classList.add(
              goingForward ? 'enter-from-below' : 'enter-from-above'
            )
            // eslint-disable-next-line no-unused-expressions
            texts[newTextIdx].offsetHeight
            texts[newTextIdx].classList.remove(
              'enter-from-below',
              'enter-from-above'
            )
            texts[newTextIdx].classList.add('active')
            texts[newTextIdx].setAttribute('aria-hidden', 'false')
          }

          // Toggle dark scrim
          if (newTextIdx >= 0) {
            container.classList.add('text-phase-active')
          } else {
            container.classList.remove('text-phase-active')
          }

          // Screen reader announcement
          if (newTextIdx >= 0) {
            liveRegion.textContent = `Tekst ${newTextIdx + 1} od ${
              texts.length
            }`
          } else {
            liveRegion.textContent = `Slika ${newImageIdx + 1} od ${
              items.length
            }`
          }
        }

        // Keyboard navigation
        container.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault()
            goToStep(currentStep + 1)
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault()
            goToStep(currentStep - 1)
          } else if (e.key === 'Home') {
            e.preventDefault()
            goToStep(0)
          } else if (e.key === 'End') {
            e.preventDefault()
            goToStep(totalSteps - 1)
          }
        })

        container.addEventListener(
          'wheel',
          (e) => {
            const atBoundary =
              (e.deltaY > 0 && currentStep >= totalSteps - 1) ||
              (e.deltaY < 0 && currentStep <= 0)

            if (atBoundary) {
              if (released) return
              released = true
              e.preventDefault()
              return
            }

            e.preventDefault()
            if (locked) return
            locked = true

            if (e.deltaY > 0) {
              goToStep(currentStep + 1)
            } else {
              goToStep(currentStep - 1)
            }

            setTimeout(() => {
              locked = false
            }, 600)
          },
          { passive: false }
        )
      })
    },

    initProgress() {
      if (typeof window === 'undefined') return
      const bar = this.$el.querySelector('.specijal-progress-bar')
      const fill = this.$refs.progressFill
      const content = this.$el.querySelector('.specijal-article-content')
      const footer = this.$el.querySelector('.specijal-article-footer')
      if (!bar || !fill || !content) return

      this._onScroll = () => {
        const contentRect = content.getBoundingClientRect()
        const footerTop = footer ? footer.getBoundingClientRect().top : Infinity
        const show = contentRect.top <= 0 && footerTop > 0
        bar.classList.toggle('visible', show)

        const total = content.scrollHeight
        const scrolled = -contentRect.top
        const progress = Math.min(
          Math.max(scrolled / (total - window.innerHeight), 0),
          1
        )
        fill.style.width = progress * 100 + '%'
      }
      window.addEventListener('scroll', this._onScroll, { passive: true })
    },
  },
}
</script>
