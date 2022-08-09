import { OperationsController } from 'src/operations/operations.controller';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Operation } from './operation.entity';

@Entity()
export class TypeOperation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Operation, (operation) => operation.TypeOperation)
  operations: Operation[];
}
