// TODO: Define Tenant repository port interface
import type { Tenant, TenantProps } from "../entities/tenant";

export interface ITenantRepository {
  // TODO: Define repository methods
  findById(id: string): Promise<Tenant | null>;
  findBySlug(slug: string): Promise<Tenant | null>;
  create(props: Omit<TenantProps, "id" | "createdAt" | "updatedAt">): Promise<Tenant>;
  update(id: string, props: Partial<TenantProps>): Promise<Tenant>;
  delete(id: string): Promise<void>;
}
