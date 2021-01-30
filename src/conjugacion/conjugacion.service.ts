import { Injectable } from '@nestjs/common';

@Injectable()
export class ConjugacionService {
  getQuestion(): string {
    return 'hablar';
  }
}
