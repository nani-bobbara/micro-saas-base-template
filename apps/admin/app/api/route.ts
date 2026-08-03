import { getDbHealth } from "@packages/adapters-db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
	const db = await getDbHealth();
	const status = db.ok ? 200 : 503;

	return NextResponse.json(
		{
			app: "admin",
			db,
			timestamp: new Date().toISOString()
		},
		{ status }
	);
}
