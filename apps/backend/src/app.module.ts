import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmwayModule } from './amway/amway.module';
import {ScheduleModule} from '@nestjs/schedule'

@Module({
  imports: [AmwayModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}