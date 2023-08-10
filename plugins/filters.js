import Vue from 'vue'
import { parse } from 'node-html-parser'

export default () => {
  Vue.filter('parseTime', function (value) {
    if (!value) {
      return ''
    }
    const now = Date.now()
    value = value * 1000
    if (value < now - 12 * 3600 * 1000) {
      const date = new Date(value)
      return new Intl.DateTimeFormat('hr').format(date)
    } else {
      const diff = (now - value) / 1000
      let h = diff / 3600
      if (h >= 1) {
        h = Math.round(h)
        if (h === 1) {
          return 'prije jednog sata'
        }
        if (h < 5) {
          return 'prije ' + h + ' sata'
        }
        return 'prije ' + h + ' sati'
      }
      let m = diff % 3600
      m = Math.round(m / 60)
      if (m % 10 > 0 && m % 10 < 5 && (m < 10 || m > 19)) {
        return 'prije ' + m + ' minute'
      }
      return 'prije ' + m + ' minuta'
    }
  })
  Vue.filter('parseRecentTime', function (value) {
    if (!value) {
      return ''
    }
    const now = Date.now()
    value = value * 1000
    const m = Math.round((now - value) / 60000)
    if (m < 60) {
      return m
    } else {
      return '60+'
    }
  })
  Vue.filter('parseTimeOnly', function (value) {
    if (!value) {
      return ''
    }
    const altTimedate = new Date(value * 1000)
    const altHours = String(altTimedate.getHours()).padStart(2, '0')
    const altMinutes = String(altTimedate.getMinutes()).padStart(2, '0')

    return `${altHours}:${altMinutes}`
  })
  Vue.filter('parseCat', function (value) {
    if (!value || value === 'null') {
      return ''
    }
    const root = parse(value)
    return root.text ? root.text : ''
  })
  Vue.filter('parseCurrency', function (value) {
    const formatter = new Intl.NumberFormat('hr-HR', {
      style: 'currency',
      currency: 'HRK',
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: (value * 100) % 100 ? 2 : 0,
    })
    return formatter.format(value)
  })
}
