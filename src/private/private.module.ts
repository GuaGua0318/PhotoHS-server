import { Module } from '@nestjs/common';
import { PrivateService } from './private.service';
import { PrivateController } from './private.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Private } from './entities/private.entity';

@Module({
  controllers: [PrivateController],
  providers: [PrivateService],
  imports: [TypeOrmModule.forFeature([Private])],
})
export class PrivateModule {}
