import { Module } from '@nestjs/common';
import { CampagneService } from './campagne.service';
import { CampagneController } from './campagne.controller';

@Module({
  providers: [CampagneService],
  controllers: [CampagneController]
})
export class CampagneModule {}
