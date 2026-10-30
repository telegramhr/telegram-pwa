/*
 * Shared GTM tracking for the partner widgets. Every push carries category,
 * action and label together, because GTM's data layer keeps old values and a
 * partial push would inherit the previous widget's fields.
 *
 * Actions: `view` when the component mounts, whether or not anyone scrolls to
 * it (kept as is so it stays comparable with earlier data), `seen` once per
 * mount when it has been in the viewport for a second, in a visible tab and not
 * covered by a pop-up, and `click`.
 *
 * The component sets `widgetCategory` in its data. If its root renders later
 * than mount (v-if on async data), it calls `observeWidgetSeen` again once the
 * data arrives. The observed element is the component root.
 */
const SEEN_RATIO = 0.5
const SEEN_DWELL_MS = 1000
const SEEN_THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20)

// Designer Outlet stacks to about two screens on mobile, so half of it can never
// be on screen at once: half a viewport's height also counts as in view.
const isInView = (entry) =>
  entry.isIntersecting &&
  (entry.intersectionRatio >= SEEN_RATIO ||
    entry.intersectionRect.height >= window.innerHeight * SEEN_RATIO)

// IntersectionObserver ignores overlays and visibility:hidden, so ask the browser
// what is actually on top at the middle of the widget's on-screen part.
const isCovered = (el) => {
  const rect = el.getBoundingClientRect()
  const x =
    (Math.max(rect.left, 0) + Math.min(rect.right, window.innerWidth)) / 2
  const y =
    (Math.max(rect.top, 0) + Math.min(rect.bottom, window.innerHeight)) / 2
  return !el.contains(document.elementFromPoint(x, y))
}

export default {
  data() {
    return {
      widgetCategory: '',
      widgetSeen: false,
      widgetInView: false,
      widgetSeenObserver: null,
      widgetSeenTimer: null,
    }
  },
  mounted() {
    this.observeWidgetSeen()
  },
  beforeDestroy() {
    this.disconnectWidgetSeen()
  },
  methods: {
    trackWidget(action, label, value = 1) {
      if (!this.$gtm) return
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': this.widgetCategory,
        'webshop-action': action,
        'webshop-label': label,
        'webshop-value': value,
      })
    },
    observeWidgetSeen() {
      this.disconnectWidgetSeen()
      const el = this.$el
      if (
        this.widgetSeen ||
        typeof IntersectionObserver === 'undefined' ||
        !el ||
        el.nodeType !== Node.ELEMENT_NODE
      ) {
        return
      }
      this.widgetSeenObserver = new IntersectionObserver(
        (entries) => {
          this.widgetInView = isInView(entries[entries.length - 1])
          this.syncWidgetSeenTimer()
        },
        { threshold: SEEN_THRESHOLDS }
      )
      this.widgetSeenObserver.observe(el)
      document.addEventListener('visibilitychange', this.syncWidgetSeenTimer)
    },
    syncWidgetSeenTimer() {
      if (!this.widgetInView || document.hidden) {
        clearTimeout(this.widgetSeenTimer)
        this.widgetSeenTimer = null
      } else if (!this.widgetSeenTimer) {
        this.widgetSeenTimer = setTimeout(this.markWidgetSeen, SEEN_DWELL_MS)
      }
    },
    markWidgetSeen() {
      this.widgetSeenTimer = null
      if (isCovered(this.$el)) {
        this.syncWidgetSeenTimer()
        return
      }
      this.widgetSeen = true
      this.disconnectWidgetSeen()
      this.trackWidget('seen', 'viewable')
    },
    disconnectWidgetSeen() {
      clearTimeout(this.widgetSeenTimer)
      this.widgetSeenTimer = null
      this.widgetInView = false
      document.removeEventListener('visibilitychange', this.syncWidgetSeenTimer)
      if (this.widgetSeenObserver) {
        this.widgetSeenObserver.disconnect()
        this.widgetSeenObserver = null
      }
    },
  },
}
