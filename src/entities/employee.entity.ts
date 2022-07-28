import { ForbiddenException } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fonction } from './fonction.entity';
import { MainOeuvre } from './main-d-oeuvre.entity';
import { Unite } from './Unite.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  Nom: string;

  @Column()
  Prenom: string;

  @Column()
  CIN: string;

  @Column()
  DateNaissance: Date;

  @Column()
  CNSS: string;

  @ManyToOne(() => Fonction, (fonction) => fonction.employees)
  fonction: Fonction;

  @ManyToOne(() => Unite, (unite) => unite.employees)
  unite: Unite;

  @ManyToOne(() => Employee, (employee) => employee.id)
  super_id: number;

  @OneToMany(() => MainOeuvre, (mainOeuvre) => mainOeuvre.employee)
  mainOeuvres: MainOeuvre[];
}
