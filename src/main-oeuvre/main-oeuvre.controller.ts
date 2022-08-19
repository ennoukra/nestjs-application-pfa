import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
}
