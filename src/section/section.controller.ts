import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { OperationsService } from 'src/operations/operations.service';
import { UserService } from 'src/user/user.service';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getOperationsByUserLogedIn(@Body() req) {
    return await this.userService.getSectionsByUser(req.user);
  }
}
