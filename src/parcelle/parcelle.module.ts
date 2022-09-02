import { Module } from '@nestjs/common';
import { ParcelleService } from './parcelle.service';

@Module({
  providers: [ParcelleService]
})
export class ParcelleModule {}
