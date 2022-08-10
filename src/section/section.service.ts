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
    let producters: any[] = [];
    let unites: Unite[] = [];
    let sections: any[] = [];

    this.userService.findUserWithProducteur(user).then((res) => {
      producters = res;
      producters[0].producters.forEach((element) => {
        this.uniteService
          .findByQuery({ 'producteur.id': element.id })
          .then((res) => {
            unites.push(...res);
            console.log(unites[0].sections);
          });
      });
      console.log("i'm here", unites);
    });
  }
}
