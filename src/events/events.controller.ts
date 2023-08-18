import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from 'event.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/events')
export class EventsController {
  //repository constructor
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get(':id')
  async findOne(@Param(':id') id) {
    return await this.repository.findOneBy(id);
  }

  @Post()
  async create(@Body() input: CreateEventDto) {
    //JS object, spread syntax to assing it all the properties in request input, change the 'when' datatype to date
    // because of the definition of Event class
    return await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
  }

  @Patch(':id')
  async update(@Param(':id') id, @Body() input: UpdateEventDto) {
    //first find out if requested id resource is existing
    const event = await this.repository.findOneBy({ id: id });
    return await this.repository.save({
      ...event,
      ...input,
      // updates the 'when' property if exists in input object creates a new Date obj, if is not
      //the original 'when' value remains ('when'property is optional)
      when: input.when ? new Date(input.when) : event.when,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param(':id') id) {
    const event = await this.repository.findOneBy(id);
    await this.repository.remove(event);
  }
}
