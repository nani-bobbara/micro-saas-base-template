export interface AiAdapter {
	generateText(prompt: string): Promise<string>;
}

export function createNoopAiAdapter(): AiAdapter {
	return {
		async generateText() {
			return "";
		}
	};
}
