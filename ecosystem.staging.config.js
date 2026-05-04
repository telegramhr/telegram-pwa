module.exports = {
  apps: [
    {
      name: 'Telegram-Dev',
      exec_mode: 'cluster',
      instances: 2,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        API_BASE_URL: 'https://dev.telegram.hr',
        WC_KEY: process.env.WC_KEY,
        WC_SECRET: process.env.WC_SECRET,
      },
    },
  ],
}
