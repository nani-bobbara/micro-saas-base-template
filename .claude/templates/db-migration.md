# Database Migration Template

<!-- TODO: Use this template when adding a new database migration -->

## Checklist for Adding a Database Migration

### 1. Define the Schema (`packages/adapters/db/`)
```typescript
// TODO: Add or modify table definition in schema file
// Use Drizzle ORM syntax
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const myTable = pgTable("my_table", {
  // TODO: Define columns
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
```

### 2. Generate Migration
```bash
# TODO: Run Drizzle Kit to generate migration
pnpm db:generate
```

### 3. Review Migration File
- [ ] TODO: Review the generated SQL migration file
- [ ] TODO: Ensure no data loss for existing records
- [ ] TODO: Add rollback strategy if needed

### 4. Test Migration Locally
```bash
# TODO: Apply migration to local/dev database
pnpm db:migrate
```

### 5. Update Repository Interface (`packages/domain/ports/`)
- [ ] TODO: Update port interface if new query patterns are needed

### 6. Update Adapter Implementation (`packages/adapters/db/`)
- [ ] TODO: Implement new methods in the DB adapter

### 7. CI/CD
- [ ] TODO: Ensure db-migrations.yml workflow is triggered
- [ ] TODO: Verify DATABASE_URL secret is set in target environment
