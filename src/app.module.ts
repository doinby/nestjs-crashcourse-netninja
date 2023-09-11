import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasController } from './ninjas/ninjas.controller';
import { NinjasService } from './ninjas/ninjas.service';

@Module({
  imports: [],
  controllers: [AppController, NinjasController],
  providers: [AppService, NinjasService],
})
export class AppModule {}
