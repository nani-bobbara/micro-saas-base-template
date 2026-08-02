// TODO: Define Billing port interface
// This abstracts the payment provider (e.g., Stripe)

export interface CreateCheckoutSessionInput {
  // TODO: Add input properties
  tenantId: string;
  priceId: string;
  successUrl: string;
  cancelUrl: string;
}

export interface IBillingPort {
  // TODO: Define billing methods
  createCheckoutSession(input: CreateCheckoutSessionInput): Promise<{ url: string }>;
  createCustomer(tenantId: string, email: string): Promise<{ customerId: string }>;
  cancelSubscription(subscriptionId: string): Promise<void>;
  // TODO: Add more billing methods as needed
}
