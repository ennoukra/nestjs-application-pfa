import { Module } from '@nestjs/common';
import { TypeCalculeService } from './type-calcule.service';
import { TypeCalculeController } from './type-calcule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeCalcule } from 'src/entities/typeCalcule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeCalcule])],
  providers: [TypeCalculeService],
  controllers: [TypeCalculeController],
})
export class TypeCalculeModule {}
