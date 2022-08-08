import {
  CallHandler,
  ExecutionContext,
  forwardRef,
  Inject,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

export class AuthInterceptor implements NestInterceptor {
  constructor(
    @Inject(forwardRef(() => AuthService)) private authService: AuthService,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    let tokenArray = req.headers.authorization;

    if (tokenArray) {
      const jwtToken = tokenArray.split(' ')[1];
      req.body['user'] = this.authService.decodeToken(jwtToken);
    }
    return next.handle().pipe();
  }
}
