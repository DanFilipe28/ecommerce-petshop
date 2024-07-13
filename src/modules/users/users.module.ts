// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { RepositoriesModule } from '@core/domain/repositories/repositories.modules';
import { UserService } from '@core/domain/services/users/user.service';

@Module({
  imports: [RepositoriesModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
