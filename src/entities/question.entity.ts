import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  tense: string;

  @Column()
  answers: string;
}
