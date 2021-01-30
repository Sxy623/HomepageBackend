import { Test, TestingModule } from '@nestjs/testing';
import { ConjugacionController } from './conjugacion.controller';

describe('ConjugacionController', () => {
  let controller: ConjugacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConjugacionController],
    }).compile();

    controller = module.get<ConjugacionController>(ConjugacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
