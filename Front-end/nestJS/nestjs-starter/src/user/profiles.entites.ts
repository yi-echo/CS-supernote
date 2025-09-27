import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
