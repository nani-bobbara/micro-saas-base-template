// TODO: Implement AI adapter (OPTIONAL)
// Supports Vercel AI Gateway with multiple providers (OpenAI, Anthropic, etc.)

export interface IAIPort {
  // TODO: Define AI port interface
  generateText(prompt: string, options?: Record<string, unknown>): Promise<string>;
  generateStream(prompt: string, options?: Record<string, unknown>): Promise<ReadableStream>;
}

// TODO: Implement AI adapter using Vercel AI SDK
export class AIAdapter implements IAIPort {
  async generateText(prompt: string): Promise<string> {
    // TODO: Implement text generation via Vercel AI Gateway
    throw new Error("TODO: Implement generateText");
  }

  async generateStream(prompt: string): Promise<ReadableStream> {
    // TODO: Implement streaming via Vercel AI Gateway
    throw new Error("TODO: Implement generateStream");
  }
}
