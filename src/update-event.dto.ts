import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

//using mapped-types to write less code, using de CreateEvenTdo as base for types
//by default all types are defined as optional  in createEventDto, also the decorator validations rules are inheritance here
export class UpdateEventDto extends PartialType(CreateEventDto) {}
