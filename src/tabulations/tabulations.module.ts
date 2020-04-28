import { Module } from '@nestjs/common';
import { TabulationsController } from './tabulations.controller';
import { TabulationsServices } from './tabulations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tabulations } from './tabulations.entity';
import { TabulationsRepository } from './tabulations.repository';

@Module({
  controllers: [TabulationsController],
  providers: [TabulationsServices],
  imports: [TypeOrmModule.forFeature([Tabulations, TabulationsRepository])],
})
export class TabulationsModule {}
