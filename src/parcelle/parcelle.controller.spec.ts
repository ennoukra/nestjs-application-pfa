import { Test, TestingModule } from '@nestjs/testing';
import { ParcelleController } from './parcelle.controller';

describe('ParcelleController', () => {
  let controller: ParcelleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcelleController],
    }).compile();

    controller = module.get<ParcelleController>(ParcelleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
