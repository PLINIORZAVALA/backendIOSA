import { Module } from '@nestjs/common';
import { FraceService } from './frace.service';
import { FraceController } from './frace.controller';

@Module({
  controllers: [FraceController],
  providers: [FraceService],
})
export class FraceModule {}
