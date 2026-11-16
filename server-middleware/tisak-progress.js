// Progress shown on the print-subscription countdown widget (components/widgets/TisakCountdown.vue).
//
// Only a percentage leaves this server. The real count is read from the CRM segment with
// CRM_API_TOKEN, which stays server-side.
//
// What readers see is not the raw count. It starts with a head start that closes to zero at the goal:
//   mapped(real) = START_SHOWN + (real - START_REAL) * (GOAL - START_SHOWN) / (GOAL - START_REAL)
//   (43 real → 150 shown = 30 %; 100 → 194 = 38 %; 300 → 347 = 69 %; 473 → 479 = 95 %; 500 → 500 = 100 %)
// On quiet days it creeps up along the "on track" line (START_SHOWN today → GOAL on the cutoff),
// but never more than SLACK shown subscribers above mapped(real). Both terms only rise with
// time and real sales, so the bar never goes backwards (except after a cancellation, by under 1 shown).
const axios = require('axios')

const CRM_BASE = process.env.CRM_BASE_URL || 'https://pretplata.telegram.hr'
const TOKEN = process.env.CRM_API_TOKEN
const SEGMENT = 'active-users-with-active-subscription-print_45'

const GOAL = 500
const START_REAL = 43 // real print subscribers on START
const START_SHOWN = 150 // 30 % of GOAL
const SLACK = 15 // max shown subscribers above what real sales justify (3 points)
const START = Date.parse('2026-11-16T00:00:00+01:00')
const END = Date.parse('2026-12-14T00:00:00+01:00') // end of the cutoff day, 13 Dec

// CRM load: each PM2 worker asks the CRM at most once per REFRESH_MS, one request at a time.
// Readers never wait on the CRM once a count is cached: an older count is served straight away
// and refreshed in the background. Browsers and the edge may reuse the answer for MAX_AGE_S.
const REFRESH_MS = 10 * 60 * 1000
const STALE_LIMIT_MS = 6 * 60 * 60 * 1000 // CRM down for longer than this: hide the bar
const MAX_AGE_S = 300
let cached = null // { at, real }
let inflight = null

function mapped(real) {
  return (
    START_SHOWN +
    ((real - START_REAL) * (GOAL - START_SHOWN)) / (GOAL - START_REAL)
  )
}

function onTrack(now) {
  const t = Math.min(1, Math.max(0, (now - START) / (END - START)))
  return START_SHOWN + t * (GOAL - START_SHOWN)
}

function shownPercent(real, now) {
  const base = mapped(real)
  const shown = Math.max(base, Math.min(onTrack(now), base + SLACK))
  const pct = Math.floor((shown / GOAL) * 100)
  // 100 % only once the goal is really reached
  return real >= GOAL ? 100 : Math.max(0, Math.min(99, pct))
}

async function countSubscribers() {
  const { data } = await axios.get(`${CRM_BASE}/api/v1/user-segments/users`, {
    params: { code: SEGMENT },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      // Cloudflare in front of the CRM answers the default axios User-Agent with a 403 challenge page
      'User-Agent':
        'Mozilla/5.0 (compatible; TelegramPWA/1.0; +https://www.telegram.hr)',
      Accept: 'application/json',
    },
    timeout: 8000,
  })
  if (!data || data.status !== 'ok' || !Array.isArray(data.users)) {
    throw new Error('unexpected CRM response')
  }
  return data.users.length
}

function refresh() {
  if (!inflight) {
    inflight = countSubscribers()
      .then((real) => {
        cached = { at: Date.now(), real }
        return cached
      })
      .finally(() => {
        inflight = null
      })
  }
  return inflight
}

function send(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader(
    'Cache-Control',
    status === 200 ? `public, max-age=${MAX_AGE_S}` : 'no-store'
  )
  res.end(JSON.stringify(body))
}

function logFailure(err) {
  // eslint-disable-next-line no-console
  console.error(
    '[tisak-progress] CRM failed:',
    err.message,
    err.response && err.response.status
  )
}

module.exports = async function (req, res) {
  if (!TOKEN) {
    return send(res, 500, { error: 'crm_token_missing' })
  }
  const now = Date.now()

  if (cached && now - cached.at < STALE_LIMIT_MS) {
    if (now - cached.at >= REFRESH_MS) refresh().catch(logFailure)
    return send(res, 200, { percent: shownPercent(cached.real, now) })
  }

  // first request on this worker (or the CRM has been down for hours): wait for the CRM
  try {
    const fresh = await refresh()
    return send(res, 200, { percent: shownPercent(fresh.real, Date.now()) })
  } catch (err) {
    logFailure(err)
    return send(res, 502, {
      error: 'upstream_failed',
      crmStatus: (err.response && err.response.status) || null,
    })
  }
}

module.exports.shownPercent = shownPercent
