import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Parcelle } from './Parcelle.entity';
import { Section } from './Section.entity';

@Entity()
export class SectionDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Parcelle, (parcelle) => parcelle.sectionsDetails)
  parcelle: Parcelle;

  @ManyToOne(() => Section, (section) => section.sectionDetails)
  section: Section;

  @Column()
  Ratio: number;
}
