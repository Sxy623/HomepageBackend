import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { ConjugacionService } from './conjugacion.service';
import { ConjugacionController } from './conjugacion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [ConjugacionService],
  controllers: [ConjugacionController],
})
export class ConjugacionModule {}
