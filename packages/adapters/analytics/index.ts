export interface AnalyticsAdapter {
	track(event: string, properties?: Record<string, string | number | boolean>): Promise<void>;
}

export function createNoopAnalyticsAdapter(): AnalyticsAdapter {
	return {
		async track() {
			return;
		}
	};
}
