import { Module } from '@nestjs/common';

import { TodoModule } from './todo/todo.module';

import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [TodoModule, UserModule, SharedModule],
})
export class AppModule {}
