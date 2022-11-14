import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'shb123456',
      database: 'db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
