import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { Unite } from 'src/entities/Unite.entity';
import { UserService } from 'src/user/user.service';
import { CreateUniteDto } from './dto/createUniteDto';
import { UpdateUniteDto } from './dto/updateUniteDto';
import { UniteService } from './unite.service';

@Controller('unite')
export class UniteController {
  constructor(
    private uniteService: UniteService,
    private userService: UserService,
  ) {}

  // get all unites for the user logedId
  @UseGuards(JwtAuthGuard)
  @Get('')
  async getUnitesByUserLogedIn(@Body() data) {
    return await this.userService.getUniteByUserLogedIn(data.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async ceateUnite(@Body() createUniteDto: CreateUniteDto) {
    return await this.uniteService.createUnite(createUniteDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('search')
  async findUnites(@Query() query) {
    console.log(query);
    return this.uniteService.findByQuery(query);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUniteById(@Param('id', ParseIntPipe) id: number) {
    return await this.uniteService.getUniteById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  async updateUnite(@Body() updateUniteDto: UpdateUniteDto) {
    return await this.uniteService.updateUnite(updateUniteDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  async deleteUnite(@Param('id', ParseIntPipe) id: number) {
    return await this.uniteService.deleteUnite(id);
  }
}
