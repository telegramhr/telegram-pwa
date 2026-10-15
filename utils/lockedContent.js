/*
 * The hard paywall and promo components take the locked part of the article
 * (#piano-content) out of the page, and hiding them does not bring it back.
 * Call snapshotLockedContent() before anything can lock the article; the
 * returned function puts the locked part back (e.g. once a gift is verified).
 */
export function snapshotLockedContent() {
  const el = document.getElementById('piano-content')
  if (!el) {
    return () => {}
  }
  const parent = el.parentNode
  const next = el.nextSibling
  return () => {
    // Skip if it was never removed or the article re-rendered it.
    if (!el.isConnected && !document.getElementById('piano-content')) {
      if (next && next.parentNode === parent) {
        parent.insertBefore(el, next)
      } else {
        parent.appendChild(el)
      }
    }
    document
      .querySelectorAll('#article-content .premium-fade-out')
      .forEach((p) => p.classList.remove('premium-fade-out'))
  }
}
