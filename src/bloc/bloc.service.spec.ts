import { Test, TestingModule } from '@nestjs/testing';
import { BlocService } from './bloc.service';

describe('BlocService', () => {
  let service: BlocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocService],
    }).compile();

    service = module.get<BlocService>(BlocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
