import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Certificate } from 'crypto';
import { Producteur } from 'src/entities/Producteur.entity';
import { User } from 'src/entities/User.entity';
import { ProducteurService } from 'src/producteur/producteur.service';
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

  findUserById(id: number) {
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

  findUser(input: string) {
    return this.userRepository
      .createQueryBuilder()
      .where('user.login=: login', {
        login: input,
      });
  }

  findUserQuery(query: any) {
    return this.userRepository.find({ where: query });
  }

  findUserWithProducteur(user): Promise<User[]> {
    return this.userRepository.find({
      relations: ['producters'],
      where: { id: user.id },
    });
  }

  async getSectionsByUser(user) {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.producters', 'producters')
      .leftJoinAndSelect('producters.unites', 'unites')
      .leftJoinAndSelect('unites.sections', 'sections')
      .where({ id: user.id })
      .getMany();
  }

  async getEmployeesByUser(user) {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.producters', 'producters')
      .leftJoinAndSelect('producters.unites', 'unites')
      .leftJoinAndSelect('unites.employees', 'employees')
      .where({ id: user.id })
      .getMany();
  }

  async getUniteByUserLogedIn(user) {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.producters', 'producters')
      .leftJoinAndSelect('producters.unites', 'unites')
      .where({ id: user.id })
      .getOne()
      .then((user) => {
        let unites = [];
        user.producters.forEach((producteur) => {
          unites.push(...producteur.unites);
        });
        return unites;
      });
  }
}
