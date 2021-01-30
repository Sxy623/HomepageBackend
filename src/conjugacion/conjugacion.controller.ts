import { Controller, Get } from '@nestjs/common';
import { ConjugacionService } from './conjugacion.service';
import { Question } from '../entities/question.entity';

@Controller('conjugacion')
export class ConjugacionController {
  constructor(private readonly conjugacionService: ConjugacionService) {}

  @Get('init-question')
  async initQuestion(): Promise<void> {
    const questions = [
      {
        description: 'ser',
        answers: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
      },
      {
        description: 'hablar',
        answers: ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan'],
      },
      {
        description: 'comer',
        answers: ['como', 'comes', 'come', 'comemos', 'coméis', 'comen'],
      },
      {
        description: 'escribir',
        answers: [
          'escribo',
          'escribes',
          'escribe',
          'escribimos',
          'escribís',
          'escriben',
        ],
      },
    ];

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
