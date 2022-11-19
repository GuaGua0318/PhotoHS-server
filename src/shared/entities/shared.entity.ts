import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('shared')
export class Shared {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  //图片描述
  @Column()
  detail: string;

  //图片地址
  @Column()
  img: string;

  //图片发送用户
  @Column()
  username: string;
}
