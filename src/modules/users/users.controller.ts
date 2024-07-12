// modules/user/user.controller.ts
import { UserService } from '@core/domain/services/user.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { User } from 'src/core/domain/models/user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // async login(
  //   email: string,
  //   password: string,
  // ): Promise<{ access_token: string }> {
  //   const user = await this.authService.validateUser(email, password);
  //   if (!user) {
  //     throw new Error('Invalid credentials');
  //   }
  //   return await this.authService.login(email, password);
  // }

  @Post()
  async create(@Body() userData: User): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(Number(id));
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userUpdate: Partial<User>,
  ): Promise<User | null> {
    return this.userService.updateUser(Number(id), userUpdate);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<boolean> {
    return this.userService.deleteUser(Number(id));
  }

  // Outros métodos para listar, atualizar e deletar usuários
}
