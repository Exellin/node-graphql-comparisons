import { Module } from '@nestjs/common';
import Register from './Register';

@Module({
  providers: [
    Register
  ],
})

export class UsersModule {}
