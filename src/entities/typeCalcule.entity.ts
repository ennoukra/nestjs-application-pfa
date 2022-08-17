import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MainOeuvre } from './main-d-oeuvre.entity';

@Entity()
export class TypeCalcule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => MainOeuvre, (mainOeuvre) => mainOeuvre.typeCalcule)
  mainOeuvres: MainOeuvre[];
}
