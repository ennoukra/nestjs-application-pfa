import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producteur } from 'src/entities/Producteur.entity';
import { Section } from 'src/entities/Section.entity';
import { Unite } from 'src/entities/Unite.entity';
import { UniteService } from 'src/unite/unite.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class SectionService {
  constructor(
    private userService: UserService,
    private uniteService: UniteService,
    @InjectRepository(Section) private sectionRepository: Repository<Section>,
  ) {}

  // this method select all the sections that have relation with the user logedIn
  //TODO: fix this method
  async getOperationsByUserId(user) {
    let producters: Producteur[] = [];
    let unites: Unite[] = [];
    let sections: any[] = [];

    await this.userService.findUserWithProducteur(user).then(async (users) => {
      producters = users[0].producters;
    });

    return producters.map(
      async (producteur) =>
        await this.uniteService
          .findByQuery({ 'producteur.id': producteur.id })
          .then(async (unite) => {
            unite.forEach((unite) => {
              this.sectionRepository.find({ where: { unite: unite } });
            });
            //   sections = [{ id: 1, Code: 'c12' }];
          }),
    );

    console.log(sections);
    return sections;
  }
}
