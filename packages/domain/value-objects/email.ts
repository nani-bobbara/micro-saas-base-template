// TODO: Define Email value object

export class Email {
  private readonly value: string;

  constructor(email: string) {
    // TODO: Add email validation
    if (!email.includes("@")) {
      throw new Error("Invalid email address");
    }
    this.value = email.toLowerCase().trim();
  }

  toString(): string {
    return this.value;
  }

  equals(other: Email): boolean {
    return this.value === other.value;
  }
}
