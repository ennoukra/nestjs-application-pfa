import { IsString } from 'class-validator';

export class UpdateUserDto {
  id: number;
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
