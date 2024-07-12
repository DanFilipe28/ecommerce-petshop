import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  providers: [ServicesService, PrismaService],
  controllers: [ServicesController],
})
export class ServicesModule {}
