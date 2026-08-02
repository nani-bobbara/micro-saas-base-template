// TODO: Define and validate environment variables for the admin app
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // TODO: Add server-side environment variables
    DATABASE_URL: z.string().url(),
    BETTER_AUTH_SECRET: z.string().min(32),
    // TODO: Add ADMIN_ALLOWED_EMAILS for restricting access
  },
  client: {
    // TODO: Add client-side environment variables (NEXT_PUBLIC_*)
    NEXT_PUBLIC_ADMIN_URL: z.string().url(),
  },
  runtimeEnv: {
    // TODO: Map all environment variables to process.env
    DATABASE_URL: process.env.DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    NEXT_PUBLIC_ADMIN_URL: process.env.NEXT_PUBLIC_ADMIN_URL,
  },
});
