import { Test, TestingModule } from '@nestjs/testing';
import { TypeOperationController } from './type-operation.controller';

describe('TypeOperationController', () => {
  let controller: TypeOperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOperationController],
    }).compile();

    controller = module.get<TypeOperationController>(TypeOperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
