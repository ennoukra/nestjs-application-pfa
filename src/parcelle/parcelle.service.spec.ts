import { Test, TestingModule } from '@nestjs/testing';
import { ParcelleService } from './parcelle.service';

describe('ParcelleService', () => {
  let service: ParcelleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParcelleService],
    }).compile();

    service = module.get<ParcelleService>(ParcelleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
