export type SubscriptionStatus = "trialing" | "active" | "past_due" | "canceled";

export interface Subscription {
	id: string;
	tenantId: string;
	provider: "stripe";
	providerSubscriptionId: string;
	status: SubscriptionStatus;
	createdAt: Date;
}
