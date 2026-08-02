# TODO: Configure production Docker image for admin app
FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# TODO: Add dependency installation stage
FROM base AS deps
# COPY package files
# RUN pnpm install --frozen-lockfile

# TODO: Add build stage
FROM base AS builder
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# RUN pnpm build

# TODO: Add production runner stage
FROM base AS runner
# ENV NODE_ENV=production
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# EXPOSE 3001
# CMD ["node", "server.js"]
