import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producteur } from 'src/entities/Producteur.entity';
import { ProducteurController } from './producteur.controller';
import { ProducteurService } from './producteur.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producteur])],
  controllers: [ProducteurController],
  providers: [ProducteurService],
})
export class ProducteurModule {}
