// TODO: Add admin API route handlers
export async function GET() {
  // TODO: Implement admin health check
  return Response.json({ status: "ok", app: "admin" });
}
