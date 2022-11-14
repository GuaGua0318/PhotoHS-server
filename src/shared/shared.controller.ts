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

@Controller('shared')
export class SharedController {
  constructor(private readonly sharedService: SharedService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createSharedDto: CreateSharedDto, @Req() req) {
    return this.sharedService.create(req.user, createSharedDto);
  }

  @Get()
  findAll() {
    return this.sharedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharedService.findOne(+id);
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
