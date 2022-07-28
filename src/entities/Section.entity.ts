import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MainOeuvre } from './main-d-oeuvre.entity';
import { Operation } from './operation.entity';
import { SectionDetail } from './SectionDetail.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Code: string;

  @Column()
  Nom: string;

  @Column()
  Campagne: string;

  @OneToMany(() => SectionDetail, (sectionDetail) => sectionDetail.section)
  sectionDetails: SectionDetail[];

  @OneToMany(() => MainOeuvre, (mainOeuvre) => mainOeuvre.section)
  mainOeuvres: MainOeuvre[];

  @OneToMany(() => Operation, (operation) => operation.section)
  operations: Operation[];
}
