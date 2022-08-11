import { Module } from '@nestjs/common';
import { FonctionService } from './fonction.service';
import { FonctionController } from './fonction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fonction } from 'src/entities/fonction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fonction])],
  providers: [FonctionService],
  controllers: [FonctionController],
})
export class FonctionModule {}
