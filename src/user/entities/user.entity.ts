import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
const bcrypt = require('bcryptjs');
import { Exclude } from 'class-transformer';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  username: string; //用户名

  @Column()
  nickname: string; //昵称

  @Exclude() //过滤掉密码
  @Column()
  password: string; //密码

  @Column()
  avator: string; //头像

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password);
  }
}
