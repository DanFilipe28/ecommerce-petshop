// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from 'src/core/domain/services/user.service';
import { RepositoriesModule } from '@core/domain/repositories/repositories.modules';

@Module({
  imports: [RepositoriesModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
