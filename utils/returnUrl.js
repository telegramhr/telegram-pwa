// Default origin when window is unavailable (SSR).
const DEFAULT_ORIGIN = 'https://www.telegram.hr'

/*
 * The current page as an absolute URL, encoded to be passed as a single
 * query-parameter value to the CRM social-login endpoints, so the reader
 * comes back to the same page with its query (e.g. ?gift_token=) intact.
 */
export function encodedReturnUrl(fullPath, origin = DEFAULT_ORIGIN) {
  return encodeURIComponent(`${origin}${fullPath}`)
}

export function currentOrigin() {
  return process.client ? window.location.origin : DEFAULT_ORIGIN
}
