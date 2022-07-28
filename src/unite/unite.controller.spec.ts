import { Test, TestingModule } from '@nestjs/testing';
import { UniteController } from './unite.controller';

describe('UniteController', () => {
  let controller: UniteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniteController],
    }).compile();

    controller = module.get<UniteController>(UniteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
