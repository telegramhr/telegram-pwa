module.exports = {
  apps: [
    {
      name: 'telegram-pwa',
      exec_mode: 'cluster',
      instances: process.env.PM2_INSTANCES || 2,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      cwd: '/app',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: '0.0.0.0'
      }
    }
  ]
}
