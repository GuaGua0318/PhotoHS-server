import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  username: string; //用户名

  @Column()
  nickname: string; //昵称

  @Column()
  password: string; //密码

  @Column()
  avator: string; //头像
}
