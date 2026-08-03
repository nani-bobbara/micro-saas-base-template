// TODO: Implement CancelSubscription use case
import type { IBillingPort } from "@packages/domain";

export interface CancelSubscriptionInput {
  // TODO: Define input DTO
  tenantId: string;
  subscriptionId: string;
}

export class CancelSubscriptionUseCase {
  constructor(
    private readonly billingPort: IBillingPort,
    // TODO: Add other dependencies
  ) {}

  async execute(input: CancelSubscriptionInput): Promise<void> {
    // TODO: Implement use case logic
    // 1. Validate tenant owns subscription
    // 2. Cancel subscription via billing port
    await this.billingPort.cancelSubscription(input.subscriptionId);
  }
}
