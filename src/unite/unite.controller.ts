import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { Unite } from 'src/entities/Unite.entity';
import { CreateUniteDto } from './dto/createUniteDto';
import { UpdateUniteDto } from './dto/updateUniteDto';
import { UniteService } from './unite.service';

@Controller('unite')
export class UniteController {
  constructor(private uniteService: UniteService) {}

  @Get('')
  async getAllUnite(): Promise<Unite[]> {
    return await this.uniteService.getAllUnite();
  }

  @Post('create')
  async ceateUnite(@Body() createUniteDto: CreateUniteDto) {
    return await this.uniteService.createUnite(createUniteDto);
  }

  @Get('search')
  async findUnites(@Query() query) {
    console.log(query);
    return this.uniteService.findByQuery(query);
  }

  @Get(':id')
  async getUniteById(@Param('id', ParseIntPipe) id: number) {
    return await this.uniteService.getUniteById(id);
  }

  @Post('update')
  async updateUnite(@Body() updateUniteDto: UpdateUniteDto) {
    return await this.uniteService.updateUnite(updateUniteDto);
  }

  @Delete('delete')
  async deleteUnite(@Param('id', ParseIntPipe) id: number) {
    return await this.uniteService.deleteUnite(id);
  }
}
