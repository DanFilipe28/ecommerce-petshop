import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductService } from '@core/domain/services/products/product.service';
import { RepositoriesModule } from '@core/domain/repositories/repositories.modules';

@Module({
  imports: [RepositoriesModule],
  controllers: [ProductsController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductsModule {}
