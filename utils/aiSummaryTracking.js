/*
 * Shared GTM tracking for the AI summary surfaces: the top banner above the
 * article body, the Samsung intext banner after the third paragraph, and the
 * summary box after the body. Every surface pushes the same two events,
 * `ai-summary-view` (once per mount, when at least half of it is in the
 * viewport) and `ai-summary-click`, distinguished by `ai_summary_placement`,
 * so GTM needs one trigger per event and a placement variable.
 *
 * The component sets `aiPlacement` in its data and, for the click event,
 * calls `trackAiSummary('click')` itself. The observed element is the
 * component root.
 */
const VIEW_THRESHOLD = 0.5

export default {
  props: {
    postId: { type: Number, default: 0 },
    category: { type: String, default: '' },
    subscriber: { type: Boolean, default: false },
  },
  data() {
    return { aiPlacement: '', aiViewObserver: null, aiViewed: false }
  },
  watch: {
    // The article page component is reused between articles: re-arm per post.
    postId() {
      this.aiViewed = false
      this.observeAiView()
    },
  },
  mounted() {
    this.observeAiView()
  },
  beforeDestroy() {
    this.disconnectAiView()
  },
  methods: {
    trackAiSummary(action) {
      if (!this.$gtm) return
      this.$gtm.push({
        event: `ai-summary-${action}`,
        ai_summary_placement: this.aiPlacement,
        ai_summary_post_id: this.postId,
        ai_summary_category: this.category,
        ai_summary_subscriber: this.subscriber,
      })
    },
    observeAiView() {
      this.disconnectAiView()
      const el = this.$el
      if (
        typeof IntersectionObserver === 'undefined' ||
        !el ||
        el.nodeType !== Node.ELEMENT_NODE
      ) {
        return
      }
      this.aiViewObserver = new IntersectionObserver(
        (entries) => {
          if (this.aiViewed || !entries.some((e) => e.isIntersecting)) return
          this.aiViewed = true
          this.disconnectAiView()
          this.trackAiSummary('view')
        },
        { threshold: VIEW_THRESHOLD }
      )
      this.aiViewObserver.observe(el)
    },
    disconnectAiView() {
      if (this.aiViewObserver) {
        this.aiViewObserver.disconnect()
        this.aiViewObserver = null
      }
    },
  },
}
