import { Controller, Get } from '@nestjs/common';
import { ConjugacionService } from './conjugacion.service';

@Controller('conjugacion')
export class ConjugacionController {
  constructor(private readonly conjugacionService: ConjugacionService) {}

  @Get('get-question')
  getQuestion(): string {
    return this.conjugacionService.getQuestion();
  }
}
