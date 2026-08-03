import type { UpdateUserInput, User } from "../entities/user";

export interface IUserRepository {
	findById(userId: string): Promise<User | null>;
	update(userId: string, input: UpdateUserInput): Promise<User>;
}
