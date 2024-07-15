import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { ProductRepository } from './product.repository';
import { Product } from '@core/domain/models/product.model';

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id: Number(id) },
    });
  }

  async findByName(name: string): Promise<Product | null> {
    return this.prisma.product.findFirst({
      where: { name },
    });
  }

  async create(product: Product): Promise<Product> {
    return this.prisma.product.create({
      data: product,
    });
  }

  async update(id: number, product: Partial<Product>): Promise<Product | null> {
    return this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.prisma.product.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
