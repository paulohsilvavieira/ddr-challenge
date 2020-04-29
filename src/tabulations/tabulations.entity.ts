import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tabulations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientName: string;

  @Column()
  dateService: string;

  @Column()
  protocol: string;

  @Column()
  binedNumber: string;

  @Column()
  accessNumber: string;
}
