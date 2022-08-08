import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from 'src/entities/operation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Operation])],
  providers: [OperationsService],
  controllers: [OperationsController],
})
export class OperationsModule {}
