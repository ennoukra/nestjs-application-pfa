import { Test, TestingModule } from '@nestjs/testing';
import { MainOeuvreController } from './main-oeuvre.controller';

describe('MainOeuvreController', () => {
  let controller: MainOeuvreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainOeuvreController],
    }).compile();

    controller = module.get<MainOeuvreController>(MainOeuvreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
