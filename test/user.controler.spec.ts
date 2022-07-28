import { UserControler } from 'src/user/UserControler';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

describe('CatsController', () => {
  let usersControler: UserControler;
  let userService: UserService;

  @Inject('USER_REPOSITORY')
  let userRepository: Repository<User>;

  beforeEach(() => {
    userService = new UserService(userRepository);
    usersControler = new UserControler(userService);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = [
        {
          id: 4,
          username: 'username',
          password: 'passworld',
        },
        {
          id: 5,
          username: 'username',
          password: 'passworld',
        },
        {
          id: 6,
          username: 'username',
          password: 'password',
        },
      ];
      jest.spyOn(userService, 'findAll').mockImplementation(async () => result);

      expect(await usersControler.findAll()).toBe(result);
    });
  });
});
