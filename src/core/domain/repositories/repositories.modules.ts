// src/core/domain/repositories/repositories.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/infrastructure/database/prisma/prisma.module';
import { USER_REPOSITORY } from './users/user.repository';
import { UserRepositoryImpl } from './users/user.repository.impl';
import { ProductRepositoryImpl } from './products/product.repository.impl';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImpl,
    },
    {
      provide: 'PRODUCT_REPOSITORY',
      useClass: ProductRepositoryImpl,
    },
  ],
  exports: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepositoryImpl,
    },
    {
      provide: 'PRODUCT_REPOSITORY',
      useClass: ProductRepositoryImpl,
    },
  ],
})
export class RepositoriesModule {}
