// src/core/domain/repositories/user.repository.impl.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { UserRepository } from './user.repository';
import { User } from '../../models/user.model';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(user: User): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    return this.prisma.user.create({
      data: user,
    });
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    return this.prisma.user.update({
      where: { id },
      data: user,
    });
  }

  async delete(id: number): Promise<boolean> {
    const deleteResult = await this.prisma.user.delete({
      where: { id },
    });
    return !!deleteResult;
  }
}
