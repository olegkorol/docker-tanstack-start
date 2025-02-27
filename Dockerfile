FROM node:20-slim as base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Install pnpm in the builder stage
RUN npm install -g pnpm

# Build the application
RUN pnpm build

# Production image, copy all the files and run the server
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

# Create directory for writable files with proper permissions
RUN mkdir -p /app/data && \
    chown -R nodejs:nodejs /app/data

# Copy only necessary files
COPY --from=builder /app/.output ./.output

# Expose the port the app will run on
EXPOSE 3000

USER nodejs

# Start the Node.js server
CMD ["node", ".output/server/index.mjs"]