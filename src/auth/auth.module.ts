import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStorage } from './local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStorage],
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
})
export class AuthModule {}
