# Domain Feature Template

<!-- TODO: Use this template when adding a new domain feature -->

## Checklist for Adding a New Domain Feature

### 1. Define the Entity (`packages/domain/entities/`)
```typescript
// TODO: Create entity file: packages/domain/entities/<feature>.ts
// Example structure:
export class FeatureName {
  // TODO: Add entity properties
  // TODO: Add domain methods
  // TODO: Add validation logic
}
```

### 2. Define Value Objects (`packages/domain/value-objects/`)
```typescript
// TODO: Create value object file if needed
// Value objects are immutable, identity-free domain concepts
```

### 3. Define Ports (`packages/domain/ports/`)
```typescript
// TODO: Create port interface: packages/domain/ports/i-<feature>-repository.ts
export interface IFeatureRepository {
  // TODO: Define repository methods
}
```

### 4. Define Domain Errors (`packages/domain/errors/`)
```typescript
// TODO: Create error classes for domain-specific errors
```

### 5. Create Use Case (`packages/application/use-cases/<domain>/`)
```typescript
// TODO: Create use case file
// Use cases orchestrate domain entities through port interfaces
```

### 6. Create DTOs (`packages/application/dtos/`)
```typescript
// TODO: Define input/output DTOs for the use case
```

### 7. Implement Adapter (`packages/adapters/db/`)
```typescript
// TODO: Implement the port interface in the DB adapter
```

### 8. Expose in App (`apps/portal/` or `apps/admin/`)
```typescript
// TODO: Create API route or server action
// TODO: Create feature component
```
