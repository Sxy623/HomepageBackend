import { Controller, Get } from '@nestjs/common';
import { ConjugacionService } from './conjugacion.service';
import { Question } from '../entities/question.entity';
import { questions } from './questions';

@Controller('conjugacion')
export class ConjugacionController {
  constructor(private readonly conjugacionService: ConjugacionService) {}

  @Get('init-question')
  async initQuestion(): Promise<void> {
    await this.conjugacionService.clear();

    for (const question of questions) {
      const newQuestion = new Question();
      newQuestion.description = question.description;
      newQuestion.answers = JSON.stringify(question.answers);
      await this.conjugacionService.save(newQuestion);
    }
  }

  @Get('get-question')
  async getQuestion(): Promise<Question> {
    return this.conjugacionService.getRandomOne();
  }
}
