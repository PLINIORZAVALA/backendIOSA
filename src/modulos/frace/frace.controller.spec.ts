import { Test, TestingModule } from '@nestjs/testing';
import { FraceController } from './frace.controller';
import { FraceService } from './frace.service';

describe('FraceController', () => {
  let controller: FraceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FraceController],
      providers: [FraceService],
    }).compile();

    controller = module.get<FraceController>(FraceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
