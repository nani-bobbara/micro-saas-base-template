# micro-saas-base-template

A production-ready micro-SaaS monorepo template following Hexagonal Architecture (Ports & Adapters) and Domain-Driven Design.

## Stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Apps**: Next.js 14 (App Router)
- **Database**: Drizzle ORM + Neon PostgreSQL
- **Auth**: BetterAuth
- **Billing**: Stripe
- **Optional**: Resend, Vercel AI Gateway, Feature Flags, Redis, Grafana

## Architecture

```
packages/domain       → Pure domain logic (entities, ports, value-objects, errors)
packages/application  → Use-cases orchestrating domain
packages/adapters     → Infrastructure implementations of ports
packages/ui           → Shared UI components (shadcn/ui + primitives)
packages/auth         → Auth configuration and session management
packages/config       → Shared configuration (TypeScript, Tailwind, ESLint)
apps/portal           → End-user Next.js application
apps/admin            → Admin Next.js application
apps/docs             → Documentation site
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all apps
pnpm build
```

<!-- TODO: Add detailed setup instructions -->
<!-- TODO: Add environment variable documentation -->
<!-- TODO: Add deployment guide -->
