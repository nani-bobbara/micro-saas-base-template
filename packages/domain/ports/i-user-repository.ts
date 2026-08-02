// TODO: Define User repository port interface
import type { User, UserProps } from "../entities/user";

export interface IUserRepository {
  // TODO: Define repository methods
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByTenantId(tenantId: string): Promise<User[]>;
  create(props: Omit<UserProps, "id" | "createdAt" | "updatedAt">): Promise<User>;
  update(id: string, props: Partial<UserProps>): Promise<User>;
  delete(id: string): Promise<void>;
}
