const axios = require('axios')

const WC_BASE =
  process.env.WC_BASE_URL || 'https://knjige.telegram.hr/wp-json/wc/v3'
const WC_KEY = process.env.WC_KEY
const WC_SECRET = process.env.WC_SECRET

const TTL_MS = 30 * 60 * 1000
const STALE_FALLBACK_MS = 24 * 60 * 60 * 1000
const cache = new Map()

const PUBLISHER_BLOCKLIST = /telegram\s+(knjige|naklada|media)/i

function fromAttributes(attrs) {
  if (!Array.isArray(attrs)) return null
  const a = attrs.find((x) => {
    const slug = (x.slug || '').toLowerCase()
    const name = (x.name || '').toLowerCase()
    return (
      slug === 'pa_autor' ||
      slug === 'autor' ||
      name === 'autor' ||
      name === 'author'
    )
  })
  if (!a || !a.options || !a.options.length) return null
  return a.options.filter(Boolean).join(', ').trim() || null
}

function fromOgTitle(ogTitle) {
  if (!ogTitle) return null
  const m = ogTitle.match(/^.+?\s*[–—-]\s*([^|]+?)(?:\s*\||$)/)
  if (!m) return null
  const candidate = m[1].trim()
  if (!candidate) return null
  if (PUBLISHER_BLOCKLIST.test(candidate)) return null
  return candidate
}

function parseAuthor(p) {
  return (
    fromAttributes(p.attributes) ||
    fromOgTitle(p.yoast_head_json && p.yoast_head_json.og_title)
  )
}

function shape(p) {
  const img = p.images && p.images[0]
  return {
    id: p.id,
    sku: p.sku,
    title: p.name,
    author: parseAuthor(p),
    permalink: p.permalink,
    price: p.price,
    regularPrice: p.regular_price,
    salePrice: p.sale_price,
    onSale: !!p.on_sale,
    stockStatus: p.stock_status,
    totalSales: p.total_sales,
    image: img ? { src: img.src, alt: img.alt || p.name } : null,
  }
}

function send(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=300')
  res.end(JSON.stringify(body))
}

module.exports = async function (req, res) {
  if (!WC_KEY || !WC_SECRET) {
    return send(res, 500, { error: 'WC credentials not configured' })
  }

  const url = new URL(req.url, 'http://localhost')
  const limit = Math.min(
    Math.max(parseInt(url.searchParams.get('limit'), 10) || 7, 1),
    20
  )
  const category = url.searchParams.get('category') || ''
  const orderby = url.searchParams.get('orderby') || 'popularity'

  const key = `featured:${limit}:${category}:${orderby}`
  const now = Date.now()
  const cached = cache.get(key)
  if (cached && now - cached.at < TTL_MS) {
    return send(res, 200, cached.body)
  }

  try {
    const params = {
      orderby,
      order: 'desc',
      per_page: limit,
      status: 'publish',
      stock_status: 'instock',
    }
    if (category) params.category = category

    const upstream = await axios.get(`${WC_BASE}/products`, {
      params,
      auth: { username: WC_KEY, password: WC_SECRET },
      timeout: 8000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; TelegramPWA/1.0; +https://www.telegram.hr)',
        Accept: 'application/json',
      },
    })

    const body = {
      products: (upstream.data || []).map(shape),
      updatedAt: now,
    }
    cache.set(key, { at: now, body })
    return send(res, 200, body)
  } catch (err) {
    const detail = {
      message: err.message,
      code: err.code,
      status: err.response && err.response.status,
      data: err.response && err.response.data,
      url: err.config && err.config.url,
    }
    // eslint-disable-next-line no-console
    console.error('[books middleware] upstream failed:', detail)
    if (cached && now - cached.at < STALE_FALLBACK_MS) {
      return send(res, 200, { ...cached.body, stale: true })
    }
    return send(res, 502, { error: 'upstream_failed', detail })
  }
}
