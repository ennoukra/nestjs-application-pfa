import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Operation } from 'src/entities/operation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private operationRepository: Repository<Operation>,
  ) {}

  getAllOperations(user) {
    console.log(user.id);
    return this.operationRepository.find({
      where: { creatPar: { id: user.id } },
    });
  }

  create(operation) {
    return this.operationRepository.save(operation);
  }
}
