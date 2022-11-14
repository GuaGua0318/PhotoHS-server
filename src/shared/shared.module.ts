import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shared } from './entities/shared.entity';

@Module({
  controllers: [SharedController],
  providers: [SharedService],
  imports: [TypeOrmModule.forFeature([Shared])],
})
export class SharedModule {}
