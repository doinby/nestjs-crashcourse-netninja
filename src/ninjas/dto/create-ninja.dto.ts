import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['shuriken', 'kunai'], {
    message: 'Only allows shuriken or kunai',
  })
  weapon: 'shuriken' | 'kunai';
}
