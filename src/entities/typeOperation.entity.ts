import { OperationsController } from 'src/operations/operations.controller';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MainOeuvre } from './main-d-oeuvre.entity';
import { Operation } from './operation.entity';

@Entity()
export class TypeOperation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Operation, (operation) => operation.typeOperation)
  operations: Operation[];

  @OneToMany(() => MainOeuvre, (mainOeuvre) => mainOeuvre.typeOperation)
  mainOeuvres: MainOeuvre[];
}
