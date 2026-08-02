// TODO: Implement UpdateUserProfile use case
import type { IUserRepository } from "@micro-saas/domain/ports";
import { UserNotFoundError } from "@micro-saas/domain/errors";

export interface UpdateUserProfileInput {
  // TODO: Define input DTO
  userId: string;
  name?: string;
  // TODO: Add other updatable fields
}

export interface UpdateUserProfileOutput {
  id: string;
  name: string;
  email: string;
}

export class UpdateUserProfileUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(input: UpdateUserProfileInput): Promise<UpdateUserProfileOutput> {
    // TODO: Implement use case logic
    const user = await this.userRepository.findById(input.userId);
    if (!user) {
      throw new UserNotFoundError(input.userId);
    }

    const updated = await this.userRepository.update(input.userId, {
      name: input.name,
    });

    return {
      id: updated.id,
      name: updated.name,
      email: updated.email,
    };
  }
}
