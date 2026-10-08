/*
 * Deep links from the newsroom's AI asistent (Pregled arhive, telegram-ai-assistant).
 * A result row links to the article with `#citat=<first sentence of the cited
 * passage>` (URL-encoded, at most 200 characters, `MAX_CITAT_CHARS` in the API's
 * search.py); live-blog rows use the entry's own `#update-N` anchor. After the body
 * has rendered the article page calls `revealCitat()`: it finds the phrase in the
 * body text, wraps it in <mark class="citat-mark"> and scrolls it into view. No match
 * leaves the page at the top with nothing changed. Standard text fragments
 * (`#:~:text=`) were rejected because they do not fire on a fresh PWA load.
 *
 * The body text is read the way the chunker (api/wp_chunker.py) reads the article:
 * the same stripped elements (ads, embeds, figures), whitespace collapsed, a space at
 * every element boundary; quotes, dashes and case are folded on both sides. When the
 * whole sentence still does not occur (an in-page insert the chunker never saw), the
 * longest matching prefix of at least MIN_PREFIX_CHARS is marked instead.
 */
export const CITAT_PREFIX = '#citat='
export const MAX_CITAT_CHARS = 200
export const MARK_CLASS = 'citat-mark'
const UPDATE_ANCHOR = /^#update-\d+$/
// What the chunker strips before reading an article (STRIP_SELECTORS in wp_chunker.py).
const SKIPPED_SELECTOR = [
  'script',
  'style',
  'iframe',
  'noscript',
  'svg',
  'form',
  'template',
  '[data-nosnippet]',
  '[id^=intext_]',
  '.cxenseignore',
  '.twitter-tweet',
  '.instagram-media',
  '.tiktok-embed',
  '.fb-post',
  '.related',
  '.related-posts',
  '.wp-block-embed',
  '.ad',
  '.ads',
  'figure',
  'figcaption',
].join(',')
const MIN_PREFIX_CHARS = 40
const TRAILING_STOP = /\.$/ // the period wp_chunker.py appends to a subheading
const QUOTES = /[„“”"«»]/g
const APOSTROPHES = /[‘’‚‛`´]/g
const DASHES = /[‐‑‒–—―]/g
const SCROLL_MARGIN = 0.25 // the mark lands a quarter of the viewport from the top
const SETTLE_AT_MS = [400, 1000, 2000, 3500] // late images, ads and embeds shift the layout above the mark
const SETTLE_TOLERANCE_PX = 24

/**
 * The phrase a `#citat=` hash carries, folded for matching, or null for any other hash.
 */
export function citatPhrase(hash) {
  if (typeof hash !== 'string' || !hash.startsWith(CITAT_PREFIX)) return null
  let raw = hash.slice(CITAT_PREFIX.length)
  try {
    raw = decodeURIComponent(raw)
  } catch (e) {
    // a hand-edited hash with a stray %: match it as typed
  }
  const phrase = fold(raw).trim().slice(0, MAX_CITAT_CHARS)
  return phrase || null
}

/**
 * The live-blog entry id a `#update-N` hash names, or null.
 */
export function updateAnchorId(hash) {
  return typeof hash === 'string' && UPDATE_ANCHOR.test(hash)
    ? hash.slice(1)
    : null
}

function foldChar(ch) {
  if (/\s/.test(ch)) return ' ' // \s covers NBSP too
  return ch
    .replace(QUOTES, '"')
    .replace(APOSTROPHES, "'")
    .replace(DASHES, '-')
    .toLowerCase()
}

/**
 * Folds text for comparison: whitespace runs to one space, typographic quotes and
 * dashes to ASCII, lower case.
 */
export function fold(input) {
  let text = ''
  for (const ch of input) {
    const folded = foldChar(ch)
    if (folded === ' ' && text.endsWith(' ')) continue
    text += folded
  }
  return text
}

function textNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement
      const skipped = parent && parent.closest(SKIPPED_SELECTOR)
      return skipped && skipped !== root && root.contains(skipped)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT
    },
  })
  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  return nodes
}

/**
 * The body text folded like the phrase, with the DOM position of every folded
 * character (null for the space an element boundary stands for).
 */
function foldedBody(root) {
  const positions = []
  let folded = ''
  for (const node of textNodes(root)) {
    if (folded && !folded.endsWith(' ')) {
      folded += ' ' // an element boundary reads as a space, as in the chunker
      positions.push(null)
    }
    const text = node.nodeValue
    for (let offset = 0; offset < text.length; offset++) {
      const ch = foldChar(text[offset])
      if (ch === ' ' && folded.endsWith(' ')) continue
      folded += ch
      positions.push({ node, offset })
    }
  }
  return { folded, positions }
}

