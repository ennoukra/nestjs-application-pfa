import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeCalcule } from 'src/entities/typeCalcule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypeCalculeService {
  constructor(
    @InjectRepository(TypeCalcule)
    private typeCalculeRepository: Repository<TypeCalcule>,
  ) {}

  async getAllTypeCalcule() {
    return await this.typeCalculeRepository.find();
  }
}
