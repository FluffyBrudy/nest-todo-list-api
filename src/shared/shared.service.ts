import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.interface';

@Injectable()
export class SharedService {
  private users: User[] = [];

  constructor() {
    console.log('initialized shared user service');
  }
  addNewUser(username: string, password: string) {
    const user = {
      username,
      password,
      id: Math.max(...this.users.map((user) => user.id)) + 1,
    };
    this.users.push(user);
    return user;
  }
}
