// Hook for future interstitial trigger (task 86c9md15a)
export function isExternalReferrer(route) {
  if (route.fullPath.includes('super1')) {
    return false
  }
  const referrer = document.referrer
  if (referrer) {
    const url = new URL(referrer)
    if (
      url.hostname.includes('midas') ||
      url.hostname.includes('facebook') ||
      url.hostname.includes('linker') ||
      url.hostname.includes('upday')
    ) {
      return true
    }
  }
  return false
}
