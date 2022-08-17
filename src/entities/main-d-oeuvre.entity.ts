import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Section } from './Section.entity';
import { TypeCalcule } from './typeCalcule.entity';
import { TypeOperation } from './typeOperation.entity';
@Entity()
export class MainOeuvre {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.mainOeuvres)
  employee: Employee;

  @ManyToOne(() => Section, (section) => section.mainOeuvres)
  section: Section;

  @ManyToOne(() => TypeOperation, (typeOperation) => typeOperation.mainOeuvres)
  typeOperation: TypeOperation;

  @Column()
  date: Date;

  @ManyToOne(() => TypeCalcule, (typeCalucle) => typeCalucle.mainOeuvres)
  typeCalcule: string;

  @Column('double')
  Qte: number;

  @Column('double')
  Taux: number;

  @Column('double')
  Montant: number;
}
