// src/core/domain/repositories/user.repository.ts
import { User } from '../../models/user.model';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: User): Promise<User>;
  update(id: number, user: Partial<User>): Promise<User | null>;
  delete(id: number): Promise<boolean>;
}
