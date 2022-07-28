import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificate } from 'crypto';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // create a new user
  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findUser(id: number) {
    return this.userRepository.findOneById(id);
  }
  // get all the users in the  database
  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  // update user
  updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.save(updateUserDto);
  }

  // deleteUser delete a user by id
  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  // find user by login
  findOne(data: number | any) {
    return this.userRepository.findOne(data);
  }
}
