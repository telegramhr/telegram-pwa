export default function ({ route }) {
  if (process.client) {
    let dotmetricsId = '1182'
    const path = route.path
    if (path.includes('/politika-kriminal')) {
      dotmetricsId = '1174'
    }
    if (path.includes('/biznis-tech')) {
      dotmetricsId = '1176'
    }
    if (path.includes('/kultura')) {
      dotmetricsId = '1178'
    }
    if (path.includes('/zivot')) {
      dotmetricsId = '1179'
    }
    if (path.includes('/pitanje-zdravlja')) {
      dotmetricsId = '12607'
    }
    if (
      path.includes('/openspace') ||
      path.includes('/vjestine') ||
      path.includes('/tvrtke-karijere') ||
      path.includes('/vodici') ||
      path.includes('/kvizovi-testovi')
    ) {
      dotmetricsId = '12608'
    }
    if (path.includes('/super1')) {
      dotmetricsId = '4136'
    }
    if (path.includes('/telesport')) {
      dotmetricsId = '1175'
    }
    if (path === '/') {
      dotmetricsId = '1173'
    }
    window.dm.AjaxEvent('pageview', null, dotmetricsId)
  }
}
