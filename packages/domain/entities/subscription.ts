// TODO: Define Subscription entity (billing domain)

export interface SubscriptionProps {
  // TODO: Add subscription properties
  id: string;
  tenantId: string;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  status: SubscriptionStatus;
  plan: string;
  currentPeriodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type SubscriptionStatus =
  | "active"
  | "past_due"
  | "canceled"
  | "trialing"
  | "unpaid";

export class Subscription {
  private readonly props: SubscriptionProps;

  constructor(props: SubscriptionProps) {
    // TODO: Add validation logic
    this.props = props;
  }

  get id() { return this.props.id; }
  get tenantId() { return this.props.tenantId; }
  get status() { return this.props.status; }

  // TODO: Add domain methods
  isActive(): boolean {
    return this.props.status === "active" || this.props.status === "trialing";
  }
}
