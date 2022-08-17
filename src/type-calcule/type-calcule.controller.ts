import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { TypeCalculeService } from './type-calcule.service';

@Controller('type-calcule')
export class TypeCalculeController {
  constructor(private typeCalculeService: TypeCalculeService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllTypeCalcule() {
    return await this.typeCalculeService.getAllTypeCalcule();
  }
}
