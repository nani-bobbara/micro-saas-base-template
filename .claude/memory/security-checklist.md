# Security Checklist

<!-- TODO: Expand security checklist with project-specific requirements -->

## Authentication & Authorization
- [ ] TODO: Verify BetterAuth session validation on all protected routes
- [ ] TODO: Implement role-based access control (RBAC)
- [ ] TODO: Ensure admin routes are protected by admin role check
- [ ] TODO: Validate JWT tokens on every API request

## Data Validation
- [ ] TODO: Validate all user inputs with Zod schemas
- [ ] TODO: Sanitize data before database writes
- [ ] TODO: Implement rate limiting on API routes

## Secrets Management
- [ ] TODO: Ensure no secrets in source code
- [ ] TODO: Use environment variables for all credentials
- [ ] TODO: Rotate secrets regularly

## Database Security
- [ ] TODO: Use parameterized queries (Drizzle handles this)
- [ ] TODO: Implement row-level security in Neon PostgreSQL
- [ ] TODO: Limit database user permissions

## API Security
- [ ] TODO: Enable CORS with strict origin policy
- [ ] TODO: Add CSP headers
- [ ] TODO: Implement request signing for webhooks (Stripe)

## Dependency Security
- [ ] TODO: Run pnpm audit regularly
- [ ] TODO: Keep dependencies up to date
- [ ] TODO: Use security audit GitHub Action
