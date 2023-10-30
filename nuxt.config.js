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
        content: 'Nekad je nužno odabrati stranu',
      },
      { name: 'twitter:dnt', content: 'on' },
      { name: 'twitter:widgets:csp', content: 'on' },
      { property: 'fb:pages', content: '688325737947866' },
      {
        name: 'google-site-verification',
        content: 'Laeir-LCi9jxATGNiq0pzM6SKn0DeAWNa5f_vsvYKdA',
      },
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: 'https://www.telegram.hr' },
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
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=IBM+Plex+Mono:wght@500;600&family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap',
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
        src: '/prebid7.40.0.js',
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
        hid: 'coral',
        src: 'https://talk.telegram.hr/assets/js/embed.js',
        async: false,
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
    { src: '@/plugins/axios.js', ssr: false },
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
    { src: '@/plugins/marfeel.client.js' },
    { src: '@/plugins/adsense.client.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-purgecss',
    '@nuxtjs/dotenv',
    // '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxtjs/gtm',
    '@nuxtjs/onesignal',
  ],

  oneSignal: {
    init: {
      appId: '4a5a4862-40d1-42f0-b324-85812703ccc5',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true,
      },
      requiresUserPrivacyConsent: false,
      promptOptions: {
        actionMessage: 'Prijavite na obavijesti s Telegram.hr',
        acceptButton: 'Prijavi se',
        acceptButtonText: 'Prijavi se',
        showCredit: false,
        cancelButton: 'Ne, hvala',
        cancelButtonText: 'Ne, hvala',
      },
      notifyButton: {
        enable: false,
        showCredit: false,
      },
      autoResubscribe: true,
    },
  },

  googleFonts: {
    display: 'swap',
    download: false,
    overwriting: false,
    families: {
      Barlow: {
        wght: [300, 400, 600, 700],
        ital: [400],
      },
      Lora: {
        wgth: [400, 700],
        ital: [400],
      },
      Merriweather: {
        wght: [300, 400, 700],
        ital: [300, 400, 700],
      },
    },
  },

  gtm: {
    id: 'GTM-TF4XJXD',
    pageTracking: true,
  },

  pwa: {
    workbox: false,
    meta: {
      lang: 'hr',
      title: 'Telegram.hr - Nekad je nužno odabrati stranu',
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
    manifest: {
      name: 'Telegram.hr',
      lang: 'hr',
      short_name: 'Telegram.hr',
      description: 'Nekad je nužno odabrati stranu',
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
      /ol/,
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
