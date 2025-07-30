import { Injectable } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';

@Injectable()
export class UserService {
  constructor(private readonly sharedService: SharedService) {}

  registerUser(username: string, password: string) {
    const user = this.sharedService.addNewUser(username, password);
    console.log(user);
    return user;
  }
}
