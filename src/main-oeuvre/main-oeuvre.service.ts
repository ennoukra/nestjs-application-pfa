import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainOeuvre } from 'src/entities/main-d-oeuvre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MainOeuvreService {
  constructor(
    @InjectRepository(MainOeuvre)
    private mainOeuvreRepository: Repository<MainOeuvre>,
  ) {}

  async create(mainOeuvre) {
    mainOeuvre.date = new Date();
    await this.mainOeuvreRepository.save(mainOeuvre);
  }
}
