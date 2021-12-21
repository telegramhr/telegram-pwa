import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }, inject) => {
  Vue.use(
    VueGtag,
    {
      includes: [
        {
          id: 'G-9WS0P831P6',
        },
      ],
      config: {
        id: 'UA-60611577-1',
        params: {
          send_page_view: false,
          anonymize_ip: true,
          link_attribution: true,
        },
      },
    },
    app.router
  )
}
