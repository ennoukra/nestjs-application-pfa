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

  async getNumberOfOperationsCreatedToday(user) {
    let today = new Date().toLocaleDateString();
    let todaySpliteDate = today.split('/');
    today =
      todaySpliteDate[2] + '-' + todaySpliteDate[1] + '-' + todaySpliteDate[0];

    return await this.operationRepository
      .createQueryBuilder('operation')
      .where({
        creatPar: user.id,
      })
      .andWhere('operation.date >= :today', { today: today })
      .getMany();
  }
}
