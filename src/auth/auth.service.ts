import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtConstants } from './constants';
import { constants } from 'buffer';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findOne({ where: { login: login } });
    if (
      user &&
      bcrypt.compare(user.password, await bcrypt.hash(password, 10))
    ) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      id: user.id,
      login: user.login,
      nom: user.nom,
      prenom: user.prenom,
    };
    console.log(payload);
    return {
      user: user,
      access_token: this.jwtService.sign(payload, {
        secret: JwtConstants.secret,
      }),
    };
  }

  //   this method is regester a new user
  async register(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    let response = await this.userService.createUser(createUserDto);
    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
