import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entites';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: number;

  @Column()
  photo: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  useId: number;

  @Column()
  birthday: Date;

  @OneToOne(() => User)
  @JoinColumn({ name: 'useId' })
  user: User;
}
