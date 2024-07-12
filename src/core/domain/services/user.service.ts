// src/core/domain/services/user.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../models/user.model';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../repositories/users/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
  ) {}

  async createUser(user: User): Promise<User> {
    return await this.userRepository.create(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findById(id);
  }

  async updateUser(
    id: number,
    userUpdate: Partial<User>,
  ): Promise<User | null> {
    return await this.userRepository.update(id, userUpdate);
  }

  async deleteUser(id: number): Promise<boolean> {
    return await this.userRepository.delete(id);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }
}
