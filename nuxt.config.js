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
      { rel: 'stylesheet', href: 'https://use.typekit.net/vrv6rlv.css' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
      },
      {
        rel: 'me',
        href: 'https://twitter.com/TelegramHR',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://linker.hr/widget/lw.css',
      },
      {
        rel: 'preload',
        href: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
        as: 'script',
      },
    ],
    script: [
      {
        src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
        async: true,
      },
      {
        src: '/prebid4.43.4-1.js',
        async: true,
      },
      {
        hid: 'piano',
        src: 'https://cdn.tinypass.com/api/tinypass.min.js',
        async: true,
      },
      {
        hid: 'cxense',
        src: 'https://cdn.cxense.com/cx.cce.js',
        async: true,
      },
      {
        hid: 'sovrn',
        src: 'https://get.s-onetag.com/71db7e62-a54b-43f0-98c7-ae8594228b02/tag.min.js',
        async: true,
        defer: true,
      },
    ],
  },

  router: {
    middleware: ['piano', 'gemius', 'dotmetrics'],
  },

  loading: '~/components/loading.vue',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/tmg_framework.css',
    '@/assets/style.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/filters.js' },
    { src: '@/plugins/persisted.client.js' },
    { src: '@/plugins/vue-slick-carousel.js' },
    { src: '@/plugins/piano-cxense.js', ssr: false },
    { src: '@/plugins/piano.js', ssr: false },
    { src: '@/plugins/mobile.js' },
    { src: '@/plugins/cxtrack.js', ssr: false },
    { src: '@/plugins/fontawesome.js' },
    { src: '@/plugins/gemius.client.js' },
    { src: '@/plugins/dotmetrics.client.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/eslint-module', 'nuxt-purgecss', '@nuxtjs/dotenv'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/gtm',
  ],

  gtm: {
    id: 'GTM-TF4XJXD',
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

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    credentials: true,
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'https://www.telegram.hr/wp-json/telegram/pwa/v1/',
      pathRewrite: { '^/api/': '' },
    },
    '/pretplate': {
      target: 'https://pretplate.telegram.hr',
      pathRewrite: { '^/pretplate/': '' },
    },
    '/gscripts': {
      target: 'https://script.google.com/macros/s/',
      pathRewrite: { '^/gscripts/([^?]*)(.*)': '$1/exec$2' },
    },
    '/subs': {
      target: 'https://api-esp.piano.io/tracker/securesub/',
      pathRewrite: {
        '^/subs/(.*)':
          '$1?api_key=V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
      },
    },
  },

  purgeCSS: {
    enabled: false,
    whitelistPatterns: [
      /slick/,
      /banner/,
      /yt-embed/,
      /fa.*/,
      /svg.*/,
      /fb_.*/,
      /twitter.*/,
    ],
  },

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
      minimize: true,
      splitChunks: {
        maxSize: 0,
      },
    },
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
