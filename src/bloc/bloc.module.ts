import { Module } from '@nestjs/common';
import { BlocService } from './bloc.service';

@Module({
  providers: [BlocService]
})
export class BlocModule {}
