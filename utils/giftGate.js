/*
 * Shared gift-token gate for the paywall components (IntextRemp,
 * IntextRempNew, IntextRefresh, IntextRegularPromo, PopupRegularPromo).
 *
 * A `?gift_token=` in the URL proves nothing on its own: only a token the
 * backend verified for this article (recorded in the `gifts` store by the
 * article page) may keep the paywall away. The paywall shows by default;
 * while a token is still being verified, the locked part of the article is
 * detached rather than discarded, and a token that turns out valid puts it
 * back and hides the paywall again. A slow or failing verify therefore
 * never exposes the article.
 *
 * In triggerShow(): return early when `giftStatus === 'valid'`, then use
 * lockArticle(el) for the hard paywall and softLock() for the softwall.
 */
export default {
  data() {
    return { giftUnwatch: null }
  },
  computed: {
    giftStatus() {
      return this.$store.getters['gifts/verificationStatus'](this.$route)
    },
  },
  beforeDestroy() {
    this.clearGiftWatch()
  },
  methods: {
    // Hard paywall: take the locked part of the article out of the page.
    lockArticle(el) {
      const parent = el.parentNode
      const next = el.nextSibling
      parent.removeChild(el)
      const last = document.querySelector('#article-content p:last-child')
      if (last) {
        last.classList.add('premium-fade-out')
      }
      if (this.giftStatus !== 'pending') {
        return
      }
      this.onGiftSettled((status) => {
        if (status !== 'valid') {
          return
        }
        parent.insertBefore(el, next)
        if (last) {
          last.classList.remove('premium-fade-out')
        }
        this.show = false
      })
    },
    // Softwall: nothing is removed, so a valid gift only hides it again.
    softLock() {
      if (this.giftStatus !== 'pending') {
        return
      }
      this.onGiftSettled((status) => {
        if (status === 'valid') {
          this.show = false
        }
      })
    },
    // Runs `callback` once with the final status ('valid' / 'invalid').
    onGiftSettled(callback) {
      this.clearGiftWatch()
      this.giftUnwatch = this.$watch('giftStatus', (status) => {
        if (status === 'pending') {
          return
        }
        this.clearGiftWatch()
        callback(status)
      })
    },
    clearGiftWatch() {
      if (this.giftUnwatch) {
        this.giftUnwatch()
        this.giftUnwatch = null
      }
    },
  },
}
