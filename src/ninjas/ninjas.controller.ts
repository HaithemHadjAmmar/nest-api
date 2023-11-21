import { Controller, Get } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

@Get()
getNinjas() {
  return [];
}

@Get()
getOneNinja() {
  return [];
}

}
