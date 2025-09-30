import { User } from 'src/user/user.entites';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class logPuls {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  method: string;

  @Column()
  data: string;

  @Column()
  result: string;

  @ManyToOne(() => User, (user) => user.logs)
  @JoinColumn()
  user: User;
}
