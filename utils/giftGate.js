/*
 * Shared gift-token gate for the paywall components (IntextRemp,
 * IntextRempNew, IntextRefresh, IntextRegularPromo, PopupRegularPromo).
 *
 * A `?gift_token=` in the URL proves nothing on its own: only a token the
 * backend verified for this article may hold the paywall back. The article
 * page records the verification in the `gifts` store; the paywall can fire
 * (REMP event) before that request returns, so a pending verification
 * defers the paywall until the result is known instead of skipping it.
 *
 * The component calls `if (this.giftHoldsPaywall(this.triggerShow)) return`
 * at the top of its triggerShow().
 */
export default {
  data() {
    return { giftRetryUnwatch: null }
  },
  computed: {
    giftStatus() {
      return this.$store.getters['gifts/verificationStatus'](this.$route)
    },
  },
  beforeDestroy() {
    this.clearGiftRetry()
  },
  methods: {
    // true: do not show the paywall now (valid gift, or still verifying;
    // `retry` runs once the verification settles).
    giftHoldsPaywall(retry) {
      if (this.giftStatus === 'valid') {
        return true
      }
      if (this.giftStatus !== 'pending') {
        return false
      }
      if (!this.giftRetryUnwatch) {
        this.giftRetryUnwatch = this.$watch('giftStatus', (status) => {
          if (status === 'pending') {
            return
          }
          this.clearGiftRetry()
          retry()
        })
      }
      return true
    },
    clearGiftRetry() {
      if (this.giftRetryUnwatch) {
        this.giftRetryUnwatch()
        this.giftRetryUnwatch = null
      }
    },
  },
}
