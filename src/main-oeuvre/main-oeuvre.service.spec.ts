import { Test, TestingModule } from '@nestjs/testing';
import { MainOeuvreService } from './main-oeuvre.service';

describe('MainOeuvreService', () => {
  let service: MainOeuvreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainOeuvreService],
    }).compile();

    service = module.get<MainOeuvreService>(MainOeuvreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
