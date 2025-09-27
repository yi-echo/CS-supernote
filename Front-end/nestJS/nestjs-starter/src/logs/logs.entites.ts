import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  path: string;

  @Column()
  method: string;

  @Column()
  data: string;

  @Column()
  result: string;
}
