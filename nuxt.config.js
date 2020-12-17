export default {
  // ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  globalName: 'telegram',
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
      { hid: 'canonical', rel: 'canonical', href: 'https:/www.telegram.hr' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/yjw4lwh.css' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
      },
    ],
    script: [
      {
        hid: 'facebook',
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
      {
        src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
        async: true,
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.8/postscribe.min.js',
      },
      {
        src:
          'https://www.telegram.hr/wp-content/plugins/telegram-ad-plugin/src/AdPlugin/assets/dfp/expand2.js',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/tmg_framework.css',
    '@/assets/style.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/filters.js' },
    { src: '@/plugins/persisted.client.js' },
    { src: '@/plugins/analytics.client.js' },
    { src: '@/plugins/choices.client.js' },
    { src: '@/plugins/vue-slick-carousel.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-TF4XJXD',
    enabled: true,
    pageTracking: true,
  },

  pwa: {
    onesignal: false,
    workbox: false,
    meta: {
      lang: 'hr',
      title:
        'Telegram.hr - Portal za društvena i kulturna pitanja. I svijet koji dolazi.',
      description:
        'Pročitajte najnovije vijesti iz Hrvatske i svijeta. Društvene analize, kolumne političkih stručnjaka, velike priče o malim ljudima. Portal bez treša i estrade, za ljude koji razmišljaju o svijetu budućnosti.',
      ogSiteName: 'Telegram.hr',
      ogHost: 'https://www.telegram.hr',
      'og:app_id': '1383786971938581',
      mobileApp: false,
      appleStatusBarStyle: 'black',
      name: 'Telegram.hr',
      author: 'Telegram.hr',
    },
    icon: {
      fileName: 'tg_neue_favicon.png',
    },
    manifest: {
      name: 'Telegram.hr',
      lang: 'hr',
      short_name: 'Telegram.hr',
      description:
        'Portal za društvena i kulturna pitanja. I svijet koji dolazi.',
      background_color: '#fcf1e7',
      display: 'standalone',
    },
  },

  googleAnalytics: {
    id: 'UA-60611577-1',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://www.telegram.hr/index.php?rest_route=/telegram/pwa/v1',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
