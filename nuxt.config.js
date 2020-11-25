export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Telegram.hr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Portal za društvena i kulturna pitanja. I svijet koji dolazi.',
      },
      { name: 'twitter:dnt', content: 'on' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/yjw4lwh.css' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
      },
    ],
    script: [
      {
        src:
          'https://connect.facebook.net/hr_HR/sdk.js#xfbml=1&version=v9.0&appId=1383786971938581',
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        nonce: 'LFZOW4mi',
      },
      {
        src: 'https://kit.fontawesome.com/4878256e09.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/tmg_framework.css', '@/assets/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/filters.js' },
    { src: '@/plugins/persisted.client.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  pwa: {
    onesignal: false,
    workbox: false,
    meta: {
      lang: 'hr',
      title: 'Telegram.hr',
      description:
        'Portal za društvena i kulturna pitanja. I svijet koji dolazi.',
      ogSiteName: 'Telegram.hr',
      mobileApp: false,
      name: 'Telegram.hr',
      author: 'Telegram.hr',
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://www.telegram.hr/wp-json/telegram/pwa/v1',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
