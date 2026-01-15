#!/usr/bin/env node

const { exec } = require('child_process');
const process = require('process');

// Start Nuxt in production mode
const child = exec('npm start', {
  cwd: '/app',
  env: {
    ...process.env,
    NODE_ENV: 'production',
    HOST: '0.0.0.0',
    PORT: process.env.PORT || '3000'
  }
});

// Forward output
child.stdout.on('data', (data) => {
  process.stdout.write(data);
});

child.stderr.on('data', (data) => {
  process.stderr.write(data);
});

// Handle process termination
child.on('exit', (code) => {
  process.exit(code);
});

// Handle signals
process.on('SIGTERM', () => {
  child.kill('SIGTERM');
});

process.on('SIGINT', () => {
  child.kill('SIGINT');
});