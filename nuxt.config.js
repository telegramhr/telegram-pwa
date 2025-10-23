export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  globalName: 'telegram',
  modern: 'client',
  telemetry: false,
  // ssr: false,
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
      { hid: 'twitter:dnt', name: 'twitter:dnt', content: 'on' },
      {
        hid: 'twitter:widgets:csp',
        name: 'twitter:widgets:csp',
        content: 'on',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@TelegramHR',
      },
      { property: 'fb:pages', content: '688325737947866' },
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: 'https://www.telegram.hr/' },
      {
        rel: 'me',
        href: 'https://twitter.com/TelegramHR',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,600;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,500;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=IBM+Plex+Mono:wght@500;600&family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap',
      },
    ],
    script: [
      {
        hid: 'coral',
        src: 'https://talk.telegram.hr/assets/js/embed.js',
        async: false,
        defer: true,
      },
      {
        hid: 'remplib',
        innerHTML:
          'function mock(fn) {\n' +
          '    return function () {\n' +
          '      this._.push([fn, arguments])\n' +
          '    }\n' +
          '  }\n' +
          '  window.remplib = window.remplib || {}\n' +
          '  const mockFuncs = {\n' +
          "    campaign: 'init',\n" +
          "    tracker: 'init trackEvent trackPageview trackCommerce',\n" +
          "    iota: 'init',\n" +
          '  }\n' +
          '\n' +
          '  Object.keys(mockFuncs).forEach(function (key) {\n' +
          '    if (!window.remplib[key]) {\n' +
          '      let fn\n' +
          '      let i\n' +
          "      const funcs = mockFuncs[key].split(' ')\n" +
          '      window.remplib[key] = { _: [] }\n' +
          '\n' +
          '      for (i = 0; i < funcs.length; i++) {\n' +
          '        fn = funcs[i]\n' +
          '        window.remplib[key][fn] = mock(fn)\n' +
          '      }\n' +
          '    }\n' +
          '  })',
      },
      {
        hid: 'gpt',
        src: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
        async: true,
        defer: true,
      },
      {
        hid: 'remplib-camp',
        src: 'https://campaign.telegram.hr/assets/lib/js/remplib.js',
        async: true,
      },
      {
        hid: 'remplib-beam',
        src: 'https://beam.telegram.hr/assets/lib/js/remplib.js',
        async: true,
      },
      {
        hid: 'google',
        src: 'https://accounts.google.com/gsi/client',
        async: true,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      remplib: ['innerHTML'],
    },
  },

  router: {
    middleware: ['gemius', 'dotmetrics'],
  },

  loading: '~/components/loading.vue',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/tmg_framework.css',
    '@/assets/style.css',
    '@/assets/telegram-family.css',
    '@/assets/telesport-family.css',
    '@/assets/ads.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/axios.js', ssr: false },
    { src: '@/plugins/filters.js' },
    { src: '@/plugins/persisted.client.js' },
    { src: '@/plugins/vue-slick-carousel.js' },
    { src: '@/plugins/mobile.js' },
    { src: '@/plugins/fontawesome.js' },
    { src: '@/plugins/dotmetrics.client.js' },
    { src: '@/plugins/marfeel.client.js' },
    { src: '@/plugins/ctr.client.js' },
    { src: '@/plugins/adsense.client.js', ssr: false },
    { src: '@/plugins/gtm.client.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: '~/components', pathPrefix: false }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-purgecss',
    '@nuxtjs/dotenv',
    '@vueuse/nuxt',
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
        autoPrompt: true,
        delay: { pageViews: 2, timeDelay: 20 },
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
      ogHost: 'https://www.telegram.hr/',
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
    '/crm': {
      target: 'https://pretplata.telegram.hr',
      pathRewrite: { '^/crm/': '' },
    },
    '/mailer': {
      target: 'https://mailer.telegram.hr',
      pathRewrite: { '^/mailer/': '' },
    },
    '/gscripts': {
      target: 'https://script.google.com/macros/s/',
      pathRewrite: { '^/gscripts/([^?]*)(.*)': '$1/exec$2' },
    },
    '/piano': {
      target: 'https://api.piano.io/',
      pathRewrite: { '^/piano/': '' },
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
    },
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    performance: {
      maxEntrypointSize: 1024000,
      maxAssetSize: 512000,
    },
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
}
