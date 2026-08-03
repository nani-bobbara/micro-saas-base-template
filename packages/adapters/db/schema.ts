import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const tenants = pgTable("tenants", {
	id: uuid("id").defaultRandom().primaryKey(),
	name: text("name").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});

export const users = pgTable("users", {
	id: uuid("id").defaultRandom().primaryKey(),
	tenantId: uuid("tenant_id")
		.notNull()
		.references(() => tenants.id),
	email: text("email").notNull(),
	createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull()
});
