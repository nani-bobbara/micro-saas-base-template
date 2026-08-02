// TODO: Implement CreateCheckoutSession use case
import type { IBillingPort } from "@micro-saas/domain/ports";

export interface CreateCheckoutSessionInput {
  // TODO: Define input DTO
  tenantId: string;
  priceId: string;
  successUrl: string;
  cancelUrl: string;
}

export interface CreateCheckoutSessionOutput {
  // TODO: Define output DTO
  checkoutUrl: string;
}

export class CreateCheckoutSessionUseCase {
  constructor(
    private readonly billingPort: IBillingPort,
    // TODO: Add other dependencies (e.g., ITenantRepository)
  ) {}

  async execute(input: CreateCheckoutSessionInput): Promise<CreateCheckoutSessionOutput> {
    // TODO: Implement use case logic
    // 1. Validate tenant exists
    // 2. Check tenant doesn't already have active subscription
    // 3. Create checkout session via billing port
    const result = await this.billingPort.createCheckoutSession({
      tenantId: input.tenantId,
      priceId: input.priceId,
      successUrl: input.successUrl,
      cancelUrl: input.cancelUrl,
    });

    return { checkoutUrl: result.url };
  }
}
