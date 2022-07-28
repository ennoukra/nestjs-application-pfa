import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Parcelle } from './Parcelle.entity';

@Entity()
export class Variete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nom: string;

  @Column()
  Code: string;

  @OneToMany(() => Parcelle, (parcelle) => parcelle.variete)
  parcelles: Parcelle[];
}
