import { Test, TestingModule } from '@nestjs/testing';
import { TypeCalculeService } from './type-calcule.service';

describe('TypeCalculeService', () => {
  let service: TypeCalculeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeCalculeService],
    }).compile();

    service = module.get<TypeCalculeService>(TypeCalculeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
