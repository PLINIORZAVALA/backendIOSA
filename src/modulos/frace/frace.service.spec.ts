import { Test, TestingModule } from '@nestjs/testing';
import { FraceService } from './frace.service';

describe('FraceService', () => {
  let service: FraceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FraceService],
    }).compile();

    service = module.get<FraceService>(FraceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