/**
 * The longest prefix of `phrase` that occurs in `folded`: the whole phrase, else the
 * longest one of at least MIN_PREFIX_CHARS cut back to a word boundary, else null.
 */
export function longestMatch(folded, phrase) {
  if (folded.includes(phrase)) return phrase
  // The chunker ends a subheading with a period the page does not have, so a passage
  // that opens with one cites e.g. "Smanjivanje inozemne potražnje." (too short for
  // the prefix fallback): match it without that period.
  const bare = phrase.replace(TRAILING_STOP, '')
  if (bare && bare !== phrase && folded.includes(bare)) return bare
  let low = MIN_PREFIX_CHARS
  let high = phrase.length - 1
  if (high < low || !folded.includes(phrase.slice(0, low))) return null
  while (low < high) {
    const mid = Math.ceil((low + high) / 2)
    if (folded.includes(phrase.slice(0, mid))) low = mid
    else high = mid - 1
  }
  const prefix = phrase.slice(0, low)
  const cut = prefix.lastIndexOf(' ')
  return cut >= MIN_PREFIX_CHARS ? prefix.slice(0, cut) : prefix
}

/**
 * Finds `phrase` (already folded) in the text of `root`. Returns the DOM position of
 * its first and last character, or null.
 */
export function findPhrase(root, phrase) {
  if (!root || !phrase) return null
  const { folded, positions } = foldedBody(root)
  const match = longestMatch(folded, phrase)
  if (!match) return null
  const at = folded.indexOf(match)
  return { start: positions[at], end: positions[at + match.length - 1] }
}

function wrapTextRange(node, from, to) {
  const target = from > 0 ? node.splitText(from) : node
  if (to - from < target.nodeValue.length) target.splitText(to - from)
  const mark = document.createElement('mark')
  mark.className = MARK_CLASS
  target.parentNode.insertBefore(mark, target)
  mark.appendChild(target)
  return mark
}

/**
 * Wraps every text node between `start` and `end` (inclusive) in a <mark>, so a phrase
 * that crosses inline markup gets one mark per text run. Returns the marks.
 */
export function markRange(root, { start, end }) {
  const range = document.createRange()
  range.setStart(start.node, start.offset)
  range.setEnd(end.node, end.offset + 1)
  const marks = []
  for (const node of textNodes(root)) {
    if (!range.intersectsNode(node)) continue
    const from = node === start.node ? start.offset : 0
    const to = node === end.node ? end.offset + 1 : node.nodeValue.length
    if (to > from && node.nodeValue.slice(from, to).trim()) {
      marks.push(wrapTextRange(node, from, to))
    }
  }
  return marks
}

function targetTop() {
  return window.innerHeight * SCROLL_MARGIN
}

function scrollTo(element, behavior) {
  const top = element.getBoundingClientRect().top + window.scrollY - targetTop()
  window.scrollTo({ top: Math.max(0, top), behavior })
}

/**
 * Scrolls to `element` and keeps it in place for a few seconds while late content
 * above it (images, ads, embeds) finishes loading and pushes it around.
 */
function scrollAndSettle(element) {
  scrollTo(element, 'smooth')
  for (const delay of SETTLE_AT_MS) {
    setTimeout(() => {
      if (!element.isConnected) return // the reader moved on to another page
      const drift = element.getBoundingClientRect().top - targetTop()
      if (Math.abs(drift) > SETTLE_TOLERANCE_PX) scrollTo(element, 'auto')
    }, delay)
  }
}

/**
 * Handles the current hash on a rendered article: `#citat=` marks and scrolls to the
 * phrase inside `body` (the article body element), `#update-N` scrolls to that entry.
 * Returns what it did: 'citat', 'update' or null.
 */
export function revealCitat(body, hash = window.location.hash) {
  const entryId = updateAnchorId(hash)
  if (entryId) {
    const entry = document.getElementById(entryId)
    if (!entry) return null
    scrollAndSettle(entry)
    return 'update'
  }
  const phrase = citatPhrase(hash)
  if (!phrase || !body) return null
  const found = findPhrase(body, phrase)
  if (!found) return null
  const marks = markRange(body, found)
  if (!marks.length) return null
  scrollAndSettle(marks[0])
  return 'citat'
}
