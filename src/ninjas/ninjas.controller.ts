import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

@Get()
getNinjas() {
  return [];
}

@Get(':id')
getOneNinja() {
  return [];
}

@Post(':id')
createNinja() {
  return [];
}

@Put(':id')
updateNinja() {
  return [];
}

@Delete(':id')
removeNinja() {
    return {};
}

}
