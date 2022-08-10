import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Operation } from 'src/entities/operation.entity';
import { Producteur } from 'src/entities/Producteur.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private operationRepository: Repository<Operation>,
    private userService: UserService,
  ) {}

  getAllOperations(user) {
    console.log(user.id);
    return this.operationRepository
      .createQueryBuilder('operation')
      .leftJoinAndSelect('operation.typeOperation', 'typeOperation')
      .where({ creatPar: user.id })
      .getMany();
  }

  create(operation) {
    return this.operationRepository.save(operation);
  }
}
