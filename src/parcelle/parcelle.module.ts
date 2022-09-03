import { Module } from '@nestjs/common';
import { ParcelleService } from './parcelle.service';
import { ParcelleController } from './parcelle/parcelle.controller';
import { ParcelleController } from './parcelle.controller';

@Module({
  providers: [ParcelleService],
  controllers: [ParcelleController]
})
export class ParcelleModule {}
