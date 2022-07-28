import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Unite } from './Unite.entity';
import { User } from './User.entity';

@Entity()
export class Producteur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CodeProducteur: string;

  @Column()
  Nom: string;

  @Column()
  Prenom: string;

  @Column()
  Societe: string;

  @Column()
  Tel: string;

  @Column()
  RC: string;

  @Column()
  ICE: string;

  @Column()
  Active: boolean;

  @OneToMany(() => Unite, (unite) => unite.producteur, { cascade: true })
  unites: Unite[];
}
