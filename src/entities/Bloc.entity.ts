import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Parcelle } from './Parcelle.entity';
import { Unite } from './Unite.entity';

@Entity()
export class Bloc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nom: string;

  @ManyToOne(() => Unite, (unite) => unite.blocs)
  unite: Unite;

  @OneToMany(() => Parcelle, (parcelle) => parcelle.bloc)
  parcelles: Parcelle[];
}
