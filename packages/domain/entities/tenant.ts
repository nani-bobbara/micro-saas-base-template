export type TenantPlan = "free" | "pro" | "enterprise";

export interface Tenant {
	id: string;
	name: string;
	slug: string;
	plan: TenantPlan;
	createdAt: Date;
}

export interface CreateTenantInput {
	name: string;
	slug: string;
	plan: TenantPlan;
}
