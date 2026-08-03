export type UserRole = "owner" | "admin" | "member";

export interface User {
	id: string;
	tenantId: string;
	email: string;
	name: string;
	role: UserRole;
	createdAt: Date;
}

export interface UpdateUserInput {
	name?: string;
	role?: UserRole;
}
