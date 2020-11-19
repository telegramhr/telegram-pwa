import Vue from 'vue'

export default () => {
  Vue.filter('parseTime', function (value) {
    const date = new Date(value * 1000)
    return new Intl.DateTimeFormat('hr').format(date)
  })
}
