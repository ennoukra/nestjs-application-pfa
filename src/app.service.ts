import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="color: red">Hello Ennoukra Abdelghani</h1>';
  }
}
