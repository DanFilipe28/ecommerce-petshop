import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@core/domain/models/product.model';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '@core/domain/repositories/products/product.repository';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findById(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async findByName(name: string): Promise<Product | null> {
    return this.productRepository.findByName(name);
  }

  async create(product: Product): Promise<Product> {
    return this.productRepository.create(product);
  }

  async update(id: number, product: Partial<Product>): Promise<Product | null> {
    return this.productRepository.update(id, product);
  }

  async delete(id: number): Promise<boolean> {
    return this.productRepository.delete(id);
  }
}
