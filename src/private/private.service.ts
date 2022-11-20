import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePrivateDto } from './dto/create-private.dto';
import { UpdatePrivateDto } from './dto/update-private.dto';
import { Private } from './entities/private.entity';

@Injectable()
export class PrivateService {
  constructor(
    @InjectRepository(Private)
    private readonly privateRepository: Repository<Private>,
  ) {}
  async create(createPrivateDto: CreatePrivateDto) {
    const newPhoto = this.privateRepository.create(createPrivateDto);
    return await this.privateRepository.save(newPhoto);
  }

  async findAll(username: any) {
    return await this.privateRepository.find({
      where: { username: username.username },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} private`;
  }

  update(id: number, updatePrivateDto: UpdatePrivateDto) {
    return `This action updates a #${id} private`;
  }

  remove(id: number) {
    return `This action removes a #${id} private`;
  }
}
