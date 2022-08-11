import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { FonctionService } from './fonction.service';

@Controller('fonction')
export class FonctionController {
  constructor(private fonctionService: FonctionService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllFonctions() {
    return this.fonctionService.getAllFonctions();
  }
}
