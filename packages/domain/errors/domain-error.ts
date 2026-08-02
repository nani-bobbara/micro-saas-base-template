// TODO: Define base domain error class

export abstract class DomainError extends Error {
  abstract readonly code: string;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

// TODO: Add specific domain error classes
export class UserNotFoundError extends DomainError {
  readonly code = "USER_NOT_FOUND";

  constructor(id: string) {
    super(`User with id ${id} not found`);
  }
}

export class TenantNotFoundError extends DomainError {
  readonly code = "TENANT_NOT_FOUND";

  constructor(id: string) {
    super(`Tenant with id ${id} not found`);
  }
}

export class UnauthorizedError extends DomainError {
  readonly code = "UNAUTHORIZED";

  constructor(message = "Unauthorized") {
    super(message);
  }
}
