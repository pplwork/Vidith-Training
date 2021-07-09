import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { Cat } from './cats/entities/cat.entity';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Cat]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
