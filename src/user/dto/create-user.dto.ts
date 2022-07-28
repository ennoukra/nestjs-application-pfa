import { IsString } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateUserDto {
  @IsString()
  Nom: string;

  @IsString()
  Prenom: string;

  @IsString()
  login: string;

  @IsString()
  password: string;

  active: boolean = true;
}
