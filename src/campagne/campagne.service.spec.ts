import { Test, TestingModule } from '@nestjs/testing';
import { CampagneService } from './campagne.service';

describe('CampagneService', () => {
  let service: CampagneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampagneService],
    }).compile();

    service = module.get<CampagneService>(CampagneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
