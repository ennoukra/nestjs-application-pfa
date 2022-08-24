import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MainOeuvre } from 'src/entities/main-d-oeuvre.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment';

@Injectable()
export class MainOeuvreService {
  constructor(
    @InjectRepository(MainOeuvre)
    private mainOeuvreRepository: Repository<MainOeuvre>,
  ) {}

  async create(mainOeuvre) {
    // mainOeuvre.date = new Date();

    await this.mainOeuvreRepository.save(mainOeuvre);
  }

  async getMainOeuvreByDate(date) {
    return await this.mainOeuvreRepository
      .createQueryBuilder('main_oeuvre')
      .leftJoinAndSelect('main_oeuvre.employee', 'employee')
      .where({ date: date })
      .getMany();
  }
}
