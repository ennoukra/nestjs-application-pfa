import {
  Controller,
  Get,
  UseGuards,
  Request,
  Body,
  Post,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { OperationsService } from './operations.service';

@Controller('operations')
export class OperationsController {
  constructor(private operationService: OperationsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllOperations(@Body() req) {
    console.log(req.user);
    console.log(req.user.id + ' in the operations controller!');
    return this.operationService.getAllOperations(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('createOperation')
  async createOperation(@Body() data) {
    data.operation.creatPar = data.user.id;
    console.log(data.operation);
    this.operationService.create(data.operation);
  }
}
