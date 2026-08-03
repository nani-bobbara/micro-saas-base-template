import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

let sqlClient: postgres.Sql | null = null;
let dbClient: ReturnType<typeof drizzle> | null = null;

if (connectionString) {
	sqlClient = postgres(connectionString, {
		prepare: false,
		ssl: "require"
	});
	dbClient = drizzle(sqlClient);
}

export function getDb() {
	if (!dbClient) {
		throw new Error("DATABASE_URL is not configured");
	}
	return dbClient;
}

export async function getDbHealth() {
	if (!sqlClient) {
		return {
			ok: false,
			reason: "DATABASE_URL is not configured"
		} as const;
	}

	try {
		await sqlClient`select 1 as health`;
		return {
			ok: true
		} as const;
	} catch (error) {
		const message = error instanceof Error ? error.message : "unknown database error";
		return {
			ok: false,
			reason: "database connection failed",
			detail: process.env.NODE_ENV === "development" ? message : undefined
		} as const;
	}
}
