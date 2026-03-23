module.exports = {
  apps: [
    {
      name: 'Telegram',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env: {
        API_BASE_URL: 'https://telegram.hr',
      },
    },
  ],
}
