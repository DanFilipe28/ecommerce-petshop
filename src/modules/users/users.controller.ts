// modules/user/user.controller.ts
import { UserService } from '@core/domain/services/users/user.service';
import {
  Controller,
  Get,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/core/domain/models/user.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(Number(id));
  }
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userUpdate: Partial<User>,
  ): Promise<User | null> {
    return this.userService.updateUser(Number(id), userUpdate);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<boolean> {
    return this.userService.deleteUser(Number(id));
  }

  // Outros métodos para listar, atualizar e deletar usuários
}
