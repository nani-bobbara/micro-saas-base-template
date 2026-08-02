# Architecture Rules

<!-- TODO: Fill in detailed architecture rules for this repository -->

## Hexagonal Architecture Layers

### Domain Layer (`packages/domain`)
- Pure business logic only
- NO external dependencies (no DB, no HTTP, no frameworks)
- Contains: entities, value-objects, ports (interfaces), domain errors
- Must be framework-agnostic and independently testable

### Application Layer (`packages/application`)
- Orchestrates domain logic via use-cases
- Depends only on domain ports (interfaces), never on adapters directly
- Contains: use-cases, DTOs, application services
- NO infrastructure concerns

### Adapters Layer (`packages/adapters`)
- Implements domain ports (interfaces)
- Contains: database adapters (Drizzle), auth adapters (BetterAuth), billing adapters (Stripe)
- Each adapter is isolated and swappable
- Optional adapters: flags, ai, cache, notifications, analytics, scheduler

### Delivery Layer (`apps/*`)
- Next.js App Router applications
- Composes use-cases and adapters
- Contains: pages, API routes, components, features
- Depends on application layer, never directly on domain internals

## Dependency Rules
- Domain ← Application ← Adapters ← Apps
- Never skip layers
- Never import from a higher-level layer into a lower-level layer

<!-- TODO: Add more specific rules per domain area -->
<!-- TODO: Add examples of correct and incorrect patterns -->
