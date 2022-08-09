import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { TypeOperationService } from './type-operation.service';

@Controller('type-operation')
export class TypeOperationController {
  constructor(private typeOperationService: TypeOperationService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.typeOperationService.getAll();
  }
}
