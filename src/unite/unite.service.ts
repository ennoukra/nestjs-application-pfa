import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unite } from 'src/entities/Unite.entity';
import { Repository } from 'typeorm';
import { CreateUniteDto } from './dto/createUniteDto';
import { UpdateUniteDto } from './dto/updateUniteDto';

@Injectable()
export class UniteService {
  constructor(
    @InjectRepository(Unite) private uniteRepository: Repository<Unite>,
  ) {}

  async getAllUnite(): Promise<Unite[]> {
    return await this.uniteRepository.find();
  }

  async getUniteById(id: number): Promise<Unite> {
    return await this.uniteRepository.findOneById(id);
  }

  async createUnite(createUniteDto: CreateUniteDto) {
    return await this.uniteRepository.save(createUniteDto);
  }

  async updateUnite(updateUniteDto: UpdateUniteDto) {
    return await this.uniteRepository.save(updateUniteDto);
  }

  async deleteUnite(id: number) {
    return await this.uniteRepository.delete(id);
  }

  async findByQuery(query: any) {
    return this.uniteRepository.find({ relations: ['sections'], where: query });
  }
}
