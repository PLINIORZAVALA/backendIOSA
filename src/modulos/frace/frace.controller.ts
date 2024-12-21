import { Controller } from '@nestjs/common';
import { FraceService } from './frace.service';

@Controller('frace')
export class FraceController {
  constructor(private readonly fraceService: FraceService) {}
}
