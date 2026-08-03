export class DomainError extends Error {
	constructor(message: string, public readonly code: string) {
		super(message);
		this.name = "DomainError";
	}
}

export class UserNotFoundError extends DomainError {
	constructor(userId: string) {
		super(`User not found: ${userId}`, "USER_NOT_FOUND");
		this.name = "UserNotFoundError";
	}
}

export class TenantNotFoundError extends DomainError {
	constructor(tenantId: string) {
		super(`Tenant not found: ${tenantId}`, "TENANT_NOT_FOUND");
		this.name = "TenantNotFoundError";
	}
}
