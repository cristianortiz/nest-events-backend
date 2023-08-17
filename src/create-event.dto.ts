import { IsDateString, IsString, Length } from 'class-validator';

export class CreateEventDto {
  //? for defining optional parameters in request, will be ihnerhitance by updateEventDto
  //the validator decorator will be inheritancce by the UpdateEventDto is app.GlobalUsePise is set in main.ts
  @IsString()
  @Length(5, 255, {
    message: 'name debe tener 5 caracteres como minimo',
  })
  name: string;

  @Length(8, 255, {
    message: 'description debe tener 8 caracteres como minimo',
  })
  description: string;

  @IsDateString()
  when: string;

  @Length(4, 20, {
    message: 'address debe tener 4 caracteres como minimo',
  })
  address: string;
}
