import { Module } from '@nestjs/common';
import { TabulationsController } from './tabulations.controller';

@Module({
  controllers: [TabulationsController],
})
export class TabulationsModule {}
