export interface FeatureFlagsAdapter {
	isEnabled(flagKey: string, context?: Record<string, string>): Promise<boolean>;
}

export function createConfigFlagsAdapter(flags: Record<string, boolean>): FeatureFlagsAdapter {
	return {
		async isEnabled(flagKey: string) {
			return Boolean(flags[flagKey]);
		}
	};
}
