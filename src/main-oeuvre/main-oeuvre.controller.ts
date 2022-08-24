import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { MainOeuvreService } from './main-oeuvre.service';

@Controller('main-oeuvre')
export class MainOeuvreController {
  constructor(private mainOeuvreService: MainOeuvreService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data) {
    this.mainOeuvreService.create(data.mainOeuvre);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getMainOeuvreByDate(@Query() query) {
    console.log('la date:' + query.date);
    return await this.mainOeuvreService.getMainOeuvreByDate(query.date);
  }
}
