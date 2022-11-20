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
import { PrivateService } from './private.service';
import { CreatePrivateDto } from './dto/create-private.dto';
import { UpdatePrivateDto } from './dto/update-private.dto';
import { AuthGuard } from '@nestjs/passport';
import { All } from 'src/shared/dto/all.dto';

@Controller('private')
export class PrivateController {
  constructor(private readonly privateService: PrivateService) {}

  //发布私密照片
  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPrivateDto: CreatePrivateDto, @Req() req) {
    return this.privateService.create(createPrivateDto);
  }

  //获取私密照片
  @Post('all')
  @UseGuards(AuthGuard('jwt'))
  findAll(@Body() username: All) {
    return this.privateService.findAll(username);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivateDto: UpdatePrivateDto) {
    return this.privateService.update(+id, updatePrivateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privateService.remove(+id);
  }
}
