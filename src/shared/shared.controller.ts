import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { SharedService } from './shared.service';
import { UpdateSharedDto } from './dto/update-shared.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreateSharedDto } from './dto/create-shared.dto';
import { MyShared } from './dto/my-shared.dto';

@Controller('shared')
export class SharedController {
  constructor(private readonly sharedService: SharedService) {}

  //发布共享照片
  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createSharedDto: CreateSharedDto, @Req() req) {
    return this.sharedService.create(req.user, createSharedDto);
  }

  //获取所有共享照片
  @Get('all')
  findAll() {
    return this.sharedService.findAll();
  }

  //获取当前用户所有共享照片
  @Post('myshared')
  @UseGuards(AuthGuard('jwt'))
  myShared(@Body() username: MyShared) {
    return this.sharedService.myShared(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSharedDto: UpdateSharedDto) {
    return this.sharedService.update(+id, updateSharedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedService.remove(+id);
  }
}
