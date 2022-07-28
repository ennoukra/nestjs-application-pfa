import { Test, TestingModule } from '@nestjs/testing';
import { ProducteurService } from './producteur.service';

describe('ProducteurService', () => {
  let service: ProducteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducteurService],
    }).compile();

    service = module.get<ProducteurService>(ProducteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
