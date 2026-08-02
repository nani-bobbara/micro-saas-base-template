// TODO: Define shared server environment variables
// Used as a base for app-specific env schemas

import { z } from "zod";

export const baseServerEnvSchema = z.object({
  // TODO: Add shared server environment variables
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string().min(32),
});

export type BaseServerEnv = z.infer<typeof baseServerEnvSchema>;
