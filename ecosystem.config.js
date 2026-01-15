module.exports = {
  apps: [
    {
      name: 'telegram-pwa',
      exec_mode: 'fork',
      instances: 1,
      script: 'npm',
      args: 'start',
      cwd: '/app',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: '0.0.0.0'
      },
      error_file: '/dev/stderr',
      out_file: '/dev/stdout',
      time: false,
      max_memory_restart: '512M'
    }
  ]
}
