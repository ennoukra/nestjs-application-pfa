import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Fonction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lable: string;

  @OneToMany(() => Employee, (employee) => employee.fonction)
  employees: Employee[];
}
