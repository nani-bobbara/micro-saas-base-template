export interface SchedulerAdapter {
	schedule(input: { jobName: string; cron: string; payload?: Record<string, string> }): Promise<void>;
}

export function createNoopSchedulerAdapter(): SchedulerAdapter {
	return {
		async schedule() {
			return;
		}
	};
}
