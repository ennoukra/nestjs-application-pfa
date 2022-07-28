import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Operation } from './operation.entity';
import { Producteur } from './Producteur.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  active: boolean;

  @ManyToMany(() => Producteur)
  @JoinTable()
  producters: Producteur[];

  @OneToMany(() => Operation, (operation) => operation.creatPar)
  operations: Operation[];
}
