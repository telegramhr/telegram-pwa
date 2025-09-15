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
COPY --from=builder /app/ecosystem.config.js ./

# Set environment variables
ENV HOST=0.0.0.0 \
    PORT=3000 \
    NODE_ENV=production

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {r.statusCode === 200 ? process.exit(0) : process.exit(1)})"

# Copy startup script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Run the application with PM2 directly - use sh interpreter explicitly
CMD ["pm2-runtime", "start", "/app/start.sh", "--name", "telegram-pwa", "-i", "2", "--interpreter", "sh"]