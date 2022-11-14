import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStorage } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStorage } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';

const jwtModule = JwtModule.registerAsync({
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      secret: configService.get('SECRET', 'test123456'),
      signOptions: { expiresIn: '4h' },
    };
  },
});

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStorage, JwtStorage],
  imports: [TypeOrmModule.forFeature([User]), PassportModule, jwtModule],
  exports: [jwtModule],
})
export class AuthModule {}
