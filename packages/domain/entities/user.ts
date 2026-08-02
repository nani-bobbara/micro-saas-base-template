// TODO: Define User entity
// Domain entity: pure logic, no external dependencies

export interface UserProps {
  // TODO: Add user properties
  id: string;
  email: string;
  name: string;
  tenantId: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = "owner" | "admin" | "member";

export class User {
  private readonly props: UserProps;

  constructor(props: UserProps) {
    // TODO: Add validation logic
    this.props = props;
  }

  get id() { return this.props.id; }
  get email() { return this.props.email; }
  get name() { return this.props.name; }
  get tenantId() { return this.props.tenantId; }
  get role() { return this.props.role; }

  // TODO: Add domain methods (e.g., isAdmin(), canManageBilling())
  isAdmin(): boolean {
    return this.props.role === "admin" || this.props.role === "owner";
  }
}
