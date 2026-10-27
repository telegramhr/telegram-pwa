<script>
export default {
  name: 'StickyOfferBar',
  props: {
    price: {
      type: String,
      default: '99 €',
    },
    oldPrice: {
      type: String,
      default: '198 €',
    },
    plan: {
      type: String,
      default: 'Telegram Premium',
    },
    buttonText: {
      type: String,
      default: 'Iskoristite ponudu',
    },
    buttonLink: {
      type: String,
      default: '#pretplataPayment',
    },
    // selector of the element the bar waits for: it shows once that element
    // (typically the hero button) has scrolled off the top of the screen
    showAfter: {
      type: String,
      default: '',
    },
    // selectors of elements that hide the bar while they are on screen
    // (the payment block, the final CTA ...)
    hideWhenVisible: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      passedTrigger: !this.showAfter,
      blockers: 0,
      observers: [],
    }
  },
  computed: {
    show() {
      return this.passedTrigger && this.blockers === 0
    },
  },
  watch: {
    // lets the page move other fixed UI (e.g. the chatbot bubble) out of the way
    show: {
      immediate: true,
      handler(value) {
        this.$emit('visible', value)
      },
    },
  },
  mounted() {
    if (!('IntersectionObserver' in window)) return

    if (this.showAfter) {
      const trigger = document.querySelector(this.showAfter)
      if (trigger) {
        const observer = new IntersectionObserver(([entry]) => {
          this.passedTrigger =
            !entry.isIntersecting && entry.boundingClientRect.top < 0
        })
        observer.observe(trigger)
        this.observers.push(observer)
      } else {
        this.passedTrigger = true
      }
    }

    const seen = new Set()
    this.hideWhenVisible.forEach((selector) => {
      const el = document.querySelector(selector)
      if (!el) return
      const observer = new IntersectionObserver(([entry]) => {
        const was = seen.has(selector)
        if (entry.isIntersecting && !was) {
          seen.add(selector)
          this.blockers++
        } else if (!entry.isIntersecting && was) {
          seen.delete(selector)
          this.blockers--
        }
      })
      observer.observe(el)
      this.observers.push(observer)
    })
  },
  beforeDestroy() {
    this.observers.forEach((observer) => observer.disconnect())
  },
}
</script>

<template>
  <transition name="sob">
    <div v-show="show" class="sticky-offer-bar" data-nosnippet>
      <div class="sob-price">
        <span class="sob-price__row">
          <strong class="sob-price__new">{{ price }}</strong>
          <s class="sob-price__old">{{ oldPrice }}</s>
        </span>
        <span class="sob-price__plan">{{ plan }}</span>
      </div>
      <TgButton class="sob-cta" :href="buttonLink">{{ buttonText }}</TgButton>
    </div>
  </transition>
</template>

<style scoped>
/* Figma "Pretplata Landing — Active", mobile node 2377:4930 (fixed footer) */
.sticky-offer-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 28px 24px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid #2b2b2b;
  background-color: rgba(17, 17, 17, 0.72);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  color: #fff;
}
.sob-price {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: 'Barlow', sans-serif;
  white-space: nowrap;
}
.sob-price__row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.sob-price__new {
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
}
.sob-price__old {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #86868b;
  text-decoration: line-through;
}
.sob-price__plan {
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
}
.sob-cta {
  flex: 0 1 187px;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
}

.sob-enter-active,
.sob-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.sob-enter,
.sob-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* the design only has this bar on the mobile frame */
@media (min-width: 1024px) {
  .sticky-offer-bar {
    display: none;
  }
}
</style>
