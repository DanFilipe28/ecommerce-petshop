import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private ServicesService: ServicesService) {}

  @Get()
  async getAllServices() {
    return this.ServicesService.getAllServices();
  }

  // Outros endpoints para criar, atualizar, deletar produtos
}
