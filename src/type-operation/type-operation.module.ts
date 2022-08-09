import { Module } from '@nestjs/common';
import { TypeOperationService } from './type-operation.service';
import { TypeOperationController } from './type-operation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOperation } from 'src/entities/typeOperation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOperation])],
  providers: [TypeOperationService],
  controllers: [TypeOperationController],
})
export class TypeOperationModule {}
