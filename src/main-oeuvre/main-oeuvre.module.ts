import { Module } from '@nestjs/common';
import { MainOeuvreService } from './main-oeuvre.service';
import { MainOeuvreController } from './main-oeuvre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainOeuvre } from 'src/entities/main-d-oeuvre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MainOeuvre])],
  providers: [MainOeuvreService],
  controllers: [MainOeuvreController],
})
export class MainOeuvreModule {}
