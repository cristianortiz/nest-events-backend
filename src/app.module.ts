import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'event.entity';

//Modules encapsulate app building blocks  likes services controllers, test,entities etc
//Module is a class annotated with model decorator
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '127.0.0.1',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'nest-events',
      entities: [Event],
      //carefull, auto update DB schema when changes de Entities, no migration need id, must be enable en every enviroment
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Event]),
  ],

  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
