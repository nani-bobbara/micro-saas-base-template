// TODO: Define Tenant entity
// A tenant represents an organization / account in the multi-tenant system

export interface TenantProps {
  // TODO: Add tenant properties
  id: string;
  name: string;
  slug: string;
  plan: TenantPlan;
  createdAt: Date;
  updatedAt: Date;
}

export type TenantPlan = "free" | "starter" | "pro" | "enterprise";

export class Tenant {
  private readonly props: TenantProps;

  constructor(props: TenantProps) {
    // TODO: Add validation logic
    this.props = props;
  }

  get id() { return this.props.id; }
  get name() { return this.props.name; }
  get slug() { return this.props.slug; }
  get plan() { return this.props.plan; }

  // TODO: Add domain methods (e.g., isPaid(), canAddMembers())
  isPaid(): boolean {
    return this.props.plan !== "free";
  }
}
