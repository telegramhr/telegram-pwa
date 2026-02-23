<template>
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
        <img
          src="~/assets/img/telegram_logo_white.svg"
          alt="Telegram.hr"
          class="specijal-article-hero-logo"
        />
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
        <img
          src="~/assets/img/telegram_logo_white.svg"
          alt="Telegram.hr"
          class="specijal-article-footer-logo"
        />
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
        const count = parseInt(container.dataset.count, 10)
        if (count <= 1) return

        const items = container.querySelectorAll('.specijal-slike-item')
        if (items.length <= 1) return

        container.setAttribute('role', 'region')
        container.setAttribute('aria-label', 'Galerija slika')
        container.setAttribute('aria-roledescription', 'carousel')
        container.setAttribute('tabindex', '0')

        // Live region for screen reader announcements
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

        let current = 0
        const total = items.length
        let locked = false
        let released = false

        function goTo(idx) {
          if (idx === current || idx < 0 || idx >= total) return
          released = false
          const prev = current
          items[prev].classList.remove('active')
          items[prev].classList.add('previous')
          items[prev].setAttribute('aria-hidden', 'true')
          current = idx
          items[current].classList.add('active')
          items[current].setAttribute('aria-hidden', 'false')
          liveRegion.textContent = `Slika ${current + 1} od ${total}`
          setTimeout(() => {
            items[prev].classList.remove('previous')
          }, 600)
        }

        // Keyboard navigation
        container.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault()
            goTo(current + 1)
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault()
            goTo(current - 1)
          } else if (e.key === 'Home') {
            e.preventDefault()
            goTo(0)
          } else if (e.key === 'End') {
            e.preventDefault()
            goTo(total - 1)
          }
        })

        container.addEventListener(
          'wheel',
          (e) => {
            const atBoundary =
              (e.deltaY > 0 && current >= total - 1) ||
              (e.deltaY < 0 && current <= 0)

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
              goTo(current + 1)
            } else {
              goTo(current - 1)
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
