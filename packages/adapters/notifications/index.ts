// TODO: Implement notifications adapter (OPTIONAL)
// Supports Resend for email notifications

export interface INotificationPort {
  // TODO: Define notification port interface
  sendEmail(to: string, subject: string, html: string): Promise<void>;
  // TODO: Add more notification channels (SMS, push, etc.)
}

// TODO: Implement Resend email adapter
export class ResendNotificationAdapter implements INotificationPort {
  constructor(
    private readonly apiKey: string,
    private readonly fromEmail: string,
  ) {}

  async sendEmail(to: string, subject: string, html: string): Promise<void> {
    // TODO: Implement email sending via Resend
    throw new Error("TODO: Implement sendEmail with Resend");
  }
}
