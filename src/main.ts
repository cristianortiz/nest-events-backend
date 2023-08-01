import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//this functions is responsable for the new nest app object and
//starting the server
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
