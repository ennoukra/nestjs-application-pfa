import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Section } from './Section.entity';
@Entity()
export class MainOeuvre {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.mainOeuvres)
  employee: Employee[];

  @ManyToOne(() => Section, (section) => section.mainOeuvres)
  section: Section;

  @Column()
  typeOperation: string;

  @Column()
  date: Date;

  @Column()
  typeCalcule: string;

  @Column('double')
  Qte: number;

  @Column('double')
  Taux: number;

  @Column('double')
  Montant: number;
}
