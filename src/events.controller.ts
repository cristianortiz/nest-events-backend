import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from 'event.entity';

@Controller('/events')
export class EventsController {
  //array of events
  private events: Event[] = [];

  //just for ilustration purpose in memory data

  @Get()
  findAll() {
    return this.events;
  }

  @Get(':id')
  findOne(@Param(':id') id) {
    const event = this.events.find((event) => event.id === parseInt(id));
    return event;
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    //JS object, spread syntax to assing it all the properties in request input, change the 'when' datatype to date
    // because of the definition of Event class
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.length + 1,
    };
    //add the new resource to events array and then return it as response
    this.events.push(event);
    return event;
  }

  @Patch(':id')
  update(@Param(':id') id, @Body() input: UpdateEventDto) {
    //first find out if requested id resource is existing
    const index = this.events.findIndex((event) => event.id === parseInt(id));
    //spread syntax, update the resource in index position in events array
    //copy the actual event properties and then update them with the input properties
    //also updates the 'when' property if exists in input object creates a new Date obj, if is not
    //the original 'when' value remains ('when'property is optional)
    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };

    return this.events[index];
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param(':id') id) {
    //using filter function to remove the resource form events array, filter creates a new events array
    // but without the filtered resource
    this.events = this.events.filter((event) => event.id !== parseInt(id));
  }
}
