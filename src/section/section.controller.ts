import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { OperationsService } from 'src/operations/operations.service';
import { SectionService } from './section.service';

@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getOperationsByUserLogedIn(@Body() req) {
    return await this.sectionService.getOperationsByUserId(req.user);
  }
}
