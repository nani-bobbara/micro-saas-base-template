// TODO: Implement GetUserProfile use case
import type { IUserRepository } from "@packages/domain";
import { UserNotFoundError } from "@packages/domain";

export interface GetUserProfileInput {
  userId: string;
}

export interface GetUserProfileOutput {
  // TODO: Define output DTO
  id: string;
  email: string;
  name: string;
  role: string;
  tenantId: string;
}

export class GetUserProfileUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(input: GetUserProfileInput): Promise<GetUserProfileOutput> {
    // TODO: Implement use case logic
    const user = await this.userRepository.findById(input.userId);
    if (!user) {
      throw new UserNotFoundError(input.userId);
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      tenantId: user.tenantId,
    };
  }
}
