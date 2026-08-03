export interface NotificationsAdapter {
	sendEmail(input: { to: string; subject: string; html: string }): Promise<void>;
}

export function createConsoleNotificationsAdapter(): NotificationsAdapter {
	return {
		async sendEmail(input) {
			console.log("[notifications] email", input.to, input.subject);
		}
	};
}
