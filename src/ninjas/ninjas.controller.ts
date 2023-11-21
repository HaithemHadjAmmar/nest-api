import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

// const service = new NinjasService();
// const controller = new NinjasController(service);

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService) {}

@Get()
getNinjas(
    @Query('weapon') weapon: 'stars' | 'nunchucks'
) {
   
    return this.ninjasService.getNinjas(weapon);
}

@Get(':id')
getOneNinja(
    @Param('id') id: string
) {
  return this.ninjasService.getNinja(+id);
}

@Post(':id')
createNinja(
   @Body() createNinjaDto: CreateNinjaDto
) {
  return this.ninjasService.createNinja(createNinjaDto);
}

@Put(':id')
updateNinja(
    @Param('id') id: string, @Body() UpdateNinjaDto: UpdateNinjaDto
) {
   return this.ninjasService.updateNinja(+id, UpdateNinjaDto);
}

@Delete(':id')
removeNinja(
    @Param('id') id: string
) {
   return this.ninjasService.removeNinja(+id);
  }

}
