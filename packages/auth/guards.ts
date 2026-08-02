// TODO: Implement auth guards for protecting routes and API handlers

import type { Session } from "./session";

export type UserRole = "owner" | "admin" | "member";

export function requireRole(session: Session, ...roles: UserRole[]): void {
  // TODO: Implement role check
  if (!roles.includes(session.role as UserRole)) {
    throw new Error(`Forbidden: Required roles: ${roles.join(", ")}`);
  }
}

export function isAdmin(session: Session): boolean {
  // TODO: Implement admin check
  return session.role === "admin" || session.role === "owner";
}

export function isOwner(session: Session): boolean {
  // TODO: Implement owner check
  return session.role === "owner";
}

// TODO: Add middleware-based guard for Next.js middleware.ts
// export function withAuthMiddleware(handler: NextMiddleware): NextMiddleware {}
