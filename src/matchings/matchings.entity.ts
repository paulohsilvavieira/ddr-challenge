import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Matchings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recordingId: number;

  @Column()
  tabulationId: number;
}
