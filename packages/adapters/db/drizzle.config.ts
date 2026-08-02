// TODO: Configure Drizzle Kit for migrations
import type { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    // TODO: Use environment variable
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
