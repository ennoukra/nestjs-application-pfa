import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bloc } from './Bloc.entity';
import { SectionDetail } from './SectionDetail.entity';
import { Variete } from './Variete.entity';

@Entity()
export class Parcelle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nom: string;

  @Column('double')
  Surface: number;

  @Column()
  DataPlant: Date;

  @Column()
  NbrsArbres: number;

  @Column()
  Densite: string;

  @Column()
  Ecartement: string;

  @Column()
  PortGreffe: string;

  @ManyToOne(() => Bloc, (bloc) => bloc.parcelles)
  bloc: Bloc;

  @ManyToOne(() => Variete, (variete) => variete.parcelles)
  variete: Variete;

  @OneToMany(() => SectionDetail, (sectionDetail) => sectionDetail.parcelle)
  sectionsDetails: SectionDetail[];
}
