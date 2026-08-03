export interface CacheAdapter {
	get(key: string): Promise<string | null>;
	set(key: string, value: string, ttlSeconds?: number): Promise<void>;
}

export function createInMemoryCacheAdapter(): CacheAdapter {
	const store = new Map<string, string>();
	return {
		async get(key: string) {
			return store.get(key) ?? null;
		},
		async set(key: string, value: string) {
			store.set(key, value);
		}
	};
}
