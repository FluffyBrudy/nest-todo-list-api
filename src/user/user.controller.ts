import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  registerUser(
    @Query('username') username: string,
    @Query('password') password: string,
  ) {
    return this.userService.registerUser(username, password);
  }
}
