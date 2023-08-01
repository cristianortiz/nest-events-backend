import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modules encapsulate app building blocks  likes services controllers, test,entities etc
//Module is a class annotated with model decorator
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
