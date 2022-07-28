import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  //   get all the users in the database
  @Get('')
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findUser(id);
  }

  //   create a new user
  @Post('/create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  // update user
  @Post('update')
  async updateUser(@Body() updateUserDto: UpdateUserDto) {
    return await this.userService.updateUser(updateUserDto);
  }

  // delete user by id
  @Delete('/delete/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.deleteUser(id);
  }
}
