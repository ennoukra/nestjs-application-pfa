import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOperation } from 'src/entities/typeOperation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeOperationService {
  constructor(
    @InjectRepository(TypeOperation)
    private typerOperationRepository: Repository<TypeOperation>,
  ) {}

  getAll() {
    return this.typerOperationRepository.find();
  }
}
