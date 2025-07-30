import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [SharedModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
