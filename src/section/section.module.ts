import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { UniteModule } from 'src/unite/unite.module';
import { Section } from 'src/entities/Section.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Section]), UserModule, UniteModule],
  providers: [SectionService],
  controllers: [SectionController],
})
export class SectionModule {}
