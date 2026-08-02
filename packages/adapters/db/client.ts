// TODO: Configure Drizzle ORM client with Neon PostgreSQL
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
// import * as schema from "./schema";

// TODO: Import env to get DATABASE_URL
// import { env } from "@micro-saas/config/env";

export function createDb(databaseUrl: string) {
  const sql = neon(databaseUrl);
  return drizzle(sql, {
    // schema,
    // TODO: Enable logger in development
  });
}

// TODO: Export singleton db instance
// export const db = createDb(env.DATABASE_URL);
