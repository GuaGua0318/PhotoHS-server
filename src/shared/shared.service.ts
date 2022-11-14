import { Injectable } from '@nestjs/common';
import { CreateSharedDto } from './dto/create-shared.dto';
import { UpdateSharedDto } from './dto/update-shared.dto';

@Injectable()
export class SharedService {
  async create(user, createSharedDto: CreateSharedDto) {
    const { detail } = createSharedDto;
    return detail;
  }

  findAll() {
    return `This action returns all shared`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shared`;
  }

  update(id: number, updateSharedDto: UpdateSharedDto) {
    return `This action updates a #${id} shared`;
  }

  remove(id: number) {
    return `This action removes a #${id} shared`;
  }
}
