// TODO: Implement session management utilities

// import { auth } from "./config";
// import { headers } from "next/headers";

export interface Session {
  // TODO: Define session type
  userId: string;
  tenantId: string;
  role: string;
  email: string;
}

export async function getSession(): Promise<Session | null> {
  // TODO: Implement session retrieval using BetterAuth
  // const session = await auth.api.getSession({ headers: headers() });
  // return session?.user ?? null;
  return null;
}

export async function requireSession(): Promise<Session> {
  // TODO: Implement session requirement (throws if not authenticated)
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized: No active session");
  }
  return session;
}
