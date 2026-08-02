// TODO: Implement StripeBillingAdapter
// This implements the IBillingPort from packages/domain/ports
import type { IBillingPort, CreateCheckoutSessionInput } from "@micro-saas/domain/ports";

export class StripeBillingAdapter implements IBillingPort {
  // private readonly stripe: Stripe;

  constructor(
    // TODO: Accept Stripe secret key or Stripe instance
    private readonly stripeSecretKey: string,
  ) {
    // TODO: Initialize Stripe client
    // this.stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-04-10" });
  }

  async createCheckoutSession(input: CreateCheckoutSessionInput): Promise<{ url: string }> {
    // TODO: Implement Stripe checkout session creation
    throw new Error("TODO: Implement createCheckoutSession");
  }

  async createCustomer(tenantId: string, email: string): Promise<{ customerId: string }> {
    // TODO: Implement Stripe customer creation
    throw new Error("TODO: Implement createCustomer");
  }

  async cancelSubscription(subscriptionId: string): Promise<void> {
    // TODO: Implement Stripe subscription cancellation
    throw new Error("TODO: Implement cancelSubscription");
  }
}
