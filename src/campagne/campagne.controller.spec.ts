import { Test, TestingModule } from '@nestjs/testing';
import { CampagneController } from './campagne.controller';

describe('CampagneController', () => {
  let controller: CampagneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampagneController],
    }).compile();

    controller = module.get<CampagneController>(CampagneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
