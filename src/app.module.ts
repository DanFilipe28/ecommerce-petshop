// src/app.module.ts
import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { ServicesModule } from './modules/services/services.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ProductsModule, ServicesModule, UsersModule],
})
export class AppModule {}
