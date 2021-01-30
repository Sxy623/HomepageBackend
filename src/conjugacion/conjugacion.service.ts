import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConjugacionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async clear(): Promise<void> {
    await this.questionRepository.clear();
  }

  async save(question: Question): Promise<Question> {
    return await this.questionRepository.save(question);
  }

  async getRandomOne(): Promise<Question> {
    const count = await this.questionRepository.count();
    const id = Math.floor(Math.random() * count) + 1;
    return await this.questionRepository.findOne(id);
  }
}
