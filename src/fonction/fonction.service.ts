import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fonction } from 'src/entities/fonction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FonctionService {
  constructor(
    @InjectRepository(Fonction)
    private fonctionRepository: Repository<Fonction>,
  ) {}

  async getAllFonctions() {
    return await this.fonctionRepository.find();
  }
}
