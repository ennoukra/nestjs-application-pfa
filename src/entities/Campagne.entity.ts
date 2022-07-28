import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Campagne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Libelle: string;

  @Column()
  DataDebut: Date;

  @Column()
  DataFin: Date;

  @Column()
  Statut: boolean;
}
