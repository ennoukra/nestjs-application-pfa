import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { User } from './entities/User.entity';
import { ProducteurModule } from './producteur/producteur.module';
import { VarieteModule } from './variete/variete.module';
import { UniteModule } from './unite/unite.module';
import { SectioinDetailModule } from './sectioin-detail/sectioin-detail.module';
import { SectioinModule } from './sectioin/sectioin.module';
import { ParcelleModule } from './parcelle/parcelle.module';
import { UserModule } from './user/user.module';
import { CampagneModule } from './campagne/campagne.module';
import { BlocModule } from './bloc/bloc.module';
import { AuthModule } from './auth/auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProducteurModule,
    VarieteModule,
    UniteModule,
    SectioinDetailModule,
    SectioinModule,
    ParcelleModule,
    UserModule,
    CampagneModule,
    BlocModule,
    AuthModule,
  ],

  controllers: [AppController],
  providers: [AppService, User, AuthService],
})
export class AppModule {}
