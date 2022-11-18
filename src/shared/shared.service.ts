import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSharedDto } from './dto/create-shared.dto';
import { UpdateSharedDto } from './dto/update-shared.dto';
import { Shared } from './entities/shared.entity';

@Injectable()
export class SharedService {
  constructor(
    @InjectRepository(Shared)
    private readonly sharedRepository: Repository<Shared>,
  ) {}
  async create(user, createSharedDto: CreateSharedDto) {
    const newPhoto = this.sharedRepository.create(createSharedDto);
    return await this.sharedRepository.save(newPhoto);
  }

  async findAll() {
    return await this.sharedRepository.find();
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
