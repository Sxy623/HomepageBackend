import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConjugacionController } from './conjugacion/conjugacion.controller';
import { ConjugacionService } from './conjugacion/conjugacion.service';

@Module({
  imports: [],
  controllers: [AppController, ConjugacionController],
  providers: [AppService, ConjugacionService],
})
export class AppModule {}
