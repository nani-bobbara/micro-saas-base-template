// TODO: Configure BetterAuth for the monorepo
// This is the shared auth configuration used by all apps

// import { betterAuth } from "better-auth";
// import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import { organization } from "better-auth/plugins";
// import { db } from "@micro-saas/adapter-db";

export const authConfig = {
  // TODO: Configure BetterAuth options
  // database: drizzleAdapter(db, { provider: "pg" }),
  // emailAndPassword: {
  //   enabled: true,
  //   requireEmailVerification: true,
  // },
  // socialProviders: {
  //   google: {
  //     clientId: process.env.GOOGLE_CLIENT_ID!,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //   },
  // },
  // plugins: [
  //   organization(),
  // ],
  // session: {
  //   cookieCache: { enabled: true, maxAge: 5 * 60 },
  // },
};

// TODO: Export configured auth instance
// export const auth = betterAuth(authConfig);
