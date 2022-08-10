import { MonoTypeOperatorFunction } from 'rxjs';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Section } from './Section.entity';
import { TypeOperation } from './typeOperation.entity';
import { User } from './User.entity';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  Description: string;

  @Column()
  updateAt: Date;

  @Column('double')
  Montant: number;

  @ManyToOne(() => User, (user) => user.operations)
  creatPar: User;

  @ManyToOne(() => TypeOperation, (typeOperation) => typeOperation.operations)
  typeOperation: TypeOperation;

  @ManyToOne(() => Section, (section) => section.operations)
  section: Section;
}
