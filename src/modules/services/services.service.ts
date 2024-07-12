import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async getAllServices() {
    return this.prisma.service.findMany();
  }

  // Outros métodos para criar, atualizar, deletar produtos
}
