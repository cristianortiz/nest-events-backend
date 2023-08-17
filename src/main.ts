import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//this functions is responsable for the new nest app object and
//starting the server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //for using validations globally and not have to declase in every controller body request
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
