import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private user: Repository<User>) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.user.findOneBy({
      username: createUserDto.username,
    });
    if (!user) {
      const data = new User();
      data.username = createUserDto.username;
      data.password = createUserDto.password;
      this.user.save(data);
    } else {
      return '已经存在';
    }
  }

  findAll(query: { username: string }) {
    return this.user.find({
      where: {
        username: Like(`%${query.username}%`),
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
