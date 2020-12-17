import Vue from 'vue'
import { parse } from 'node-html-parser'

export default () => {
  Vue.filter('parseTime', function (value) {
    const date = new Date(value * 1000)
    return new Intl.DateTimeFormat('hr').format(date)
  })
  Vue.filter('parseCat', function (value) {
    const root = parse(value)
    return root.text ? root.text : ''
  })
}
