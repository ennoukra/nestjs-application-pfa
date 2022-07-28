import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Producteur } from 'src/entities/Producteur.entity';
import { CreateProducteurDto } from './dto/createProducteurDto';
import { UpdateProducteurDto } from './dto/updateProducteurDto';
import { ProducteurService } from './producteur.service';

@Controller('producteur')
export class ProducteurController {
  constructor(private producteurService: ProducteurService) {}
  @Get('')
  async getAllProduteur(): Promise<Producteur[]> {
    return await this.producteurService.getAllProducteur();
  }

  @Post('create')
  async createProducteur(
    @Body()
    createProducteurDto: CreateProducteurDto,
  ): Promise<Producteur> {
    return await this.producteurService.createProducteur(createProducteurDto);
  }

  @Post('update')
  async updateProducteur(
    @Body()
    updateProducteurDto: UpdateProducteurDto,
  ): Promise<Producteur> {
    return await this.producteurService.updateProducteur(updateProducteurDto);
  }

  @Delete('delete/:id')
  async deleteProducteur(@Param('id', ParseIntPipe) id: number) {
    return await this.producteurService.deleteProducteur(id);
  }
}
