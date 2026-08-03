import { z } from "zod";

export const serverEnvSchema = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
	DATABASE_URL: z
		.string()
		.min(1)
		.refine((value) => value.startsWith("postgres://") || value.startsWith("postgresql://"), {
			message: "DATABASE_URL must be a valid postgres connection string"
		}),
	BETTER_AUTH_SECRET: z.string().min(1).optional(),
	BETTER_AUTH_URL: z.string().url().optional(),
	STRIPE_SECRET_KEY: z.string().startsWith("sk_").optional(),
	STRIPE_WEBHOOK_SECRET: z.string().startsWith("whsec_").optional(),
	RESEND_API_KEY: z.string().optional(),
	REDIS_URL: z.string().url().optional(),
	AI_GATEWAY_API_KEY: z.string().optional(),
	FEATURE_FLAGS_PROVIDER: z.enum(["none", "launchdarkly", "posthog", "config"]).default("none"),
	GRAFANA_OTLP_ENDPOINT: z.string().url().optional(),
	GRAFANA_OTLP_TOKEN: z.string().optional()
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function createServerEnv(source: Record<string, string | undefined> = process.env): ServerEnv {
	return serverEnvSchema.parse(source);
}
