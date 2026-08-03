import type { CreateCheckoutSessionInput, CreateCheckoutSessionResult, IBillingPort } from "@packages/domain";

export interface StripeAdapterConfig {
	secretKey: string;
}

export class StripeAdapter implements IBillingPort {
	constructor(private readonly config: StripeAdapterConfig) {
		if (!config.secretKey.startsWith("sk_")) {
			throw new Error("Invalid Stripe secret key format");
		}
	}

	async createCheckoutSession(input: CreateCheckoutSessionInput): Promise<CreateCheckoutSessionResult> {
		return {
			id: `stub_${input.tenantId}`,
			url: `${input.successUrl}?session=stub`
		};
	}

	async cancelSubscription(): Promise<void> {
		return;
	}
}
