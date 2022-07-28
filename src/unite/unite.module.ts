import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unite } from 'src/entities/Unite.entity';
import { UniteService } from './unite.service';
import { UniteController } from './unite.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Unite])],
  providers: [UniteService],
  exports: [UniteService],
  controllers: [UniteController],
})
export class UniteModule {}
