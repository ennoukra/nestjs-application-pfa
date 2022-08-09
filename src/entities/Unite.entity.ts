import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bloc } from './Bloc.entity';
import { Employee } from './employee.entity';
import { Producteur } from './Producteur.entity';
import { Section } from './Section.entity';

@Entity()
export class Unite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CodeUnite: string;

  @Column()
  Nom: string;

  @ManyToOne(() => Producteur, (producteur) => producteur.unites, {
    onDelete: 'CASCADE',
  })
  producteur: Producteur;

  @OneToMany(() => Bloc, (bloc) => bloc.unite)
  blocs: Bloc;

  @OneToMany(() => Employee, (employee) => employee.unite)
  employees: Employee[];

  @OneToMany(() => Section, (sections) => sections.unite)
  sections: Section[];
}
