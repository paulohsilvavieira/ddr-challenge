import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recordings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  ramal: string;

  @Column()
  dateRecording: string;
}
