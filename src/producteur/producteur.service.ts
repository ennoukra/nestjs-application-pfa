import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producteur } from 'src/entities/Producteur.entity';
import { PrimaryColumnCannotBeNullableError, Repository } from 'typeorm';
import { CreateProducteurDto } from './dto/createProducteurDto';
import { UpdateProducteurDto } from './dto/updateProducteurDto';

@Injectable()
export class ProducteurService {
  constructor(
    @InjectRepository(Producteur)
    private producteurRepository: Repository<Producteur>,
  ) {}

  // create a new producteur
  createProducteur(
    createProducteurDto: CreateProducteurDto,
  ): Promise<Producteur> {
    console.log(createProducteurDto);
    return this.producteurRepository.save(createProducteurDto);
  }

  // get all productuer
  getAllProducteur(): Promise<Producteur[]> {
    return this.producteurRepository.find();
  }

  // get producteur by id
  getProducteurById(id: number): Promise<Producteur> {
    return this.producteurRepository.findOneById(id);
  }

  // update Producteur
  updateProducteur(
    updateProducteurDto: UpdateProducteurDto,
  ): Promise<Producteur> {
    return this.producteurRepository.save(updateProducteurDto);
  }
  // delete a producteur
  deleteProducteur(id: number) {
    return this.producteurRepository.delete(id);
  }
}
