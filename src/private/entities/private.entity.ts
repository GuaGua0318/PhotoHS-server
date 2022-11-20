import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('private')
export class Private {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  username: string;

  @Column()
  img: string;
}
