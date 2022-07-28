import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(login: string, password: string) {
    const user = await this.userService.findOne({ login: login });
    console.log(await bcrypt.hash(password, 10));
  }
}
