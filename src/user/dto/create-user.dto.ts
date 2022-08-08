import { IsString } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateUserDto {
  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsString()
  login: string;

  @IsString()
  password: string;

  active: boolean = true;
}
