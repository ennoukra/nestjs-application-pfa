import { Test, TestingModule } from '@nestjs/testing';
import { UniteService } from './unite.service';

describe('UniteService', () => {
  let service: UniteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniteService],
    }).compile();

    service = module.get<UniteService>(UniteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
