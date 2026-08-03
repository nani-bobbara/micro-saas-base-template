export interface CreateCheckoutSessionInput {
	tenantId: string;
	priceId: string;
	successUrl: string;
	cancelUrl: string;
}

export interface CreateCheckoutSessionResult {
	id: string;
	url: string;
}

export interface IBillingPort {
	createCheckoutSession(input: CreateCheckoutSessionInput): Promise<CreateCheckoutSessionResult>;
	cancelSubscription(subscriptionId: string): Promise<void>;
}
