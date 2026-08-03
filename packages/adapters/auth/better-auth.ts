export interface BetterAuthAdapterConfig {
	baseUrl: string;
	secret: string;
}

export interface BetterAuthAdapter {
	getSessionFromHeaders(headers: Headers): Promise<{ userId: string; tenantId: string } | null>;
}

export function createBetterAuthAdapter(config: BetterAuthAdapterConfig): BetterAuthAdapter {
	if (!config.baseUrl || !config.secret) {
		throw new Error("BetterAuth adapter requires baseUrl and secret");
	}

	return {
		async getSessionFromHeaders() {
			return null;
		}
	};
}
