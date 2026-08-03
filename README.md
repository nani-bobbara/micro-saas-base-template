# micro-saas-base-template

Hexagonal Architecture + DDD monorepo scaffold for micro-SaaS products.

## Architecture

- `packages/domain`: Pure domain model (entities, value objects, ports, domain errors).
- `packages/application`: Use cases and orchestration over domain ports.
- `packages/adapters`: Infrastructure integrations and extension points (db, auth, billing, and optional adapters).
- `apps/*`: Delivery layer (Next.js apps for portal and admin).

## Repo Organization

- `apps/portal`: Customer-facing SaaS app.
- `apps/admin`: Internal back-office/admin app.
- `packages/auth`: Shared auth session/config/guards contracts.
- `packages/config`: Shared config for TypeScript, ESLint, Tailwind, and env.

## Current Repository Structure

```text
micro-saas-base-template/
├── .github/
│   ├── workflows/
│   │   ├── ci-validate.yml
│   │   ├── cd-portal.yml
│   │   ├── cd-admin.yml
│   │   ├── db-migrations.yml
│   │   └── security-audit.yml
│   └── actions/
│       ├── setup-env/action.yml
│       └── validate-secrets/action.yml
├── apps/
│   ├── portal/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   ├── (dashboard)/
│   │   │   └── api/
│   │   ├── components/
│   │   ├── features/
│   │   ├── public/
│   │   ├── Dockerfile
│   │   ├── env.mjs
│   │   ├── next.config.mjs
│   │   └── package.json
│   ├── admin/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   ├── (management)/
│   │   │   └── api/
│   │   ├── components/
│   │   ├── features/
│   │   ├── public/
│   │   ├── Dockerfile
│   │   ├── env.mjs
│   │   ├── next.config.mjs
│   │   └── package.json
├── packages/
│   ├── domain/
│   │   ├── entities/
│   │   ├── ports/
│   │   ├── value-objects/
│   │   ├── errors/
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── application/
│   │   ├── use-cases/
│   │   │   ├── billing/
│   │   │   ├── user/
│   │   │   └── tenant/
│   │   ├── dtos/
│   │   ├── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── adapters/
│   │   ├── ai/
│   │   ├── analytics/
│   │   ├── auth/
│   │   ├── cache/
│   │   ├── db/
│   │   ├── billing/
│   │   ├── flags/
│   │   ├── notifications/
│   │   └── scheduler/
│   ├── auth/
│   │   ├── config.ts
│   │   ├── session.ts
│   │   ├── guards.ts
│   │   ├── index.ts
│   │   └── package.json
│   └── config/
│       ├── env/
│       ├── typescript/
│       ├── tailwind/
│       ├── eslint/
│       ├── index.ts
│       └── package.json
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── turbo.json
├── .gitignore
└── README.md
```

## CI/CD Pipelines

- `.github/workflows/ci-validate.yml`: Lint, typecheck, test, and build checks.
- `.github/workflows/db-migrations.yml`: Neon migration workflow using Drizzle migrations from `packages/adapters/db`.
- `.github/workflows/cd-portal.yml`: Dedicated portal deployment flow (build/deploy from `apps/portal`) with Stripe/Neon secret gates.
- `.github/workflows/cd-admin.yml`: Dedicated admin deployment flow (build/deploy from `apps/admin`) with Stripe/Neon secret gates.
- `.github/workflows/security-audit.yml`: Scheduled and PR security checks (audit + secret scanning).

## Runtime Ports

- Portal: `http://localhost:3000`
- Admin: `http://localhost:3001`

## Shared Database

- Both apps use the same database adapter package: `@packages/adapters-db`.
- Shared DB health endpoints:
	- Portal: `GET /api`
	- Admin: `GET /api`
- Set `DATABASE_URL` in your environment for real DB connectivity.

## Environment Placement (Next.js + Neon)

- Local Portal app: copy `apps/portal/.env.example` to `apps/portal/.env.local`.
- Local Admin app: copy `apps/admin/.env.example` to `apps/admin/.env.local`.
- Both should use the same `DATABASE_URL` if you want both apps on the same Neon database.
- CI migrations use GitHub secret `DATABASE_URL` from `.github/workflows/db-migrations.yml`.
- Vercel deploys must define `DATABASE_URL` in each project environment (portal/admin).

## Integration Package Map

- Core DB adapter: `@packages/adapters-db`
- Core auth adapter: `@packages/adapters-auth`
- Core billing adapter: `@packages/adapters-billing`
- Optional adapter stubs (path-based): `packages/adapters/ai`, `packages/adapters/analytics`, `packages/adapters/cache`, `packages/adapters/flags`, `packages/adapters/notifications`, `packages/adapters/scheduler`

## Getting Started

1. Install dependencies:
   - `corepack pnpm install`
2. Run validation:
   - `corepack pnpm lint`
   - `corepack pnpm typecheck`
   - `corepack pnpm test`
3. Start apps:
   - `corepack pnpm dev:portal`
   - `corepack pnpm dev:admin`

## Production Checklist

- Implement real BetterAuth integration in `packages/adapters/auth`.
- Implement real Stripe SDK calls in `packages/adapters/billing`.
- Add migration review gate before production runs in `db-migrations.yml`.
- Add integration tests for `/api` DB health and auth guards.

## Required GitHub Secrets

- `DATABASE_URL`
- `NEON_API_KEY`
- `NEON_PROJECT_ID`
- `NEON_DATABASE_URL`
- `STRIPE_SECRET_KEY`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID_PORTAL`
- `VERCEL_PROJECT_ID_ADMIN`
