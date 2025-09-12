# Build stage
FROM node:18-alpine AS builder

# Install git (required for some npm packages)
RUN apk add --no-cache git

WORKDIR /app

# Copy ONLY package.json (not package-lock.json to avoid auth issues)
COPY package.json ./

# Configure Font Awesome Pro token and install dependencies
RUN rm -f .npmrc /root/.npmrc && \
    npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
    npm config set "//npm.fontawesome.com/:_authToken" "E5F250AB-978C-4713-A685-FC325371AFB4" && \
    npm install --legacy-peer-deps

# Copy application files
COPY . .

# Build the Nuxt application
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Install PM2 globally
RUN npm install -g pm2

# Copy built application from builder
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/static ./static
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/nuxt.config.js ./

# Create entrypoint script for runtime environment variables
RUN echo '#!/bin/sh' > /app/entrypoint.sh && \
    echo 'echo "Starting Telegram PWA with environment variables..."' >> /app/entrypoint.sh && \
    echo 'echo "API_URL: ${API_URL}"' >> /app/entrypoint.sh && \
    echo 'echo "BASE_URL: ${BASE_URL}"' >> /app/entrypoint.sh && \
    echo 'echo "BROWSER_BASE_URL: ${BROWSER_BASE_URL}"' >> /app/entrypoint.sh && \
    echo 'echo "WP_SITE_URL: ${WP_SITE_URL}"' >> /app/entrypoint.sh && \
    echo 'echo "CDN_URL: ${CDN_URL}"' >> /app/entrypoint.sh && \
    echo 'echo "GTM_ID: ${GTM_ID}"' >> /app/entrypoint.sh && \
    echo 'exec pm2-runtime start ecosystem.config.js' >> /app/entrypoint.sh && \
    chmod +x /app/entrypoint.sh

# Create PM2 ecosystem config with environment variables
RUN echo "module.exports = {" > /app/ecosystem.config.js && \
    echo "  apps: [{" >> /app/ecosystem.config.js && \
    echo "    name: 'telegram-pwa'," >> /app/ecosystem.config.js && \
    echo "    script: 'npm'," >> /app/ecosystem.config.js && \
    echo "    args: 'start'," >> /app/ecosystem.config.js && \
    echo "    instances: process.env.PM2_INSTANCES || 2," >> /app/ecosystem.config.js && \
    echo "    exec_mode: 'cluster'," >> /app/ecosystem.config.js && \
    echo "    max_memory_restart: '512M'," >> /app/ecosystem.config.js && \
    echo "    env: {" >> /app/ecosystem.config.js && \
    echo "      NODE_ENV: 'production'," >> /app/ecosystem.config.js && \
    echo "      HOST: '0.0.0.0'," >> /app/ecosystem.config.js && \
    echo "      PORT: process.env.PORT || 3000," >> /app/ecosystem.config.js && \
    echo "      API_URL: process.env.API_URL || 'https://telegram.hr/wp-json/telegram/pwa/v1/'," >> /app/ecosystem.config.js && \
    echo "      BASE_URL: process.env.BASE_URL || 'http://localhost:3000'," >> /app/ecosystem.config.js && \
    echo "      BROWSER_BASE_URL: process.env.BROWSER_BASE_URL || ''," >> /app/ecosystem.config.js && \
    echo "      WP_SITE_URL: process.env.WP_SITE_URL || 'https://telegram.hr'," >> /app/ecosystem.config.js && \
    echo "      CDN_URL: process.env.CDN_URL || 'https://cdn.telegram.hr'," >> /app/ecosystem.config.js && \
    echo "      GTM_ID: process.env.GTM_ID || ''," >> /app/ecosystem.config.js && \
    echo "      REMP_HOST: process.env.REMP_HOST || ''," >> /app/ecosystem.config.js && \
    echo "      REMP_BEAM_REMPLIB_URL: process.env.REMP_BEAM_REMPLIB_URL || ''" >> /app/ecosystem.config.js && \
    echo "    }," >> /app/ecosystem.config.js && \
    echo "    error_file: '/dev/stderr'," >> /app/ecosystem.config.js && \
    echo "    out_file: '/dev/stdout'," >> /app/ecosystem.config.js && \
    echo "    time: false" >> /app/ecosystem.config.js && \
    echo "  }]" >> /app/ecosystem.config.js && \
    echo "};" >> /app/ecosystem.config.js

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {r.statusCode === 200 ? process.exit(0) : process.exit(1)})"

# Run the application
ENTRYPOINT ["/app/entrypoint.sh"]