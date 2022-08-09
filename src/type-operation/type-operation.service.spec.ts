import { Test, TestingModule } from '@nestjs/testing';
import { TypeOperationService } from './type-operation.service';

describe('TypeOperationService', () => {
  let service: TypeOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeOperationService],
    }).compile();

    service = module.get<TypeOperationService>(TypeOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
