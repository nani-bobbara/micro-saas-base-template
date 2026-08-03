import type { CreateTenantInput, Tenant } from "../entities/tenant";

export interface ITenantRepository {
	create(input: CreateTenantInput): Promise<Tenant>;
	findById(tenantId: string): Promise<Tenant | null>;
	findBySlug(slug: string): Promise<Tenant | null>;
}
