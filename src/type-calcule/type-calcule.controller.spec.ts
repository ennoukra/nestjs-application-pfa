import { Test, TestingModule } from '@nestjs/testing';
import { TypeCalculeController } from './type-calcule.controller';

describe('TypeCalculeController', () => {
  let controller: TypeCalculeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeCalculeController],
    }).compile();

    controller = module.get<TypeCalculeController>(TypeCalculeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
