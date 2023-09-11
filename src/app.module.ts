import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasController } from './ninjas/ninjas.controller';

@Module({
  imports: [],
  controllers: [AppController, NinjasController],
  providers: [AppService],
})
export class AppModule {}
