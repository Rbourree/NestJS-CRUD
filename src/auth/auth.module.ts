import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [JwtModule, UsersModule],
  providers: [AuthService, AuthController],
  controllers: [AuthController],
})
export class AuthModule {}