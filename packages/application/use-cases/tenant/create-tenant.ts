// TODO: Implement CreateTenant use case
import type { ITenantRepository } from "@micro-saas/domain/ports";

export interface CreateTenantInput {
  // TODO: Define input DTO
  name: string;
  slug: string;
  ownerEmail: string;
}

export interface CreateTenantOutput {
  id: string;
  name: string;
  slug: string;
  plan: string;
}

export class CreateTenantUseCase {
  constructor(
    private readonly tenantRepository: ITenantRepository,
    // TODO: Add IBillingPort for creating Stripe customer
  ) {}

  async execute(input: CreateTenantInput): Promise<CreateTenantOutput> {
    // TODO: Implement use case logic
    // 1. Validate slug is unique
    // 2. Create tenant in repository
    // 3. Create Stripe customer via billing port
    const tenant = await this.tenantRepository.create({
      name: input.name,
      slug: input.slug,
      plan: "free",
    });

    return {
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
      plan: tenant.plan,
    };
  }
}
