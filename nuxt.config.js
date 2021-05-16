export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  globalName: 'telegram',
  modern: 'client',
  telemetry: false,
  head: {
    title: 'Telegram.hr',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Portal za društvena i kulturna pitanja. I svijet koji dolazi.',
      },
      { name: 'twitter:dnt', content: 'on' },
      { name: 'twitter:widgets:csp', content: 'on' },
    ],
    link: [
      {
        hid: 'favicon',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      { hid: 'canonical', rel: 'canonical', href: 'https:/www.telegram.hr' },
      {
        hid: 'gf-preconnect',
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
      {
        hid: 'tk-preconnect',
        rel: 'preconnect',
        href: 'https://use.typekit.net',
        crossorigin: 'anonymous',
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/yjw4lwh.css' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
      },
      {
        rel: 'me',
        href: 'https://twitter.com/TelegramHR',
      },
    ],
    script: [
      {
        hid: 'piano',
        src: '//cdn.tinypass.com/api/tinypass.min.js',
        async: true,
      },
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
      {
        hid: 'cxense',
        src: 'https://cdn.cxense.com/cx.cce.js',
        async: true,
      },
    ],
  },

  router: {
    middleware: ['piano'],
  },

  loading: '~/components/loading.vue',

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
    { src: '@/plugins/choices.client.js' },
    { src: '@/plugins/vue-slick-carousel.js' },
    { src: '@/plugins/piano-cxense.js', ssr: false },
    { src: '@/plugins/piano.js', ssr: false },
    { src: '@/plugins/mobile.js' },
    { src: '@/plugins/cxtrack.js', ssr: false },
  ],

  ngrok: {
    region: 'eu',
    authtoken: process.env.NGROK_AUTHTOKEN,
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    'nuxt-purgecss',
    '@nuxtjs/ngrok',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
    'cookie-universal-nuxt',
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
      'fb:app_id': '1383786971938581',
      'og:locale': 'hr_HR',
      ogImage:
        'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
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
      display: 'browser',
      start_url: '/',
    },
  },

  googleAnalytics: {
    id: 'UA-60611577-1',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    credentials: true,
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'https://www.telegram.hr/wp-json/telegram/pwa/v1/',
      pathRewrite: { '^/api/': '' },
    },
    '/pretplate/': {
      target: 'https://pretplate.telegram.hr',
      pathRewrite: { '^/pretplate/': '' },
    },
  },

  purgeCSS: {
    enabled: true,
    whitelistPatterns: [/slick/, /banner/],
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // cache: true,
    // parallel: true,
    // hardSource: true,
    indicator: false,
    loaders: {
      vue: {
        prettify: false,
      },
    },
    optimization: {
      splitChunks: {
        maxSize: 0,
      },
    },
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
